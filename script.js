(() => {
  const businessEmail = "prasetyamaha99@gmail.com";
  const whatsappNumber = "6281353443517";
  const localeStorageKey = "pras_locale_preference";
  const supportedLocales = ["id", "en", "es", "fr", "de", "ja", "zh"];
  const indonesianTimeZones = ["Asia/Jakarta", "Asia/Makassar", "Asia/Jayapura", "Asia/Pontianak"];

  const locales = {
    en: {
      metaTitle: "Gede Prasetya (Pras) | Web Development Service in Bali",
      metaDescription:
        "Professional web development, WordPress, UI/UX, branding, and AI implementation service in Bali by Gede Prasetya (Pras). Flexible scope and pricing based on your needs and budget.",
      strings: {
        skip: "Skip to content",
        brand_role: "Digital Partner",
        menu_open: "Open menu",
        nav_services: "Services",
        nav_pricing: "Pricing",
        nav_process: "Process",
        nav_contact: "Contact",
        language_label: "Language",
        language_auto: "Auto",
        hero_eyebrow: "Professional web development service in Bali",
        hero_title: "Gede Prasetya (Pras)",
        hero_lead:
          "I help business owners, professionals, and service providers build a credible digital presence with websites, apps, branding, UI/UX, and AI-supported solutions.",
        hero_cta_primary: "Start a project",
        hero_cta_secondary: "Explore services",
        hero_stat_1_value: "3+ years",
        hero_stat_1_label: "web development experience",
        hero_stat_2_value: "Information Systems",
        hero_stat_2_label: "bachelor degree background",
        hero_stat_3_value: "Custom scope",
        hero_stat_3_label: "adjusted to needs and budget",
        strip_label: "Selected capabilities",
        intro_kicker: "What I believe",
        intro_title: "A website should make people trust you before they contact you.",
        intro_body_1:
          "Your digital presence is often the first proof that your business is serious. I build practical, well-designed solutions that help you look credible, communicate clearly, and convert attention into real conversations.",
        intro_body_2:
          "Whether you need a simple business website, a custom web application, WordPress development, branding support, or AI implementation, I shape the work around your actual goals instead of forcing you into a fixed package.",
        services_kicker: "Services",
        services_title: "All the digital support your brand needs to feel real.",
        services_body:
          "A focused set of web, design, and implementation services for businesses that need reliable execution without juggling many vendors.",
        service_custom_title: "Custom Websites & Web Apps",
        service_custom_body:
          "Fast, responsive, conversion-focused websites and web applications built with modern tools.",
        service_cms_title: "WordPress & Headless CMS",
        service_cms_body:
          "Manageable websites for owners and teams who need control over content without losing performance.",
        service_design_title: "UI/UX & Brand Foundation",
        service_design_body:
          "Interfaces and brand systems that make your business easier to understand, remember, and trust.",
        service_ai_title: "AI Implementation",
        service_ai_body:
          "Useful AI features and automation that support your workflow, content, and customer experience.",
        pricing_kicker: "Flexible pricing",
        pricing_title: "The scope adjusts to your needs, goals, and budget.",
        pricing_body:
          "Good digital work should be clear and realistic. I start by understanding what you need, what matters most, and what budget range feels comfortable. From there, we shape the right version of the project together.",
        pricing_point_1_title: "No one-size package",
        pricing_point_1_body: "Every proposal is based on real scope, not guesswork.",
        pricing_point_2_title: "Transparent priorities",
        pricing_point_2_body: "We decide what must be included now and what can grow later.",
        pricing_point_3_title: "Long-term value",
        pricing_point_3_body: "Build a foundation that can keep improving after launch.",
        planner_kicker: "Project fit planner",
        planner_title: "Shape the first conversation",
        planner_need_label: "What do you need?",
        planner_budget_label: "Budget comfort",
        planner_timeline_label: "Timeline",
        planner_priority_label: "Main priority",
        project_business: "Business website",
        project_custom: "Custom web application",
        project_wordpress: "WordPress or CMS",
        project_brand: "Branding and UI/UX",
        project_ai: "AI implementation",
        timeline_steady: "Steady",
        timeline_soon: "Soon",
        timeline_growth: "Long-term",
        priority_trust: "Build trust and credibility",
        priority_leads: "Get more leads",
        priority_manage: "Manage content easily",
        priority_system: "Create a custom system",
        fit_label: "Recommended direction",
        process_kicker: "Process",
        process_title: "Clear work, calm communication, useful results.",
        process_body:
          "The process keeps the project moving without making you feel lost in technical details.",
        process_1_title: "Discovery",
        process_1_body: "We clarify your business, audience, goals, budget range, and what success means.",
        process_2_title: "Plan",
        process_2_body: "I recommend the right scope, structure, technology, and realistic launch path.",
        process_3_title: "Design",
        process_3_body: "We shape the visual direction, content flow, and user experience before building.",
        process_4_title: "Build",
        process_4_body: "I develop, test, refine, and prepare the website or system for launch.",
        process_5_title: "Support",
        process_5_body: "After launch, we can keep improving performance, content, features, and growth.",
        audience_kicker: "Who I help",
        audience_title: "Built for people who sell trust.",
        audience_1_title: "Business owners",
        audience_1_body: "Look more credible, present your offer clearly, and make it easier to contact you.",
        audience_2_title: "Professionals",
        audience_2_body: "Turn your expertise into a polished online presence that supports your reputation.",
        audience_3_title: "Service providers",
        audience_3_body: "Explain your value, show proof, and help potential clients feel confident.",
        audience_4_title: "Growing teams",
        audience_4_body: "Improve your systems, CMS, automation, and digital workflows as your needs evolve.",
        relationship_kicker: "Long-term relationship",
        relationship_title: "I am here to be your digital partner, not just a one-time developer.",
        relationship_body:
          "The best results come from steady improvement. I can help you launch the first version, learn from real users, and keep building the digital presence your business deserves.",
        relationship_cta: "Talk about your project",
        contact_kicker: "Start here",
        contact_title: "Tell me what you want to build.",
        contact_body:
          "Share your goal, your timeline, and your budget comfort. I will help you turn it into a practical plan that fits where your business is right now.",
        contact_note_1: "Based in Bali",
        contact_note_2: "Remote-friendly collaboration",
        contact_note_3: "Custom scope and proposal",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
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
        form_submit: "Send project brief",
        form_submit_whatsapp: "Send via WhatsApp",
        form_submit_email: "Send via Email",
        form_missing: "Please complete the required fields first.",
        form_opening: "Opening your email app with the project brief...",
        form_whatsapp_opening: "Opening WhatsApp with your project brief...",
        form_email_sending: "Sending your project brief...",
        form_email_sent: "Thanks. Your project brief has been sent.",
        form_email_fallback: "Email service is not ready yet. Opening your email app instead...",
        email_subject: "Project inquiry from {name}",
        email_name: "Name",
        email_email: "Email",
        email_service: "Project type",
        email_details: "Project details",
        footer_body: "Professional web development and digital solutions in Bali.",
        footer_top: "Back to top",
        budget_scope_note: "{budget}: scope the most important work first."
      },
      lists: {
        service_custom_list: ["React.js, Vue.js, Next.js", "Laravel and Astro.js", "Landing pages, dashboards, booking flows"],
        service_cms_list: ["WordPress development", "Headless WordPress setup", "Content structure and maintenance"],
        service_design_list: ["Website UI/UX design", "Logo design", "Brand guidelines"],
        service_ai_list: ["AI chat and assistant flows", "Content and admin automation", "Custom integrations"]
      },
      planner: {
        budgetLabels: {
          1: "Simple and focused",
          2: "Lean but professional",
          3: "Growth-ready",
          4: "Custom and scalable"
        },
        recommendations: {
          business: {
            title: "Credible launch website",
            items: [
              "Professional homepage and service pages",
              "Clear message, trust sections, and contact flow",
              "Built so it can grow after launch"
            ]
          },
          custom: {
            title: "Custom web application plan",
            items: [
              "User flows, features, and technical scope first",
              "Modern front-end with reliable back-end structure",
              "Phased build so budget and risk stay clear"
            ]
          },
          wordpress: {
            title: "Manageable CMS website",
            items: [
              "WordPress or Headless WordPress setup",
              "Content structure your team can update",
              "Performance, security, and maintenance planning"
            ]
          },
          brand: {
            title: "Trust-focused brand foundation",
            items: [
              "Logo, brand direction, and visual guidelines",
              "UI/UX direction that supports your offer",
              "Website-ready design system and content flow"
            ]
          },
          ai: {
            title: "Practical AI implementation",
            items: [
              "Workflow review before choosing tools",
              "AI assistant, automation, or content support",
              "Clear limits, testing, and handover documentation"
            ]
          }
        },
        priorities: {
          trust: "Emphasize credibility, proof, and a polished first impression.",
          leads: "Prioritize conversion paths, contact flow, and service clarity.",
          manage: "Focus on content editing, CMS structure, and easy maintenance.",
          system: "Start with workflow, data, roles, and technical requirements."
        },
        timelines: {
          steady: "Use a balanced timeline with room for planning, design, and refinement.",
          soon: "Keep the first version focused so it can launch sooner.",
          growth: "Plan the foundation for ongoing improvements after launch."
        }
      }
    },
    id: {
      metaTitle: "Gede Prasetya (Pras) | Jasa Web Development Profesional di Bali",
      metaDescription:
        "Jasa web development profesional, WordPress, UI/UX, branding, dan implementasi AI di Bali oleh Gede Prasetya (Pras). Scope dan harga fleksibel sesuai kebutuhan dan budget.",
      strings: {
        skip: "Lewati ke konten",
        brand_role: "Partner Digital",
        menu_open: "Buka menu",
        nav_services: "Layanan",
        nav_pricing: "Harga",
        nav_process: "Proses",
        nav_contact: "Kontak",
        language_label: "Bahasa",
        language_auto: "Otomatis",
        hero_eyebrow: "Jasa web development profesional di Bali",
        hero_title: "Gede Prasetya (Pras)",
        hero_lead:
          "Saya membantu pemilik bisnis, profesional, dan penyedia jasa membangun kehadiran digital yang kredibel melalui website, aplikasi, branding, UI/UX, dan solusi berbasis AI.",
        hero_cta_primary: "Mulai proyek",
        hero_cta_secondary: "Lihat layanan",
        hero_stat_1_value: "3+ tahun",
        hero_stat_1_label: "pengalaman web development",
        hero_stat_2_value: "Sistem Informasi",
        hero_stat_2_label: "latar belakang sarjana",
        hero_stat_3_value: "Scope custom",
        hero_stat_3_label: "disesuaikan dengan kebutuhan dan budget",
        strip_label: "Keahlian utama",
        intro_kicker: "Yang saya percaya",
        intro_title: "Website seharusnya membuat orang percaya sebelum mereka menghubungi Anda.",
        intro_body_1:
          "Kehadiran digital sering menjadi bukti pertama bahwa bisnis Anda serius. Saya membangun solusi yang praktis dan rapi agar bisnis terlihat kredibel, mudah dipahami, dan siap mengubah perhatian menjadi percakapan nyata.",
        intro_body_2:
          "Baik Anda membutuhkan website bisnis sederhana, aplikasi web custom, WordPress, dukungan branding, atau implementasi AI, pekerjaan akan saya bentuk berdasarkan tujuan asli Anda, bukan paket yang dipaksakan.",
        services_kicker: "Layanan",
        services_title: "Semua dukungan digital agar brand Anda terasa nyata.",
        services_body:
          "Rangkaian layanan web, desain, dan implementasi untuk bisnis yang membutuhkan eksekusi terpercaya tanpa harus mengelola banyak vendor.",
        service_custom_title: "Website & Aplikasi Web Custom",
        service_custom_body:
          "Website dan aplikasi web yang cepat, responsif, dan fokus pada konversi menggunakan teknologi modern.",
        service_cms_title: "WordPress & Headless CMS",
        service_cms_body:
          "Website yang mudah dikelola untuk pemilik bisnis dan tim yang butuh kontrol konten tanpa mengorbankan performa.",
        service_design_title: "UI/UX & Fondasi Brand",
        service_design_body:
          "Interface dan sistem brand yang membuat bisnis lebih mudah dipahami, diingat, dan dipercaya.",
        service_ai_title: "Implementasi AI",
        service_ai_body:
          "Fitur AI dan automasi yang benar-benar berguna untuk workflow, konten, dan pengalaman pelanggan.",
        pricing_kicker: "Harga fleksibel",
        pricing_title: "Scope menyesuaikan kebutuhan, tujuan, dan budget Anda.",
        pricing_body:
          "Pekerjaan digital yang baik harus jelas dan realistis. Saya mulai dengan memahami kebutuhan, prioritas, dan range budget yang nyaman untuk Anda. Dari sana, kita bentuk versi proyek yang paling tepat.",
        pricing_point_1_title: "Tidak pakai paket kaku",
        pricing_point_1_body: "Setiap proposal dibuat berdasarkan scope nyata, bukan tebak-tebakan.",
        pricing_point_2_title: "Prioritas transparan",
        pricing_point_2_body: "Kita tentukan mana yang wajib dikerjakan sekarang dan mana yang bisa berkembang nanti.",
        pricing_point_3_title: "Nilai jangka panjang",
        pricing_point_3_body: "Bangun fondasi yang bisa terus ditingkatkan setelah launch.",
        planner_kicker: "Perencana proyek",
        planner_title: "Bentuk arah diskusi pertama",
        planner_need_label: "Apa yang Anda butuhkan?",
        planner_budget_label: "Kenyamanan budget",
        planner_timeline_label: "Timeline",
        planner_priority_label: "Prioritas utama",
        project_business: "Website bisnis",
        project_custom: "Aplikasi web custom",
        project_wordpress: "WordPress atau CMS",
        project_brand: "Branding dan UI/UX",
        project_ai: "Implementasi AI",
        timeline_steady: "Stabil",
        timeline_soon: "Segera",
        timeline_growth: "Jangka panjang",
        priority_trust: "Membangun trust dan kredibilitas",
        priority_leads: "Mendapatkan lebih banyak leads",
        priority_manage: "Mengelola konten dengan mudah",
        priority_system: "Membuat sistem custom",
        fit_label: "Arah yang direkomendasikan",
        process_kicker: "Proses",
        process_title: "Kerja jelas, komunikasi tenang, hasil berguna.",
        process_body: "Proses dibuat agar proyek terus bergerak tanpa membuat Anda tersesat dalam detail teknis.",
        process_1_title: "Discovery",
        process_1_body: "Kita perjelas bisnis, audiens, tujuan, range budget, dan arti sukses untuk proyek ini.",
        process_2_title: "Rencana",
        process_2_body: "Saya rekomendasikan scope, struktur, teknologi, dan jalur launch yang realistis.",
        process_3_title: "Desain",
        process_3_body: "Kita bentuk arah visual, alur konten, dan user experience sebelum masuk development.",
        process_4_title: "Build",
        process_4_body: "Saya develop, test, refine, dan siapkan website atau sistem untuk launch.",
        process_5_title: "Support",
        process_5_body: "Setelah launch, kita bisa terus meningkatkan performa, konten, fitur, dan growth.",
        audience_kicker: "Siapa yang saya bantu",
        audience_title: "Dibuat untuk orang yang menjual kepercayaan.",
        audience_1_title: "Pemilik bisnis",
        audience_1_body: "Tampil lebih kredibel, jelaskan penawaran dengan rapi, dan mudahkan calon klien menghubungi Anda.",
        audience_2_title: "Profesional",
        audience_2_body: "Ubah keahlian Anda menjadi kehadiran online yang mendukung reputasi.",
        audience_3_title: "Penyedia jasa",
        audience_3_body: "Jelaskan value, tampilkan bukti, dan bantu calon klien merasa yakin.",
        audience_4_title: "Tim yang berkembang",
        audience_4_body: "Tingkatkan sistem, CMS, automasi, dan workflow digital seiring kebutuhan yang bertambah.",
        relationship_kicker: "Relasi jangka panjang",
        relationship_title: "Saya hadir sebagai partner digital, bukan hanya developer sekali jalan.",
        relationship_body:
          "Hasil terbaik datang dari perbaikan yang konsisten. Saya bisa membantu Anda launch versi pertama, belajar dari user, dan terus membangun kehadiran digital yang layak untuk bisnis Anda.",
        relationship_cta: "Diskusikan proyek Anda",
        contact_kicker: "Mulai dari sini",
        contact_title: "Ceritakan apa yang ingin Anda bangun.",
        contact_body:
          "Bagikan tujuan, timeline, dan kenyamanan budget Anda. Saya akan bantu mengubahnya menjadi rencana praktis yang sesuai dengan kondisi bisnis saat ini.",
        contact_note_1: "Berbasis di Bali",
        contact_note_2: "Kolaborasi remote-friendly",
        contact_note_3: "Scope dan proposal custom",
        contact_whatsapp_label: "WhatsApp",
        contact_email_label: "Email",
        contact_linkedin_label: "LinkedIn",
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
        form_submit: "Kirim brief proyek",
        form_submit_whatsapp: "Kirim via WhatsApp",
        form_submit_email: "Kirim via Email",
        form_missing: "Lengkapi field yang wajib diisi terlebih dahulu.",
        form_opening: "Membuka aplikasi email Anda dengan brief proyek...",
        form_whatsapp_opening: "Membuka WhatsApp dengan brief proyek Anda...",
        form_email_sending: "Mengirim brief proyek Anda...",
        form_email_sent: "Terima kasih. Brief proyek Anda sudah terkirim.",
        form_email_fallback: "Layanan email belum siap. Membuka aplikasi email Anda sebagai fallback...",
        email_subject: "Inquiry proyek dari {name}",
        email_name: "Nama",
        email_email: "Email",
        email_service: "Jenis proyek",
        email_details: "Detail proyek",
        footer_body: "Jasa web development profesional dan solusi digital di Bali.",
        footer_top: "Kembali ke atas",
        budget_scope_note: "{budget}: prioritaskan pekerjaan paling penting terlebih dahulu."
      },
      lists: {
        service_custom_list: ["React.js, Vue.js, Next.js", "Laravel dan Astro.js", "Landing page, dashboard, booking flow"],
        service_cms_list: ["Development WordPress", "Setup Headless WordPress", "Struktur konten dan maintenance"],
        service_design_list: ["Desain UI/UX website", "Desain logo", "Brand guidelines"],
        service_ai_list: ["AI chat dan assistant flow", "Automasi konten dan admin", "Integrasi custom"]
      },
      planner: {
        budgetLabels: {
          1: "Sederhana dan fokus",
          2: "Lean tapi profesional",
          3: "Siap untuk growth",
          4: "Custom dan scalable"
        },
        recommendations: {
          business: {
            title: "Website launch yang kredibel",
            items: [
              "Homepage dan halaman layanan yang profesional",
              "Pesan jelas, section trust, dan alur kontak",
              "Fondasi yang bisa berkembang setelah launch"
            ]
          },
          custom: {
            title: "Rencana aplikasi web custom",
            items: [
              "Mulai dari user flow, fitur, dan scope teknis",
              "Front-end modern dengan struktur back-end yang reliable",
              "Build bertahap agar budget dan risiko tetap jelas"
            ]
          },
          wordpress: {
            title: "Website CMS yang mudah dikelola",
            items: [
              "Setup WordPress atau Headless WordPress",
              "Struktur konten yang mudah di-update",
              "Perencanaan performa, security, dan maintenance"
            ]
          },
          brand: {
            title: "Fondasi brand yang membangun trust",
            items: [
              "Logo, arah brand, dan panduan visual",
              "Arah UI/UX yang mendukung penawaran",
              "Design system siap pakai untuk website"
            ]
          },
          ai: {
            title: "Implementasi AI yang praktis",
            items: [
              "Review workflow sebelum memilih tool",
              "AI assistant, automasi, atau dukungan konten",
              "Testing, batasan jelas, dan dokumentasi handover"
            ]
          }
        },
        priorities: {
          trust: "Tekankan kredibilitas, bukti, dan first impression yang rapi.",
          leads: "Prioritaskan alur konversi, kontak, dan kejelasan layanan.",
          manage: "Fokus pada kemudahan edit konten, struktur CMS, dan maintenance.",
          system: "Mulai dari workflow, data, peran user, dan kebutuhan teknis."
        },
        timelines: {
          steady: "Gunakan timeline seimbang dengan ruang untuk planning, desain, dan refinement.",
          soon: "Jaga versi pertama tetap fokus agar bisa launch lebih cepat.",
          growth: "Rencanakan fondasi untuk peningkatan jangka panjang setelah launch."
        }
      }
    }
  };

  const extraLocaleStrings = {
    es: {
      metaTitle: "Gede Prasetya (Pras) | Servicio profesional de desarrollo web en Bali",
      metaDescription:
        "Desarrollo web profesional, WordPress, UI/UX, branding e implementacion de IA en Bali por Gede Prasetya (Pras). Alcance y precio flexibles segun tus necesidades y presupuesto.",
      strings: {
        brand_role: "Socio digital",
        nav_services: "Servicios",
        nav_pricing: "Precios",
        nav_process: "Proceso",
        nav_contact: "Contacto",
        language_label: "Idioma",
        language_auto: "Auto",
        hero_eyebrow: "Servicio profesional de desarrollo web en Bali",
        hero_lead:
          "Ayudo a duenos de negocios, profesionales y proveedores de servicios a crear una presencia digital creible con sitios web, apps, branding, UI/UX y soluciones con IA.",
        hero_cta_primary: "Iniciar proyecto",
        hero_cta_secondary: "Ver servicios",
        intro_title: "Un sitio web debe generar confianza antes de que te contacten.",
        services_kicker: "Servicios",
        services_title: "Todo el soporte digital que tu marca necesita para sentirse real.",
        pricing_kicker: "Precio flexible",
        pricing_title: "El alcance se ajusta a tus necesidades, objetivos y presupuesto.",
        planner_kicker: "Planificador",
        planner_title: "Define la primera conversacion",
        process_kicker: "Proceso",
        process_title: "Trabajo claro, comunicacion tranquila y resultados utiles.",
        audience_kicker: "A quien ayudo",
        audience_title: "Creado para personas que venden confianza.",
        relationship_kicker: "Relacion a largo plazo",
        relationship_title: "Estoy aqui como tu socio digital, no solo como desarrollador de una vez.",
        contact_kicker: "Empieza aqui",
        contact_title: "Cuentame que quieres construir.",
        form_submit: "Enviar brief del proyecto",
        footer_body: "Desarrollo web profesional y soluciones digitales en Bali."
      }
    },
    fr: {
      metaTitle: "Gede Prasetya (Pras) | Service professionnel de developpement web a Bali",
      metaDescription:
        "Developpement web professionnel, WordPress, UI/UX, branding et implementation IA a Bali par Gede Prasetya (Pras). Portee et prix flexibles selon vos besoins et votre budget.",
      strings: {
        brand_role: "Partenaire digital",
        nav_services: "Services",
        nav_pricing: "Tarifs",
        nav_process: "Processus",
        nav_contact: "Contact",
        language_label: "Langue",
        language_auto: "Auto",
        hero_eyebrow: "Service professionnel de developpement web a Bali",
        hero_lead:
          "J'aide les dirigeants, professionnels et prestataires a creer une presence digitale credible avec sites web, apps, branding, UI/UX et solutions IA.",
        hero_cta_primary: "Demarrer un projet",
        hero_cta_secondary: "Voir les services",
        intro_title: "Un site web doit inspirer confiance avant meme le premier contact.",
        services_kicker: "Services",
        services_title: "Tout le support digital dont votre marque a besoin pour devenir concrete.",
        pricing_kicker: "Tarifs flexibles",
        pricing_title: "La portee s'adapte a vos besoins, objectifs et budget.",
        planner_kicker: "Planificateur",
        planner_title: "Preparer la premiere conversation",
        process_kicker: "Processus",
        process_title: "Travail clair, communication calme, resultats utiles.",
        audience_kicker: "Qui j'aide",
        audience_title: "Cree pour celles et ceux qui vendent la confiance.",
        relationship_kicker: "Relation long terme",
        relationship_title: "Je suis votre partenaire digital, pas seulement un developpeur ponctuel.",
        contact_kicker: "Commencer ici",
        contact_title: "Dites-moi ce que vous voulez construire.",
        form_submit: "Envoyer le brief",
        footer_body: "Developpement web professionnel et solutions digitales a Bali."
      }
    },
    de: {
      metaTitle: "Gede Prasetya (Pras) | Professioneller Webentwicklungsservice in Bali",
      metaDescription:
        "Professionelle Webentwicklung, WordPress, UI/UX, Branding und KI-Implementierung in Bali von Gede Prasetya (Pras). Umfang und Preis flexibel nach Bedarf und Budget.",
      strings: {
        brand_role: "Digitaler Partner",
        nav_services: "Leistungen",
        nav_pricing: "Preise",
        nav_process: "Prozess",
        nav_contact: "Kontakt",
        language_label: "Sprache",
        language_auto: "Auto",
        hero_eyebrow: "Professioneller Webentwicklungsservice in Bali",
        hero_lead:
          "Ich helfe Unternehmen, Fachleuten und Dienstleistern, eine glaubwuerdige digitale Praesenz mit Websites, Apps, Branding, UI/UX und KI-Loesungen aufzubauen.",
        hero_cta_primary: "Projekt starten",
        hero_cta_secondary: "Leistungen ansehen",
        intro_title: "Eine Website sollte Vertrauen schaffen, bevor jemand Kontakt aufnimmt.",
        services_kicker: "Leistungen",
        services_title: "Digitale Unterstuetzung, damit Ihre Marke professionell wirkt.",
        pricing_kicker: "Flexible Preise",
        pricing_title: "Der Umfang passt sich Bedarf, Zielen und Budget an.",
        planner_kicker: "Projektplaner",
        planner_title: "Das erste Gespraech vorbereiten",
        process_kicker: "Prozess",
        process_title: "Klare Arbeit, ruhige Kommunikation, nuetzliche Ergebnisse.",
        audience_kicker: "Wem ich helfe",
        audience_title: "Gebaut fuer Menschen, die Vertrauen verkaufen.",
        relationship_kicker: "Langfristige Beziehung",
        relationship_title: "Ich bin Ihr digitaler Partner, nicht nur ein einmaliger Entwickler.",
        contact_kicker: "Hier starten",
        contact_title: "Erzaehlen Sie mir, was Sie bauen moechten.",
        form_submit: "Projektbrief senden",
        footer_body: "Professionelle Webentwicklung und digitale Loesungen in Bali."
      }
    },
    ja: {
      metaTitle: "Gede Prasetya (Pras) | バリのプロフェッショナルWeb開発サービス",
      metaDescription:
        "Gede Prasetya (Pras) によるバリ拠点のWeb開発、WordPress、UI/UX、ブランディング、AI導入。ニーズと予算に合わせて柔軟に設計します。",
      strings: {
        brand_role: "デジタルパートナー",
        nav_services: "サービス",
        nav_pricing: "料金",
        nav_process: "プロセス",
        nav_contact: "お問い合わせ",
        language_label: "言語",
        language_auto: "自動",
        hero_eyebrow: "バリのプロフェッショナルWeb開発サービス",
        hero_lead:
          "ビジネスオーナー、専門職、サービス提供者が信頼されるデジタルプレゼンスを作れるよう、Webサイト、アプリ、ブランディング、UI/UX、AI活用を支援します。",
        hero_cta_primary: "相談を始める",
        hero_cta_secondary: "サービスを見る",
        intro_title: "Webサイトは、問い合わせ前に信頼を生むものであるべきです。",
        services_kicker: "サービス",
        services_title: "ブランドを本物らしく見せるためのデジタル支援。",
        pricing_kicker: "柔軟な料金",
        pricing_title: "範囲はニーズ、目標、予算に合わせて調整します。",
        planner_kicker: "プロジェクト診断",
        planner_title: "最初の相談を具体化する",
        process_kicker: "プロセス",
        process_title: "明確な進行、落ち着いたコミュニケーション、実用的な成果。",
        audience_kicker: "支援する方",
        audience_title: "信頼を届ける人のために作ります。",
        relationship_kicker: "長期的な関係",
        relationship_title: "一度きりの開発者ではなく、長く伴走するデジタルパートナーです。",
        contact_kicker: "ここから開始",
        contact_title: "作りたいものを教えてください。",
        form_submit: "プロジェクト概要を送る",
        footer_body: "バリのプロフェッショナルWeb開発とデジタルソリューション。"
      }
    },
    zh: {
      metaTitle: "Gede Prasetya (Pras) | 巴厘岛专业网站开发服务",
      metaDescription:
        "Gede Prasetya (Pras) 在巴厘岛提供网站开发、WordPress、UI/UX、品牌设计与 AI 实施服务。范围和价格可根据需求与预算调整。",
      strings: {
        brand_role: "数字合作伙伴",
        nav_services: "服务",
        nav_pricing: "价格",
        nav_process: "流程",
        nav_contact: "联系",
        language_label: "语言",
        language_auto: "自动",
        hero_eyebrow: "巴厘岛专业网站开发服务",
        hero_lead:
          "我帮助企业主、专业人士和服务提供者通过网站、应用、品牌、UI/UX 与 AI 解决方案建立更可信的数字形象。",
        hero_cta_primary: "开始项目",
        hero_cta_secondary: "查看服务",
        intro_title: "网站应该在客户联系你之前就建立信任。",
        services_kicker: "服务",
        services_title: "让你的品牌更真实可信的数字支持。",
        pricing_kicker: "灵活定价",
        pricing_title: "项目范围会根据需求、目标和预算调整。",
        planner_kicker: "项目规划",
        planner_title: "明确第一次沟通方向",
        process_kicker: "流程",
        process_title: "清晰执行、稳定沟通、实用结果。",
        audience_kicker: "服务对象",
        audience_title: "为需要传递信任的人而建。",
        relationship_kicker: "长期合作",
        relationship_title: "我不只是一次性的开发者，而是你的长期数字伙伴。",
        contact_kicker: "从这里开始",
        contact_title: "告诉我你想构建什么。",
        form_submit: "发送项目简报",
        footer_body: "巴厘岛专业网站开发与数字解决方案。"
      }
    }
  };

  Object.entries(extraLocaleStrings).forEach(([locale, data]) => {
    locales[locale] = {
      ...locales.en,
      ...data,
      strings: {
        ...locales.en.strings,
        ...data.strings
      }
    };
  });

  let selectedTimeline = "steady";
  let currentLocale = "en";
  let currentPreference = "auto";
  let animationsReady = false;

  function readStoredPreference() {
    try {
      return localStorage.getItem(localeStorageKey) || "auto";
    } catch {
      return "auto";
    }
  }

  function storePreference(value) {
    try {
      localStorage.setItem(localeStorageKey, value);
    } catch {
      return;
    }
  }

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

    if (indonesianTimeZones.includes(timeZone)) {
      return "id";
    }

    return "en";
  }

  function getLocaleData(locale = currentLocale) {
    return locales[locale] || locales.en;
  }

  function t(key) {
    const active = getLocaleData();
    return active.strings[key] || locales.en.strings[key] || key;
  }

  function setMeta(localeData) {
    document.documentElement.lang = currentLocale;
    document.title = localeData.metaTitle || locales.en.metaTitle;

    const description = document.querySelector('meta[name="description"]');
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');

    if (description) {
      description.setAttribute("content", localeData.metaDescription || locales.en.metaDescription);
    }

    if (ogTitle) {
      ogTitle.setAttribute("content", localeData.metaTitle || locales.en.metaTitle);
    }

    if (ogDescription) {
      ogDescription.setAttribute("content", localeData.metaDescription || locales.en.metaDescription);
    }
  }

  function renderList(element, items) {
    element.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      element.appendChild(li);
    });
  }

  function applyLocale(preference = "auto", shouldStore = true) {
    currentPreference = preference;
    currentLocale = preference === "auto" ? detectLocale() : preference;

    if (!supportedLocales.includes(currentLocale)) {
      currentLocale = "en";
    }

    const localeData = getLocaleData();
    setMeta(localeData);

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      element.textContent = t(element.dataset.i18n);
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      element.setAttribute("placeholder", t(element.dataset.i18nPlaceholder));
    });

    document.querySelectorAll("[data-i18n-list]").forEach((element) => {
      const key = element.dataset.i18nList;
      renderList(element, localeData.lists[key] || locales.en.lists[key] || []);
    });

    const languageSelect = document.querySelector("#languageSelect");
    if (languageSelect) {
      languageSelect.value = preference;
    }

    if (shouldStore) {
      storePreference(preference);
    }

    updatePlanner(false);

    if (window.ScrollTrigger) {
      window.ScrollTrigger.refresh();
    }
  }

  function getPlannerData() {
    return getLocaleData().planner || locales.en.planner;
  }

  function animatePlannerResult() {
    if (!animationsReady || !window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    window.gsap.fromTo(
      "#fitTitle, #fitList li",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.38, stagger: 0.045, ease: "power2.out" }
    );
  }

  function updatePlanner(shouldAnimate = true) {
    const projectType = document.querySelector("#projectType");
    const budgetRange = document.querySelector("#budgetRange");
    const budgetLabel = document.querySelector("#budgetLabel");
    const priorityType = document.querySelector("#priorityType");
    const fitTitle = document.querySelector("#fitTitle");
    const fitList = document.querySelector("#fitList");

    if (!projectType || !budgetRange || !budgetLabel || !priorityType || !fitTitle || !fitList) {
      return;
    }

    const planner = getPlannerData();
    const recommendation = planner.recommendations[projectType.value] || planner.recommendations.business;
    const budgetText = planner.budgetLabels[budgetRange.value] || planner.budgetLabels[2];
    const budgetNote = t("budget_scope_note").replace("{budget}", budgetText);
    const notes = [
      ...recommendation.items,
      budgetNote,
      planner.priorities[priorityType.value],
      planner.timelines[selectedTimeline]
    ].filter(Boolean);

    budgetLabel.textContent = budgetText;
    fitTitle.textContent = recommendation.title;
    renderList(fitList, notes);

    if (shouldAnimate) {
      animatePlannerResult();
    }
  }

  function initNavigation() {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");
    const sections = document.querySelectorAll("main section[id]");

    menuToggle?.addEventListener("click", () => {
      const isOpen = navMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      document.body.classList.toggle("menu-open", isOpen);
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("open");
        menuToggle?.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }

  function initPlanner() {
    document.querySelector("#projectType")?.addEventListener("change", () => updatePlanner());
    document.querySelector("#budgetRange")?.addEventListener("input", () => updatePlanner());
    document.querySelector("#priorityType")?.addEventListener("change", () => updatePlanner());

    document.querySelectorAll("[data-timeline]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedTimeline = button.dataset.timeline;

        document.querySelectorAll("[data-timeline]").forEach((item) => {
          item.classList.toggle("active", item === button);
        });

        updatePlanner();
      });
    });
  }

  function initLanguageSelect() {
    const languageSelect = document.querySelector("#languageSelect");
    if (!languageSelect) {
      return;
    }

    languageSelect.addEventListener("change", (event) => {
      applyLocale(event.target.value);
    });
  }

  function initForm() {
    const briefForm = document.querySelector("#briefForm");
    const formStatus = document.querySelector("#formStatus");

    function getFormPayload() {
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

    briefForm?.addEventListener("submit", async (event) => {
      event.preventDefault();

      const payload = getFormPayload();
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

  function initAnimations() {
    if (!window.gsap || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const { gsap } = window;
    animationsReady = true;

    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    gsap
      .timeline({ defaults: { ease: "power3.out", duration: 0.78 } })
      .from(".brand, .nav-menu a, .language-shell", { y: -14, opacity: 0, stagger: 0.045 })
      .from(".hero-line", { y: 34, opacity: 0, stagger: 0.09 }, "-=0.35")
      .from(".hero-proof-item", { y: 24, opacity: 0, stagger: 0.08 }, "-=0.28")
      .from(".strip-track span", { y: 12, opacity: 0, stagger: 0.035 }, "-=0.32");

    if (window.ScrollTrigger) {
      gsap.utils.toArray("[data-animate]").forEach((element) => {
        gsap.from(element, {
          y: 34,
          opacity: 0,
          duration: 0.72,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 84%",
            once: true
          }
        });
      });

      gsap.to(".hero", {
        backgroundPosition: "center 44%",
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    }

    document.querySelectorAll(".service-card, .audience-grid article").forEach((card) => {
      card.addEventListener("pointerenter", () => {
        gsap.to(card, { y: -6, duration: 0.22, ease: "power2.out" });
      });

      card.addEventListener("pointerleave", () => {
        gsap.to(card, { y: 0, duration: 0.22, ease: "power2.out" });
      });
    });
  }

  function initApp() {
    initNavigation();
    initPlanner();
    initLanguageSelect();
    initForm();
    applyLocale(readStoredPreference(), false);
    initAnimations();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initApp);
  } else {
    initApp();
  }
})();
