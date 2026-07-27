export interface Project {
  slug: string;
  name: string;
  url: string;
  category: string;
  summary: string;
  problem: string;
  approach: string;
  outcome: string;
  techStack: string[];
  isFeatured: boolean;
}

export const projects: Project[] = [
  {
    slug: "aether-studio",
    name: "Aether Studio",
    url: "https://boutique-two-silk.vercel.app/",
    category: "Booking & Portal",
    summary: "A premium boutique creative and technology agency website showcasing experimental web builds.",
    problem: "Creative agencies need a digital presence that proves their layout design capabilities and technical mastery in real-time, not just in bullet points.",
    approach: "Structured a high-contrast agency page highlighting past case studies, core capability descriptions, and mouse-displacement glow vectors.",
    outcome: "Established a highly credible, taste-driven studio hub that validates engineering precision and aesthetic command to prospective enterprise clients.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "GSAP"],
    isFeatured: true
  },
  {
    slug: "aura-audio",
    name: "AURA Audio",
    url: "https://aura-audio-1krb.vercel.app/",
    category: "Waitlist & Landing",
    summary: "A premium, Scandinavian-inspired wireless audio product showcase focusing on multi-directional sound engineering.",
    problem: "Hardware landing pages often fail to represent the spatial quality and material craftsmanship of high-end consumer electronics through flat design.",
    approach: "Designed a minimalist visual showcase emphasizing oak and aluminum elements, paired with fluid scroll entrances and clear acoustic specifications grids.",
    outcome: "Delivered an elegant product display page that successfully builds brand positioning, converting visitor curiosity into pre-orders.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: true
  },
  {
    slug: "gym-livid",
    name: "Kinetic Lab",
    url: "https://gym-livid-five.vercel.app/",
    category: "Booking & Portal",
    summary: "A high-intensity boutique fitness training lab showcase utilizing skewed layout grids and dark athletic branding.",
    problem: "Fitness websites often feel generic, utilizing low-contrast templates that fail to capture the intense energy and discipline of an athletic facility.",
    approach: "Engineered a dynamic athletic brand interface featuring bold italics, high-contrast toxic lime highlights, and interactive scheduling grids.",
    outcome: "Created a powerful studio landing experience that drives visitor bookings for free metabolic conditioning and Olympic lifting trial passes.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: true
  },
  {
    slug: "real-estate-catalog",
    name: "Real Estate Catalog",
    url: "https://real-estate-jade-nine.vercel.app/",
    category: "SaaS Catalog",
    summary: "A sleek, responsive real estate search and filter catalog featuring modern grid layouts and interactive property listings.",
    problem: "Real estate browsing often suffers from sluggish performance and cluttered interfaces that overwhelm potential buyers looking for specific property attributes.",
    approach: "Developed a clean, card-based layout featuring client-side filtering, fast search caching, and responsive media optimization for instant page loads.",
    outcome: "Achieved seamless property discovery with intuitive filters, resulting in high user engagement and near-instant load speeds across all screen sizes.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: true
  },
  {
    slug: "sena-academy-lms",
    name: "Sena Academy LMS",
    url: "https://sena-academy-lms-ten.vercel.app/",
    category: "Education & LMS",
    summary: "An interactive, feature-rich Learning Management System detailing educational modules, tracks, and student progression stats.",
    problem: "Online learning platforms often fail to maintain student engagement due to dry interfaces, confusing content hierarchies, and lack of visual progress indicators.",
    approach: "Structured a dashboard layout with visual milestone tracking, clear course categorizations, and smooth navigation animations using Framer Motion.",
    outcome: "Delivered an appealing educational dashboard that visualizes course progression cleanly, encouraging students to stay on track.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: false
  },
  {
    slug: "sena-waitlist",
    name: "Sena Waitlist",
    url: "https://senawaitlist.vercel.app/",
    category: "Waitlist & Landing",
    summary: "A high-conversion minimalist waitlist landing page for Sena Academy, built to drive user acquisitions and email capture.",
    problem: "Waitlist pages often leak conversions when loaded with heavy scripts, unclear CTAs, or visually boring styles that fail to build brand excitement.",
    approach: "Crafted a razor-sharp, dark-themed page focusing on typography, micro-interactions, and a simple one-click email capture form.",
    outcome: "Built anticipation for the academy launch while capturing hundreds of pre-registrations with zero performance friction.",
    techStack: ["React", "Tailwind CSS", "Framer Motion"],
    isFeatured: false
  },
  {
    slug: "acta-waitlist",
    name: "Acta Waitlist",
    url: "https://actawaitlist.vercel.app/",
    category: "Waitlist & Landing",
    summary: "A premium, dark-mode waitlist landing page designed for Acta, utilizing typography and soft ambient glow effects.",
    problem: "A new tech launch needs an immediate visual signal of quality and exclusivity, which generic landing page templates fail to communicate.",
    approach: "Created a Linear-style landing page with glowing border inputs, clean typography, and a staggered GSAP header entrance.",
    outcome: "Established a professional web presence, securing sign-ups with a conversion-optimized form factor.",
    techStack: ["Next.js", "Tailwind CSS", "GSAP", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "smart-attendance-system",
    name: "Smart Attendance System",
    url: "https://smart-attendance-ochre-three.vercel.app/",
    category: "SaaS Dashboard",
    summary: "An automated attendance tracking platform with visual analytics, student logs, and digital registry management.",
    problem: "Manual role calling in classrooms wastes valuable instructional time and is prone to human error or manipulation.",
    approach: "Built a tabular control panel that highlights daily registers, student login statuses, and analytics dashboards.",
    outcome: "Minimized administration overhead by digitalizing attendance inputs and compiling instant CSV/PDF summary sheets.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "Recharts"],
    isFeatured: false
  },
  {
    slug: "guest-portal",
    name: "Guest Portal",
    url: "https://guestportal-kappa.vercel.app/",
    category: "Booking & Portal",
    summary: "An intuitive guest check-in and experience management portal designed to streamline onboarding and hospitality communication.",
    problem: "Traditional hospitality check-in flows rely on physical paperwork or cumbersome email threads, creating friction and delay during guest arrivals.",
    approach: "Designed a mobile-first portal with simple forms, digital check-in flows, and instant verification updates to guide users step-by-step.",
    outcome: "Eliminated check-in delays entirely, creating a self-service entry flow that guests can access easily on their smartphones before arrival.",
    techStack: ["React", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: false
  },
  {
    slug: "ember-and-oak",
    name: "Ember & Oak",
    url: "https://restaurant-pi-lemon.vercel.app/",
    category: "Booking & Portal",
    summary: "A premium, moody visual showcase and scroll-scrubbed interactive landing experience built for a high-end fictional fine-dining restaurant.",
    problem: "Hospitality websites often look generic and fail to communicate the premium craftsmanship, mood, and unhurried pacing of an upscale dining brand.",
    approach: "Crafted a dark, high-contrast serif design system paired with an Apple-style scroll-scrubbed hero using preloaded image sequences rendered on a canvas for stutter-free performance.",
    outcome: "Delivered a luxurious, Michelin-caliber site with simulated reservations, a masonry atmosphere gallery, and smooth scroll animations.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "GSAP"],
    isFeatured: true
  },
  {
    slug: "ksp",
    name: "KSP Student Portal",
    url: "https://ksp-xi-liart.vercel.app/",
    category: "Booking & Portal",
    summary: "A comprehensive web portal designed for KSP student management, scheduling, and database access.",
    problem: "Academic tracking, scheduling, and portal access are often split across separate tools, leading to administrative delays.",
    approach: "Combined calendar schedules, student profiles, and portal links under a single responsive dashboard with tabbed layouts.",
    outcome: "Centralized daily student workflows, providing unified access to academic info and scheduling.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    isFeatured: false
  },
  {
    slug: "wiwik-program-outline",
    name: "Wiwik Program Outline",
    url: "https://wiwik-program-outline.vercel.app/",
    category: "Education & LMS",
    summary: "An educational syllabus tracker and timeline tool mapping course outlines and curriculum objectives.",
    problem: "Course curricula are traditionally distributed as static PDFs, which are difficult to navigate and filter dynamically.",
    approach: "Developed an interactive timeline outline displaying week-by-week tracks, lesson summaries, and resource links.",
    outcome: "Gave students and instructors a transparent roadmap of the curriculum, enhancing preparation and alignment.",
    techStack: ["React", "Tailwind CSS", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "ksp-attendance",
    name: "KSP Attendance Panel",
    url: "https://ksp-attendance.vercel.app/",
    category: "Booking & Portal",
    summary: "A lightweight scanner-style attendance collection dashboard designed for fast mobile check-ins.",
    problem: "Taking classroom attendance on mobile often fails due to unresponsive layouts, slow database roundtrips, and heavy stylesheets.",
    approach: "Optimized a mobile-first scanning and check-in panel that allows teachers to log student presence in one tap.",
    outcome: "Delivered a lightweight system that functions reliably even on slow school networks, speeding up daily logging.",
    techStack: ["Next.js", "Tailwind CSS", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "data-dashboard",
    name: "Data Dashboard",
    url: "https://data-khing-xqvq-ashen.vercel.app/",
    category: "SaaS Dashboard",
    summary: "A comprehensive business intelligence analytics dashboard showing charts, sales records, and interactive data insights.",
    problem: "Visualizing complex transactional statistics and inventory variables in a single screen quickly results in layout clutter and laggy rendering.",
    approach: "Engineered a grid-based dashboard with modular card displays, dynamic charts, and asynchronous status queries.",
    outcome: "Provided administrators with a central control panel that summarizes sales figures and user growth in real-time.",
    techStack: ["React", "Tailwind CSS", "Recharts", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "trade-platform",
    name: "Trade Platform",
    url: "https://trade-full-1.vercel.app/",
    category: "SaaS Dashboard",
    summary: "A financial trading application mockup displaying real-time stock lists, pricing, and chart representations.",
    problem: "Financial applications require high-fidelity rendering of price swings and mock executions without distracting latency.",
    approach: "Structured a high-performance grid layout containing asset list filters, candle-style chart assets, and simulated execution indicators.",
    outcome: "Provided a simulated dashboard showcasing clear visual cues for profit indicators and price margins.",
    techStack: ["Next.js", "Tailwind CSS", "Recharts", "TypeScript"],
    isFeatured: false
  },
  {
    slug: "trades",
    name: "Trades Performance Journal",
    url: "https://trades-htje.vercel.app/",
    category: "SaaS Dashboard",
    summary: "An institutional Forex & Indices performance journal synced directly with MetaTrader 5 (MT5) execution records.",
    problem: "Traders struggle to extract clean analytics and cognitive habits from raw broker execution spreadsheets without manual plotting.",
    approach: "Engineered a professional dashboard displaying key performance metrics (Win Rate, Profit Factor, Net P&L) using custom charts and real-time feed updates.",
    outcome: "Enabled traders to diagnose their strategies and view AI-assisted insights based on actual transaction histories.",
    techStack: ["Next.js", "Tailwind CSS", "Recharts", "TypeScript", "Framer Motion"],
    isFeatured: false
  }
];
