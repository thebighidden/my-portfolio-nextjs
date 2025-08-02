import { createContext, useContext, useState } from "react";

type Language = "en" | "fr" | "ar";

type LanguageProviderContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: (key: string) => string;
};

const LanguageProviderContext = createContext<LanguageProviderContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    contact: "Contact",
    
    // Hero Section
    badge: "Software Engineer",
    heroTitle1: "Soufiane Bighidene",
    heroTitle2: "Full Stack Developer",
    heroDescription: "Passionate about Front-end Development with 3+ years of experience in React.js, JavaScript, and modern web technologies. Dedicated to creating seamless user experiences and delivering high-performance solutions.",
    downloadCV: "Download CV",
    getInTouch: "Get In Touch",
    
    // Projects
    featuredProjects: "Featured Projects",
    projectsDescription: "A collection of projects that showcase my expertise in modern web development",
    viewAllProjects: "View All Projects",
    liveDemo: "Live Demo",
    code: "Code",
    
    // Skills
    skillsTitle: "Skills & Technologies",
    skillsDescription: "A comprehensive toolkit for building modern web applications",
    proficiencyLevels: "Proficiency Levels",
    frontendDevelopment: "Frontend Development",
    backendDevelopment: "Backend Development",
    uiuxDesign: "UI/UX Design",
    cloudDevops: "Cloud & DevOps",
    
    // About
    aboutTitle: "About Me",
    aboutDescription: "Passionate about creating digital experiences that make a difference",
    experience: "Experience",
    projectsCompleted: "Projects Completed",
    companiesWorked: "Companies Worked",
    languages: "Languages",
    downloadCVButton: "Download CV",
    letsChat: "Let's Chat",
    educationTimeline: "Education Timeline",
    educationDescription: "My academic journey in technology and software development",
    
    // Contact
    contactTitle: "Get In Touch",
    contactDescription: "Ready to start your next project? Let's create something amazing together",
    letsConnect: "Let's Connect",
    connectDescription: "I'm always excited to discuss new opportunities and interesting projects. Feel free to reach out through any of these channels.",
    email: "Email",
    phone: "Phone",
    location: "Location",
    followMe: "Follow Me",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    subject: "Subject",
    message: "Message",
    messagePlaceholder: "Tell me about your project and how I can help...",
    sendMessage: "Send Message",
    sending: "Sending...",
    
    // Footer
    footerDescription: "Software Engineer passionate about Front-end Development with expertise in React.js and modern web technologies.",
    quickLinks: "Quick Links",
    services: "Services",
    webDevelopment: "Web Development",
    uiuxDesignService: "UI/UX Design",
    mobileApps: "Mobile Apps",
    consulting: "Consulting",
    allRightsReserved: "All rights reserved. Built with ❤️ using React & Tailwind CSS.",
  },
  fr: {
    // Navigation
    home: "Accueil",
    projects: "Projets",
    skills: "Compétences",
    about: "À propos",
    contact: "Contact",
    
    // Hero Section
    badge: "Ingénieur Logiciel",
    heroTitle1: "Soufiane Bighidene",
    heroTitle2: "Développeur Full Stack",
    heroDescription: "Passionné par le développement Front-end avec plus de 3 ans d'expérience en React.js, JavaScript et technologies web modernes. Dédié à créer des expériences utilisateur fluides et des solutions haute performance.",
    downloadCV: "Télécharger CV",
    getInTouch: "Me Contacter",
    
    // Projects
    featuredProjects: "Projets en Vedette",
    projectsDescription: "Une collection de projets qui démontre mon expertise en développement web moderne",
    viewAllProjects: "Voir Tous les Projets",
    liveDemo: "Démo Live",
    code: "Code",
    
    // Skills
    skillsTitle: "Compétences & Technologies",
    skillsDescription: "Une boîte à outils complète pour créer des applications web modernes",
    proficiencyLevels: "Niveaux de Compétence",
    frontendDevelopment: "Développement Frontend",
    backendDevelopment: "Développement Backend",
    uiuxDesign: "Design UI/UX",
    cloudDevops: "Cloud & DevOps",
    
    // About
    aboutTitle: "À Propos de Moi",
    aboutDescription: "Passionné par la création d'expériences numériques qui font la différence",
    experience: "Expérience",
    projectsCompleted: "Projets Réalisés",
    companiesWorked: "Entreprises",
    languages: "Langues",
    downloadCVButton: "Télécharger CV",
    letsChat: "Discutons",
    educationTimeline: "Parcours Éducatif",
    educationDescription: "Mon parcours académique en technologie et développement logiciel",
    
    // Contact
    contactTitle: "Me Contacter",
    contactDescription: "Prêt à démarrer votre prochain projet ? Créons quelque chose d'extraordinaire ensemble",
    letsConnect: "Connectons-nous",
    connectDescription: "Je suis toujours ravi de discuter de nouvelles opportunités et projets intéressants. N'hésitez pas à me contacter par l'un de ces canaux.",
    email: "Email",
    phone: "Téléphone",
    location: "Localisation",
    followMe: "Me Suivre",
    firstName: "Prénom",
    lastName: "Nom",
    emailAddress: "Adresse Email",
    subject: "Sujet",
    message: "Message",
    messagePlaceholder: "Parlez-moi de votre projet et comment je peux vous aider...",
    sendMessage: "Envoyer Message",
    sending: "Envoi...",
    
    // Footer
    footerDescription: "Ingénieur Logiciel passionné par le développement Front-end avec expertise en React.js et technologies web modernes.",
    quickLinks: "Liens Rapides",
    services: "Services",
    webDevelopment: "Développement Web",
    uiuxDesignService: "Design UI/UX",
    mobileApps: "Applications Mobiles",
    consulting: "Conseil",
    allRightsReserved: "Tous droits réservés. Créé avec ❤️ utilisant React & Tailwind CSS.",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    projects: "المشاريع",
    skills: "المهارات",
    about: "حول",
    contact: "اتصل",
    
    // Hero Section
    badge: "مهندس برمجيات",
    heroTitle1: "سفيان بيغيدن",
    heroTitle2: "مطور ويب شامل",
    heroDescription: "شغوف بتطوير الواجهة الأمامية مع أكثر من 3 سنوات من الخبرة في React.js و JavaScript وتقنيات الويب الحديثة. مكرس لإنشاء تجارب مستخدم سلسة وحلول عالية الأداء.",
    downloadCV: "تحميل السيرة الذاتية",
    getInTouch: "تواصل معي",
    
    // Projects
    featuredProjects: "المشاريع المميزة",
    projectsDescription: "مجموعة من المشاريع التي تعرض خبرتي في تطوير الويب الحديث",
    viewAllProjects: "عرض جميع المشاريع",
    liveDemo: "عرض مباشر",
    code: "الكود",
    
    // Skills
    skillsTitle: "المهارات والتقنيات",
    skillsDescription: "مجموعة أدوات شاملة لبناء تطبيقات الويب الحديثة",
    proficiencyLevels: "مستويات الكفاءة",
    frontendDevelopment: "تطوير الواجهة الأمامية",
    backendDevelopment: "تطوير الخلفية",
    uiuxDesign: "تصميم واجهة المستخدم",
    cloudDevops: "السحابة والعمليات",
    
    // About
    aboutTitle: "حولي",
    aboutDescription: "شغوف بإنشاء تجارب رقمية تحدث فرقاً",
    experience: "الخبرة",
    projectsCompleted: "المشاريع المكتملة",
    companiesWorked: "الشركات التي عملت معها",
    languages: "اللغات",
    downloadCVButton: "تحميل السيرة الذاتية",
    letsChat: "دعنا نتحدث",
    educationTimeline: "المسار التعليمي",
    educationDescription: "رحلتي الأكاديمية في التكنولوجيا وتطوير البرمجيات",
    
    // Contact
    contactTitle: "تواصل معي",
    contactDescription: "مستعد لبدء مشروعك القادم؟ دعنا نبتكر شيئاً مذهلاً معاً",
    letsConnect: "دعنا نتواصل",
    connectDescription: "أنا متحمس دائماً لمناقشة الفرص الجديدة والمشاريع المثيرة للاهتمام. لا تتردد في التواصل من خلال أي من هذه القنوات.",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    location: "الموقع",
    followMe: "تابعني",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    emailAddress: "عنوان البريد الإلكتروني",
    subject: "الموضوع",
    message: "الرسالة",
    messagePlaceholder: "أخبرني عن مشروعك وكيف يمكنني مساعدتك...",
    sendMessage: "إرسال الرسالة",
    sending: "جاري الإرسال...",
    
    // Footer
    footerDescription: "مهندس برمجيات شغوف بتطوير الواجهة الأمامية مع خبرة في React.js وتقنيات الويب الحديثة.",
    quickLinks: "روابط سريعة",
    services: "الخدمات",
    webDevelopment: "تطوير الويب",
    uiuxDesignService: "تصميم واجهة المستخدم",
    mobileApps: "تطبيقات الجوال",
    consulting: "الاستشارات",
    allRightsReserved: "جميع الحقوق محفوظة. تم البناء بـ ❤️ باستخدام React & Tailwind CSS.",
  },
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("language") as Language) || "en";
    }
    return "en";
  });

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "fr" : language === "fr" ? "ar" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const value = {
    language,
    setLanguage: (lang: Language) => {
      setLanguage(lang);
      localStorage.setItem("language", lang);
    },
    toggleLanguage,
    t,
  };

  return (
    <LanguageProviderContext.Provider value={value}>
      {children}
    </LanguageProviderContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageProviderContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};