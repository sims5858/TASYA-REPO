const root = document.documentElement;
const body = document.body;
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const revealNodes = Array.from(document.querySelectorAll(".reveal-on-scroll"));
const themeToggle = document.getElementById("theme-toggle");
const languageSelect = document.getElementById("language-select");
const metaDescription = document.getElementById("meta-description");
const i18nNodes = Array.from(document.querySelectorAll("[data-i18n]"));

const storage = {
  get(key) {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  set(key, value) {
    try {
      localStorage.setItem(key, value);
    } catch {}
  },
};

const translations = {
  en: {
    title: "Tasya Auliya Rizka | International Relations & Content",
    metaDescription:
      "Tasya Auliya Rizka's portfolio website: international relations, political affairs, content writing, research, and communications.",
    language: { label: "Language" },
    theme: { dark: "Dark", light: "Light", darkAria: "Switch to dark theme", lightAria: "Switch to light theme" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "About",
      experience: "Experience",
      leadership: "Leadership",
      education: "Education",
      achievements: "Achievements",
      skills: "Skills",
      contact: "Contact",
    },
    hero: {
      eyebrow: "International Relations • Research • Content Writing",
      title: { line1: "Turning policy thinking", line2: "into clear communication." },
      lead:
        "I am a fresh graduate in International Relations based in Istanbul, with experience in overseas representation, political affairs, content writing, research, and public-facing communication. I combine analytical thinking with practical coordination to support international teams and fast-moving projects.",
      primary: "View Experience",
      secondary: "Contact Me",
      stats: [
        { strong: "GPA 3.66/4.00", span: "International Relations, UIN Jakarta" },
        { strong: "Overseas Representative", span: "Stepparts Otomotiv, Istanbul" },
        { strong: "Content + Research", span: "SEO, writing, policy analysis" },
      ],
      card: {
        role: "International Relations Graduate",
        title: "Analytical, communicative, and comfortable working across cultures.",
        copy:
          "My background spans ASEAN political affairs, content strategy, student leadership, and event coordination. I bring structure to information and keep communication clear for both internal and external stakeholders.",
        focus: [
          "Political research and briefing",
          "Content writing and SEO basics",
          "Cross-team coordination",
          "Public speaking and presentations",
        ],
      },
    },
    about: {
      label: "About",
      title: "Short profile",
      p1:
        "I am a recent International Relations graduate with an interest in global regulation, diplomacy, and the systems behind international cooperation. I enjoy turning complex information into useful, readable output.",
      p2:
        "My experience includes corporate communication, political affairs research, editorial content writing, and organizational leadership. I value clarity, responsibility, and consistency in every role I take on.",
      highlights: [
        { label: "Base", value: "Istanbul, Turkiye" },
        { label: "Interest", value: "Global regulation and international law" },
        { label: "Strength", value: "Research, coordination, and communication" },
      ],
    },
    experience: {
      label: "Experience",
      title: "Working history",
      meta: ["2024 - Present", "Istanbul"],
      company: "Stepparts Otomotiv",
      role: "Overseas Representative",
      bullets: [
        "Managed communication and built relationships with international clients.",
        "Conducted market research and supported global sales activities.",
        "Coordinated orders and ensured smooth delivery with internal teams.",
      ],
    },
    leadership: {
      label: "Leadership",
      title: "Organization and internship experience",
      cards: [
        {
          kicker: "Political Affairs Intern",
          title: "Permanent Mission of the Republic of Indonesia to ASEAN",
          meta: "January - March 2025, Jakarta",
          body: "Research, analysis, reports, briefs, and monitoring political developments in ASEAN frameworks.",
        },
        {
          kicker: "Content Writer Intern",
          title: "SINDOnews",
          meta: "January - March 2024, Jakarta",
          body: "Content strategy, editing, keyword research, SEO, and performance analysis for web and social media.",
        },
        {
          kicker: "Public Relations Division",
          title: "International Relations educational and development groups",
          meta: "2021 - 2022",
          body: "Communication campaigns, stakeholder relations, events, and content production across organizations.",
        },
        {
          kicker: "Volunteer roles",
          title: "Conference, research, and event support",
          meta: "2021 - 2024",
          body: "Arbiter, speaker, liaison officer, and content volunteer across major conferences and competitions.",
        },
      ],
    },
    education: {
      label: "Education",
      title: "Academic background",
      kicker: "2021 - 2025",
      school: "Syarif Hidayatullah Islamic State University Jakarta",
      degree: "International Relations",
      status: "Status: Graduated",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Achievements",
      title: "Selected highlights",
      items: [
        "Youth International Summit MUN - Brand Ambassador",
        "LSPR MUN - Delegate of Denmark in UNEP Council",
        "IRON MUN - Delegate of USA in UNEP Council",
        "Youth International Summit MUN - Delegate of Liberia",
      ],
    },
    skills: {
      label: "Skills",
      title: "What I bring",
      items: [
        {
          title: "Communication",
          body: "Public speaking, stakeholder communication, relationship building, and presentation delivery.",
        },
        {
          title: "Research",
          body: "Policy analysis, data gathering, reporting, briefing, and content validation.",
        },
        {
          title: "Content",
          body: "Writing, editing, SEO basics, content strategy, and brand-aligned copy.",
        },
        {
          title: "Tools",
          body: "Microsoft Office, research workflows, collaboration tools, and cross-team coordination systems.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Open to research, communication, and content roles.",
      body:
        "If you need someone who can research clearly, communicate professionally, and support international-facing work with structure, you can reach me directly.",
      email: "Email Me",
      call: "Call Me",
      box: {
        nameLabel: "Name",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "Email",
        phoneLabel: "Phone",
        locationLabel: "Location",
        locationValue: "Istanbul, Turkiye",
      },
      emailTasya: "Email Tasya",
    },
    floatingMail: "Email",
  },
  tr: {
    title: "Tasya Auliya Rizka | Uluslararası İlişkiler ve İçerik",
    metaDescription:
      "Tasya Auliya Rizka'nın portföy sitesi: uluslararası ilişkiler, siyasi işler, içerik yazarlığı, araştırma ve iletişim.",
    language: { label: "Dil" },
    theme: { dark: "Koyu", light: "Açık", darkAria: "Koyu temaya geç", lightAria: "Açık temaya geç" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Hakkımda",
      experience: "Deneyim",
      leadership: "Liderlik",
      education: "Eğitim",
      achievements: "Başarılar",
      skills: "Yetenekler",
      contact: "İletişim",
    },
    hero: {
      eyebrow: "Uluslararası İlişkiler • Araştırma • İçerik Yazarlığı",
      title: { line1: "Politika düşüncesini", line2: "açık iletişime dönüştürüyorum." },
      lead:
        "İstanbul merkezli yeni mezun bir Uluslararası İlişkiler uzmanıyım. Yurtdışı temsil, siyasi işler, içerik yazarlığı, araştırma ve kamuya dönük iletişim alanlarında deneyimim var. Uluslararası ekipleri ve hızlı ilerleyen projeleri desteklemek için analitik düşünceyi pratik koordinasyonla birleştiriyorum.",
      primary: "Deneyimi Gör",
      secondary: "İletişime Geç",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Uluslararası İlişkiler, UIN Jakarta" },
        { strong: "Yurtdışı Temsilcisi", span: "Stepparts Otomotiv, İstanbul" },
        { strong: "İçerik + Araştırma", span: "SEO, yazı, politika analizi" },
      ],
      card: {
        role: "Uluslararası İlişkiler Mezunu",
        title: "Analitik, iletişimi güçlü ve kültürler arası çalışmaya uyumlu.",
        copy:
          "Arka planım ASEAN siyasi işleri, içerik stratejisi, öğrenci liderliği ve etkinlik koordinasyonunu kapsıyor. Bilgiye düzen kazandırır, iç ve dış paydaşlarla iletişimi net tutarım.",
        focus: [
          "Siyasi araştırma ve brifing",
          "İçerik yazımı ve SEO temelleri",
          "Ekipler arası koordinasyon",
          "Topluluk önünde konuşma ve sunum",
        ],
      },
    },
    about: {
      label: "Hakkımda",
      title: "Kısa profil",
      p1:
        "Küresel düzenleme, diplomasi ve uluslararası iş birliğinin arkasındaki sistemlere ilgi duyan yeni bir Uluslararası İlişkiler mezunuyum. Karmaşık bilgiyi faydalı ve okunabilir çıktılara dönüştürmeyi seviyorum.",
      p2:
        "Kurumsal iletişim, siyasi işler araştırması, editoryal içerik yazımı ve örgütsel liderlik alanlarında deneyimim var. Her rolde netlik, sorumluluk ve tutarlılığa önem veririm.",
      highlights: [
        { label: "Baz", value: "İstanbul, Türkiye" },
        { label: "İlgi", value: "Küresel düzenleme ve uluslararası hukuk" },
        { label: "Güç", value: "Araştırma, koordinasyon ve iletişim" },
      ],
    },
    experience: {
      label: "Deneyim",
      title: "Çalışma geçmişi",
      meta: ["2024 - Günümüz", "İstanbul"],
      company: "Stepparts Otomotiv",
      role: "Yurtdışı Temsilcisi",
      bullets: [
        "İletişimi yönettim ve uluslararası müşterilerle ilişkiler kurdum.",
        "Pazar araştırması yaptım ve küresel satış faaliyetlerini destekledim.",
        "Siparişleri koordine ettim ve iç ekiplerle sorunsuz teslimat sağladım.",
      ],
    },
    leadership: {
      label: "Liderlik",
      title: "Organizasyon ve staj deneyimi",
      cards: [
        {
          kicker: "Siyasi İşler Stajyeri",
          title: "Endonezya Cumhuriyeti'nin ASEAN Daimi Misyonu",
          meta: "Ocak - Mart 2025, Jakarta",
          body: "ASEAN çerçevesinde araştırma, analiz, raporlar, brifingler ve siyasi gelişmelerin takibi.",
        },
        {
          kicker: "İçerik Yazarı Stajyeri",
          title: "SINDOnews",
          meta: "Ocak - Mart 2024, Jakarta",
          body: "Web ve sosyal medya için içerik stratejisi, düzenleme, anahtar kelime araştırması, SEO ve performans analizi.",
        },
        {
          kicker: "Halkla İlişkiler Bölümü",
          title: "Uluslararası İlişkiler eğitim ve gelişim grupları",
          meta: "2021 - 2022",
          body: "İletişim kampanyaları, paydaş ilişkileri, etkinlikler ve kurumlar arası içerik üretimi.",
        },
        {
          kicker: "Gönüllü roller",
          title: "Konferans, araştırma ve etkinlik desteği",
          meta: "2021 - 2024",
          body: "Büyük konferans ve yarışmalarda jüri, konuşmacı, iletişim sorumlusu ve içerik gönüllüsü.",
        },
      ],
    },
    education: {
      label: "Eğitim",
      title: "Akademik geçmiş",
      kicker: "2021 - 2025",
      school: "Syarif Hidayatullah İslam Devlet Üniversitesi Jakarta",
      degree: "Uluslararası İlişkiler",
      status: "Durum: Mezun",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Başarılar",
      title: "Seçili öne çıkanlar",
      items: [
        "Youth International Summit MUN - Marka Elçisi",
        "LSPR MUN - UNEP Konseyinde Danimarka Delegesi",
        "IRON MUN - UNEP Konseyinde ABD Delegesi",
        "Youth International Summit MUN - Liberya Delegesi",
      ],
    },
    skills: {
      label: "Yetenekler",
      title: "Katkılarım",
      items: [
        {
          title: "İletişim",
          body: "Topluluk önünde konuşma, paydaş iletişimi, ilişki kurma ve sunum yapma.",
        },
        {
          title: "Araştırma",
          body: "Politika analizi, veri toplama, raporlama, brifing ve içerik doğrulama.",
        },
        {
          title: "İçerik",
          body: "Yazı, düzenleme, SEO temelleri, içerik stratejisi ve marka uyumlu metin.",
        },
        {
          title: "Araçlar",
          body: "Microsoft Office, araştırma iş akışları, iş birliği araçları ve ekipler arası koordinasyon sistemleri.",
        },
      ],
    },
    contact: {
      label: "İletişim",
      title: "Araştırma, iletişim ve içerik rolleri için uygunum.",
      body:
        "Net araştırma yapabilen, profesyonel iletişim kurabilen ve uluslararası işlere yapı katan birine ihtiyacınız varsa doğrudan bana ulaşabilirsiniz.",
      email: "E-posta Gönder",
      call: "Ara",
      box: {
        nameLabel: "Ad",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-posta",
        phoneLabel: "Telefon",
        locationLabel: "Konum",
        locationValue: "İstanbul, Türkiye",
      },
      emailTasya: "Tasya'ya e-posta gönder",
    },
    floatingMail: "E-posta",
  },
  de: {
    title: "Tasya Auliya Rizka | Internationale Beziehungen & Content",
    metaDescription:
      "Tasya Auliya Rizkas Portfolio-Website: Internationale Beziehungen, politische Angelegenheiten, Content Writing, Recherche und Kommunikation.",
    language: { label: "Sprache" },
    theme: { dark: "Dunkel", light: "Hell", darkAria: "Zum dunklen Theme wechseln", lightAria: "Zum hellen Theme wechseln" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Über mich",
      experience: "Erfahrung",
      leadership: "Leadership",
      education: "Ausbildung",
      achievements: "Erfolge",
      skills: "Fähigkeiten",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Internationale Beziehungen • Recherche • Content Writing",
      title: { line1: "Politisches Denken", line2: "in klare Kommunikation verwandeln." },
      lead:
        "Ich bin eine frischgebackene Absolventin der Internationalen Beziehungen mit Sitz in Istanbul und Erfahrung in Auslandsvertretung, politischen Angelegenheiten, Content Writing, Recherche und öffentlicher Kommunikation. Ich verbinde analytisches Denken mit praktischer Koordination, um internationale Teams und dynamische Projekte zu unterstützen.",
      primary: "Erfahrung ansehen",
      secondary: "Kontakt aufnehmen",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Internationale Beziehungen, UIN Jakarta" },
        { strong: "Auslandsvertreterin", span: "Stepparts Otomotiv, Istanbul" },
        { strong: "Content + Recherche", span: "SEO, Schreiben, Policy-Analyse" },
      ],
      card: {
        role: "Absolventin der Internationalen Beziehungen",
        title: "Analytisch, kommunikativ und sicher im interkulturellen Arbeiten.",
        copy:
          "Mein Hintergrund umfasst ASEAN-Politik, Content-Strategie, studentische Führung und Event-Koordination. Ich strukturiere Informationen und halte die Kommunikation für interne und externe Stakeholder klar.",
        focus: [
          "Politische Recherche und Briefings",
          "Content Writing und SEO-Grundlagen",
          "Koordination zwischen Teams",
          "Öffentliches Sprechen und Präsentationen",
        ],
      },
    },
    about: {
      label: "Über mich",
      title: "Kurzprofil",
      p1:
        "Ich bin eine Absolventin der Internationalen Beziehungen mit Interesse an globaler Regulierung, Diplomatie und den Systemen hinter internationaler Zusammenarbeit. Komplexe Informationen in nützliche, verständliche Ergebnisse zu verwandeln, macht mir Freude.",
      p2:
        "Zu meinen Erfahrungen zählen Unternehmenskommunikation, politische Recherche, redaktionelles Schreiben und organisatorische Führung. Ich lege in jeder Rolle Wert auf Klarheit, Verantwortung und Verlässlichkeit.",
      highlights: [
        { label: "Basis", value: "Istanbul, Türkei" },
        { label: "Interesse", value: "Globale Regulierung und Völkerrecht" },
        { label: "Stärke", value: "Recherche, Koordination und Kommunikation" },
      ],
    },
    experience: {
      label: "Erfahrung",
      title: "Beruflicher Werdegang",
      meta: ["2024 - heute", "Istanbul"],
      company: "Stepparts Otomotiv",
      role: "Auslandsvertreterin",
      bullets: [
        "Kommunikation gemanagt und Beziehungen zu internationalen Kunden aufgebaut.",
        "Marktrecherche durchgeführt und globale Vertriebsaktivitäten unterstützt.",
        "Aufträge koordiniert und eine reibungslose Lieferung mit internen Teams sichergestellt.",
      ],
    },
    leadership: {
      label: "Leadership",
      title: "Organisation und Praktikumserfahrung",
      cards: [
        {
          kicker: "Praktikum Politische Angelegenheiten",
          title: "Ständige Vertretung Indonesiens bei der ASEAN",
          meta: "Januar - März 2025, Jakarta",
          body: "Recherche, Analyse, Berichte, Briefings und Beobachtung politischer Entwicklungen in ASEAN-Rahmen.",
        },
        {
          kicker: "Praktikum Content Writing",
          title: "SINDOnews",
          meta: "Januar - März 2024, Jakarta",
          body: "Content-Strategie, Lektorat, Keyword-Recherche, SEO und Performance-Analyse für Web und Social Media.",
        },
        {
          kicker: "Öffentlichkeitsarbeit",
          title: "Studien- und Entwicklungsgruppen der Internationalen Beziehungen",
          meta: "2021 - 2022",
          body: "Kommunikationskampagnen, Stakeholder-Beziehungen, Veranstaltungen und Content-Produktion.",
        },
        {
          kicker: "Ehrenamt",
          title: "Konferenz-, Recherche- und Event-Unterstützung",
          meta: "2021 - 2024",
          body: "Schiedsrichterin, Sprecherin, Liaison Officer und Content-Volunteer bei großen Konferenzen und Wettbewerben.",
        },
      ],
    },
    education: {
      label: "Ausbildung",
      title: "Akademischer Hintergrund",
      kicker: "2021 - 2025",
      school: "Syarif Hidayatullah Islamische Staatsuniversität Jakarta",
      degree: "Internationale Beziehungen",
      status: "Status: Abgeschlossen",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Erfolge",
      title: "Ausgewählte Highlights",
      items: [
        "Youth International Summit MUN - Markenbotschafterin",
        "LSPR MUN - Delegierte von Dänemark im UNEP-Rat",
        "IRON MUN - Delegierte der USA im UNEP-Rat",
        "Youth International Summit MUN - Delegierte von Liberia",
      ],
    },
    skills: {
      label: "Fähigkeiten",
      title: "Was ich mitbringe",
      items: [
        {
          title: "Kommunikation",
          body: "Öffentliches Sprechen, Stakeholder-Kommunikation, Beziehungsaufbau und Präsentationen.",
        },
        {
          title: "Recherche",
          body: "Policy-Analyse, Datenerhebung, Berichte, Briefings und Inhaltsprüfung.",
        },
        {
          title: "Content",
          body: "Schreiben, Lektorat, SEO-Grundlagen, Content-Strategie und markenkonforme Texte.",
        },
        {
          title: "Tools",
          body: "Microsoft Office, Recherche-Workflows, Kollaborationstools und Team-Koordination.",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Offen für Rollen in Recherche, Kommunikation und Content.",
      body:
        "Wenn Sie jemanden brauchen, der klar recherchiert, professionell kommuniziert und internationale Arbeit strukturiert unterstützt, können Sie mich direkt erreichen.",
      email: "E-Mail senden",
      call: "Anrufen",
      box: {
        nameLabel: "Name",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-Mail",
        phoneLabel: "Telefon",
        locationLabel: "Ort",
        locationValue: "Istanbul, Türkei",
      },
      emailTasya: "Tasya per E-Mail kontaktieren",
    },
    floatingMail: "E-Mail",
  },
  fr: {
    title: "Tasya Auliya Rizka | Relations internationales & contenu",
    metaDescription:
      "Portfolio de Tasya Auliya Rizka : relations internationales, affaires politiques, rédaction de contenu, recherche et communication.",
    language: { label: "Langue" },
    theme: { dark: "Sombre", light: "Clair", darkAria: "Passer au thème sombre", lightAria: "Passer au thème clair" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "À propos",
      experience: "Expérience",
      leadership: "Leadership",
      education: "Formation",
      achievements: "Réalisations",
      skills: "Compétences",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Relations internationales • Recherche • Rédaction de contenu",
      title: { line1: "Transformer la réflexion", line2: "politique en communication claire." },
      lead:
        "Je suis une jeune diplômée en relations internationales basée à Istanbul, avec une expérience en représentation à l'étranger, affaires politiques, rédaction de contenu, recherche et communication externe. Je combine réflexion analytique et coordination pratique pour soutenir les équipes internationales et les projets rapides.",
      primary: "Voir l'expérience",
      secondary: "Me contacter",
      stats: [
        { strong: "Moyenne 3.66/4.00", span: "Relations internationales, UIN Jakarta" },
        { strong: "Représentante à l'étranger", span: "Stepparts Otomotiv, Istanbul" },
        { strong: "Contenu + Recherche", span: "SEO, rédaction, analyse des politiques" },
      ],
      card: {
        role: "Diplômée en relations internationales",
        title: "Analytique, communicative et à l'aise dans un environnement multiculturel.",
        copy:
          "Mon parcours couvre les affaires politiques de l'ASEAN, la stratégie de contenu, le leadership étudiant et la coordination d'événements. Je structure l'information et garde une communication claire pour les parties prenantes internes et externes.",
        focus: [
          "Recherche politique et briefings",
          "Rédaction de contenu et bases SEO",
          "Coordination entre équipes",
          "Prise de parole et présentations",
        ],
      },
    },
    about: {
      label: "À propos",
      title: "Profil court",
      p1:
        "Je suis une récente diplômée en relations internationales, intéressée par la régulation mondiale, la diplomatie et les systèmes qui soutiennent la coopération internationale. J'aime transformer des informations complexes en contenus utiles et lisibles.",
      p2:
        "Mon expérience inclut la communication d'entreprise, la recherche en affaires politiques, la rédaction éditoriale et le leadership organisationnel. J'accorde de l'importance à la clarté, à la responsabilité et à la cohérence dans chaque rôle.",
      highlights: [
        { label: "Base", value: "Istanbul, Turquie" },
        { label: "Intérêt", value: "Régulation mondiale et droit international" },
        { label: "Force", value: "Recherche, coordination et communication" },
      ],
    },
    experience: {
      label: "Expérience",
      title: "Parcours professionnel",
      meta: ["2024 - aujourd'hui", "Istanbul"],
      company: "Stepparts Otomotiv",
      role: "Représentante à l'étranger",
      bullets: [
        "Gestion de la communication et des relations avec les clients internationaux.",
        "Recherche de marché et soutien aux activités commerciales mondiales.",
        "Coordination des commandes et suivi des livraisons avec les équipes internes.",
      ],
    },
    leadership: {
      label: "Leadership",
      title: "Expérience associative et de stage",
      cards: [
        {
          kicker: "Stagiaire affaires politiques",
          title: "Mission permanente de l'Indonésie auprès de l'ASEAN",
          meta: "Janvier - mars 2025, Jakarta",
          body: "Recherche, analyse, rapports, notes de synthèse et suivi des évolutions politiques dans les cadres de l'ASEAN.",
        },
        {
          kicker: "Stagiaire rédaction de contenu",
          title: "SINDOnews",
          meta: "Janvier - mars 2024, Jakarta",
          body: "Stratégie de contenu, édition, recherche de mots-clés, SEO et analyse de performance pour le web et les réseaux sociaux.",
        },
        {
          kicker: "Relations publiques",
          title: "Groupes d'étude et de développement en relations internationales",
          meta: "2021 - 2022",
          body: "Campagnes de communication, relations avec les parties prenantes, événements et production de contenu.",
        },
        {
          kicker: "Bénévolat",
          title: "Soutien aux conférences, à la recherche et aux événements",
          meta: "2021 - 2024",
          body: "Arbitre, intervenante, liaison et bénévole contenu lors de grandes conférences et compétitions.",
        },
      ],
    },
    education: {
      label: "Formation",
      title: "Parcours académique",
      kicker: "2021 - 2025",
      school: "Université islamique d'État Syarif Hidayatullah Jakarta",
      degree: "Relations internationales",
      status: "Statut : Diplômée",
      gpa: "Moyenne : 3.66 / 4.00",
    },
    achievements: {
      label: "Réalisations",
      title: "Points forts sélectionnés",
      items: [
        "Youth International Summit MUN - Ambassadrice de marque",
        "LSPR MUN - Déléguée du Danemark au Conseil UNEP",
        "IRON MUN - Déléguée des États-Unis au Conseil UNEP",
        "Youth International Summit MUN - Déléguée du Libéria",
      ],
    },
    skills: {
      label: "Compétences",
      title: "Ce que j'apporte",
      items: [
        {
          title: "Communication",
          body: "Prise de parole, communication avec les parties prenantes, relationnel et présentations.",
        },
        {
          title: "Recherche",
          body: "Analyse des politiques, collecte de données, rapports, notes de synthèse et validation du contenu.",
        },
        {
          title: "Contenu",
          body: "Rédaction, édition, bases SEO, stratégie de contenu et textes alignés sur la marque.",
        },
        {
          title: "Outils",
          body: "Microsoft Office, flux de recherche, outils de collaboration et coordination d'équipe.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Ouverte aux postes en recherche, communication et contenu.",
      body:
        "Si vous cherchez quelqu'un qui peut rechercher clairement, communiquer professionnellement et structurer un travail à portée internationale, vous pouvez me contacter directement.",
      email: "M'écrire",
      call: "Appeler",
      box: {
        nameLabel: "Nom",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-mail",
        phoneLabel: "Téléphone",
        locationLabel: "Lieu",
        locationValue: "Istanbul, Turquie",
      },
      emailTasya: "Envoyer un e-mail à Tasya",
    },
    floatingMail: "E-mail",
  },
  es: {
    title: "Tasya Auliya Rizka | Relaciones internacionales y contenido",
    metaDescription:
      "Portafolio de Tasya Auliya Rizka: relaciones internacionales, asuntos políticos, redacción de contenido, investigación y comunicación.",
    language: { label: "Idioma" },
    theme: { dark: "Oscuro", light: "Claro", darkAria: "Cambiar al tema oscuro", lightAria: "Cambiar al tema claro" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Sobre mí",
      experience: "Experiencia",
      leadership: "Liderazgo",
      education: "Educación",
      achievements: "Logros",
      skills: "Habilidades",
      contact: "Contacto",
    },
    hero: {
      eyebrow: "Relaciones internacionales • Investigación • Redacción de contenido",
      title: { line1: "Convertir el pensamiento", line2: "político en comunicación clara." },
      lead:
        "Soy una recién graduada en Relaciones Internacionales con base en Estambul, con experiencia en representación en el exterior, asuntos políticos, redacción de contenido, investigación y comunicación pública. Combino pensamiento analítico con coordinación práctica para apoyar equipos internacionales y proyectos de ritmo rápido.",
      primary: "Ver experiencia",
      secondary: "Contactarme",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Relaciones Internacionales, UIN Jakarta" },
        { strong: "Representante en el exterior", span: "Stepparts Otomotiv, Estambul" },
        { strong: "Contenido + Investigación", span: "SEO, escritura, análisis de políticas" },
      ],
      card: {
        role: "Graduada en Relaciones Internacionales",
        title: "Analítica, comunicativa y cómoda trabajando entre culturas.",
        copy:
          "Mi trayectoria abarca asuntos políticos de la ASEAN, estrategia de contenido, liderazgo estudiantil y coordinación de eventos. Aporto estructura a la información y mantengo clara la comunicación para partes interesadas internas y externas.",
        focus: [
          "Investigación política y briefing",
          "Redacción de contenido y bases de SEO",
          "Coordinación entre equipos",
          "Hablar en público y presentaciones",
        ],
      },
    },
    about: {
      label: "Sobre mí",
      title: "Perfil breve",
      p1:
        "Soy una graduada reciente en Relaciones Internacionales interesada en la regulación global, la diplomacia y los sistemas detrás de la cooperación internacional. Disfruto transformar información compleja en resultados útiles y fáciles de leer.",
      p2:
        "Mi experiencia incluye comunicación corporativa, investigación en asuntos políticos, redacción editorial y liderazgo organizacional. Valoro la claridad, la responsabilidad y la constancia en cada rol.",
      highlights: [
        { label: "Base", value: "Estambul, Turquía" },
        { label: "Interés", value: "Regulación global y derecho internacional" },
        { label: "Fortaleza", value: "Investigación, coordinación y comunicación" },
      ],
    },
    experience: {
      label: "Experiencia",
      title: "Historial laboral",
      meta: ["2024 - presente", "Estambul"],
      company: "Stepparts Otomotiv",
      role: "Representante en el exterior",
      bullets: [
        "Gestioné la comunicación y construí relaciones con clientes internacionales.",
        "Realicé investigación de mercado y apoyé actividades globales de ventas.",
        "Coordiné pedidos y aseguré una entrega fluida con los equipos internos.",
      ],
    },
    leadership: {
      label: "Liderazgo",
      title: "Experiencia organizativa y de prácticas",
      cards: [
        {
          kicker: "Prácticas de asuntos políticos",
          title: "Misión Permanente de Indonesia ante la ASEAN",
          meta: "Enero - marzo 2025, Yakarta",
          body: "Investigación, análisis, informes, notas y seguimiento de desarrollos políticos en marcos de la ASEAN.",
        },
        {
          kicker: "Prácticas de redacción",
          title: "SINDOnews",
          meta: "Enero - marzo 2024, Yakarta",
          body: "Estrategia de contenido, edición, investigación de palabras clave, SEO y análisis de rendimiento para web y redes sociales.",
        },
        {
          kicker: "Relaciones públicas",
          title: "Grupos educativos y de desarrollo de Relaciones Internacionales",
          meta: "2021 - 2022",
          body: "Campañas de comunicación, relaciones con stakeholders, eventos y producción de contenido.",
        },
        {
          kicker: "Voluntariado",
          title: "Apoyo a conferencias, investigación y eventos",
          meta: "2021 - 2024",
          body: "Árbitra, ponente, enlace y voluntaria de contenido en grandes conferencias y competencias.",
        },
      ],
    },
    education: {
      label: "Educación",
      title: "Formación académica",
      kicker: "2021 - 2025",
      school: "Universidad Estatal Islámica Syarif Hidayatullah de Yakarta",
      degree: "Relaciones Internacionales",
      status: "Estado: Graduada",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Logros",
      title: "Destacados seleccionados",
      items: [
        "Youth International Summit MUN - Embajadora de marca",
        "LSPR MUN - Delegada de Dinamarca en el Consejo UNEP",
        "IRON MUN - Delegada de EE. UU. en el Consejo UNEP",
        "Youth International Summit MUN - Delegada de Liberia",
      ],
    },
    skills: {
      label: "Habilidades",
      title: "Lo que aporto",
      items: [
        {
          title: "Comunicación",
          body: "Hablar en público, comunicación con stakeholders, creación de relaciones y presentaciones.",
        },
        {
          title: "Investigación",
          body: "Análisis de políticas, recopilación de datos, informes, briefings y validación de contenido.",
        },
        {
          title: "Contenido",
          body: "Redacción, edición, bases de SEO, estrategia de contenido y textos alineados con la marca.",
        },
        {
          title: "Herramientas",
          body: "Microsoft Office, flujos de trabajo de investigación, herramientas de colaboración y coordinación de equipos.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "Disponible para roles de investigación, comunicación y contenido.",
      body:
        "Si necesitas a alguien que investigue con claridad, comunique profesionalmente y apoye trabajos con enfoque internacional, puedes contactarme directamente.",
      email: "Escríbeme",
      call: "Llamar",
      box: {
        nameLabel: "Nombre",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "Correo",
        phoneLabel: "Teléfono",
        locationLabel: "Ubicación",
        locationValue: "Estambul, Turquía",
      },
      emailTasya: "Enviar correo a Tasya",
    },
    floatingMail: "Correo",
  },
  it: {
    title: "Tasya Auliya Rizka | Relazioni internazionali e contenuti",
    metaDescription:
      "Portfolio di Tasya Auliya Rizka: relazioni internazionali, affari politici, scrittura di contenuti, ricerca e comunicazione.",
    language: { label: "Lingua" },
    theme: { dark: "Scuro", light: "Chiaro", darkAria: "Passa al tema scuro", lightAria: "Passa al tema chiaro" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Chi sono",
      experience: "Esperienza",
      leadership: "Leadership",
      education: "Formazione",
      achievements: "Risultati",
      skills: "Competenze",
      contact: "Contatti",
    },
    hero: {
      eyebrow: "Relazioni internazionali • Ricerca • Content writing",
      title: { line1: "Trasformare il pensiero", line2: "politico in comunicazione chiara." },
      lead:
        "Sono una neolaureata in Relazioni Internazionali con base a Istanbul, con esperienza in rappresentanza estera, affari politici, content writing, ricerca e comunicazione pubblica. Unisco pensiero analitico e coordinamento pratico per supportare team internazionali e progetti rapidi.",
      primary: "Vedi esperienza",
      secondary: "Contattami",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Relazioni Internazionali, UIN Jakarta" },
        { strong: "Rappresentante estera", span: "Stepparts Otomotiv, Istanbul" },
        { strong: "Contenuti + Ricerca", span: "SEO, scrittura, analisi delle policy" },
      ],
      card: {
        role: "Laureata in Relazioni Internazionali",
        title: "Analitica, comunicativa e a suo agio nel lavorare tra culture diverse.",
        copy:
          "Il mio percorso include affari politici ASEAN, strategia dei contenuti, leadership studentesca e coordinamento eventi. Do struttura alle informazioni e mantengo chiara la comunicazione per stakeholder interni ed esterni.",
        focus: [
          "Ricerca politica e briefing",
          "Scrittura di contenuti e basi SEO",
          "Coordinamento tra team",
          "Public speaking e presentazioni",
        ],
      },
    },
    about: {
      label: "Chi sono",
      title: "Profilo breve",
      p1:
        "Sono una recente laureata in Relazioni Internazionali interessata a regolazione globale, diplomazia e ai sistemi dietro la cooperazione internazionale. Mi piace trasformare informazioni complesse in risultati utili e leggibili.",
      p2:
        "La mia esperienza include comunicazione aziendale, ricerca in affari politici, scrittura editoriale e leadership organizzativa. Valuto chiarezza, responsabilità e coerenza in ogni ruolo.",
      highlights: [
        { label: "Base", value: "Istanbul, Turchia" },
        { label: "Interesse", value: "Regolazione globale e diritto internazionale" },
        { label: "Forza", value: "Ricerca, coordinamento e comunicazione" },
      ],
    },
    experience: {
      label: "Esperienza",
      title: "Esperienza lavorativa",
      meta: ["2024 - presente", "Istanbul"],
      company: "Stepparts Otomotiv",
      role: "Rappresentante estera",
      bullets: [
        "Gestione della comunicazione e relazioni con clienti internazionali.",
        "Ricerca di mercato e supporto alle attività commerciali globali.",
        "Coordinamento ordini e consegne fluide con i team interni.",
      ],
    },
    leadership: {
      label: "Leadership",
      title: "Esperienze associative e di tirocinio",
      cards: [
        {
          kicker: "Tirocinante affari politici",
          title: "Missione Permanente dell'Indonesia presso l'ASEAN",
          meta: "Gennaio - marzo 2025, Giacarta",
          body: "Ricerca, analisi, report, briefing e monitoraggio degli sviluppi politici nei quadri ASEAN.",
        },
        {
          kicker: "Tirocinante content writer",
          title: "SINDOnews",
          meta: "Gennaio - marzo 2024, Giacarta",
          body: "Strategia dei contenuti, editing, ricerca keyword, SEO e analisi delle prestazioni per web e social media.",
        },
        {
          kicker: "Relazioni pubbliche",
          title: "Gruppi di formazione e sviluppo in Relazioni Internazionali",
          meta: "2021 - 2022",
          body: "Campagne di comunicazione, relazioni con gli stakeholder, eventi e produzione di contenuti.",
        },
        {
          kicker: "Volontariato",
          title: "Supporto a conferenze, ricerca ed eventi",
          meta: "2021 - 2024",
          body: "Arbitra, relatrice, liaison officer e volontaria contenuti per grandi conferenze e competizioni.",
        },
      ],
    },
    education: {
      label: "Formazione",
      title: "Percorso accademico",
      kicker: "2021 - 2025",
      school: "Università Islamica Statale Syarif Hidayatullah di Giacarta",
      degree: "Relazioni Internazionali",
      status: "Stato: Laureata",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Risultati",
      title: "Punti salienti selezionati",
      items: [
        "Youth International Summit MUN - Brand Ambassador",
        "LSPR MUN - Delegata della Danimarca nel Consiglio UNEP",
        "IRON MUN - Delegata degli Stati Uniti nel Consiglio UNEP",
        "Youth International Summit MUN - Delegata della Liberia",
      ],
    },
    skills: {
      label: "Competenze",
      title: "Cosa porto",
      items: [
        {
          title: "Comunicazione",
          body: "Public speaking, comunicazione con stakeholder, costruzione di relazioni e presentazioni.",
        },
        {
          title: "Ricerca",
          body: "Analisi delle policy, raccolta dati, report, briefing e validazione dei contenuti.",
        },
        {
          title: "Contenuti",
          body: "Scrittura, editing, basi SEO, strategia dei contenuti e testi in linea con il brand.",
        },
        {
          title: "Strumenti",
          body: "Microsoft Office, flussi di ricerca, strumenti di collaborazione e coordinamento tra team.",
        },
      ],
    },
    contact: {
      label: "Contatti",
      title: "Aperta a ruoli in ricerca, comunicazione e contenuti.",
      body:
        "Se hai bisogno di qualcuno che faccia ricerca in modo chiaro, comunichi in modo professionale e supporti lavori con orientamento internazionale, puoi contattarmi direttamente.",
      email: "Scrivimi",
      call: "Chiama",
      box: {
        nameLabel: "Nome",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "Email",
        phoneLabel: "Telefono",
        locationLabel: "Posizione",
        locationValue: "Istanbul, Turchia",
      },
      emailTasya: "Invia un'email a Tasya",
    },
    floatingMail: "Email",
  },
  pt: {
    title: "Tasya Auliya Rizka | Relações Internacionais e Conteúdo",
    metaDescription:
      "Portfólio de Tasya Auliya Rizka: relações internacionais, assuntos políticos, redação de conteúdo, pesquisa e comunicação.",
    language: { label: "Idioma" },
    theme: { dark: "Escuro", light: "Claro", darkAria: "Mudar para tema escuro", lightAria: "Mudar para tema claro" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Sobre",
      experience: "Experiência",
      leadership: "Liderança",
      education: "Educação",
      achievements: "Conquistas",
      skills: "Competências",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Relações Internacionais • Pesquisa • Redação de Conteúdo",
      title: { line1: "Transformar o pensamento", line2: "político em comunicação clara." },
      lead:
        "Sou recém-formada em Relações Internacionais, baseada em Istambul, com experiência em representação no exterior, assuntos políticos, redação de conteúdo, pesquisa e comunicação pública. Combino pensamento analítico com coordenação prática para apoiar equipes internacionais e projetos dinâmicos.",
      primary: "Ver experiência",
      secondary: "Entrar em contato",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Relações Internacionais, UIN Jakarta" },
        { strong: "Representante no exterior", span: "Stepparts Otomotiv, Istambul" },
        { strong: "Conteúdo + Pesquisa", span: "SEO, escrita, análise de políticas" },
      ],
      card: {
        role: "Formada em Relações Internacionais",
        title: "Analítica, comunicativa e confortável em ambientes interculturais.",
        copy:
          "Minha trajetória inclui assuntos políticos da ASEAN, estratégia de conteúdo, liderança estudantil e coordenação de eventos. Dou estrutura à informação e mantenho a comunicação clara para partes interessadas internas e externas.",
        focus: [
          "Pesquisa política e briefing",
          "Redação de conteúdo e noções de SEO",
          "Coordenação entre equipes",
          "Fala pública e apresentações",
        ],
      },
    },
    about: {
      label: "Sobre",
      title: "Perfil curto",
      p1:
        "Sou uma recém-formada em Relações Internacionais com interesse em regulação global, diplomacia e nos sistemas por trás da cooperação internacional. Gosto de transformar informação complexa em resultados úteis e fáceis de ler.",
      p2:
        "Minha experiência inclui comunicação corporativa, pesquisa em assuntos políticos, redação editorial e liderança organizacional. Valorizo clareza, responsabilidade e consistência em cada função.",
      highlights: [
        { label: "Base", value: "Istambul, Turquia" },
        { label: "Interesse", value: "Regulação global e direito internacional" },
        { label: "Força", value: "Pesquisa, coordenação e comunicação" },
      ],
    },
    experience: {
      label: "Experiência",
      title: "Histórico profissional",
      meta: ["2024 - presente", "Istambul"],
      company: "Stepparts Otomotiv",
      role: "Representante no exterior",
      bullets: [
        "Gerenciei a comunicação e construí relacionamentos com clientes internacionais.",
        "Realizei pesquisa de mercado e apoiei atividades globais de vendas.",
        "Coordenei pedidos e garanti entregas fluídas com as equipes internas.",
      ],
    },
    leadership: {
      label: "Liderança",
      title: "Experiência organizacional e de estágio",
      cards: [
        {
          kicker: "Estagiária de assuntos políticos",
          title: "Missão Permanente da Indonésia junto à ASEAN",
          meta: "Janeiro - março de 2025, Jacarta",
          body: "Pesquisa, análise, relatórios, briefings e monitoramento de desenvolvimentos políticos em estruturas da ASEAN.",
        },
        {
          kicker: "Estagiária de conteúdo",
          title: "SINDOnews",
          meta: "Janeiro - março de 2024, Jacarta",
          body: "Estratégia de conteúdo, edição, pesquisa de palavras-chave, SEO e análise de desempenho para web e mídias sociais.",
        },
        {
          kicker: "Relações públicas",
          title: "Grupos de formação e desenvolvimento em Relações Internacionais",
          meta: "2021 - 2022",
          body: "Campanhas de comunicação, relações com stakeholders, eventos e produção de conteúdo.",
        },
        {
          kicker: "Voluntariado",
          title: "Apoio a conferências, pesquisa e eventos",
          meta: "2021 - 2024",
          body: "Árbitra, palestrante, liaison officer e voluntária de conteúdo em grandes conferências e competições.",
        },
      ],
    },
    education: {
      label: "Educação",
      title: "Formação acadêmica",
      kicker: "2021 - 2025",
      school: "Universidade Estatal Islâmica Syarif Hidayatullah de Jacarta",
      degree: "Relações Internacionais",
      status: "Status: Graduada",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Conquistas",
      title: "Destaques selecionados",
      items: [
        "Youth International Summit MUN - Embaixadora da marca",
        "LSPR MUN - Delegada da Dinamarca no Conselho UNEP",
        "IRON MUN - Delegada dos EUA no Conselho UNEP",
        "Youth International Summit MUN - Delegada da Libéria",
      ],
    },
    skills: {
      label: "Competências",
      title: "O que eu entrego",
      items: [
        {
          title: "Comunicação",
          body: "Fala pública, comunicação com stakeholders, construção de relacionamento e apresentações.",
        },
        {
          title: "Pesquisa",
          body: "Análise de políticas, coleta de dados, relatórios, briefings e validação de conteúdo.",
        },
        {
          title: "Conteúdo",
          body: "Redação, edição, noções de SEO, estratégia de conteúdo e textos alinhados à marca.",
        },
        {
          title: "Ferramentas",
          body: "Microsoft Office, fluxos de pesquisa, ferramentas de colaboração e coordenação entre equipes.",
        },
      ],
    },
    contact: {
      label: "Contato",
      title: "Aberta para funções em pesquisa, comunicação e conteúdo.",
      body:
        "Se você precisa de alguém que pesquise com clareza, comunique profissionalmente e apoie trabalhos com foco internacional, pode falar comigo diretamente.",
      email: "Enviar e-mail",
      call: "Ligar",
      box: {
        nameLabel: "Nome",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-mail",
        phoneLabel: "Telefone",
        locationLabel: "Localização",
        locationValue: "Istambul, Turquia",
      },
      emailTasya: "Enviar e-mail para Tasya",
    },
    floatingMail: "E-mail",
  },
  nl: {
    title: "Tasya Auliya Rizka | Internationale betrekkingen & content",
    metaDescription:
      "Portfolio van Tasya Auliya Rizka: internationale betrekkingen, politieke zaken, content writing, onderzoek en communicatie.",
    language: { label: "Taal" },
    theme: { dark: "Donker", light: "Licht", darkAria: "Overschakelen naar donker thema", lightAria: "Overschakelen naar licht thema" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "Over mij",
      experience: "Ervaring",
      leadership: "Leiderschap",
      education: "Opleiding",
      achievements: "Prestaties",
      skills: "Vaardigheden",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Internationale betrekkingen • Onderzoek • Content writing",
      title: { line1: "Politiek denken", line2: "omzetten in duidelijke communicatie." },
      lead:
        "Ik ben een pas afgestudeerde in Internationale Betrekkingen, gevestigd in Istanbul, met ervaring in buitenlandse vertegenwoordiging, politieke zaken, content writing, onderzoek en publieke communicatie. Ik combineer analytisch denken met praktische coördinatie om internationale teams en snellopende projecten te ondersteunen.",
      primary: "Ervaring bekijken",
      secondary: "Contact opnemen",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Internationale Betrekkingen, UIN Jakarta" },
        { strong: "Buitenlands vertegenwoordiger", span: "Stepparts Otomotiv, Istanbul" },
        { strong: "Content + Onderzoek", span: "SEO, schrijven, beleidsanalyse" },
      ],
      card: {
        role: "Afgestudeerde in Internationale Betrekkingen",
        title: "Analytisch, communicatief en comfortabel in cross-cultureel werken.",
        copy:
          "Mijn achtergrond omvat ASEAN-politieke zaken, contentstrategie, studentenleiderschap en eventcoördinatie. Ik breng structuur aan in informatie en houd communicatie helder voor interne en externe stakeholders.",
        focus: [
          "Politiek onderzoek en briefing",
          "Content writing en SEO-basis",
          "Coördinatie tussen teams",
          "Presenteren en spreken in het openbaar",
        ],
      },
    },
    about: {
      label: "Over mij",
      title: "Kort profiel",
      p1:
        "Ik ben een recente afgestudeerde in Internationale Betrekkingen met interesse in mondiale regulering, diplomatie en de systemen achter internationale samenwerking. Ik vind het prettig om complexe informatie om te zetten in bruikbare, leesbare output.",
      p2:
        "Mijn ervaring omvat corporate communicatie, onderzoek naar politieke zaken, redactioneel schrijven en organisatielidmaatschap. Ik waardeer duidelijkheid, verantwoordelijkheid en consistentie in elke rol.",
      highlights: [
        { label: "Basis", value: "Istanbul, Turkije" },
        { label: "Interesse", value: "Wereldwijde regulering en internationaal recht" },
        { label: "Sterkte", value: "Onderzoek, coördinatie en communicatie" },
      ],
    },
    experience: {
      label: "Ervaring",
      title: "Werkgeschiedenis",
      meta: ["2024 - heden", "Istanbul"],
      company: "Stepparts Otomotiv",
      role: "Buitenlands vertegenwoordiger",
      bullets: [
        "Communicatie beheerd en relaties met internationale klanten opgebouwd.",
        "Marktonderzoek gedaan en wereldwijde verkoopactiviteiten ondersteund.",
        "Bestellingen gecoördineerd en soepele levering met interne teams bewaakt.",
      ],
    },
    leadership: {
      label: "Leiderschap",
      title: "Organisatie- en stage-ervaring",
      cards: [
        {
          kicker: "Stagiair politieke zaken",
          title: "Permanente Vertegenwoordiging van Indonesië bij ASEAN",
          meta: "Januari - maart 2025, Jakarta",
          body: "Onderzoek, analyse, rapporten, briefings en monitoring van politieke ontwikkelingen binnen ASEAN-kaders.",
        },
        {
          kicker: "Stagiair content writer",
          title: "SINDOnews",
          meta: "Januari - maart 2024, Jakarta",
          body: "Contentstrategie, redactie, zoekwoordonderzoek, SEO en prestatieanalyse voor web en sociale media.",
        },
        {
          kicker: "Public relations",
          title: "Onderwijs- en ontwikkelingsgroepen Internationale Betrekkingen",
          meta: "2021 - 2022",
          body: "Communicatiecampagnes, stakeholderrelaties, evenementen en contentproductie.",
        },
        {
          kicker: "Vrijwilligerswerk",
          title: "Ondersteuning bij conferenties, onderzoek en evenementen",
          meta: "2021 - 2024",
          body: "Arbiter, spreker, liaison officer en contentvrijwilliger bij grote conferenties en wedstrijden.",
        },
      ],
    },
    education: {
      label: "Opleiding",
      title: "Academische achtergrond",
      kicker: "2021 - 2025",
      school: "Syarif Hidayatullah Islamitische Staatsuniversiteit Jakarta",
      degree: "Internationale Betrekkingen",
      status: "Status: Afgestudeerd",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Prestaties",
      title: "Geselecteerde hoogtepunten",
      items: [
        "Youth International Summit MUN - Brand Ambassador",
        "LSPR MUN - Afgevaardigde van Denemarken in de UNEP-raad",
        "IRON MUN - Afgevaardigde van de VS in de UNEP-raad",
        "Youth International Summit MUN - Afgevaardigde van Liberia",
      ],
    },
    skills: {
      label: "Vaardigheden",
      title: "Wat ik meebreng",
      items: [
        {
          title: "Communicatie",
          body: "Publiek spreken, stakeholdercommunicatie, relaties opbouwen en presentaties geven.",
        },
        {
          title: "Onderzoek",
          body: "Beleidsanalyse, gegevensverzameling, rapportage, briefing en contentvalidatie.",
        },
        {
          title: "Content",
          body: "Schrijven, redactie, SEO-basis, contentstrategie en merkaligne tekst.",
        },
        {
          title: "Tools",
          body: "Microsoft Office, onderzoeksworkflows, samenwerkingshulpmiddelen en coördinatiesystemen.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "Beschikbaar voor onderzoek, communicatie en contentrollen.",
      body:
        "Als je iemand nodig hebt die helder onderzoek doet, professioneel communiceert en internationaal werk gestructureerd ondersteunt, kun je me direct bereiken.",
      email: "Mailen",
      call: "Bellen",
      box: {
        nameLabel: "Naam",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-mail",
        phoneLabel: "Telefoon",
        locationLabel: "Locatie",
        locationValue: "Istanbul, Turkije",
      },
      emailTasya: "Mail Tasya",
    },
    floatingMail: "E-mail",
  },
  pl: {
    title: "Tasya Auliya Rizka | Stosunki międzynarodowe i content",
    metaDescription:
      "Portfolio Tasya Auliya Rizka: stosunki międzynarodowe, sprawy polityczne, pisanie treści, badania i komunikacja.",
    language: { label: "Język" },
    theme: { dark: "Ciemny", light: "Jasny", darkAria: "Przełącz na ciemny motyw", lightAria: "Przełącz na jasny motyw" },
    brand: "Tasya Auliya Rizka",
    nav: {
      about: "O mnie",
      experience: "Doświadczenie",
      leadership: "Przywództwo",
      education: "Edukacja",
      achievements: "Osiągnięcia",
      skills: "Umiejętności",
      contact: "Kontakt",
    },
    hero: {
      eyebrow: "Stosunki międzynarodowe • Badania • Pisanie treści",
      title: { line1: "Przekładanie myślenia", line2: "politycznego na jasną komunikację." },
      lead:
        "Jestem świeżo upieczoną absolwentką stosunków międzynarodowych mieszkającą w Stambule, z doświadczeniem w reprezentacji zagranicznej, sprawach politycznych, pisaniu treści, badaniach i komunikacji publicznej. Łączę myślenie analityczne z praktyczną koordynacją, aby wspierać międzynarodowe zespoły i szybkie projekty.",
      primary: "Zobacz doświadczenie",
      secondary: "Skontaktuj się",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Stosunki międzynarodowe, UIN Jakarta" },
        { strong: "Reprezentantka zagraniczna", span: "Stepparts Otomotiv, Stambuł" },
        { strong: "Treści + Badania", span: "SEO, pisanie, analiza polityk" },
      ],
      card: {
        role: "Absolwentka stosunków międzynarodowych",
        title: "Analityczna, komunikatywna i swobodnie pracująca między kulturami.",
        copy:
          "Moje doświadczenie obejmuje sprawy polityczne ASEAN, strategię treści, przywództwo studenckie i koordynację wydarzeń. Nadaję strukturę informacjom i dbam o jasną komunikację dla interesariuszy wewnętrznych i zewnętrznych.",
        focus: [
          "Badania polityczne i briefingi",
          "Pisanie treści i podstawy SEO",
          "Koordynacja między zespołami",
          "Wystąpienia publiczne i prezentacje",
        ],
      },
    },
    about: {
      label: "O mnie",
      title: "Krótki profil",
      p1:
        "Jestem świeżą absolwentką stosunków międzynarodowych zainteresowaną globalnymi regulacjami, dyplomacją i systemami stojącymi za współpracą międzynarodową. Lubię zamieniać złożone informacje w użyteczne, czytelne treści.",
      p2:
        "Moje doświadczenie obejmuje komunikację korporacyjną, badania nad sprawami politycznymi, pisanie redakcyjne i przywództwo organizacyjne. Cenię jasność, odpowiedzialność i konsekwencję w każdej roli.",
      highlights: [
        { label: "Baza", value: "Stambuł, Turcja" },
        { label: "Zainteresowanie", value: "Globalne regulacje i prawo międzynarodowe" },
        { label: "Mocna strona", value: "Badania, koordynacja i komunikacja" },
      ],
    },
    experience: {
      label: "Doświadczenie",
      title: "Historia pracy",
      meta: ["2024 - obecnie", "Stambuł"],
      company: "Stepparts Otomotiv",
      role: "Reprezentantka zagraniczna",
      bullets: [
        "Prowadzenie komunikacji i budowanie relacji z międzynarodowymi klientami.",
        "Przeprowadzanie badań rynku i wspieranie globalnych działań sprzedażowych.",
        "Koordynacja zamówień i sprawna dostawa z zespołami wewnętrznymi.",
      ],
    },
    leadership: {
      label: "Przywództwo",
      title: "Doświadczenie organizacyjne i stażowe",
      cards: [
        {
          kicker: "Stażystka ds. politycznych",
          title: "Stała Misja Indonezji przy ASEAN",
          meta: "Styczeń - marzec 2025, Dżakarta",
          body: "Badania, analiza, raporty, briefy i monitorowanie wydarzeń politycznych w ramach ASEAN.",
        },
        {
          kicker: "Stażystka content writer",
          title: "SINDOnews",
          meta: "Styczeń - marzec 2024, Dżakarta",
          body: "Strategia treści, edycja, badanie słów kluczowych, SEO i analiza wyników dla web i social media.",
        },
        {
          kicker: "Public relations",
          title: "Grupy edukacyjne i rozwojowe stosunków międzynarodowych",
          meta: "2021 - 2022",
          body: "Kampanie komunikacyjne, relacje z interesariuszami, wydarzenia i produkcja treści.",
        },
        {
          kicker: "Wolontariat",
          title: "Wsparcie konferencji, badań i wydarzeń",
          meta: "2021 - 2024",
          body: "Arbitraż, wystąpienia, rola liaison officer i wolontariat contentowy przy dużych konferencjach i konkursach.",
        },
      ],
    },
    education: {
      label: "Edukacja",
      title: "Tło akademickie",
      kicker: "2021 - 2025",
      school: "Uniwersytet Państwowy Islamu Syarif Hidayatullah w Dżakarcie",
      degree: "Stosunki międzynarodowe",
      status: "Status: Absolwentka",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Osiągnięcia",
      title: "Wybrane wyróżnienia",
      items: [
        "Youth International Summit MUN - Ambasadorka marki",
        "LSPR MUN - Delegatka Danii w Radzie UNEP",
        "IRON MUN - Delegatka USA w Radzie UNEP",
        "Youth International Summit MUN - Delegatka Liberii",
      ],
    },
    skills: {
      label: "Umiejętności",
      title: "Co wnoszę",
      items: [
        {
          title: "Komunikacja",
          body: "Wystąpienia publiczne, komunikacja z interesariuszami, budowanie relacji i prezentacje.",
        },
        {
          title: "Badania",
          body: "Analiza polityk, zbieranie danych, raportowanie, briefing i weryfikacja treści.",
        },
        {
          title: "Treści",
          body: "Pisanie, edycja, podstawy SEO, strategia treści i teksty zgodne z marką.",
        },
        {
          title: "Narzędzia",
          body: "Microsoft Office, workflow badawczy, narzędzia współpracy i koordynacja zespołów.",
        },
      ],
    },
    contact: {
      label: "Kontakt",
      title: "Otwarta na role w badaniach, komunikacji i content.",
      body:
        "Jeśli potrzebujesz osoby, która jasno prowadzi badania, profesjonalnie komunikuje się i wspiera pracę zorientowaną międzynarodowo, możesz skontaktować się ze mną bezpośrednio.",
      email: "Napisz e-mail",
      call: "Zadzwoń",
      box: {
        nameLabel: "Imię",
        nameValue: "Tasya Auliya Rizka",
        emailLabel: "E-mail",
        phoneLabel: "Telefon",
        locationLabel: "Lokalizacja",
        locationValue: "Stambuł, Turcja",
      },
      emailTasya: "Wyślij e-mail do Tasyi",
    },
    floatingMail: "E-mail",
  },
  ru: {
    title: "Тасья Аулия Ризка | Международные отношения и контент",
    metaDescription:
      "Портфолио Тасьи Аулии Ризки: международные отношения, политические вопросы, написание контента, исследования и коммуникации.",
    language: { label: "Язык" },
    theme: { dark: "Тёмная", light: "Светлая", darkAria: "Переключить на тёмную тему", lightAria: "Переключить на светлую тему" },
    brand: "Тасья Аулия Ризка",
    nav: {
      about: "Обо мне",
      experience: "Опыт",
      leadership: "Лидерство",
      education: "Образование",
      achievements: "Достижения",
      skills: "Навыки",
      contact: "Контакты",
    },
    hero: {
      eyebrow: "Международные отношения • Исследования • Контент",
      title: { line1: "Превращаю политическое", line2: "мышление в ясную коммуникацию." },
      lead:
        "Я недавняя выпускница международных отношений, живущая в Стамбуле, с опытом зарубежного представительства, политических вопросов, написания контента, исследований и публичной коммуникации. Я сочетaю аналитическое мышление с практической координацией, чтобы поддерживать международные команды и быстро развивающиеся проекты.",
      primary: "Смотреть опыт",
      secondary: "Связаться",
      stats: [
        { strong: "GPA 3.66/4.00", span: "Международные отношения, UIN Jakarta" },
        { strong: "Представитель за рубежом", span: "Stepparts Otomotiv, Стамбул" },
        { strong: "Контент + Исследования", span: "SEO, тексты, анализ политики" },
      ],
      card: {
        role: "Выпускница международных отношений",
        title: "Аналитичная, коммуникабельная и уверенно работающая между культурами.",
        copy:
          "Мой опыт охватывает политические вопросы ASEAN, контент-стратегию, студенческое лидерство и координацию мероприятий. Я структурирую информацию и держу коммуникацию ясной для внутренних и внешних стейкхолдеров.",
        focus: [
          "Политические исследования и брифинги",
          "Написание контента и основы SEO",
          "Координация между командами",
          "Публичные выступления и презентации",
        ],
      },
    },
    about: {
      label: "Обо мне",
      title: "Краткий профиль",
      p1:
        "Я недавняя выпускница международных отношений, интересующаяся глобальным регулированием, дипломатией и системами, стоящими за международным сотрудничеством. Мне нравится превращать сложную информацию в полезный и понятный результат.",
      p2:
        "Мой опыт включает корпоративные коммуникации, исследования политических вопросов, редакционное письмо и организационное лидерство. В любой роли я ценю ясность, ответственность и последовательность.",
      highlights: [
        { label: "База", value: "Стамбул, Турция" },
        { label: "Интерес", value: "Глобальное регулирование и международное право" },
        { label: "Сильная сторона", value: "Исследования, координация и коммуникация" },
      ],
    },
    experience: {
      label: "Опыт",
      title: "Трудовой путь",
      meta: ["2024 - настоящее время", "Стамбул"],
      company: "Stepparts Otomotiv",
      role: "Представитель за рубежом",
      bullets: [
        "Управляла коммуникацией и выстраивала отношения с международными клиентами.",
        "Проводила исследование рынка и поддерживала глобальные продажи.",
        "Координировала заказы и обеспечивала гладкую доставку с внутренними командами.",
      ],
    },
    leadership: {
      label: "Лидерство",
      title: "Организационный и стажёрский опыт",
      cards: [
        {
          kicker: "Стажёр по политическим вопросам",
          title: "Постоянное представительство Индонезии при ASEAN",
          meta: "Январь - март 2025, Джакарта",
          body: "Исследования, анализ, отчёты, брифы и мониторинг политических процессов в рамках ASEAN.",
        },
        {
          kicker: "Стажёр по контенту",
          title: "SINDOnews",
          meta: "Январь - март 2024, Джакарта",
          body: "Контент-стратегия, редактирование, keyword research, SEO и анализ эффективности для веба и соцсетей.",
        },
        {
          kicker: "Связи с общественностью",
          title: "Учебные и развивающие группы по международным отношениям",
          meta: "2021 - 2022",
          body: "Коммуникационные кампании, отношения со стейкхолдерами, мероприятия и производство контента.",
        },
        {
          kicker: "Волонтёрство",
          title: "Поддержка конференций, исследований и мероприятий",
          meta: "2021 - 2024",
          body: "Арбитр, спикер, liaison officer и контент-волонтёр на крупных конференциях и конкурсах.",
        },
      ],
    },
    education: {
      label: "Образование",
      title: "Академическая база",
      kicker: "2021 - 2025",
      school: "Исламский государственный университет Сяриф Хидаятуллах, Джакарта",
      degree: "Международные отношения",
      status: "Статус: Выпускница",
      gpa: "GPA: 3.66 / 4.00",
    },
    achievements: {
      label: "Достижения",
      title: "Выбранные результаты",
      items: [
        "Youth International Summit MUN - Посол бренда",
        "LSPR MUN - Делегат Дании в Совете UNEP",
        "IRON MUN - Делегат США в Совете UNEP",
        "Youth International Summit MUN - Делегат Либерии",
      ],
    },
    skills: {
      label: "Навыки",
      title: "Что я даю",
      items: [
        {
          title: "Коммуникация",
          body: "Публичные выступления, коммуникация со стейкхолдерами, построение отношений и презентации.",
        },
        {
          title: "Исследования",
          body: "Анализ политик, сбор данных, отчёты, брифинги и проверка контента.",
        },
        {
          title: "Контент",
          body: "Написание, редактирование, основы SEO, контент-стратегия и брендированные тексты.",
        },
        {
          title: "Инструменты",
          body: "Microsoft Office, исследовательские процессы, инструменты коллаборации и координация команд.",
        },
      ],
    },
    contact: {
      label: "Контакты",
      title: "Открыта к ролям в исследованиях, коммуникациях и контенте.",
      body:
        "Если вам нужен человек, который ясно исследует, профессионально общается и структурно поддерживает международную работу, вы можете связаться со мной напрямую.",
      email: "Написать",
      call: "Позвонить",
      box: {
        nameLabel: "Имя",
        nameValue: "Тасья Аулия Ризка",
        emailLabel: "Эл. почта",
        phoneLabel: "Телефон",
        locationLabel: "Локация",
        locationValue: "Стамбул, Турция",
      },
      emailTasya: "Написать Тасье",
    },
    floatingMail: "Почта",
  },
};

const languageNames = {
  en: { en: "English", tr: "Turkish", de: "German", fr: "French", es: "Spanish", it: "Italian", pt: "Portuguese", nl: "Dutch", pl: "Polish", ru: "Russian" },
  tr: { en: "İngilizce", tr: "Türkçe", de: "Almanca", fr: "Fransızca", es: "İspanyolca", it: "İtalyanca", pt: "Portekizce", nl: "Felemenkçe", pl: "Lehçe", ru: "Rusça" },
  de: { en: "Englisch", tr: "Türkisch", de: "Deutsch", fr: "Französisch", es: "Spanisch", it: "Italienisch", pt: "Portugiesisch", nl: "Niederländisch", pl: "Polnisch", ru: "Russisch" },
  fr: { en: "Anglais", tr: "Turc", de: "Allemand", fr: "Français", es: "Espagnol", it: "Italien", pt: "Portugais", nl: "Néerlandais", pl: "Polonais", ru: "Russe" },
  es: { en: "Inglés", tr: "Turco", de: "Alemán", fr: "Francés", es: "Español", it: "Italiano", pt: "Portugués", nl: "Neerlandés", pl: "Polaco", ru: "Ruso" },
  it: { en: "Inglese", tr: "Turco", de: "Tedesco", fr: "Francese", es: "Spagnolo", it: "Italiano", pt: "Portoghese", nl: "Olandese", pl: "Polacco", ru: "Russo" },
  pt: { en: "Inglês", tr: "Turco", de: "Alemão", fr: "Francês", es: "Espanhol", it: "Italiano", pt: "Português", nl: "Holandês", pl: "Polonês", ru: "Russo" },
  nl: { en: "Engels", tr: "Turks", de: "Duits", fr: "Frans", es: "Spaans", it: "Italiaans", pt: "Portugees", nl: "Nederlands", pl: "Pools", ru: "Russisch" },
  pl: { en: "Angielski", tr: "Turecki", de: "Niemiecki", fr: "Francuski", es: "Hiszpański", it: "Włoski", pt: "Portugalski", nl: "Niderlandzki", pl: "Polski", ru: "Rosyjski" },
  ru: { en: "Английский", tr: "Турецкий", de: "Немецкий", fr: "Французский", es: "Испанский", it: "Итальянский", pt: "Португальский", nl: "Нидерландский", pl: "Польский", ru: "Русский" },
};

const supportedLanguages = Object.keys(translations);
const initialTheme =
  storage.get("tasya-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
const browserLanguage = (navigator.language || "en").slice(0, 2).toLowerCase();
const initialLanguage = supportedLanguages.includes(storage.get("tasya-language"))
  ? storage.get("tasya-language")
  : supportedLanguages.includes(browserLanguage)
    ? browserLanguage
    : "en";

function getPath(source, path) {
  return path.split(".").reduce((value, key) => (value && value[key] != null ? value[key] : undefined), source);
}

function currentTranslation() {
  return translations[root.lang] || translations.en;
}

function updateThemeButton() {
  if (!themeToggle) return;
  const t = currentTranslation();
  const theme = root.dataset.theme === "dark" ? "dark" : "light";
  themeToggle.textContent = theme === "dark" ? t.theme.light : t.theme.dark;
  themeToggle.setAttribute("aria-label", theme === "dark" ? t.theme.lightAria : t.theme.darkAria);
}

function applyTheme(theme) {
  const next = theme === "dark" ? "dark" : "light";
  root.dataset.theme = next;
  storage.set("tasya-theme", next);
  updateThemeButton();
}

function applyLanguage(language) {
  const next = supportedLanguages.includes(language) ? language : "en";
  const t = translations[next] || translations.en;

  root.lang = next;
  storage.set("tasya-language", next);

  if (languageSelect) {
    languageSelect.value = next;
    languageSelect.setAttribute("aria-label", t.language.label);
    Array.from(languageSelect.options).forEach((option) => {
      option.textContent = languageNames[next]?.[option.value] || option.value.toUpperCase();
    });
  }

  if (metaDescription) {
    metaDescription.setAttribute("content", t.metaDescription);
  }

  document.title = t.title;

  i18nNodes.forEach((node) => {
    const value = getPath(t, node.dataset.i18n);
    if (value != null) node.textContent = value;
  });

  const floatingMail = document.querySelector(".floating-mail");
  if (floatingMail) floatingMail.setAttribute("aria-label", t.contact.emailTasya);

  updateThemeButton();
}

function setActiveLink(id) {
  navLinks.forEach((link) => {
    link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(root.dataset.theme === "dark" ? "light" : "dark");
  });
}

if (languageSelect) {
  languageSelect.addEventListener("change", (event) => {
    applyLanguage(event.target.value);
  });
}

if (revealNodes.length && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealNodes.forEach((node) => observer.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if ("IntersectionObserver" in window) {
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visible?.target?.id) setActiveLink(visible.target.id);
    },
    { threshold: [0.2, 0.4, 0.6], rootMargin: "-20% 0px -55% 0px" },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

root.lang = initialLanguage;
applyTheme(initialTheme);
applyLanguage(initialLanguage);

if (reduceMotion.matches) {
  body.classList.add("hero-ready");
} else {
  window.setTimeout(() => body.classList.add("hero-ready"), 120);
}
