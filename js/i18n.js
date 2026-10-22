/* Portfolio language switcher: English / Français / العربية. */
(() => {
'use strict';
const staticCopy={
  ".skip-link": [
    "Aller au contenu",
    "انتقل إلى المحتوى"
  ],
  ".logo-copy small": [
    "RÉALISATEUR & MONTEUR",
    "مخرج ومونتير"
  ],
  ".nav a[href='#work']": [
    "PROJETS",
    "الأعمال"
  ],
  ".nav a[href='#films']": [
    "FILMS",
    "الأفلام"
  ],
  ".nav a[href='#color']": [
    "ÉTALONNAGE",
    "تصحيح الألوان"
  ],
  ".nav a[href='#about']": [
    "À PROPOS",
    "نبذة عني"
  ],
  ".nav .nav-connect": [
    "CONTACT <span aria-hidden='true'>↗</span>",
    "تواصل معي <span aria-hidden='true'>↗</span>"
  ],
  ".hero-top .meta-kicker": [
    "RÉALISATEUR & MONTEUR",
    "مخرج ومونتير"
  ],
  ".hero-top .live-status": [
    "<span class='status-dot'></span> DISPONIBLE POUR DES PROJETS",
    "<span class='status-dot'></span> متاح للمشاريع المستقلة"
  ],
  ".hero-overline": [
    "MAROC <span class='overline-divider'>/</span> À L’INTERNATIONAL",
    "المغرب <span class='overline-divider'>/</span> أعمل دولياً"
  ],
  ".hero-intro h2": [
    "Réalisateur <span>&</span> Monteur",
    "مخرج <span>و</span> مونتير"
  ],
  ".hero-intro p": [
    "Je réalise et monte des films, des documentaires et des clips. Je travaille aussi comme étalonneur indépendant.",
    "أُخرج وأُمنتج الأفلام والوثائقيات والفيديوهات الموسيقية، وأعمل أيضاً بشكل مستقل في تصحيح الألوان."
  ],
  ".hero-ctas .cta-main": [
    "DÉCOUVRIR MES PROJETS <span aria-hidden='true'>↗</span>",
    "استكشف أعمالي <span aria-hidden='true'>↗</span>"
  ],
  "#hero-play": [
    "<span class='tiny-play' aria-hidden='true'>▶</span> VOIR LA BANDE DÉMO",
    "<span class='tiny-play' aria-hidden='true'>▶</span> شاهد شريط أعمالي"
  ],
  ".scroll-hint": [
    "DÉFILER POUR DÉCOUVRIR <span aria-hidden='true'>↓</span>",
    "مرّر لاكتشاف الأعمال <span aria-hidden='true'>↓</span>"
  ],
  ".statement-index": [
    "MA DÉMARCHE <span>— 001</span>",
    "منهجي في العمل <span>— 001</span>"
  ],
  ".statement-copy": [
    "Monter avec <em>intention.</em><br>Étalonner avec <em>sensibilité.</em>",
    "مونتاج <em>بقصد.</em><br>وألوان <em>بإحساس.</em>"
  ],
  ".statement-aside": [
    "RÉALISATION <span>/</span> MONTAGE<br>FICTION <span>/</span> DOCUMENTAIRE <span>/</span> CLIPS<br>ART VIDÉO <span>/</span> TÉLÉVISION",
    "إخراج <span>/</span> مونتاج<br>روائي <span>/</span> وثائقي <span>/</span> فيديو كليب<br>فنون بصرية <span>/</span> تلفزيون"
  ],
  ".frames-section .eyeline span:first-child": [
    "01 / SÉLECTION VISUELLE",
    "01 / مختارات بصرية"
  ],
  ".frames-section .eyeline span:last-child": [
    "76 IMAGES / 09 PROJETS",
    "76 لقطة / 09 مشاريع"
  ],
  ".frames-section .section-kicker": [
    "EXTRAITS DE MES PROJETS",
    "من أعمالي"
  ],
  "#frames-title": [
    "Images <em>choisies.</em>",
    "لقطات <em>مختارة.</em>"
  ],
  ".frames-section .section-text": [
    "Une sélection de plans tirés de mes projets. Choisissez un film pour parcourir ses images.",
    "لقطات مختارة من مشاريعي. اختر عملاً لتصفح مشاهده."
  ],
  ".gallery-tab[data-frame-filter='all']": [
    "TOUTES LES IMAGES <span id='frame-total'>76</span>",
    "كل اللقطات <span id='frame-total'>76</span>"
  ],
  ".gallery-tab[data-frame-filter='recent-music-video']": [
    "FIH BOUYA",
    "فيه بويا"
  ],
  ".gallery-tab[data-frame-filter='farachatoune']": [
    "FARACHATOUNE",
    "فراشتون"
  ],
  ".gallery-tab[data-frame-filter='sacred-union']": [
    "SACRED UNION",
    "الاتحاد المقدس"
  ],
  ".gallery-tab[data-frame-filter='weld-sahra']": [
    "WELD SAHRA",
    "ولد الصحرا"
  ],
  ".gallery-tab[data-frame-filter='poetry-sahara']": [
    "POÉSIE & MUSIQUE",
    "الشعر والموسيقى"
  ],
  ".gallery-tab[data-frame-filter='the-star']": [
    "L’ÉTOILE",
    "النجم"
  ],
  ".gallery-tab[data-frame-filter='anti-dream']": [
    "ANTI-DREAM PILLS",
    "حبوب ضد الأحلام"
  ],
  ".gallery-tab[data-frame-filter='dual-horizon']": [
    "DUAL HORIZON",
    "الأفق المزدوج"
  ],
  ".gallery-tab[data-frame-filter='station-36']": [
    "STATION 36",
    "المحطة 36"
  ],
  ".gallery-end p": [
    "Les images sont classées par projet. Choisissez un film pour parcourir ses plans.",
    "جميع اللقطات مرتبة حسب المشروع. اختر عملاً لاستعراض مشاهده."
  ],
  ".film-section .eyeline span:first-child": [
    "02 / IMAGES EN MOUVEMENT",
    "02 / أعمال مصوّرة"
  ],
  ".film-section .eyeline span:last-child": [
    "FILMOGRAPHIE SÉLECTIVE",
    "أعمال سينمائية مختارة"
  ],
  ".film-section .section-kicker": [
    "LES PROJETS À L’ÉCRAN",
    "الأعمال المصوّرة"
  ],
  "#films-title": [
    "Films & <em>projets.</em>",
    "أفلام <em>ومشاريع.</em>"
  ],
  ".film-section .section-text": [
    "Réalisations, montages et étalonnages. Ouvrez un projet pour voir les images et les crédits.",
    "أعمال في الإخراج والمونتاج وتصحيح الألوان. افتح أي مشروع للاطلاع على صوره وتفاصيله."
  ],
  ".project-tab[data-project-filter='all']": [
    "TOUS <span id='project-count'>09</span>",
    "الكل <span id='project-count'>09</span>"
  ],
  ".project-tab[data-project-filter='editing']": [
    "MONTAGE",
    "مونتاج"
  ],
  ".project-tab[data-project-filter='color']": [
    "ÉTALONNAGE",
    "ألوان"
  ],
  ".project-tab[data-project-filter='direction']": [
    "RÉALISATION",
    "إخراج"
  ],
  ".color-section .eyeline span:first-child": [
    "03 / ÉTALONNAGE",
    "03 / تصحيح الألوان"
  ],
  ".color-section .eyeline span:last-child": [
    "ORIGINAL / VERSION ÉTALONNÉE",
    "الأصل / النسخة المصحّحة"
  ],
  ".color-section .section-kicker": [
    "MON TRAVAIL D’ÉTALONNAGE",
    "أعمال تصحيح الألوان"
  ],
  "#color-title": [
    "Étalonnage<br><em>couleur.</em>",
    "تصحيح<br><em>الألوان.</em>"
  ],
  ".color-description": [
    "Je travaille également comme étalonneur indépendant : équilibre des plans, contraste et couleurs au service de chaque film.",
    "أعمل أيضاً بشكل مستقل في تصحيح الألوان، من موازنة اللقطات إلى بناء التباين والهوية اللونية التي تناسب كل فيلم."
  ],
  ".color-points": [
    "<span>CONTRASTE & TONALITÉS</span><span>PALETTE & AMBIANCE</span><span>HARMONISATION DES PLANS</span>",
    "<span>التباين والدرجات</span><span>الألوان والمزاج</span><span>توحيد ألوان اللقطات</span>"
  ],
  ".comparison-overline": [
    "COMPARAISON / IMAGES RÉELLES",
    "مقارنة الألوان / لقطات أصلية"
  ],
  ".comparison-label h3": [
    "Avant <em>&</em> après",
    "قبل <em>و</em> بعد"
  ],
  "#comparison-explainer": [
    "Comparez les images avant et après étalonnage. Déplacez le curseur pour voir la différence.",
    "قارن اللقطة الأصلية مع النسخة المصحّحة. حرّك الفاصل لرؤية الفرق."
  ],
  ".comparison-placeholder > span": [
    "ORIGINAL / ÉTALONNÉ",
    "الأصل / التصحيح"
  ],
  ".grading-chooser label[for='grading-project']": [
    "PROJET",
    "المشروع"
  ],
  ".grading-chooser label[for='grading-frame']": [
    "IMAGE",
    "اللقطة"
  ],
  ".comparison-tag.before-tag": [
    "AVANT",
    "قبل"
  ],
  ".comparison-tag.after-tag": [
    "APRÈS",
    "بعد"
  ],
  ".comparison-instructions": [
    "GAUCHE : ORIGINAL / DROITE : ÉTALONNÉ · DÉPLACEZ LE CURSEUR",
    "يسار: الأصل / يمين: التصحيح · حرّك المؤشر"
  ],
  ".color-mosaic figure:first-child figcaption": [
    "SACRED UNION / 2022",
    "الاتحاد المقدس / 2022"
  ],
  ".color-mosaic figure:last-child figcaption": [
    "POÉSIE & MUSIQUE / 2020",
    "شعر وموسيقى الصحراء / 2020"
  ],
  ".about-section .eyeline span:first-child": [
    "04 / À PROPOS",
    "04 / نبذة عني"
  ],
  ".about-section .eyeline span:last-child": [
    "DERRIÈRE LES IMAGES",
    "خلف الصورة"
  ],
  ".about-section .section-kicker": [
    "QUELQUES MOTS SUR MOI",
    "من أنا"
  ],
  "#about-title": [
    "Réalisateur.<br>Monteur.<br><em>Étalonneur.</em>",
    "مخرج.<br>مونتير.<br><em>ملوّن سينمائي.</em>"
  ],
  ".about-lead": [
    "Je suis un réalisateur et monteur marocain.",
    "أنا مخرج ومونتير مغربي."
  ],
  ".about-body > p:not(.about-lead):nth-of-type(2)": [
    "Je travaille sur des fictions, documentaires, productions télévisées, clips et projets d’art vidéo. J’assure aussi l’étalonnage de mes projets et de ceux d’autres réalisateurs.",
    "أعمل على الأفلام الروائية والوثائقية والمسلسلات التلفزيونية والفيديوهات الموسيقية والمشاريع الفنية. وأتولى أيضاً تصحيح الألوان في أعمالي ولدى مخرجين آخرين."
  ],
  ".about-body > p:not(.about-lead):nth-of-type(3)": [
    "J’ai également travaillé comme réalisateur de seconde équipe sur des séries marocaines, notamment <em>KM7</em> (2025) et <em>Rahma</em>, saison 2 (2026).",
    "عملت أيضاً مخرجاً للوحدة الثانية في مسلسلات مغربية، من بينها <em>KM7</em> (2025) والموسم الثاني من <em>رحمة</em> (2026)."
  ],
  ".about-facts > div:nth-child(1) span": [
    "LOCALISATION",
    "الموقع"
  ],
  ".about-facts > div:nth-child(1) strong": [
    "Maroc / Casablanca",
    "المغرب / الدار البيضاء"
  ],
  ".about-facts > div:nth-child(2) span": [
    "LANGUES",
    "اللغات"
  ],
  ".about-facts > div:nth-child(2) strong": [
    "Arabe · Français · Anglais",
    "العربية · الفرنسية · الإنجليزية"
  ],
  ".about-facts > div:nth-child(3) span": [
    "COLLABORATIONS",
    "أعمل مع"
  ],
  ".about-facts > div:nth-child(3) strong": [
    "Studios · Réalisateurs · Producteurs",
    "استوديوهات · مخرجين · منتجين"
  ],
  ".about-body .underlined-btn": [
    "TRAVAILLONS ENSEMBLE <span aria-hidden='true'>↗</span>",
    "لنعمل معاً <span aria-hidden='true'>↗</span>"
  ],
  ".contact-section .eyeline span:first-child": [
    "05 / CONTACT",
    "05 / تواصل"
  ],
  ".contact-section .eyeline span:last-child": [
    "OUVERT AUX COLLABORATIONS",
    "متاح للتعاون"
  ],
  ".contact-kicker": [
    "DISPONIBLE EN FREELANCE",
    "متاح للعمل الحر"
  ],
  "#contact-title": [
    "Travaillons<br><em>ensemble.</em>",
    "لنعمل<br><em>معاً.</em>"
  ],
  ".contact-blurb": [
    "Disponible pour des projets de réalisation et de montage ainsi que pour l’étalonnage en freelance, au Maroc ou à distance lorsque c’est possible.",
    "متاح لمشاريع الإخراج والمونتاج، وكذلك لتصحيح الألوان بشكل مستقل، في المغرب أو عن بُعد بحسب طبيعة المشروع."
  ],
  "#email-button": [
    "M’ÉCRIRE <span aria-hidden='true'>↗</span>",
    "راسلني <span aria-hidden='true'>↗</span>"
  ],
  "#whatsapp-button": [
    "WHATSAPP <span aria-hidden='true'>↗</span>",
    "واتساب <span aria-hidden='true'>↗</span>"
  ],
  ".footer-middle": [
    "RÉALISATEUR & MONTEUR<br>MAROC / INTERNATIONAL",
    "مخرج ومونتير<br>المغرب / العالم"
  ],
  ".footer-links a[href*='instagram']": [
    "INSTAGRAM ↗",
    "إنستغرام ↗"
  ],
  ".footer-links a[href*='linkedin']": [
    "LINKEDIN ↗",
    "لينكدإن ↗"
  ],
  ".footer-links a[href='#top']": [
    "RETOUR EN HAUT ↑",
    "العودة للأعلى ↑"
  ],
  "#photo-close": [
    "FERMER ✕",
    "إغلاق ✕"
  ],
  "#project-close": [
    "FERMER ✕",
    "إغلاق ✕"
  ],
  "#video-close": [
    "FERMER ✕",
    "إغلاق ✕"
  ],
  ".detail-top > span": [
    "PROJET / SÉLECTION",
    "المشروع / أعمال مختارة"
  ],
  ".detail-no-preview": [
    "IMAGES À VENIR",
    "الصور قريباً"
  ],
  "#video-direct": [
    "VOIR SUR YOUTUBE ↗",
    "شاهد على يوتيوب ↗"
  ]
};
const projects={
  "fr": {
    "sacred-union": {
      "title": "Sacred Union",
      "format": "VIDÉO D’ART / PERFORMANCE",
      "role": "Montage et étalonnage",
      "description": "Vidéo d’art réalisée avec l’artiste canadienne Annie Gagnon. J’en ai assuré le montage et l’étalonnage."
    },
    "weld-sahra": {
      "title": "Weld Sahra",
      "format": "CLIP MUSICAL",
      "role": "Réalisation, montage et étalonnage",
      "description": "Clip de Mohamed Atef tourné dans le Sahara. Je l’ai réalisé, monté et étalonné."
    },
    "recent-music-video": {
      "title": "Fih Bouya — Aicha Mado",
      "format": "CLIP MUSICAL",
      "role": "Étalonnage",
      "description": "Clip d’Aicha Mado. J’en ai réalisé l’étalonnage.",
      "credits": [
        [
          "Artiste",
          "Aicha Mado"
        ],
        [
          "Chanson",
          "Fih Bouya"
        ],
        [
          "Étalonnage",
          "Essam Doukhou"
        ]
      ]
    },
    "farachatoune": {
      "title": "Farachatoune — BOOYA",
      "format": "CLIP MUSICAL / INÉDIT",
      "role": "Réalisation, montage et étalonnage",
      "description": "Clip inédit de BOOYA. J’en ai assuré la réalisation, le montage et l’étalonnage.",
      "credits": [
        [
          "Artiste",
          "BOOYA"
        ],
        [
          "Titre",
          "Farachatoune"
        ],
        [
          "Réalisation, montage et étalonnage",
          "Essam Doukhou"
        ],
        [
          "Statut",
          "Inédit · 2026"
        ]
      ]
    },
    "poetry-sahara": {
      "title": "Poésie et musique du Sahara",
      "format": "LONG MÉTRAGE DOCUMENTAIRE / DOCU-FICTION",
      "role": "Montage et étalonnage",
      "description": "Un documentaire sur la poésie et la musique sahariennes, ainsi que sur celles et ceux qui en perpétuent les traditions. J’ai travaillé au montage et à l’étalonnage."
    },
    "the-star": {
      "title": "L’Étoile / Al Najm",
      "format": "TÉLÉFILM",
      "role": "Réalisation et coécriture",
      "description": "Un téléfilm produit pour Al Aoula avec Casablanca Pictures. Je l’ai corécrit et réalisé."
    },
    "anti-dream": {
      "title": "Anti-Dream Pills",
      "format": "COURT MÉTRAGE DE FICTION",
      "role": "Écriture et réalisation",
      "description": "Un court métrage de fiction que j’ai écrit et réalisé avec le soutien de la Fondation FIFM."
    },
    "dual-horizon": {
      "title": "Dual Horizon",
      "format": "INSTALLATION VIDÉO",
      "role": "Artiste visuel et étalonnage",
      "description": "Une œuvre vidéo et une installation de 2024, créées avec le sculpteur Rachid Boumalki et le peintre Amine Aaliwica. J’ai conçu l’œuvre vidéo et réalisé son étalonnage.",
      "credits": [
        [
          "Artiste visuel et étalonnage",
          "Essam Doukhou"
        ],
        [
          "Sculpture centrale",
          "Rachid Boumalki"
        ],
        [
          "Installation et scénographie",
          "Amine Aaliwica"
        ],
        [
          "Présenté à",
          "Médiathèque de la Fondation de la Mosquée Hassan II, Casablanca"
        ],
        [
          "Dates d’exposition",
          "21–26 novembre 2024"
        ]
      ]
    },
    "station-36": {
      "title": "Station 36",
      "format": "SITCOM COURTE",
      "role": "Écriture, réalisation et montage",
      "description": "Une courte sitcom produite avec Perfect Productions. Je l’ai écrite, réalisée et montée."
    }
  },
  "ar": {
    "sacred-union": {
      "title": "الاتحاد المقدس",
      "format": "فيديو فني / أداء",
      "role": "مونتاج وتصحيح الألوان",
      "description": "فيديو فني بالتعاون مع فنانة الأداء الكندية آني غانيون. توليت مونتاج العمل وتصحيح ألوانه."
    },
    "weld-sahra": {
      "title": "ولد الصحرا",
      "format": "فيديو كليب",
      "role": "إخراج ومونتاج وتصحيح الألوان",
      "description": "فيديو كليب للفنان محمد عاطف، صُوّر في الصحراء. توليت إخراجه ومونتاجه وتصحيح ألوانه."
    },
    "recent-music-video": {
      "title": "فيه بويا — عائشة مادو",
      "format": "فيديو كليب",
      "role": "تصحيح الألوان",
      "description": "فيديو كليب للفنانة عائشة مادو. توليت تصحيح ألوانه.",
      "credits": [
        [
          "الفنانة",
          "عائشة مادو"
        ],
        [
          "الأغنية",
          "فيه بويا"
        ],
        [
          "تصحيح الألوان",
          "عصام دخو"
        ]
      ]
    },
    "farachatoune": {
      "title": "فراشتون — بويا",
      "format": "فيديو كليب / لم يُطرح بعد",
      "role": "إخراج ومونتاج وتصحيح الألوان",
      "description": "فيديو كليب للفنان BOOYA لم يُطرح بعد. توليت إخراجه ومونتاجه وتصحيح ألوانه.",
      "credits": [
        [
          "الفنان",
          "BOOYA"
        ],
        [
          "العنوان",
          "فراشتون"
        ],
        [
          "الإخراج والمونتاج وتصحيح الألوان",
          "عصام دخو"
        ],
        [
          "الحالة",
          "لم يُنشر بعد · 2026"
        ]
      ]
    },
    "poetry-sahara": {
      "title": "شعر وموسيقى الصحراء",
      "format": "فيلم وثائقي طويل / وثائقي تخييلي",
      "role": "مونتاج وتصحيح الألوان",
      "description": "فيلم وثائقي عن شعر الصحراء وموسيقاها والأشخاص الذين يحافظون على هذه التقاليد. شاركت في المونتاج وتصحيح الألوان."
    },
    "the-star": {
      "title": "النجم",
      "format": "فيلم تلفزيوني",
      "role": "إخراج وكتابة مشتركة",
      "description": "فيلم تلفزيوني للقناة الأولى، بالتعاون مع Casablanca Pictures. شاركت في كتابته وأخرجته."
    },
    "anti-dream": {
      "title": "حبوب ضد الأحلام",
      "format": "فيلم روائي قصير",
      "role": "كتابة وإخراج",
      "description": "فيلم روائي قصير كتبته وأخرجته بدعم من مؤسسة المهرجان الدولي للفيلم بمراكش."
    },
    "dual-horizon": {
      "title": "الأفق المزدوج",
      "format": "عمل فني بصري / تركيب فيديو",
      "role": "فنان بصري وتصحيح الألوان",
      "description": "عمل فيديو وتركيب فني من سنة 2024، أنجزته بالتعاون مع النحات رشيد بومالكي والفنان أمين عليويكة. توليت تصميم وإنجاز الفيديو وتصحيح ألوانه.",
      "credits": [
        [
          "الفنان البصري وتصحيح الألوان",
          "عصام دخو"
        ],
        [
          "النحت المركزي",
          "رشيد بومالكي"
        ],
        [
          "التركيب والسينوغرافيا",
          "أمين عليويكة"
        ],
        [
          "مكان العرض",
          "مكتبة مؤسسة مسجد الحسن الثاني، الدار البيضاء"
        ],
        [
          "تواريخ المعرض",
          "21–26 نوفمبر 2024"
        ]
      ]
    },
    "station-36": {
      "title": "المحطة 36",
      "format": "سيتكوم قصير",
      "role": "كتابة وإخراج ومونتاج",
      "description": "سيتكوم قصير بالتعاون مع Perfect Productions. توليت كتابته وإخراجه ومونتاجه."
    }
  }
};
const messages={
  "en": {
    "viewAll": "VIEW ALL {count} FRAMES",
    "showFewer": "SHOW FEWER FRAMES",
    "still": "STILL",
    "selectedFrame": "SELECTED FRAME",
    "of": "OF",
    "unreleased": "UNRELEASED",
    "watchVideo": "WATCH VIDEO",
    "watchTrailer": "WATCH TRAILER",
    "viewStill": "View {project} still {n}",
    "viewDetail": "View still {n} of {count}",
    "viewProject": "View {project} project",
    "stillFrom": "Film still from {project}",
    "stillsToFollow": "STILLS TO FOLLOW",
    "openNavigation": "Open navigation",
    "closeNavigation": "Close navigation",
    "frame": "FRAME {n}",
    "gradeExplain": "{project} — {frame}. Drag the divider to compare the original and final grade.",
    "gradeBefore": "{project} — original ungraded frame",
    "gradeAfter": "{project} — final color grade",
    "trailer": "trailer",
    "showreelRole": "Direction / Film editing / Color grading"
  },
  "fr": {
    "viewAll": "VOIR LES {count} IMAGES",
    "showFewer": "AFFICHER MOINS D’IMAGES",
    "still": "IMAGE",
    "selectedFrame": "IMAGE SÉLECTIONNÉE",
    "of": "SUR",
    "unreleased": "INÉDIT",
    "watchVideo": "VOIR LA VIDÉO",
    "watchTrailer": "VOIR LA BANDE-ANNONCE",
    "viewStill": "Voir une image de {project} n° {n}",
    "viewDetail": "Voir l’image {n} sur {count}",
    "viewProject": "Voir le projet {project}",
    "stillFrom": "Image du projet {project}",
    "stillsToFollow": "IMAGES À VENIR",
    "openNavigation": "Ouvrir le menu",
    "closeNavigation": "Fermer le menu",
    "frame": "IMAGE {n}",
    "gradeExplain": "{project} — {frame}. Déplacez le curseur pour comparer l’image originale à l’étalonnage final.",
    "gradeBefore": "{project} — image originale",
    "gradeAfter": "{project} — étalonnage final",
    "showreelRole": "Réalisation / Montage / Étalonnage", "showreelTitle": "Bande démo", "showreelDescription": "Une sélection de mes projets audiovisuels."
  },
  "ar": {
    "viewAll": "عرض جميع اللقطات ({count})",
    "showFewer": "عرض لقطات أقل",
    "still": "لقطة",
    "selectedFrame": "اللقطة المختارة",
    "of": "من",
    "unreleased": "لم يُنشر بعد",
    "watchVideo": "شاهد الفيديو",
    "watchTrailer": "شاهد الإعلان",
    "viewStill": "اعرض لقطة {n} من {project}",
    "viewDetail": "عرض اللقطة {n} من {count}",
    "viewProject": "عرض مشروع {project}",
    "stillFrom": "لقطة من {project}",
    "stillsToFollow": "الصور قريباً",
    "openNavigation": "فتح القائمة",
    "closeNavigation": "إغلاق القائمة",
    "frame": "اللقطة {n}",
    "gradeExplain": "{project} — {frame}. حرّك المؤشر للمقارنة بين الصورة الأصلية والتصحيح النهائي.",
    "gradeBefore": "{project} — اللقطة الأصلية",
    "gradeAfter": "{project} — تصحيح الألوان النهائي",
    "showreelRole": "إخراج / مونتاج / تصحيح الألوان", "showreelTitle": "شريط أعمال مختارة", "showreelDescription": "مجموعة مختارة من أعمال عصام دخو المرئية."
  }
};
const metadata={en:{title:"Essam Doukhou — Director & Film Editor",description:"Essam Doukhou is a Moroccan director and film editor working on fiction, documentaries, music videos and art projects. Also available for freelance color grading."},fr:{title:"Essam Doukhou — Réalisateur et monteur",description:"Essam Doukhou est un réalisateur et monteur marocain. Fiction, documentaire, clips et art vidéo. Également disponible pour l’étalonnage en freelance."},ar:{title:"عصام دخو — مخرج ومونتير",description:"عصام دخو مخرج ومونتير مغربي يعمل في الأفلام والوثائقيات والفيديوهات الموسيقية والفنون البصرية، ومتاح للعمل الحر في تصحيح الألوان."}};
let lang='en';
try {const qs=new URLSearchParams(location.search).get('lang');const saved=localStorage.getItem('portfolio-lang');lang=['en','fr','ar'].includes(qs)?qs:(['en','fr','ar'].includes(saved)?saved:'en');}catch(e){}
const originals=new Map();const listeners=[];
const fmt=(s,vars={})=>String(s).replace(/\{(\w+)\}/g,(_,k)=>String(vars[k]??''));
function text(key,vars={}){return fmt(messages[lang]?.[key]??messages.en[key]??key,vars);}
function project(p){return lang==='en'?p:{...p,...(projects[lang]?.[p.id]||{})};}
function apply(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 for(const [selector,variants] of Object.entries(staticCopy)){
   const el=document.querySelector(selector);if(!el)continue;
   if(!originals.has(selector))originals.set(selector,el.innerHTML);
   el.innerHTML=lang==='en'?originals.get(selector):variants[lang==='fr'?0:1];
 }
 const m=metadata[lang];document.title=m.title;
 document.querySelector('meta[name="description"]')?.setAttribute('content',m.description);
 document.querySelector('meta[property="og:title"]')?.setAttribute('content',m.title);
 document.querySelector('meta[property="og:description"]')?.setAttribute('content',m.description);
 document.querySelectorAll('[data-language]').forEach(b=>{const active=b.dataset.language===lang;b.setAttribute('aria-pressed',String(active));b.classList.toggle('active',active);});
 document.querySelector('.language-switcher')?.setAttribute('aria-label',lang==='ar'?'اختر لغة الموقع':lang==='fr'?'Choisir la langue':'Choose website language');
 for(const fn of listeners)fn(lang);
}
function setLang(next){if(!['en','fr','ar'].includes(next)||next===lang)return;lang=next;try{localStorage.setItem('portfolio-lang',lang);}catch(e){}apply();}
function onChange(fn){listeners.push(fn);}
function init(){document.querySelectorAll('[data-language]').forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.language)));apply();}
window.PORTFOLIO_I18N={text,project,getLang:()=>lang,onChange,init};
})();
