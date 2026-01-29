// public/translations.js
// Diccionario i18n global para runtime en cliente (sin imports/exports).
// Copia aquí el objeto completo desde src/i18n/translations.js

window.translations = {
    en: {
        // =========================
        // General / shared
        // =========================
        "brand.short": "ASCH",
        "brand.long": "Álvaro Silva Chávez",
        "cta.viewProjects": "View projects",
        "cta.aboutMe": "About me",
        "cta.downloadCV": "Download CV",
        "cta.viewCVOnline": "View CV online",
        "cta.readMore": "Read more",
        "cta.contactMe": "Contact me",
        "cta.send": "Send",
        "cta.open": "Open",
        "cta.copy": "Copy",
        "cta.cancel": "Cancel",
        "status.new": "New",
        "status.inProgress": "In progress",
        "status.done": "Done",
        "status.soon": "Coming soon",
        "status.archived": "Archived",

        // =========================
        // Navigation / Header / Footer
        // =========================
        "nav.home": "Home",
        "nav.about": "About",
        "nav.projects": "Projects",
        "nav.contact": "Contact",

        "header.menu": "Menu",
        "header.skipToContent": "Skip to content",

        "footer.rights": "All rights reserved.",
        "footer.contact": "Contact",
        "footer.follow": "Follow",
        "footer.github": "GitHub",
        "footer.linkedin": "LinkedIn",
        "footer.madeWith": "Built with Astro + Tailwind.",
        "footer.themeToggle": "Toggle theme",
        "footer.langToggle": "Change language",

        // =========================
        // Home (estructura principal que ya tenías)
        // =========================
        "home.hero.kicker": "CFGS DAM · Portfolio",
        "home.hero.title": "Álvaro Silva Chávez",
        "home.hero.subtitle": "DAM Student · Future Cybersecurity Specialist",
        "home.hero.lead":
            "Academic portfolio documenting my progress in software development, systems, and security best practices.",
        "home.hero.actions.viewProjects": "View projects",
        "home.hero.actions.aboutMe": "About me",

        "home.cards.1.title": "New",
        "home.cards.1.desc":
            "DAM student building projects and documentation.",
        "home.cards.2.title": "Focus",
        "home.cards.2.desc":
            "Applied security best practices, hardening, and clean deployments.",
        "home.cards.3.title": "Goal",
        "home.cards.3.desc":
            "Public hub + connected lab (QNAP) to showcase work.",

        "home.faqs.title": "FAQs",
        "home.faqs.desc":
            "Quick answers about my profile and how I build projects.",
        "home.faqs.q1": "What am I focusing on right now?",
        "home.faqs.a1":
            "Learning secure development, setting up a home lab (QNAP), and documenting everything clearly.",
        "home.faqs.q2": "How do I approach security in projects?",
        "home.faqs.a2":
            "Threat modeling, least privilege, secure defaults, secrets hygiene, and reproducible deployments.",
        "home.faqs.q3": "What tools or stack do I use?",
        "home.faqs.a3":
            "Astro + Tailwind for the portfolio; scripting, containers, and practical security tooling for labs.",
        "home.faqs.q4": "Can I see your CV or contact you?",
        "home.faqs.a4":
            "Yes — download the PDF or view the online version, and use the contact page to reach me.",

        // =========================
        // About (alineado con about.astro actual)
        // =========================
        "about.title": "About",
        "about.kicker": "Background · Skills · Interests",
        // Mantén 'subtitle' para tu about.astro (antes tenías 'intro' y 'kicker')
        "about.subtitle":
            "Background, skills, interests and goals as a DAM student with a focus on cybersecurity, secure development and clear documentation.",

        // CTAs CV
        "about.cv.download": "Download CV (PDF)",
        "about.cv.view": "View CV online",
        "about.cv.note": "My CV will be periodically updated as I complete new labs and projects.",

        // Background / Story
        "about.section.background.title": "Background",
        "about.section.background.p1":
            "I am a CFGS DAM student at Vedruna Vall Terrassa. I like building clean, understandable solutions and documenting what I learn along the way.",
        "about.section.background.p2":
            "My current focus is applying secure-by-default practices to academic projects and setting up a small homelab (QNAP) to explore services and deployments safely.",

        // Education / Certs / Experience
        "about.section.education.title": "Education",
        "about.section.education.item1": "CFGS DAM · Vedruna Vall Terrassa",

        "about.section.certs.title": "Certifications",
        "about.section.certs.item1": "Introductory security labs and foundations (self-study)",
        "about.section.certs.item2": "Practical Linux & networking labs (ongoing)",

        "about.section.experience.title": "Experience",
        "about.section.experience.item1": "Academic projects with emphasis on secure practices",
        "about.section.experience.item2": "Homelab (QNAP) setup: services, access control, backups",

        // Interests & Goals
        "about.section.interests.title": "Interests, goals & motivation",
        "about.section.interests.item1": "Secure coding, hardening and reproducible deployments",
        "about.section.interests.item2": "Clear documentation and knowledge sharing",
        "about.section.interests.item3": "Building a portfolio that shows real progress and practical value",

        // Skills (títulos de grupos)
        "about.skills.title": "Skills",
        "about.skills.group1": "Programming & Front-end",
        "about.skills.group2": "Tools & Systems",
        "about.skills.group3": "Security & Core practices",
        "about.skills.group4": "Soft skills",

        // =========================
        // Projects
        // =========================
        "projects.title": "Projects",
        "projects.kicker": "Selected work · Labs · Demos",
        "projects.intro":
            "A curated list of academic projects and labs. Each card is sourced from projects.json and translated via keys.",
        "projects.tags": "Tags",
        "projects.links": "Links",
        "projects.empty": "No projects to show yet.",
        "projects.card.status": "Status",

        // Status (para projects.json -> statusKey)
        "projects.status.new": "New",
        "projects.status.inProgress": "In progress",
        "projects.status.done": "Done",
        "projects.status.soon": "Coming soon",
        "projects.status.archived": "Archived",

        // =========================
        // Contact
        // =========================
        "contact.title": "Contact",
        "contact.kicker": "Let’s talk",
        "contact.intro":
            "This is a demo form. You can also reach out via email.",
        "contact.form.name": "Name",
        "contact.form.email": "Email",
        "contact.form.message": "Message",
        "contact.form.submit": "Send",
        "contact.altEmail": "Or contact via email:",
        // Placeholders (para data-i18n-attr)
        "contact.placeholder.name": "Your name",
        "contact.placeholder.email": "your@email.com",
        "contact.placeholder.message": "How can I help?",
        // ARIA / titles (para data-i18n-attr)
        "aria.toggleTheme": "Toggle theme",
        "aria.toggleLanguage": "Change language",
        "aria.openMenu": "Open menu",
        "aria.closeMenu": "Close menu",

        // =========================
        // Aliases para index.astro (claves cortas actuales)
        // =========================
        // Hero
        "hero.kicker": "CFGS DAM · Portfolio",
        "hero.role": "DAM Student · Future Cybersecurity Specialist",
        "hero.summary":
            "Academic portfolio documenting my progress in software development, systems, and security best practices.",
        "hero.cta.projects": "View projects",
        "hero.cta.about": "About me",

        // Cards
        "card.now.title": "New",
        "card.now.body": "DAM student building projects and documentation.",
        "card.focus.title": "Focus",
        "card.focus.body": "Applied security: best practices, hardening, and clean deployments.",
        "card.goal.title": "Goal",
        "card.goal.body": "Public hub + controlled lab (NAS) to showcase work.",

        // FAQs
        "faq.title": "FAQs",
        "faq.subtitle":
            "Quick answers about my profile and how I build projects.",
        "faq.q1.q": "What am I focusing on right now?",
        "faq.q1.a":
            "I’m focusing on core development skills and security fundamentals…",
        "faq.q2.q": "Why cybersecurity?",
        "faq.q2.a":
            "I like the combination of systems, networking and secure software…",
        "faq.q3.q": "What kind of projects will you publish?",
        "faq.q3.a":
            "Academic projects, tooling, labs and writeups (without sensitive details)…",
        "faq.q4.q": "Do you self-host anything?",
        "faq.q4.a":
            "I’m building a hybrid setup: static front-end + NAS lab for services…",
        "faq.q5.q": "How can someone contact you?",
        "faq.q5.a": "Use the contact page or email — the form is demo-only for security.",


        // EN — CV
        "cv.title": "CV",
        "cv.summary": "Background, skills, interests and goals as a DAM student with a focus on cybersecurity, secure development and clear documentation.",
        "cv.buttons.download": "Download CV (PDF)",
        "cv.buttons.back": "About",
        "cv.buttons.openNew": "Open in new tab",
        "cv.note": "The PDF is the canonical source and will be updated as new labs and projects are completed.",
        "cv.viewer.fallback": "If the PDF does not load, download it using the button above or open it in a new tab.",

        "contact.form.title": "Send a message",
        "contact.form.notice": "This form does not send data. Use the email button below.",
        "contact.form.subject": "Subject",
        "contact.form.send": "Send",
        "contact.form.mailto": "Contact via email",
        "contact.placeholder.subject": "Subject",

        "contact.side.title": "Other ways to reach me",
        "contact.side.p1": "You can also contact me directly via email or through my professional social profiles:",
        "contact.side.emailLabel": "Email:",
        "contact.side.phoneLabel": "Phone:",
        "contact.side.locationLabel": "Location:",
        "contact.side.socialTitle": "Social",
        "contact.side.mapTitle": "Map",
        "contact.side.cta": "Email me",
        "contact.side.openProfile": "Open profile",

        "contact.social.github": "GitHub",
        "contact.social.linkedin": "LinkedIn",
        "contact.social.email": "Email",

        "projects.preview.open": "Open preview",
        "proj.qnapMinecraft.title": "Minecraft Server on QNAP NAS",
        "proj.qnapMinecraft.desc": "Setup and hosting of a Minecraft server on a QNAP NAS: containerized service, access control, backups and clear documentation.",
        "proj.qnapMinecraft.alt": "Screenshot of Minecraft server hosted on a QNAP NAS",
        "proj.packetTracer.title": "Network Design & Simulation (Packet Tracer)",
        "proj.packetTracer.desc": "Layered design, VLANs, addressing plan and routing basics simulated in Packet Tracer.",
        "proj.packetTracer.alt": "Topology diagram screenshot from Cisco Packet Tracer",
        "proj.portfolio.title": "Portfolio Website",
        "proj.portfolio.desc": "Bilingual portfolio built with Astro + Tailwind, dark mode by default, custom i18n and clean components.",
        "proj.portfolio.alt": "Portfolio homepage cover image",
        "hero.photo.alt": "Professional headshot of Álvaro Silva"
    },
    es: {
        // =========================
        // General / compartido
        // =========================
        "brand.short": "ASCH",
        "brand.long": "Álvaro Silva Chávez",
        "cta.viewProjects": "Ver proyectos",
        "cta.aboutMe": "Sobre mí",
        "cta.downloadCV": "Descargar CV",
        "cta.viewCVOnline": "Ver CV online",
        "cta.readMore": "Leer más",
        "cta.contactMe": "Contactar",
        "cta.send": "Enviar",
        "cta.open": "Abrir",
        "cta.copy": "Copiar",
        "cta.cancel": "Cancelar",
        "status.new": "Nuevo",
        "status.inProgress": "En progreso",
        "status.done": "Completado",
        "status.soon": "Próximamente",
        "status.archived": "Archivado",

        // =========================
        // Navegación / Header / Footer
        // =========================
        "nav.home": "Inicio",
        "nav.about": "Sobre mí",
        "nav.projects": "Proyectos",
        "nav.contact": "Contacto",

        "header.menu": "Menú",
        "header.skipToContent": "Saltar al contenido",

        "footer.rights": "Todos los derechos reservados.",
        "footer.contact": "Contacto",
        "footer.follow": "Sígueme",
        "footer.github": "GitHub",
        "footer.linkedin": "LinkedIn",
        "footer.madeWith": "Construido con Astro + Tailwind.",
        "footer.themeToggle": "Cambiar tema",
        "footer.langToggle": "Cambiar idioma",

        // =========================
        // Home
        // =========================
        "home.hero.kicker": "CFGS DAM · Portfolio",
        "home.hero.title": "Álvaro Silva Chávez",
        "home.hero.subtitle": "Estudiante DAM · Futuro especialista en Ciberseguridad",
        "home.hero.lead":
            "Portfolio académico documentando mi progreso en desarrollo de software, sistemas y buenas prácticas de seguridad.",
        "home.hero.actions.viewProjects": "Ver proyectos",
        "home.hero.actions.aboutMe": "Sobre mí",

        "home.cards.1.title": "Nuevo",
        "home.cards.1.desc":
            "Estudiante DAM construyendo proyectos y documentación.",
        "home.cards.2.title": "Enfoque",
        "home.cards.2.desc":
            "Buenas prácticas de seguridad aplicadas, hardening y despliegues limpios.",
        "home.cards.3.title": "Objetivo",
        "home.cards.3.desc":
            "Hub público + laboratorio conectado (QNAP) para mostrar el trabajo.",

        "home.faqs.title": "FAQs",
        "home.faqs.desc":
            "Respuestas rápidas sobre mi perfil y cómo construyo proyectos.",
        "home.faqs.q1": "¿En qué me estoy enfocando ahora?",
        "home.faqs.a1":
            "Aprender desarrollo seguro, montar un homelab (QNAP) y documentarlo todo de forma clara.",
        "home.faqs.q2": "¿Cómo aplico seguridad en los proyectos?",
        "home.faqs.a2":
            "Modelado de amenazas, mínimo privilegio, configuraciones seguras por defecto, higiene de secretos y despliegues reproducibles.",
        "home.faqs.q3": "¿Qué herramientas o stack uso?",
        "home.faqs.a3":
            "Astro + Tailwind para el portfolio; scripting, contenedores y herramientas prácticas de seguridad para los labs.",
        "home.faqs.q4": "¿Puedo ver tu CV o contactarte?",
        "home.faqs.a4":
            "Sí — descarga el PDF o consulta la versión online, y usa la página de contacto para escribirme.",

        // =========================
        // About
        // =========================
        "about.title": "Sobre mí",
        "about.kicker": "Trayectoria · Skills · Intereses",
        "about.subtitle":
            "Trayectoria, skills, intereses y objetivos como estudiante de DAM con foco en ciberseguridad, desarrollo seguro y documentación clara.",

        // CTAs CV
        "about.cv.download": "Descargar CV (PDF)",
        "about.cv.view": "Ver CV online",
        "about.cv.note": "Actualizaré el CV periódicamente conforme complete nuevos labs y proyectos.",

        // Background / Story
        "about.section.background.title": "Trayectoria",
        "about.section.background.p1":
            "Soy estudiante de CFGS DAM en Vedruna Vall Terrassa. Me gusta construir soluciones limpias y entendibles, y documentar lo que aprendo.",
        "about.section.background.p2":
            "Mi enfoque actual es aplicar prácticas secure-by-default en proyectos académicos y montar un homelab (QNAP) para explorar servicios y despliegues de forma segura.",

        // Educación / Certificaciones / Experiencia
        "about.section.education.title": "Formación",
        "about.section.education.item1": "CFGS DAM · Vedruna Vall Terrassa",

        "about.section.certs.title": "Certificaciones",
        "about.section.certs.item1":
            "Laboratorios introductorios y fundamentos de seguridad (autoformación)",
        "about.section.certs.item2":
            "Laboratorios prácticos de Linux y redes (en progreso)",

        "about.section.experience.title": "Experiencia",
        "about.section.experience.item1":
            "Proyectos académicos con énfasis en prácticas de seguridad",
        "about.section.experience.item2":
            "Homelab (QNAP): servicios, control de accesos y copias",

        // Intereses y objetivos
        "about.section.interests.title": "Intereses, objetivos y motivación",
        "about.section.interests.item1": "Código seguro, hardening y despliegues reproducibles",
        "about.section.interests.item2": "Documentación clara y compartición de conocimiento",
        "about.section.interests.item3": "Construir un portfolio que muestre progreso real y valor práctico",

        // Skills (títulos de grupos)
        "about.skills.title": "Skills",
        "about.skills.group1": "Programación y Front-end",
        "about.skills.group2": "Herramientas y Sistemas",
        "about.skills.group3": "Seguridad y prácticas clave",
        "about.skills.group4": "Competencias Blandas",

        // =========================
        // Projects
        // =========================
        "projects.title": "Proyectos",
        "projects.kicker": "Trabajo seleccionado · Labs · Demos",
        "projects.intro":
            "Lista curada de proyectos académicos y labs. Cada tarjeta viene de projects.json y se traduce por claves.",
        "projects.tags": "Etiquetas",
        "projects.links": "Enlaces",
        "projects.empty": "Aún no hay proyectos para mostrar.",
        "projects.card.status": "Estado",

        // Estados (para projects.json -> statusKey)
        "projects.status.new": "Nuevo",
        "projects.status.inProgress": "En progreso",
        "projects.status.done": "Completado",
        "projects.status.soon": "Próximamente",
        "projects.status.archived": "Archivado",

        // =========================
        // Contacto
        // =========================
        "contact.title": "Contacto",
        "contact.kicker": "Hablemos",
        "contact.intro":
            "Este es un formulario de demostración. También puedes escribir por email.",
        "contact.form.name": "Nombre",
        "contact.form.email": "Correo",
        "contact.form.message": "Mensaje",
        "contact.form.submit": "Enviar",
        "contact.altEmail": "O contáctame por email:",
        // Placeholders (para data-i18n-attr)
        "contact.placeholder.name": "Tu nombre",
        "contact.placeholder.email": "tu@email.com",
        "contact.placeholder.message": "¿Cómo puedo ayudar?",
        // ARIA / títulos (para data-i18n-attr)
        "aria.toggleTheme": "Cambiar tema",
        "aria.toggleLanguage": "Cambiar idioma",
        "aria.openMenu": "Abrir menú",
        "aria.closeMenu": "Cerrar menú",

        // =========================
        // Aliases para index.astro (claves cortas actuales)
        // =========================
        // Hero
        "hero.kicker": "CFGS DAM · Portfolio",
        "hero.role": "Estudiante DAM · Futuro especialista en Ciberseguridad",
        "hero.summary":
            "Portfolio académico documentando mi progreso en desarrollo de software, sistemas y buenas prácticas de seguridad.",
        "hero.cta.projects": "Ver proyectos",
        "hero.cta.about": "Sobre mí",

        // Cards
        "card.now.title": "Nuevo",
        "card.now.body": "Estudiante DAM construyendo proyectos y documentación.",
        "card.focus.title": "Enfoque",
        "card.focus.body": "Seguridad aplicada: buenas prácticas, hardening y despliegues limpios.",
        "card.goal.title": "Objetivo",
        "card.goal.body": "Hub público + laboratorio controlado (NAS) para mostrar el trabajo.",

        // FAQs
        "faq.title": "FAQs",
        "faq.subtitle":
            "Respuestas rápidas sobre mi perfil y cómo construyo proyectos.",
        "faq.q1.q": "¿En qué me estoy enfocando ahora?",
        "faq.q1.a":
            "Estoy centrado en habilidades de desarrollo base y fundamentos de seguridad…",
        "faq.q2.q": "¿Por qué ciberseguridad?",
        "faq.q2.a":
            "Me gusta la combinación de sistemas, redes y software seguro…",
        "faq.q3.q": "¿Qué tipo de proyectos publicarás?",
        "faq.q3.a":
            "Proyectos académicos, tooling, labs y writeups (sin detalles sensibles)…",
        "faq.q4.q": "¿Autoalojas algún servicio?",
        "faq.q4.a":
            "Estoy montando un setup híbrido: front estático + NAS lab para servicios…",
        "faq.q5.q": "¿Cómo pueden contactarte?",
        "faq.q5.a":
            "Usa la página de contacto o email — el formulario es solo demo por seguridad.",

        // ES — CV
        "cv.title": "CV",
        "cv.summary": "Trayectoria, skills, intereses y objetivos como estudiante de DAM con foco en ciberseguridad, desarrollo seguro y documentación clara.",
        "cv.buttons.download": "Descargar CV (PDF)",
        "cv.buttons.back": "Sobre mí",
        "cv.buttons.openNew": "Abrir en nueva pestaña",
        "cv.note": "El PDF es la fuente canónica y se actualizará conforme complete nuevos labs y proyectos.",
        "cv.viewer.fallback": "Si el PDF no se carga, descárgalo con el botón de arriba o ábrelo en una pestaña nueva.",
        "contact.form.title": "Enviar un mensaje",
        "contact.form.notice": "Este formulario no envía datos. Usa el botón de email de abajo.",
        "contact.form.subject": "Asunto",
        "contact.form.send": "Enviar",
        "contact.form.mailto": "Contactar por email",
        "contact.placeholder.subject": "Asunto",

        "contact.side.title": "Otras formas de contacto",
        "contact.side.p1": "También puedes escribirme por email o mediante mis perfiles profesionales:",
        "contact.side.emailLabel": "Correo:",
        "contact.side.phoneLabel": "Teléfono:",
        "contact.side.locationLabel": "Ubicación:",
        "contact.side.socialTitle": "Redes",
        "contact.side.mapTitle": "Mapa",
        "contact.side.cta": "Escríbeme",
        "contact.side.openProfile": "Abrir perfil",

        "contact.social.github": "GitHub",
        "contact.social.linkedin": "LinkedIn",
        "contact.social.email": "Correo",
        "projects.preview.open": "Abrir vista previa",
        "proj.qnapMinecraft.title": "Servidor de Minecraft en NAS QNAP",
        "proj.qnapMinecraft.desc": "Montaje y hosting de un servidor de Minecraft en un NAS QNAP: servicio en contenedor, control de accesos, copias y documentación clara.",
        "proj.qnapMinecraft.alt": "Captura del servidor de Minecraft alojado en un NAS QNAP",
        "proj.packetTracer.title": "Diseño y simulación de red (Packet Tracer)",
        "proj.packetTracer.desc": "Diseño por capas, VLANs, plan de direccionamiento y conceptos básicos de routing simulados en Packet Tracer.",
        "proj.packetTracer.alt": "Captura del diagrama de topología en Cisco Packet Tracer",
        "proj.portfolio.title": "Página web de portfolio",
        "proj.portfolio.desc": "Portfolio bilingüe construido con Astro + Tailwind, modo oscuro por defecto, i18n propio y componentes limpios.",
        "proj.portfolio.alt": "Imagen de portada de la home del portfolio",
        "hero.photo.alt": "Foto profesional de Álvaro Silva"
    },
};