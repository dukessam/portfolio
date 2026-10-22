(() => {
  'use strict';
  const c = window.PORTFOLIO_CONTENT;
  const $ = id => document.getElementById(id);
  const esc = v => String(v ?? '').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const youtubeUrl = id => `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
  const stillSrc = (file, small = false) => (window.STANDALONE_IMAGES?.[`${file}${small ? '-sm' : ''}`]) || `assets/stills/${file}${small ? '-sm' : ''}.webp`;
  const stills = c.featuredOrder.map(id => c.stills.find(f => f.file === id)).filter(Boolean);
  const projectById = id => c.projects.find(p => p.id === id);
  const projectStills = id => c.stills.filter(f => f.project === id);
  const I = window.PORTFOLIO_I18N;
  const tt = (key, vars) => I?.text(key, vars) ?? key;
  const tr = p => I?.project(p) ?? p;
  const projectName = p => tr(p).title;
  const stillAlt = f => I?.getLang() === 'en' ? f.alt : tt('stillFrom',{project:projectName(projectById(f.project))});
  const slideCaption = slide => {
    if (I?.getLang() === 'en') return slide.caption;
    const frame=c.stills.find(f=>f.file===slide.file);
    const p=frame?projectById(frame.project):null;
    return p?projectName(p)+' / '+p.year:slide.caption;
  };
  let heroIdx = 0;
  let photoIdx = 0;
  let currentGallery = [];
  let galleryFilter = 'all';
  let galleryExpanded = false;
  let lastFocus = null;

  // Mobile navigation
  const trigger = document.querySelector('.nav-trigger');
  const nav = $('main-nav');
  const closeNav = () => {trigger.setAttribute('aria-expanded','false');trigger.setAttribute('aria-label',tt('openNavigation'));nav.classList.remove('open');document.body.classList.remove('menu-open');};
  trigger.addEventListener('click',()=>{const open = trigger.getAttribute('aria-expanded') !== 'true';trigger.setAttribute('aria-expanded',String(open));trigger.setAttribute('aria-label',open?tt('closeNavigation'):tt('openNavigation'));nav.classList.toggle('open',open);document.body.classList.toggle('menu-open',open);});
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeNav));
  window.addEventListener('resize',()=>{if(window.innerWidth>800) closeNav();});

  // Hero image browsing (manual rather than intrusive autoplay)
  const hero = $('hero-image');
  const changeHero = delta => {
    heroIdx = (heroIdx + delta + c.heroSlides.length) % c.heroSlides.length;
    const slide = c.heroSlides[heroIdx];
    hero.classList.add('changing');
    const next = new Image();
    next.onload = () => {hero.src = next.src;hero.alt=I?.getLang()==='en'?slide.alt:tt('stillFrom',{project:slideCaption(slide)});$('hero-index').textContent=String(heroIdx+1).padStart(2,'0');$('hero-caption').textContent=slideCaption(slide);hero.classList.remove('changing');};
    next.onerror = () => hero.classList.remove('changing');
    next.src=stillSrc(slide.file);
  };
  $('hero-prev').addEventListener('click',()=>changeHero(-1));
  $('hero-next').addEventListener('click',()=>changeHero(1));

  // Stills and accessible fullscreen lightbox
  const photoDialog = $('photo-dialog');
  function renderGallery(){
    const filtered=stills.filter(f=>galleryFilter==='all'||f.project===galleryFilter);
    const visible=galleryExpanded?filtered:filtered.slice(0,10);
    currentGallery=filtered;
    $('frames-grid').innerHTML=visible.map((f,i)=>{
      const p=tr(projectById(f.project));
      return `<button type="button" class="frame ${i===0?'full':''}" data-frame-index="${i}" aria-label="${esc(tt('viewStill',{project:p.title,n:f.number}))}">
       <span class="frame-image-wrap"><img src="${stillSrc(f.file)}" srcset="${stillSrc(f.file,true)} 800w, ${stillSrc(f.file)} 1600w" sizes="(max-width: 560px) 95vw, ${i===0?'95vw':'48vw'}" alt="${esc(stillAlt(f))}" width="1600" height="900" loading="${i===0?'eager':'lazy'}"><span class="frame-overlay"></span><span class="frame-number">${esc(p.title.toUpperCase())} / ${p.year}</span><span class="frame-open">↗</span></span>
       <span class="frame-under"><span>${esc(p.title.toUpperCase())}</span><span>${esc(tt('still'))} / ${String(f.number).padStart(2,'0')}</span></span></button>`;
    }).join('');
    $('frames-grid').querySelectorAll('[data-frame-index]').forEach(b=>b.addEventListener('click',()=>openPhoto(Number(b.dataset.frameIndex),b)));
    const expand=$('expand-gallery');
    expand.hidden=filtered.length<=10;
    expand.innerHTML=galleryExpanded?`${esc(tt('showFewer'))} <span aria-hidden="true">↑</span>`:`${esc(tt('viewAll',{count:filtered.length}))} <span aria-hidden="true">↗</span>`;
  }
  document.querySelectorAll('[data-frame-filter]').forEach(b=>b.addEventListener('click',()=>{
    galleryFilter=b.dataset.frameFilter;galleryExpanded=false;
    document.querySelectorAll('[data-frame-filter]').forEach(x=>{const active=x===b;x.classList.toggle('selected',active);x.setAttribute('aria-pressed',String(active));});
    renderGallery();
  }));
  $('expand-gallery').addEventListener('click',()=>{galleryExpanded=!galleryExpanded;renderGallery();});
  function showPhoto(){
    const f=currentGallery[photoIdx];
    $('photo-dialog-image').src=stillSrc(f.file);
    $('photo-dialog-image').alt=stillAlt(f);
    $('photo-dialog-label').textContent=`${tt('selectedFrame')} / ${String(photoIdx+1).padStart(2,'0')} ${tt('of')} ${String(currentGallery.length).padStart(2,'0')}`;
    const p=tr(projectById(f.project));
    $('photo-dialog-caption').textContent=`${p.title.toUpperCase()} / ${p.year} — ${tt('still')} ${String(f.number).padStart(2,'0')} ${tt('of')} ${String(projectStills(f.project).length).padStart(2,'0')}`;
  }
  function openPhoto(index,opener){lastFocus=opener;photoIdx=index;showPhoto();photoDialog.showModal();document.body.classList.add('dialog-open');$('photo-close').focus();}
  const changePhoto = delta =>{photoIdx=(photoIdx+delta+currentGallery.length)%currentGallery.length;showPhoto();};
  function closePhoto(){if(photoDialog.open)photoDialog.close();}
  $('photo-prev').addEventListener('click',()=>changePhoto(-1));
  $('photo-next').addEventListener('click',()=>changePhoto(1));
  $('photo-close').addEventListener('click',closePhoto);
  photoDialog.addEventListener('click',e=>{if(e.target===photoDialog)closePhoto();});
  photoDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(lastFocus?.isConnected)lastFocus.focus();});
  renderGallery();

  // Films: externally hosted YouTube embedded only on request
  let filmFilter='all';
  const videoDialog=$('video-dialog');
  const detailDialog=$('project-dialog');
  let detailSelection=0;
  let activeProject=null;
  let projectOpener=null;
  function showProjectStill(index){
    const frames=projectStills(activeProject.id);
    if(!frames.length)return;
    detailSelection=(index+frames.length)%frames.length;
    const selected=frames[detailSelection];
    $('project-dialog-image').src=stillSrc(selected.file);
    $('project-dialog-image').alt=stillAlt(selected);
    $('project-dialog-image-counter').textContent=`${String(detailSelection+1).padStart(2,'0')} / ${String(frames.length).padStart(2,'0')}`;
    $('project-image-grid').querySelectorAll('button').forEach((b,i)=>{b.classList.toggle('active',i===detailSelection);b.setAttribute('aria-pressed',String(i===detailSelection));});
  }
  function openProject(p,opener){
    lastFocus=opener;
    projectOpener=opener;
    activeProject=p;
    const v=tr(p);
    $('project-dialog-format').textContent=v.format;
    $('project-dialog-title').textContent=v.title;
    $('project-dialog-role').textContent=v.role;
    $('project-dialog-year').textContent=v.year;
    $('project-dialog-description').textContent=v.description;
    const creditBox=$('project-dialog-credits');
    creditBox.hidden=!(p.credits&&p.credits.length);
    creditBox.innerHTML=(v.credits||[]).map(([label,value])=>`<div><span>${esc(label)}</span><strong>${esc(value)}</strong></div>`).join('');
    const frames=projectStills(p.id);
    $('project-image-grid').innerHTML=frames.map((f,i)=>`<button type="button" class="detail-frame" data-detail-index="${i}" aria-label="${esc(tt('viewDetail',{n:i+1,count:frames.length}))}"><img src="${stillSrc(f.file,true)}" alt="${esc(stillAlt(f))}" loading="lazy"></button>`).join('');
    $('project-image-grid').querySelectorAll('[data-detail-index]').forEach(b=>b.addEventListener('click',()=>showProjectStill(Number(b.dataset.detailIndex))));
    const hasFrames=frames.length>0;
    document.querySelector('.detail-cover').classList.toggle('is-awaiting-stills',!hasFrames);
    $('project-dialog-image').hidden=!hasFrames;
    $('project-dialog-image-counter').hidden=!hasFrames;
    $('project-dialog-empty').hidden=hasFrames;
    if(!hasFrames)$('project-dialog-image').removeAttribute('src');
    detailSelection=0;
    if(hasFrames)showProjectStill(Math.max(0,frames.findIndex(f=>f.file===p.cover)));
    $('project-watch').hidden=!p.videoId;
    $('project-watch').innerHTML=esc(tt(p.videoLabel==='WATCH TRAILER'?'watchTrailer':'watchVideo'))+' <span aria-hidden="true">▶</span>';
    detailDialog.showModal();document.body.classList.add('dialog-open');$('project-close').focus();
  }
  function renderProjects(){
    const visible=c.projects.filter(p=>filmFilter==='all'||p.tags.includes(filmFilter));
    $('project-grid').innerHTML=visible.map(p=>{
      const v=tr(p);
      return `<button type="button" class="project-card" data-project="${esc(p.id)}" aria-label="${esc(tt('viewProject',{project:v.title}))}">
        <span class="project-art${p.cover?'':' is-awaiting-stills'}">${p.cover?`<img src="${stillSrc(p.cover)}" srcset="${stillSrc(p.cover,true)} 800w, ${stillSrc(p.cover)} 1600w" sizes="(max-width: 600px) 100vw, 48vw" alt="${esc(tt('stillFrom',{project:v.title}))}" loading="lazy">`:`<span class="project-no-preview">${esc(tt('stillsToFollow'))}</span>`}<span class="project-type">${esc(v.format)}</span>${p.unreleased?`<span class="project-private">${esc(tt('unreleased'))}</span>`:''}<span class="project-icon" aria-hidden="true">↗</span></span>
        <span class="project-copy"><span><span class="project-name">${esc(v.title)}</span><span class="project-role">${esc(v.role)}</span></span><span class="project-year">${esc(v.year)}</span></span></button>`;
    }).join('');
    $('project-grid').querySelectorAll('[data-project]').forEach(b=>b.addEventListener('click',()=>{
      const p=projectById(b.dataset.project);if(p)openProject(p,b);
    }));
  }
  $('project-close').addEventListener('click',()=>detailDialog.close());
  detailDialog.addEventListener('click',e=>{if(e.target===detailDialog)detailDialog.close();});
  detailDialog.addEventListener('close',()=>{document.body.classList.remove('dialog-open');if(projectOpener?.isConnected && !videoDialog.open)projectOpener.focus();});
  $('project-watch').addEventListener('click',()=>{if(!activeProject?.videoId)return;const p=activeProject;detailDialog.close();openVideo(p,projectOpener);});
  document.querySelectorAll('[data-project-filter]').forEach(b=>b.addEventListener('click',()=>{
    filmFilter=b.dataset.projectFilter;
    document.querySelectorAll('[data-project-filter]').forEach(x=>{const active=x===b;x.classList.toggle('selected',active);x.setAttribute('aria-pressed',String(active));});
    renderProjects();
  }));
  function openVideo(p,opener){
    lastFocus=opener;
    const v=p===c.showreel&&I?.getLang()!=='en'
      ? {...p,title:tt('showreelTitle'),role:tt('showreelRole'),description:tt('showreelDescription')}
      : tr(p);
    $('video-dialog-format').textContent=v.format;
    $('video-dialog-title').textContent=v.title;
    $('video-dialog-role').textContent=v.role;
    $('video-dialog-description').textContent=v.description;
    $('video-direct').href=youtubeUrl(p.videoId);
    $('video-holder').innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(p.videoId)}?autoplay=1&rel=0" title="${esc(v.title)} — ${esc(tt('watchVideo'))}" loading="eager" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
    videoDialog.showModal();document.body.classList.add('dialog-open');$('video-close').focus();
  }
  function closeVideo(){if(videoDialog.open)videoDialog.close();}
  $('video-close').addEventListener('click',closeVideo);
  $('hero-play').addEventListener('click',e=>openVideo(c.showreel,e.currentTarget));
  videoDialog.addEventListener('click',e=>{if(e.target===videoDialog)closeVideo();});
  videoDialog.addEventListener('close',()=>{$('video-holder').replaceChildren();document.body.classList.remove('dialog-open');if(lastFocus?.isConnected)lastFocus.focus();});
  renderProjects();

  // Arrow keys only while the stills dialog is open.
  document.addEventListener('keydown',e=>{
    if(photoDialog.open && e.key==='ArrowLeft'){e.preventDefault();changePhoto(-1);}
    if(photoDialog.open && e.key==='ArrowRight'){e.preventDefault();changePhoto(1);}
    if(e.key==='Escape'&&nav.classList.contains('open'))closeNav();
  });

  // Accurate frame-aligned ORIGINAL/FINAL pairs; no filters or synthetic grading.
  let refreshGrading = () => {};
  if (c.gradingPairs?.length) {
    $('comparison-placeholder').hidden = true;
    $('comparison-live').hidden = false;
    const projectSelect=$('grading-project'), frameSelect=$('grading-frame');
    const projects=[...new Map(c.gradingPairs.map(x=>[x.project,x.title])).entries()];
    const localGradeTitle=id=>{const p=projectById(id);return p?projectName(p):projects.find(p=>p[0]===id)?.[1]||id;};
    function updateFrame(){
      const p=c.gradingPairs.find(x=>x.id===frameSelect.value);if(!p)return;
      $('comparison-before').src=p.before;
      $('comparison-after').src=p.after;
      $('comparison-before').alt=tt('gradeBefore',{project:localGradeTitle(p.project)});
      $('comparison-after').alt=tt('gradeAfter',{project:localGradeTitle(p.project)});
      $('comparison-slider').value=50;
      $('comparison-stage').style.setProperty('--split','50%');
      $('comparison-explainer').textContent=tt('gradeExplain',{project:localGradeTitle(p.project),frame:tt('frame',{n:p.label.match(/\d+/)?.[0]||'01'})});
    }
    function updateProject(){
      const subset=c.gradingPairs.filter(x=>x.project===projectSelect.value);
      frameSelect.innerHTML=subset.map(x=>`<option value="${esc(x.id)}">${esc(tt('frame',{n:x.label.match(/\d+/)?.[0]||'01'}))}</option>`).join('');
      updateFrame();
    }
    refreshGrading = () => {
      const selected=projectSelect.value;
      projectSelect.innerHTML=projects.map(([id])=>`<option value="${esc(id)}">${esc(localGradeTitle(id))}</option>`).join('');
      if (projects.some(([id])=>id===selected)) projectSelect.value=selected;
      updateProject();
    };
    projectSelect.addEventListener('change',updateProject);
    frameSelect.addEventListener('change',updateFrame);
    $('comparison-slider').addEventListener('input',e=>$('comparison-stage').style.setProperty('--split',`${e.target.value}%`));
    refreshGrading();
  }

  const email=c.contact.email,phone=c.contact.phoneInternational;
  $('email-button').href=`mailto:${email}`;
  $('email-display').textContent=email;
  $('email-display').href=`mailto:${email}`;
  $('whatsapp-button').href=`https://wa.me/${phone}`;
  $('phone-display').href=`tel:+${phone}`;
  $('phone-display').textContent=c.contact.phoneDisplay;
  $('current-year').textContent=String(new Date().getFullYear());
  $('project-count').textContent=String(c.projects.length).padStart(2,'0');
  $('frame-total').textContent=String(stills.length);
  I?.onChange(()=>{
    renderGallery();
    renderProjects();
    $('hero-caption').textContent=slideCaption(c.heroSlides[heroIdx]);
    const frame=c.stills.find(f=>f.file===c.heroSlides[heroIdx].file);
    if(frame)hero.alt=stillAlt(frame);
    refreshGrading();
    trigger.setAttribute('aria-label',tt(trigger.getAttribute('aria-expanded')==='true'?'closeNavigation':'openNavigation'));
    if(photoDialog.open)showPhoto();
  });
  I?.init();
})();
