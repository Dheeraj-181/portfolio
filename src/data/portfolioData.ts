import { 
  SkillCategory, 
  SkillItem, 
  ProjectItem, 
  TimelineItem, 
  CertificationItem, 
  ActivityItem 
} from '../types';

export const PERSONAL_INFO = {
  fullName: "KALVAPALLE KRISHNA DHEERAJ REDDY",
  displayName: "Dheeraj Reddy",
  roles: [
    "Computer Science Engineer",
    "Full-Stack Developer",
    "AI/ML Enthusiast",
    "SaaS Builder"
  ],
  subtitle: "Computer Science Engineer • Full-Stack Developer • AI/ML Enthusiast • SaaS Builder",
  heroDescription: "I build intelligent, scalable and user-focused software products by combining modern web technologies, cloud infrastructure and AI.",
  badgeStatus: "Open to opportunities & collaborations",
  location: "Rayachoty, Andhra Pradesh, India",
  institution: "Sri Sai Institute of Technology and Science (SSITS)",
  graduationYear: "2028",
  contact: {
    email: "dheerajreddy181@gmail.com",
    phone: "+91 8555080042",
    github: "https://github.com/Dheeraj-181",
    linkedin: "https://www.linkedin.com/in/krishna-dheeraj-reddy-5b054a3a7",
  }
};

export const ABOUT_DATA = {
  intro: "I am KALVAPALLE KRISHNA DHEERAJ REDDY, a Computer Science and Engineering student at Sri Sai Institute of Technology and Science, Rayachoty.",
  focus: "I am interested in software engineering, full-stack development, artificial intelligence, cloud technologies and product development.",
  philosophy: "I enjoy transforming ideas into functional software products and experimenting with modern technologies.",
  experience: "I have worked on academic projects, SaaS concepts, AI-powered systems and developer-focused applications.",
  pillars: [
    {
      number: "01",
      title: "Developer",
      desc: "Architecting modular frontend interfaces and robust backend systems with modern TypeScript, React, and cloud backends.",
      icon: "Code2",
      accent: "cyan",
    },
    {
      number: "02",
      title: "Problem Solver",
      desc: "Tackling algorithmic challenges, data structures, and edge-case handling with methodical engineering and clean logic.",
      icon: "Cpu",
      accent: "blue",
    },
    {
      number: "03",
      title: "SaaS Builder",
      desc: "Creating full-cycle software products like Aryanetix that solve real institutional and administrative workflows.",
      icon: "Layers",
      accent: "violet",
    },
    {
      number: "04",
      title: "AI/ML Explorer",
      desc: "Experimenting with computer vision pipelines, ONNX models, vector embeddings, and real-time edge inference.",
      icon: "Sparkles",
      accent: "indigo",
    },
  ]
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  'ALL',
  'PROGRAMMING',
  'WEB DEVELOPMENT',
  'SOFTWARE ENGINEERING',
  'AI / ML',
  'TOOLS',
  'MOBILE'
];

export const SKILLS_DATA: SkillItem[] = [
  // Programming (C and Java removed per request)
  { name: 'Python', category: 'PROGRAMMING', tag: 'Core / AI', description: 'Scripting, numerical computing, machine learning pipelines' },
  { name: 'JavaScript', category: 'PROGRAMMING', tag: 'Web / ES6+', description: 'Modern asynchronous programming, DOM APIs, event handling' },
  { name: 'SQL', category: 'PROGRAMMING', tag: 'Relational DB', description: 'Queries, schema design, relational data structures' },

  // Web Development
  { name: 'HTML5', category: 'WEB DEVELOPMENT', tag: 'Markup', description: 'Semantic markup, accessibility, modern web standards' },
  { name: 'JavaScript', category: 'WEB DEVELOPMENT', tag: 'Interactive', description: 'Client-side reactivity and browser environment integration' },
  { name: 'React.js', category: 'WEB DEVELOPMENT', tag: 'Frontend', description: 'Component composition, custom hooks, state management' },
  { name: 'Firebase', category: 'WEB DEVELOPMENT', tag: 'BaaS', description: 'Real-time database, Authentication, serverless functions' },
  { name: 'Cloud Firestore', category: 'WEB DEVELOPMENT', tag: 'NoSQL', description: 'Document-oriented scalable cloud database rules & indexes' },

  // Software Engineering (OOP removed per request)
  { name: 'Data Structures', category: 'SOFTWARE ENGINEERING', tag: 'Algorithms', description: 'Arrays, linked lists, trees, graphs, sorting & searching' },
  { name: 'Git', category: 'SOFTWARE ENGINEERING', tag: 'Version Control', description: 'Branching strategies, commit workflows, merge conflict resolution' },
  { name: 'REST APIs', category: 'SOFTWARE ENGINEERING', tag: 'Networking', description: 'HTTP verbs, JSON payloads, endpoint routing, API integration' },
  { name: 'Serverless Architecture', category: 'SOFTWARE ENGINEERING', tag: 'Cloud', description: 'Event-driven functions, managed microservices, auto-scaling' },

  // AI / ML
  { name: 'TensorFlow', category: 'AI / ML', tag: 'Deep Learning', description: 'Neural network training, model architectures, model export' },
  { name: 'PyTorch', category: 'AI / ML', tag: 'Deep Learning', description: 'Dynamic computation graphs, model experimentation' },
  { name: 'Scikit-learn', category: 'AI / ML', tag: 'Machine Learning', description: 'Classification, regression, clustering, model evaluation' },
  { name: 'NumPy', category: 'AI / ML', tag: 'Math / Arrays', description: 'Multi-dimensional arrays, linear algebra, vector operations' },
  { name: 'Pandas', category: 'AI / ML', tag: 'Dataframes', description: 'Data wrangling, cleaning, exploratory data analysis' },
  { name: 'Computer Vision', category: 'AI / ML', tag: 'Vision', description: 'Image filtering, spatial transformations, feature extraction' },
  { name: 'Face Recognition', category: 'AI / ML', tag: 'Biometrics', description: 'Deep face embeddings, facial landmark detection, cosine metric' },
  { name: 'ONNX Runtime', category: 'AI / ML', tag: 'Inference Engine', description: 'Optimized cross-platform edge inference acceleration' },

  // Tools (CapCut and DaVinci Resolve removed per request)
  { name: 'Tableau', category: 'TOOLS', tag: 'BI & Analytics', description: 'Interactive dashboard creation and data visualization' },
  { name: 'Power BI', category: 'TOOLS', tag: 'Business Intel', description: 'Data modeling, DAX fundamentals, executive reporting' },
  { name: 'MS Office', category: 'TOOLS', tag: 'Productivity', description: 'Technical documentation, presentations, spreadsheets' },

  // Mobile
  { name: 'Flutter', category: 'MOBILE', tag: 'Cross-Platform', description: 'Single codebase Android & iOS UI engineering with Dart' },
  { name: 'Firebase Mobile SDK', category: 'MOBILE', tag: 'Cloud Sync', description: 'Offline persistence, real-time push events, mobile auth' },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'aryanetix',
    title: 'Aryanetix',
    subtitle: 'Smart Institutional SaaS Platform',
    category: ['All', 'SaaS', 'AI/ML', 'Web', 'Mobile'],
    featured: true,
    description: 'Aryanetix is an end-to-end smart institutional management platform designed to connect administrators, principals, teachers and students through a unified ecosystem.',
    liveDemoUrl: 'https://aryanetix.dev887654321.workers.dev',
    features: [
      'Face recognition attendance with live verification pipeline',
      'Voice attendance capability for automated hands-free logging',
      'Integrated Learning Management System (LMS) access',
      'Dedicated role-based dashboards: SuperAdmin, Principal, Teacher, Student',
      'Cloud Firestore real-time data synchronization & Firebase Auth',
      'Serverless micro-architecture eliminating dedicated server overhead',
      'Advanced attendance analytics & institutional compliance metrics',
      'Cross-platform Flutter mobile application with offline-first support',
      'High-contrast institutional Accessibility Mode'
    ],
    architecture: [
      'React Web Dashboard (Administrative control & live analytics)',
      'Flutter Mobile Application (Field attendance & student tracking)',
      'Firebase Cloud Infrastructure (Firestore, Cloud Functions, Security Rules)'
    ],
    techTags: [
      'React.js', 'Flutter', 'Firebase', 'Cloud Firestore', 'ArcFace',
      'ONNX Runtime', 'FAISS', 'MediaPipe', 'Python', 'Serverless'
    ],
    metrics: [
      { label: 'Embedding Dimension', val: '512-D' },
      { label: 'Role Dashboards', val: '4 Dedicated' },
      { label: 'Vector Index', val: 'FAISS' },
      { label: 'Data Encryption', val: 'AES-256-GCM' },
    ],
  },
  {
    id: 'exammap',
    title: 'ExamMap',
    subtitle: 'University Focused Study Planner',
    category: ['All', 'Web', 'SaaS'],
    featured: false,
    description: 'An intelligent academic planning platform designed specifically for university students to track syllabus completion, attendance margins, backlogs, and customized revision roadmaps.',
    features: [
      'Curriculum & syllabus milestone tracking per semester',
      'Attendance margin calculator with minimum requirement threshold alerts',
      'Backlog remediation scheduler and subject priority queuing',
      'Automated personalized study timelines adapted to exam schedules',
      'Targeted revision interval planners and topic checklists'
    ],
    architecture: [
      'React.js responsive web client',
      'Firebase Firestore persistent student database',
      'Client-side schedule optimization algorithms'
    ],
    techTags: ['React.js', 'Firebase', 'Cloud Firestore', 'JavaScript', 'Tailwind CSS'],
    metrics: [
      { label: 'Core Modules', val: '5 Modules' },
      { label: 'Planning Mode', val: 'Personalized' }
    ],
  },
  {
    id: 'flight-booking',
    title: 'Flight Ticket Booking System',
    subtitle: 'Database-Backed Reservation Engine',
    category: ['All', 'Web'],
    featured: false,
    description: 'A flight ticket booking application featuring dynamic flight search, seat allocation, passenger manifest storage, and database-backed booking transaction management.',
    features: [
      'Real-time flight schedule and seat availability querying',
      'Passenger information handling and itinerary generation',
      'Firestore-backed reservation storage with atomic write protection',
      'Ticket cancellation and booking history retrieval'
    ],
    architecture: [
      'Modular Web Frontend',
      'Firebase Cloud Database with strict validation rules',
      'Real-time transactional updates'
    ],
    techTags: ['Firebase', 'Cloud Firestore', 'JavaScript', 'HTML5', 'CSS3'],
    metrics: [
      { label: 'Database', val: 'Cloud Firestore' },
      { label: 'State Sync', val: 'Real-Time' }
    ],
  },
  {
    id: 'ebook-store',
    title: 'eBook Store',
    subtitle: 'Digital Reading & Commerce Platform',
    category: ['All', 'Web'],
    featured: false,
    description: 'A modern e-commerce storefront for browsing, previewing, and purchasing digital publications with cart workflows, subscription management, and responsive UI.',
    features: [
      'Multi-category digital book discovery and excerpt previews',
      'Dynamic shopping cart with persistent checkout state',
      'Tiered subscription plan selection and customer UI',
      'Simulated payment gateway integration and order confirmation',
      'Adaptive layouts optimized across mobile, tablet, and desktop'
    ],
    architecture: [
      'Component-based web application',
      'Client-side cart state management',
      'Secure mock payment processing interfaces'
    ],
    techTags: ['JavaScript', 'HTML5', 'CSS3', 'Responsive UI', 'E-Commerce'],
    metrics: [
      { label: 'Experience', val: 'Mobile-First' },
      { label: 'Features', val: 'Cart & Subscriptions' }
    ],
  }
];

export const ARYANETIX_ENGINE_SPECS = {
  version: "Face Recognition Engine V2",
  pipelineSteps: [
    { step: 1, name: "Camera Capture", desc: "Raw video feed input stream acquisition with frame rate stabilization." },
    { step: 2, name: "Face Detection", desc: "MediaPipe real-time multi-face bounding box localization." },
    { step: 3, name: "Face Alignment", desc: "5-point facial landmark transformation normalizing roll, pitch, and yaw." },
    { step: 4, name: "ArcFace Model", desc: "Deep convolutional backbone extracting discriminative facial representations." },
    { step: 5, name: "512D Embedding", desc: "Dense 512-dimensional vector projection representing unique facial features." },
    { step: 6, name: "FAISS Vector Search", desc: "High-performance nearest neighbor index searching against registered vectors." },
    { step: 7, name: "Cosine Similarity", desc: "Threshold-based distance metric calculation with dynamic confidence scoring." },
    { step: 8, name: "Identity Verification", desc: "Multi-factor verification including anti-spoofing and device integrity." },
    { step: 9, name: "Attendance Logged", desc: "Cryptographically verified timestamp recorded into Cloud Firestore." },
  ],
  securityFeatures: [
    { title: "Anti-Spoofing Protocols", desc: "Liveness and texture checks to prevent photo/screen replay exploits." },
    { title: "AES-256-GCM Encryption", desc: "All facial embeddings stored at rest encrypted with authenticated Galois/Counter Mode." },
    { title: "Device Integrity Checks", desc: "Hardware signature validation preventing unauthorized attendance clients." },
    { title: "Edge Inference via ONNX", desc: "Pre-compiled ONNX models executed locally for low-latency offline resilience." },
  ]
};

export const ARYANETIX_ARCHITECTURE_NODES = [
  {
    id: 'super-admin',
    name: 'SUPER ADMIN',
    role: 'Root Governance',
    desc: 'Controls institutional licensing, multi-campus governance, audit logs, and global policy configurations.',
    color: '#00f2fe',
    tier: 1
  },
  {
    id: 'web-dashboard',
    name: 'WEB DASHBOARD',
    role: 'React Client Portal',
    desc: 'High-density administrative analytics, batch student imports, attendance exports, and configuration views.',
    color: '#3b82f6',
    tier: 2
  },
  {
    id: 'principal',
    name: 'PRINCIPAL',
    role: 'Executive Oversight',
    desc: 'Department-level reporting, anomaly detection in attendance patterns, teacher approvals, and LMS oversight.',
    color: '#8b5cf6',
    tier: 3
  },
  {
    id: 'teachers',
    name: 'TEACHERS',
    role: 'Classroom Operations',
    desc: 'Session attendance triggers, manual override exceptions, LMS curriculum uploads, and student notices.',
    color: '#a855f7',
    tier: 3
  },
  {
    id: 'firebase',
    name: 'FIREBASE & CLOUD FIRESTORE',
    role: 'Serverless Real-Time Core',
    desc: 'Handles Firestore documents, Firebase Authentication, Cloud Functions triggers, and sub-second data propagation.',
    color: '#f59e0b',
    tier: 4
  },
  {
    id: 'mobile-app',
    name: 'MOBILE APP',
    role: 'Flutter Multiplatform',
    desc: 'Biometric capture on field devices, offline buffer sync, push alerts, and direct teacher/student interfaces.',
    color: '#10b981',
    tier: 5
  },
  {
    id: 'students',
    name: 'STUDENTS',
    role: 'End Beneficiary',
    desc: 'Personal attendance records, timetable access, LMS study modules, and automated alert notifications.',
    color: '#06b6d4',
    tier: 6
  }
];

export const EDUCATION_DATA: TimelineItem[] = [
  {
    degree: "B.Tech – Computer Science and Engineering",
    institution: "Sri Sai Institute of Technology and Science (SSITS)",
    location: "Rayachoty, Andhra Pradesh",
    period: "2024 – 2028 (Expected)",
    status: "Currently Pursuing",
    highlights: [
      "Specializing in Software Systems, Artificial Intelligence, and Cloud Architecture.",
      "Developing institutional SaaS concepts and algorithmic problem-solving projects.",
      "Active participant in technical development and hackathons."
    ]
  },
  {
    degree: "Intermediate (12th Standard)",
    institution: "Sri Chaitanya Junior College",
    location: "Vijayawada, Andhra Pradesh",
    period: "Completed 2024",
    score: "87.8%",
    status: "Graduated",
    highlights: [
      "Board of Intermediate Education, Andhra Pradesh.",
      "Intensive focus on Mathematics, Physics, and Chemistry.",
      "Strong analytical and logical reasoning foundation."
    ]
  },
  {
    degree: "Secondary School Certificate (10th Standard)",
    institution: "Vignan High School",
    location: "Rayachoty, Andhra Pradesh",
    period: "Completed 2022",
    score: "88.1%",
    status: "Graduated",
    highlights: [
      "Board of Secondary Education, Andhra Pradesh (AP SSC Board).",
      "Academic distinction with 88.1% aggregate.",
      "Early interest in computer technologies and science."
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    title: "Quantum Computing Certificate",
    issuer: "Specialized Technical Credential",
    description: "Covered foundational quantum computing principles, qubits, superposition, entanglement, quantum gates, and introductory quantum circuit formulations.",
    skills: ["Quantum Principles", "Qubits & Gates", "Quantum Circuitry", "Future Compute Paradigms"]
  },
  {
    title: "IBM CSR Box Certificate",
    issuer: "IBM SkillsBuild / CSR Box",
    description: "Comprehensive curriculum spanning emerging enterprise technologies, foundational IT architectures, cloud concepts, and technical career readiness.",
    skills: ["Cloud Foundations", "Emerging Tech", "Professional Readiness", "Problem Solving"]
  }
];

export const ACTIVITIES_DATA: ActivityItem[] = [
  {
    category: "Hackathons & Coding",
    title: "Hackathon Participation & Sprint Prototyping",
    description: "Designing and developing prototype applications under time constraints, focusing on practical usability and rapid product iteration.",
    tags: ["Hackathons", "Rapid Prototyping", "Full-Stack"]
  },
  {
    category: "SaaS Product Development",
    title: "Institutional SaaS Engineering",
    description: "Architecting end-to-end multi-role systems (Aryanetix) to solve operational bottlenecks for educational institutions.",
    tags: ["SaaS Architecture", "Multi-Tenant", "Enterprise Roles"]
  },
  {
    category: "AI/ML Experimentation",
    title: "Computer Vision & Edge Biometrics",
    description: "Building reproducible pipelines experimenting with ArcFace embeddings, MediaPipe facial landmarks, ONNX runtimes, and vector similarity.",
    tags: ["Computer Vision", "ONNX", "Vector Embeddings"]
  },
  {
    category: "Institutional Technology",
    title: "Academic & Campus Solutions",
    description: "Building student-centric tools such as ExamMap to address real challenges around academic planning, attendance minimums, and backlog tracking.",
    tags: ["Campus Tech", "Student Success", "Firebase"]
  },
  {
    category: "Software Development",
    title: "Full-Stack Web & Mobile Engineering",
    description: "Experimenting with modern web frameworks (React, Vite, Tailwind) and cross-platform mobile frameworks (Flutter) backed by serverless cloud infrastructures.",
    tags: ["React.js", "Flutter", "Serverless"]
  }
];

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Aryanetix Engine', href: '#aryanetix-engine' },
  { label: 'Projects', href: '#projects' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Resume', href: '#resume' },
  { label: 'Contact', href: '#contact' },
];
