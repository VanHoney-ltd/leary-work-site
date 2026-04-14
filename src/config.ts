// =============================================================================
// Site Configuration - Multi-Business Portfolio
// =============================================================================

// -- Site-wide settings -------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
}

export const siteConfig: SiteConfig = {
  title: "Portfolio | Old Standard · Artful Inquiry · NovaSignal · GhostSec",
  description: "Master carpenter, dark artist, business developer, and software engineer. A portfolio of craftsmanship, creativity, and code.",
  language: "en",
};

// -- Hero Section -------------------------------------------------------------
export interface HeroNavItem {
  label: string;
  sectionId: string;
  icon: "disc" | "play" | "calendar" | "music" | "briefcase" | "code";
}

export interface HeroConfig {
  backgroundImage: string;
  brandName: string;
  decodeText: string;
  decodeChars: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryTarget: string;
  ctaSecondary: string;
  ctaSecondaryTarget: string;
  cornerLabel: string;
  cornerDetail: string;
  navItems: HeroNavItem[];
  logoImage: string;
}

export const heroConfig: HeroConfig = {
  backgroundImage: "/hero-bg.jpg",
  brandName: "Van Honey Ltd",
  decodeText: "TARRIN PEARSON_LEARY",
  decodeChars: "█▓▒░█▓▒░",
  subtitle: "Carpenter. Artist. Business Developer. Software Enthusiast. Building brands, crafting art, and designing the future.",
  ctaPrimary: "EXPLORE WORK",
  ctaPrimaryTarget: "oldstandard",
  ctaSecondary: "VIEW ART",
  ctaSecondaryTarget: "artful-inquiry",
  cornerLabel: "ESTABLISHED",
  cornerDetail: "1985",
  navItems: [
    { label: "Construction", sectionId: "oldstandard", icon: "disc" },
    { label: "Art", sectionId: "artful-inquiry", icon: "play" },
    { label: "NovaSignal", sectionId: "novasignal", icon: "briefcase" },
    { label: "GhostSec", sectionId: "ghostsec", icon: "code" },
    { label: "Contact", sectionId: "contact", icon: "music" },
  ],
  logoImage: "/logo.png",
};

// -- Old Standard Construction Section ----------------------------------------
export interface ConstructionProject {
  id: number;
  image: string;
  title: string;
  category: string;
  location: string;
}

export interface OldStandardConfig {
  sectionLabel: string;
  sectionTitle: string;
  businessName: string;
  description: string;
  projects: ConstructionProject[];
  stats: {
    yearsExperience: string;
    projectsCompleted: string;
    statesWorked: string;
  };
  ctaText: string;
  ctaButtonText: string;
}

export const oldStandardConfig: OldStandardConfig = {
  sectionLabel: "CONSTRUCTION",
  sectionTitle: "OLD STANDARD",
  businessName: "Old Standard Construction",
  description: "26 years of master craftsmanship in residential remodeling, historical renovations, and custom finish carpentry. From Brownstones in SoHo to high-rise apartments in Denver.",
  projects: [
    { id: 1, image: "/construction-1.jpg", title: "Custom Kitchen", category: "Residential", location: "Upstate NY" },
    { id: 2, image: "/construction-2.jpg", title: "Brownstone Restoration", category: "Historical", location: "SoHo, NYC" },
    { id: 3, image: "/construction-3.jpg", title: "Luxury Bathroom", category: "Residential", location: "Westchester" },
    { id: 4, image: "/construction-4.jpg", title: "Custom Deck", category: "Outdoor", location: "Putnam County" },
    { id: 5, image: "/construction-5.jpg", title: "Historic Millwork", category: "Restoration", location: "New Paltz" },
    { id: 6, image: "/construction-6.jpg", title: "High-Rise Renovation", category: "Commercial", location: "Denver, CO" },
  ],
  stats: {
    yearsExperience: "26+",
    projectsCompleted: "1000+",
    statesWorked: "39",
  },
  ctaText: "Ready to build something extraordinary?",
  ctaButtonText: "GET A QUOTE",
};

// -- Artful Inquiry Section (Video + Artwork Cube) ----------------------------
export interface ArtfulInquiryConfig {
  sectionLabel: string;
  sectionTitle: string;
  artistName: string;
  description: string;
  videoThumbnail: string;
  videoSrc: string;
  cubeTextures: string[];
  artworks: {
    id: number;
    title: string;
    year: string;
    image: string;
  }[];
  ctaText: string;
  ctaButtonText: string;
  galleryLink: string;
}

export const artfulInquiryConfig: ArtfulInquiryConfig = {
  sectionLabel: "DARK ART",
  sectionTitle: "ARTFUL INQUIRY",
  artistName: "Artful Inquiry",
  description: "All original ink-on-paper masterpieces. Dark, twisted, dripping expressions of the human condition. Each piece tells a story of mortality, myth, and the beauty found in darkness.",
  videoThumbnail: "/artwork-video-thumbnail.jpg",
  videoSrc: "/grok-video-0a64f1e0-fcff-49fc-9abc-4b770c2f8b97(2).mp4",
  cubeTextures: [
    "/art1.jpg",
    "/art2.jpg",
    "/art3.jpg",
    "/art4.jpg",
    "/art5.jpg",
    "/art6.jpg",
  ],
  artworks: [
    { id: 1, title: "Eternal Bloom", year: "2024", image: "/art1.jpg" },
    { id: 2, title: "The Embrace", year: "2023", image: "/art2.jpg" },
    { id: 3, title: "Gorgon's Gaze", year: "2023", image: "/art3.jpg" },
    { id: 4, title: "Rooted Scream", year: "2023", image: "/art4.jpg" },
    { id: 5, title: "The Abyss", year: "2024", image: "/art5.jpg" },
    { id: 6, title: "Mind's Eye", year: "2024", image: "/art6.jpg" },
  ],
  ctaText: "Experience the darkness",
  ctaButtonText: "WATCH VIDEO",
  galleryLink: "/gallery",
};

// -- NovaSignal Section -------------------------------------------------------
export interface NovaSignalConfig {
  sectionLabel: string;
  sectionTitle: string;
  businessName: string;
  description: string;
  services: string[];
  logoImage: string;
  featuredProject: {
    name: string;
    description: string;
    image: string;
  };
  videos: string[];
  stats: {
    businessesLaunched: string;
    successRate: string;
  };
  ctaText: string;
  ctaButtonText: string;
}

export const novasignalConfig: NovaSignalConfig = {
  sectionLabel: "BUSINESS DEVELOPMENT",
  sectionTitle: "NOVASIGNAL",
  businessName: "NovaSignal",
  description: "Transforming rough ideas into thriving brands. From crayon sketches to complete apparel lines, I take businesses from concept to reality with logo design, website development, marketing plans, and strategic consulting.",
  services: [
    "Brand Identity & Logo Design",
    "Website Development",
    "Marketing Strategy",
    "Business Consulting",
    "Celebrity Seeding",
    "Manufacturer Introductions",
  ],
  logoImage: "/novasignal-logo.jpg",
  featuredProject: {
    name: "Glover Legacy",
    description: "Transformed rough crayon sketches into a full apparel company practically overnight. Complete outfit lineup for all sexes and ages, celebrity seeding, manufacturer introductions, and structured business plan.",
    image: "/glover-legacy.png",
  },
  videos: [
    "/legacyarchivepink.mp4",
    "/trimcollararchiveteewhite.mp4",
    "/trimcollararchiveteegreen.mp4",
  ],
  stats: {
    businessesLaunched: "15+",
    successRate: "95%",
  },
  ctaText: "Have an idea? Let's build your brand.",
  ctaButtonText: "START YOUR PROJECT",
};

// -- GhostSec Section ---------------------------------------------------------
export interface SoftwareProject {
  id: number;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  features: string[];
  icon: string;
}

export interface GhostSecConfig {
  sectionLabel: string;
  sectionTitle: string;
  businessName: string;
  description: string;
  logoImage: string;
  projects: SoftwareProject[];
  ctaText: string;
  ctaButtonText: string;
}

export const ghostsecConfig: GhostSecConfig = {
  sectionLabel: "SOFTWARE DEVELOPMENT",
  sectionTitle: "GHOSTSEC",
  businessName: "GhostSec",
  description: "Building secure, powerful software solutions. From iOS forensics platforms to API security vaults, I create tools that protect data and empower users.",
  logoImage: "/ghostsec-logo.jpg",
  projects: [
    {
      id: 1,
      name: "STYGiON Data Systems",
      tagline: "Powered by the NEMESIS ENGINE",
      description: "RUST-powered iOS data collection platform and forensics toolkit. AI-powered core ensures security, reproducibility, and tamper-proof evidence handling.",
      tech: ["RUST", "iOS", "AI Core", "Forensics"],
      features: [
        "Secure Data Collection",
        "Evidence Tamper Protection",
        "Reproducibility Standards",
        "AI-Powered Analysis",
      ],
      icon: "shield",
    },
    {
      id: 2,
      name: "KeyShield",
      tagline: "API & Secrets Manager",
      description: "Enterprise-grade API and secrets vault built in GOLANG. Securely manage, rotate, and monitor access to sensitive credentials across your infrastructure.",
      tech: ["GOLANG", "API Security", "Vault", "Enterprise"],
      features: [
        "Secure Secret Storage",
        "Automated Key Rotation",
        "Access Monitoring",
        "Multi-Environment Support",
      ],
      icon: "key",
    },
  ],
  ctaText: "Need secure software solutions?",
  ctaButtonText: "LET'S BUILD",
};

// -- About Section ------------------------------------------------------------
export interface TimelineEvent {
  id: number;
  date: string;
  location: string;
  title: string;
  description: string;
  image: string;
}

export interface AboutConfig {
  sectionLabel: string;
  sectionTitle: string;
  profileImage: string;
  logoImage: string;
  birthDate: string;
  bioIntro: string;
  bioFull: string;
  timelineTitle: string;
  timelineEvents: TimelineEvent[];
  stats: {
    yearsExperience: string;
    artworksCreated: string;
    locationsWorked: string;
    projectsCompleted: string;
  };
  ctaText: string;
  ctaButtonText: string;
}

export const aboutConfig: AboutConfig = {
  sectionLabel: "ABOUT",
  sectionTitle: "THE JOURNEY",
  profileImage: "/profile.png",
  logoImage: "/logo.png",
  birthDate: "January 3rd, 1985",
  bioIntro: "Born January 3rd, 1985, I've been in the construction industry since I was 14 years old. What started as a young apprentice's curiosity evolved into a lifelong mastery of multiple crafts.",
  bioFull: `My career has been defined by excellence across multiple disciplines. I built my reputation in Upstate New York construction, working across Orange, Ulster, Putnam, Rockland, and Westchester counties.

From renovating beautiful Brownstone Homes in SoHo, Manhattan to historically accurate reproduction work in New Paltz, I've left my mark on some of New York's most iconic structures. My expertise has been trusted by museums throughout New York City and Boston, Massachusetts.

The winter of 2018 brought change—I moved to Florida and transitioned from self-employment to shop foreman for a company converting Sprinter vans into Class B motor coaches. By summer 2018, I was in Denver, Colorado, back in construction and self-employed once again.

In Colorado, I performed renovations on historical sites and high-rise apartments, specializing in property management projects. But Colorado became something more—it was where I began to hone my drawing skills.

The summer of 2021 brought me to Des Moines, Iowa. Here, I perfected my artistic vision and produced over 300 stunning dark, twisted, dripping pieces of original ink-on-paper masterpieces. I continued my construction business as a finish carpenter, reaching the height of my skill set.

While in Des Moines, I branched out with my creativity and love of technology, teaching myself computer skills and founding NovaSignal for business development and GhostSec for software development. This journey of continuous learning defines who I am today.`,
  timelineTitle: "CAREER PATH",
  timelineEvents: [
    {
      id: 1,
      date: "1999",
      location: "Upstate New York",
      title: "Started in Construction",
      description: "Began working at age 14, learning the foundations of the trade",
      image: "/construction-1.jpg",
    },
    {
      id: 2,
      date: "2000s",
      location: "NYC & Boston",
      title: "Historical Renovations",
      description: "Brownstones in SoHo, museum work in NYC and Boston",
      image: "/construction-2.jpg",
    },
    {
      id: 3,
      date: "2018",
      location: "Florida",
      title: "Shop Foreman",
      description: "Led van conversion team for Class B motor coaches",
      image: "/construction-3.jpg",
    },
    {
      id: 4,
      date: "2018-2021",
      location: "Denver, Colorado",
      title: "High-Rise Specialist",
      description: "Historical sites and apartment renovations",
      image: "/construction-4.jpg",
    },
    {
      id: 5,
      date: "2021-Present",
      location: "Des Moines, Iowa",
      title: "Artist, Developer & Entrepreneur",
      description: "300+ ink masterpieces, NovaSignal, GhostSec",
      image: "/art1.jpg",
    },
  ],
  stats: {
    yearsExperience: "26+",
    artworksCreated: "300+",
    locationsWorked: "6",
    projectsCompleted: "1000+",
  },
  ctaText: "Ready to bring your vision to life?",
  ctaButtonText: "GET IN TOUCH",
};

// -- Footer Section -----------------------------------------------------------
export interface FooterConfig {
  portraitImage: string;
  portraitAlt: string;
  heroTitle: string;
  heroSubtitle: string;
  artistLabel: string;
  artistName: string;
  artistSubtitle: string;
  brandName: string;
  brandDescription: string;
  quickLinksTitle: string;
  quickLinks: string[];
  contactTitle: string;
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
  addressLabel: string;
  address: string;
  newsletterTitle: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  subscribeAlertMessage: string;
  copyrightText: string;
  bottomLinks: string[];
  socialLinks: {
    icon: "instagram" | "twitter" | "youtube" | "music";
    label: string;
    href: string;
  }[];
  galleryImages: { id: number; src: string; }[];
  logoImage: string;
}

export const footerConfig: FooterConfig = {
  portraitImage: "/profile.png",
  portraitAlt: "Portfolio Portrait",
  heroTitle: "PORTFOLIO",
  heroSubtitle: "Construction · Art · Business · Code",
  artistLabel: "CREATOR",
  artistName: "MULTI-DISCIPLINARY",
  artistSubtitle: "Old Standard · Artful Inquiry · NovaSignal · GhostSec",
  brandName: "PORTFOLIO",
  brandDescription: "26 years of craftsmanship spanning construction, dark art, business development, and software engineering. From Brownstones in SoHo to secure data systems, every project tells a story of dedication and mastery.",
  quickLinksTitle: "QUICK LINKS",
  quickLinks: ["Construction", "Art", "NovaSignal", "GhostSec", "Contact"],
  contactTitle: "GET IN TOUCH",
  emailLabel: "Email",
  email: "contact@portfolio.com",
  phoneLabel: "Phone",
  phone: "+1 (555) 666-0199",
  addressLabel: "Location",
  address: "Des Moines, Iowa",
  newsletterTitle: "STAY CONNECTED",
  newsletterDescription: "Subscribe for project updates, new artwork, and business insights.",
  newsletterButtonText: "SUBSCRIBE",
  subscribeAlertMessage: "Thanks for subscribing! You'll hear from us soon.",
  copyrightText: "© 2025 Portfolio. All rights reserved.",
  bottomLinks: ["Privacy Policy", "Terms of Service"],
  socialLinks: [
    { icon: "instagram", label: "Instagram", href: "https://instagram.com" },
    { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
    { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
  ],
  galleryImages: [
    { id: 1, src: "/art1.jpg" },
    { id: 2, src: "/art2.jpg" },
    { id: 3, src: "/art3.jpg" },
    { id: 4, src: "/art4.jpg" },
    { id: 5, src: "/art5.jpg" },
    { id: 6, src: "/art6.jpg" },
  ],
  logoImage: "/logo.png",
};
