(() => {
  const businessEmail = "prasetyamaha99@gmail.com";
  const whatsappNumber = "6281353443517";
  const localeStorageKey = "pras_locale_preference";
  const supportedLocales = ["id", "en", "es", "fr", "de", "ja", "zh"];
  const indonesianTimeZones = ["Asia/Jakarta", "Asia/Makassar", "Asia/Jayapura", "Asia/Pontianak"];

  const locales = {
    en: {
      metaTitle: "Pras | Web Development Service in Bali",
      metaDescription:
        "Professional web development, WordPress, UI/UX, branding, and AI implementation service in Bali by Pras. Flexible scope and pricing based on your needs and budget.",
      strings: {
        skip: "Skip to desktop",
        shortcut_about: "About Me",
        shortcut_resume: "My Resume",
        shortcut_projects: "My Projects",
        shortcut_contact: "Contact Me",
        window_about_title: "About Me",
        window_resume_title: "My Resume",
        window_projects_title: "My Projects",
        window_contact_title: "Contact Me",
        about_intro:
          "A Bali-based digital partner helping business owners, professionals, and service providers build a credible online presence.",
        about_stat_1: "3+ years",
        about_stat_1_label: "web development experience",
        about_stat_2: "Information Systems",
        about_stat_2_label: "bachelor degree background",
        about_stat_3: "Flexible scope",
        about_stat_3_label: "adjusted to your needs and budget",
        about_body:
          "I build websites, web apps, CMS systems, UI/UX, brand foundations, and AI-supported workflows with a long-term mindset.",
        resume_title: "Capability Brief",
        resume_note_title: "Pricing note",
        resume_note_body:
          "Scope and pricing are adjusted based on goals, timeline, complexity, and budget.",
        projects_title: "Digital Services",
        project_1_title: "Custom Websites",
        project_1_body: "Credible, responsive websites for business and service brands.",
        project_2_title: "Web Applications",
        project_2_body: "Modern front-end and back-end systems for custom workflows.",
        project_3_title: "CMS & WordPress",
        project_3_body: "Manageable content systems, including headless WordPress.",
        project_4_title: "Design & AI",
        project_4_body: "UI/UX, brand guidelines, logo design, and practical AI features.",
        form_name: "Your name",
        form_email: "Email",
        form_project_type: "Project type",
        form_service_website: "Website",
        form_service_app: "Web application",
        form_service_cms: "WordPress or CMS",
        form_service_design: "UI/UX or branding",
        form_service_ai: "AI implementation",
        form_service_unsure: "Not sure yet",
        form_details: "Project details",
        form_placeholder: "Tell me what you need, your goals, timeline, and budget range.",
        form_submit_whatsapp: "Send via WhatsApp",
        form_submit_email: "Send via Email",
        form_missing: "Please complete the required fields first.",
        form_whatsapp_opening: "Opening WhatsApp with your project brief...",
        form_email_sending: "Sending your project brief...",
        form_email_sent: "Thanks. Your project brief has been sent.",
        form_email_fallback: "Email service is not ready yet. Opening your email app instead...",
        email_subject: "Project inquiry from {name}",
        email_name: "Name",
        email_email: "Email",
        email_service: "Project type",
        email_details: "Project details"
      }
    },
    id: {
      metaTitle: "Pras | Jasa Web Development Profesional di Bali",
      metaDescription:
        "Jasa web development profesional, WordPress, UI/UX, branding, dan implementasi AI di Bali oleh Pras. Scope dan harga fleksibel sesuai kebutuhan dan budget.",
      strings: {
        skip: "Lewati ke desktop",
        shortcut_about: "Tentang Saya",
        shortcut_resume: "Resume Saya",
        shortcut_projects: "Proyek Saya",
        shortcut_contact: "Kontak Saya",
        window_about_title: "Tentang Saya",
        window_resume_title: "Resume Saya",
        window_projects_title: "Proyek Saya",
        window_contact_title: "Kontak Saya",
        about_intro:
          "Partner digital berbasis di Bali yang membantu pemilik bisnis, profesional, dan penyedia jasa membangun kehadiran online yang kredibel.",
        about_stat_1: "3+ tahun",
        about_stat_1_label: "pengalaman web development",
        about_stat_2: "Sistem Informasi",
        about_stat_2_label: "latar belakang sarjana",
        about_stat_3: "Scope fleksibel",
        about_stat_3_label: "disesuaikan kebutuhan dan budget",
        about_body:
          "Saya membangun website, aplikasi web, CMS, UI/UX, fondasi brand, dan workflow berbasis AI dengan mindset jangka panjang.",
        resume_title: "Capability Brief",
        resume_note_title: "Catatan harga",
        resume_note_body:
          "Scope dan harga disesuaikan berdasarkan tujuan, timeline, kompleksitas, dan budget.",
        projects_title: "Layanan Digital",
        project_1_title: "Website Custom",
        project_1_body: "Website kredibel dan responsif untuk bisnis dan brand jasa.",
        project_2_title: "Aplikasi Web",
        project_2_body: "Sistem front-end dan back-end modern untuk workflow custom.",
        project_3_title: "CMS & WordPress",
        project_3_body: "Sistem konten yang mudah dikelola, termasuk Headless WordPress.",
        project_4_title: "Design & AI",
        project_4_body: "UI/UX, brand guidelines, logo design, dan fitur AI praktis.",
        form_name: "Nama Anda",
        form_email: "Email",
        form_project_type: "Jenis proyek",
        form_service_website: "Website",
        form_service_app: "Aplikasi web",
        form_service_cms: "WordPress atau CMS",
        form_service_design: "UI/UX atau branding",
        form_service_ai: "Implementasi AI",
        form_service_unsure: "Belum yakin",
        form_details: "Detail proyek",
        form_placeholder: "Ceritakan kebutuhan, tujuan, timeline, dan range budget Anda.",
        form_submit_whatsapp: "Kirim via WhatsApp",
        form_submit_email: "Kirim via Email",
        form_missing: "Lengkapi field yang wajib diisi terlebih dahulu.",
        form_whatsapp_opening: "Membuka WhatsApp dengan brief proyek Anda...",
        form_email_sending: "Mengirim brief proyek Anda...",
        form_email_sent: "Terima kasih. Brief proyek Anda sudah terkirim.",
        form_email_fallback: "Layanan email belum siap. Membuka aplikasi email Anda sebagai fallback...",
        email_subject: "Inquiry proyek dari {name}",
        email_name: "Nama",
        email_email: "Email",
        email_service: "Jenis proyek",
        email_details: "Detail proyek"
      }
    }
  };

  const extraLocales = {
    es: {
      metaTitle: "Pras | Servicio profesional de desarrollo web en Bali",
      metaDescription:
        "Servicio profesional de desarrollo web, WordPress, UI/UX, branding e implementación de IA en Bali por Pras. Alcance y precio flexibles según tus necesidades y presupuesto.",
      strings: {
        skip: "Ir al escritorio",
        shortcut_about: "Sobre mí",
        shortcut_resume: "Mi resumen",
        shortcut_projects: "Mis proyectos",
        shortcut_contact: "Contacto",
        window_about_title: "Sobre mí",
        window_resume_title: "Mi resumen",
        window_projects_title: "Mis proyectos",
        window_contact_title: "Contacto",
        about_intro:
          "Un socio digital en Bali que ayuda a negocios, profesionales y proveedores de servicios a crear una presencia online creíble.",
        about_stat_1: "3+ años",
        about_stat_1_label: "de experiencia en desarrollo web",
        about_stat_2: "Sistemas de Información",
        about_stat_2_label: "formación universitaria",
        about_stat_3: "Alcance flexible",
        about_stat_3_label: "adaptado a tus necesidades y presupuesto",
        about_body:
          "Creo sitios web, aplicaciones web, CMS, UI/UX, bases de marca y flujos con IA pensando en relaciones a largo plazo.",
        resume_title: "Resumen de capacidades",
        resume_note_title: "Nota de precio",
        resume_note_body:
          "El alcance y el precio se ajustan según objetivos, calendario, complejidad y presupuesto.",
        projects_title: "Servicios digitales",
        project_1_title: "Sitios web a medida",
        project_1_body: "Sitios creíbles y responsivos para negocios y marcas de servicios.",
        project_2_title: "Aplicaciones web",
        project_2_body: "Sistemas modernos de front-end y back-end para flujos personalizados.",
        project_3_title: "CMS y WordPress",
        project_3_body: "Sistemas de contenido fáciles de gestionar, incluido Headless WordPress.",
        project_4_title: "Diseño e IA",
        project_4_body: "UI/UX, guías de marca, diseño de logo y funciones prácticas con IA.",
        form_name: "Tu nombre",
        form_email: "Email",
        form_project_type: "Tipo de proyecto",
        form_service_website: "Sitio web",
        form_service_app: "Aplicación web",
        form_service_cms: "WordPress o CMS",
        form_service_design: "UI/UX o branding",
        form_service_ai: "Implementación de IA",
        form_service_unsure: "Aún no estoy seguro",
        form_details: "Detalles del proyecto",
        form_placeholder: "Cuéntame qué necesitas, objetivos, calendario y rango de presupuesto.",
        form_submit_whatsapp: "Enviar por WhatsApp",
        form_submit_email: "Enviar por Email",
        form_missing: "Completa primero los campos obligatorios.",
        form_whatsapp_opening: "Abriendo WhatsApp con tu brief de proyecto...",
        form_email_sending: "Enviando tu brief de proyecto...",
        form_email_sent: "Gracias. Tu brief de proyecto fue enviado.",
        form_email_fallback: "El servicio de email aún no está listo. Abriendo tu app de email...",
        email_subject: "Consulta de proyecto de {name}",
        email_name: "Nombre",
        email_email: "Email",
        email_service: "Tipo de proyecto",
        email_details: "Detalles del proyecto"
      }
    },
    fr: {
      metaTitle: "Pras | Service professionnel de développement web à Bali",
      metaDescription:
        "Service professionnel de développement web, WordPress, UI/UX, branding et intégration IA à Bali par Pras. Périmètre et prix flexibles selon vos besoins et votre budget.",
      strings: {
        skip: "Aller au bureau",
        shortcut_about: "À propos",
        shortcut_resume: "Mon résumé",
        shortcut_projects: "Mes projets",
        shortcut_contact: "Contact",
        window_about_title: "À propos",
        window_resume_title: "Mon résumé",
        window_projects_title: "Mes projets",
        window_contact_title: "Contact",
        about_intro:
          "Un partenaire digital basé à Bali qui aide les entreprises, professionnels et prestataires à créer une présence en ligne crédible.",
        about_stat_1: "3+ ans",
        about_stat_1_label: "d'expérience en développement web",
        about_stat_2: "Systèmes d'information",
        about_stat_2_label: "formation universitaire",
        about_stat_3: "Périmètre flexible",
        about_stat_3_label: "adapté à vos besoins et budget",
        about_body:
          "Je crée des sites web, applications web, CMS, UI/UX, bases de marque et workflows avec IA dans une logique de long terme.",
        resume_title: "Résumé des compétences",
        resume_note_title: "Note de prix",
        resume_note_body:
          "Le périmètre et le prix sont ajustés selon les objectifs, le calendrier, la complexité et le budget.",
        projects_title: "Services digitaux",
        project_1_title: "Sites web sur mesure",
        project_1_body: "Sites crédibles et responsives pour entreprises et marques de services.",
        project_2_title: "Applications web",
        project_2_body: "Systèmes front-end et back-end modernes pour workflows personnalisés.",
        project_3_title: "CMS & WordPress",
        project_3_body: "Systèmes de contenu faciles à gérer, y compris Headless WordPress.",
        project_4_title: "Design & IA",
        project_4_body: "UI/UX, chartes de marque, logo design et fonctionnalités IA pratiques.",
        form_name: "Votre nom",
        form_email: "Email",
        form_project_type: "Type de projet",
        form_service_website: "Site web",
        form_service_app: "Application web",
        form_service_cms: "WordPress ou CMS",
        form_service_design: "UI/UX ou branding",
        form_service_ai: "Intégration IA",
        form_service_unsure: "Pas encore sûr",
        form_details: "Détails du projet",
        form_placeholder: "Décrivez vos besoins, objectifs, calendrier et budget.",
        form_submit_whatsapp: "Envoyer via WhatsApp",
        form_submit_email: "Envoyer par Email",
        form_missing: "Veuillez compléter les champs obligatoires.",
        form_whatsapp_opening: "Ouverture de WhatsApp avec votre brief...",
        form_email_sending: "Envoi de votre brief...",
        form_email_sent: "Merci. Votre brief a été envoyé.",
        form_email_fallback: "Le service email n'est pas encore prêt. Ouverture de votre app email...",
        email_subject: "Demande de projet de {name}",
        email_name: "Nom",
        email_email: "Email",
        email_service: "Type de projet",
        email_details: "Détails du projet"
      }
    },
    de: {
      metaTitle: "Pras | Professioneller Webentwicklungsservice in Bali",
      metaDescription:
        "Professionelle Webentwicklung, WordPress, UI/UX, Branding und KI-Implementierung in Bali von Pras. Umfang und Preis flexibel nach Bedarf und Budget.",
      strings: {
        skip: "Zum Desktop springen",
        shortcut_about: "Über mich",
        shortcut_resume: "Mein Profil",
        shortcut_projects: "Meine Projekte",
        shortcut_contact: "Kontakt",
        window_about_title: "Über mich",
        window_resume_title: "Mein Profil",
        window_projects_title: "Meine Projekte",
        window_contact_title: "Kontakt",
        about_intro:
          "Ein digitaler Partner aus Bali, der Unternehmen, Profis und Dienstleister beim Aufbau einer glaubwürdigen Online-Präsenz unterstützt.",
        about_stat_1: "3+ Jahre",
        about_stat_1_label: "Erfahrung in Webentwicklung",
        about_stat_2: "Informationssysteme",
        about_stat_2_label: "Bachelor-Hintergrund",
        about_stat_3: "Flexibler Umfang",
        about_stat_3_label: "angepasst an Bedarf und Budget",
        about_body:
          "Ich baue Websites, Web-Apps, CMS-Systeme, UI/UX, Markenfundamente und KI-gestützte Workflows mit langfristiger Perspektive.",
        resume_title: "Kompetenzprofil",
        resume_note_title: "Preishinweis",
        resume_note_body:
          "Umfang und Preis richten sich nach Zielen, Zeitplan, Komplexität und Budget.",
        projects_title: "Digitale Services",
        project_1_title: "Individuelle Websites",
        project_1_body: "Glaubwürdige, responsive Websites für Unternehmen und Servicemarken.",
        project_2_title: "Webanwendungen",
        project_2_body: "Moderne Front-end- und Back-end-Systeme für individuelle Abläufe.",
        project_3_title: "CMS & WordPress",
        project_3_body: "Gut verwaltbare Content-Systeme, inklusive Headless WordPress.",
        project_4_title: "Design & KI",
        project_4_body: "UI/UX, Brand Guidelines, Logo Design und praktische KI-Funktionen.",
        form_name: "Ihr Name",
        form_email: "Email",
        form_project_type: "Projekttyp",
        form_service_website: "Website",
        form_service_app: "Webanwendung",
        form_service_cms: "WordPress oder CMS",
        form_service_design: "UI/UX oder Branding",
        form_service_ai: "KI-Implementierung",
        form_service_unsure: "Noch nicht sicher",
        form_details: "Projektdetails",
        form_placeholder: "Beschreiben Sie Bedarf, Ziele, Zeitplan und Budgetrahmen.",
        form_submit_whatsapp: "Per WhatsApp senden",
        form_submit_email: "Per Email senden",
        form_missing: "Bitte füllen Sie zuerst die Pflichtfelder aus.",
        form_whatsapp_opening: "WhatsApp wird mit Ihrem Projektbrief geöffnet...",
        form_email_sending: "Projektbrief wird gesendet...",
        form_email_sent: "Danke. Ihr Projektbrief wurde gesendet.",
        form_email_fallback: "Der Email-Service ist noch nicht bereit. Ihre Email-App wird geöffnet...",
        email_subject: "Projektanfrage von {name}",
        email_name: "Name",
        email_email: "Email",
        email_service: "Projekttyp",
        email_details: "Projektdetails"
      }
    },
    ja: {
      metaTitle: "Pras | バリ島のプロ向けWeb開発サービス",
      metaDescription:
        "Prasによるバリ島のWeb開発、WordPress、UI/UX、ブランディング、AI導入サービス。内容と料金はニーズと予算に合わせて調整します。",
      strings: {
        skip: "デスクトップへ移動",
        shortcut_about: "自己紹介",
        shortcut_resume: "経歴",
        shortcut_projects: "プロジェクト",
        shortcut_contact: "連絡先",
        window_about_title: "自己紹介",
        window_resume_title: "経歴",
        window_projects_title: "プロジェクト",
        window_contact_title: "連絡先",
        about_intro:
          "バリ島を拠点に、事業者・プロフェッショナル・サービス提供者の信頼できるオンラインプレゼンスを支援するデジタルパートナーです。",
        about_stat_1: "3年以上",
        about_stat_1_label: "Web開発経験",
        about_stat_2: "情報システム",
        about_stat_2_label: "学士バックグラウンド",
        about_stat_3: "柔軟なスコープ",
        about_stat_3_label: "ニーズと予算に合わせて調整",
        about_body:
          "長期的な関係を大切にしながら、Webサイト、Webアプリ、CMS、UI/UX、ブランド基盤、AI活用ワークフローを構築します。",
        resume_title: "対応できること",
        resume_note_title: "料金について",
        resume_note_body:
          "目的、スケジュール、複雑さ、予算に合わせてスコープと料金を調整します。",
        projects_title: "デジタルサービス",
        project_1_title: "カスタムWebサイト",
        project_1_body: "ビジネスやサービスブランド向けの信頼感あるレスポンシブサイト。",
        project_2_title: "Webアプリケーション",
        project_2_body: "独自ワークフロー向けのモダンなフロントエンド・バックエンド。",
        project_3_title: "CMS & WordPress",
        project_3_body: "Headless WordPressを含む、管理しやすいコンテンツシステム。",
        project_4_title: "デザイン & AI",
        project_4_body: "UI/UX、ブランドガイドライン、ロゴデザイン、実用的なAI機能。",
        form_name: "お名前",
        form_email: "Email",
        form_project_type: "プロジェクト種別",
        form_service_website: "Webサイト",
        form_service_app: "Webアプリ",
        form_service_cms: "WordPress または CMS",
        form_service_design: "UI/UX またはブランディング",
        form_service_ai: "AI導入",
        form_service_unsure: "まだ未定",
        form_details: "プロジェクト詳細",
        form_placeholder: "必要な内容、目的、スケジュール、予算感を教えてください。",
        form_submit_whatsapp: "WhatsAppで送信",
        form_submit_email: "Emailで送信",
        form_missing: "必須項目を入力してください。",
        form_whatsapp_opening: "WhatsAppでプロジェクト内容を開いています...",
        form_email_sending: "プロジェクト内容を送信中...",
        form_email_sent: "ありがとうございます。内容を送信しました。",
        form_email_fallback: "Emailサービスが未設定です。メールアプリを開きます...",
        email_subject: "{name} からのプロジェクト相談",
        email_name: "名前",
        email_email: "Email",
        email_service: "プロジェクト種別",
        email_details: "プロジェクト詳細"
      }
    },
    zh: {
      metaTitle: "Pras | 巴厘岛专业网站开发服务",
      metaDescription:
        "Pras 在巴厘岛提供专业网站开发、WordPress、UI/UX、品牌设计和 AI 实施服务。范围和价格可根据需求与预算调整。",
      strings: {
        skip: "跳到桌面",
        shortcut_about: "关于我",
        shortcut_resume: "我的简介",
        shortcut_projects: "我的项目",
        shortcut_contact: "联系我",
        window_about_title: "关于我",
        window_resume_title: "我的简介",
        window_projects_title: "我的项目",
        window_contact_title: "联系我",
        about_intro:
          "来自巴厘岛的数字合作伙伴，帮助企业主、专业人士和服务提供者建立更可信的线上形象。",
        about_stat_1: "3年以上",
        about_stat_1_label: "网站开发经验",
        about_stat_2: "信息系统",
        about_stat_2_label: "本科学历背景",
        about_stat_3: "灵活范围",
        about_stat_3_label: "根据需求和预算调整",
        about_body:
          "我以长期合作为目标，构建网站、Web 应用、CMS、UI/UX、品牌基础和 AI 支持的工作流程。",
        resume_title: "能力简介",
        resume_note_title: "价格说明",
        resume_note_body:
          "项目范围和价格会根据目标、时间、复杂度和预算进行调整。",
        projects_title: "数字服务",
        project_1_title: "定制网站",
        project_1_body: "为企业和服务品牌打造可信、响应式的网站。",
        project_2_title: "Web 应用",
        project_2_body: "为自定义流程开发现代前端和后端系统。",
        project_3_title: "CMS & WordPress",
        project_3_body: "易于管理的内容系统，包括 Headless WordPress。",
        project_4_title: "设计 & AI",
        project_4_body: "UI/UX、品牌指南、Logo 设计和实用 AI 功能。",
        form_name: "您的姓名",
        form_email: "Email",
        form_project_type: "项目类型",
        form_service_website: "网站",
        form_service_app: "Web 应用",
        form_service_cms: "WordPress 或 CMS",
        form_service_design: "UI/UX 或品牌",
        form_service_ai: "AI 实施",
        form_service_unsure: "还不确定",
        form_details: "项目详情",
        form_placeholder: "请告诉我您的需求、目标、时间安排和预算范围。",
        form_submit_whatsapp: "通过 WhatsApp 发送",
        form_submit_email: "通过 Email 发送",
        form_missing: "请先填写必填字段。",
        form_whatsapp_opening: "正在用 WhatsApp 打开您的项目简报...",
        form_email_sending: "正在发送您的项目简报...",
        form_email_sent: "谢谢。您的项目简报已发送。",
        form_email_fallback: "Email 服务尚未准备好，正在打开您的邮件应用...",
        email_subject: "{name} 的项目咨询",
        email_name: "姓名",
        email_email: "Email",
        email_service: "项目类型",
        email_details: "项目详情"
      }
    }
  };

  Object.entries(extraLocales).forEach(([locale, data]) => {
    locales[locale] = {
      metaTitle: data.metaTitle,
      metaDescription: data.metaDescription,
      strings: {
        ...locales.en.strings,
        ...data.strings
      }
    };
  });

  let currentLocale = "en";
  let zIndex = 20;

  function getBrowserLanguages() {
    return Array.from(new Set([...(navigator.languages || []), navigator.language].filter(Boolean)));
  }

  function detectLocale() {
    const languages = getBrowserLanguages();
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    for (const language of languages) {
      const root = language.toLowerCase().split("-")[0];
      if (supportedLocales.includes(root)) {
        return root;
      }
    }

    return indonesianTimeZones.includes(timeZone) ? "id" : "en";
  }

  function readStoredPreference() {
    try {
      return localStorage.getItem(localeStorageKey) || "auto";
    } catch {
      return "auto";
    }
  }

  function getLocaleData() {
    return locales[currentLocale] || locales.en;
  }

  function t(key) {
    return getLocaleData().strings[key] || locales.en.strings[key] || key;
  }

  function applyLocale() {
    const stored = readStoredPreference();
    currentLocale = stored === "auto" ? detectLocale() : stored;
    document.documentElement.lang = currentLocale;
    document.title = getLocaleData().metaTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    description?.setAttribute("content", getLocaleData().metaDescription);
    ogTitle?.setAttribute("content", getLocaleData().metaTitle);
    ogDescription?.setAttribute("content", getLocaleData().metaDescription);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });
  }

  function getWindow(id) {
    return document.querySelector(`[data-window="${id}"]`);
  }

  function getWindowTitle(id) {
    const windowElement = getWindow(id);
    return windowElement?.querySelector(".xp-titlebar span")?.textContent || id;
  }

  function focusWindow(windowElement) {
    if (!windowElement) {
      return;
    }

    zIndex += 1;
    document.querySelectorAll(".xp-window").forEach((item) => item.classList.remove("active"));
    windowElement.classList.add("active");
    windowElement.style.zIndex = String(zIndex);
  }

  function renderTaskbar() {
    const taskbarApps = document.querySelector("#taskbarApps");
    taskbarApps.innerHTML = "";

    document.querySelectorAll(".xp-window:not([hidden])").forEach((windowElement) => {
      const id = windowElement.dataset.window;
      const button = document.createElement("button");
      button.type = "button";
      button.textContent = getWindowTitle(id);
      button.addEventListener("click", () => {
        focusWindow(windowElement);
      });
      taskbarApps.appendChild(button);
    });
  }

  function openWindow(id) {
    const windowElement = getWindow(id);

    if (!windowElement) {
      return;
    }

    windowElement.hidden = false;
    focusWindow(windowElement);
    renderTaskbar();

    if (window.gsap) {
      window.gsap.fromTo(
        windowElement,
        { opacity: 0, scale: 0.96, y: 12 },
        { opacity: 1, scale: 1, y: 0, duration: 0.22, ease: "power2.out" }
      );
    }
  }

  function closeWindow(button) {
    const windowElement = button.closest(".xp-window");
    windowElement.hidden = true;
    windowElement.classList.remove("active");
    renderTaskbar();
  }

  function minimizeWindow(button) {
    const windowElement = button.closest(".xp-window");
    windowElement.hidden = true;
    renderTaskbar();
  }

  function initDesktop() {
    document.querySelectorAll("[data-open-window]").forEach((button) => {
      button.addEventListener("click", () => {
        openWindow(button.dataset.openWindow);
        document.querySelector("#startMenu").hidden = true;
        document.querySelector("#startButton").setAttribute("aria-expanded", "false");
      });
    });

    document.querySelectorAll("[data-close-window]").forEach((button) => {
      button.addEventListener("click", () => closeWindow(button));
    });

    document.querySelectorAll("[data-minimize-window]").forEach((button) => {
      button.addEventListener("click", () => minimizeWindow(button));
    });

    document.querySelectorAll(".xp-window").forEach((windowElement) => {
      windowElement.addEventListener("pointerdown", () => focusWindow(windowElement));
    });

    const startButton = document.querySelector("#startButton");
    const startMenu = document.querySelector("#startMenu");

    startButton.addEventListener("click", () => {
      const isHidden = startMenu.hidden;
      startMenu.hidden = !isHidden;
      startButton.setAttribute("aria-expanded", String(isHidden));
    });

    document.addEventListener("click", (event) => {
      if (!startMenu.hidden && !startMenu.contains(event.target) && !startButton.contains(event.target)) {
        startMenu.hidden = true;
        startButton.setAttribute("aria-expanded", "false");
      }
    });
  }

  function updateClock() {
    const clock = document.querySelector("#clock");
    const now = new Date();
    clock.textContent = now.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    });
  }

  function getFormPayload(briefForm) {
    const formData = new FormData(briefForm);
    const serviceSelect = document.querySelector("#contactService");

    return {
      name: formData.get("name").toString().trim(),
      email: formData.get("email").toString().trim(),
      service: serviceSelect?.selectedOptions[0]?.textContent.trim() || formData.get("service").toString(),
      message: formData.get("message").toString().trim(),
      locale: currentLocale
    };
  }

  function buildBriefText(payload) {
    return `${t("email_name")}: ${payload.name}\n${t("email_email")}: ${payload.email}\n${t("email_service")}: ${payload.service}\n\n${t("email_details")}:\n${payload.message}`;
  }

  function openMailDraft(payload) {
    const subject = encodeURIComponent(t("email_subject").replace("{name}", payload.name));
    const body = encodeURIComponent(buildBriefText(payload));
    window.location.href = `mailto:${businessEmail}?subject=${subject}&body=${body}`;
  }

  function openWhatsapp(payload) {
    const text = encodeURIComponent(
      `${t("email_subject").replace("{name}", payload.name)}\n\n${buildBriefText(payload)}`
    );

    window.open(`https://wa.me/${whatsappNumber}?text=${text}`, "_blank", "noopener");
  }

  async function sendEmail(payload) {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));

    if (!response.ok) {
      throw new Error(result.error || "Unable to send email");
    }

    return result;
  }

  function initForm() {
    const briefForm = document.querySelector("#briefForm");
    const formStatus = document.querySelector("#formStatus");

    briefForm?.addEventListener("submit", async (event) => {
      event.preventDefault();
      const payload = getFormPayload(briefForm);
      const channel = event.submitter?.value || "whatsapp";

      if (!payload.name || !payload.email || !payload.message) {
        formStatus.textContent = t("form_missing");
        return;
      }

      if (channel === "whatsapp") {
        formStatus.textContent = t("form_whatsapp_opening");
        openWhatsapp(payload);
        return;
      }

      formStatus.textContent = t("form_email_sending");

      try {
        await sendEmail(payload);
        formStatus.textContent = t("form_email_sent");
        briefForm.reset();
      } catch {
        formStatus.textContent = t("form_email_fallback");
        openMailDraft(payload);
      }
    });
  }

  function initAnimation() {
    if (!window.gsap) {
      return;
    }

    window.gsap.from(".desktop-icon", {
      opacity: 0,
      y: 12,
      duration: 0.3,
      stagger: 0.08,
      ease: "power2.out"
    });
  }

  function init() {
    applyLocale();
    initDesktop();
    initForm();
    updateClock();
    setInterval(updateClock, 30000);
    initAnimation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
