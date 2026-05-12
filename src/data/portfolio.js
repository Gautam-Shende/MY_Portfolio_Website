export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
]

export const profile = {
  name: "Gautam Shende",
  role: "MERN Stack Developer",
  tagline: "I build fast, thoughtful web applications with React, Node.js, Web3 tooling, and a healthy obsession for clean interfaces.",
  location: "Nagpur, Maharashtra, India",
  email: "gautamshende144@gmail.com",
  phone: "+91 8459251480",
  resume: "src/assets/gautamshende.pdf",
  avatar: "src/assets/Profile.avif",
  github: "https://github.com/Gautam-Shende",
  linkedin: "https://www.linkedin.com/in/gautam-shende-262803290/",
  instagram: "https://www.instagram.com/gautamshende_/",
  leetcode: "https://leetcode.com/u/GautamShende/"
}

export const stats = [
  { value: "10+", label: "Projects Built" },
  { value: "20+", label: "DSA Problems" },
  { value: "40+", label: "Students Taught" },
  { value: "7.54", label: "Current CGPA" },
]

export const skills = [
  {
    title: "Languages",
    items: ["JavaScript", "Python", "Java(basics)", "PHP(basics)"],
  },
  {
    title: "Frontend",
    items: ["React", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "JWT", "OAuth", "Socket.IO"],
  },
  {
    title: "Data",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas"],
  },
  {
    title: "Web3",
    items: ["IPFS", "Pinata", "Web3.Storage", "Wallet Adapters"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Postman", "Linux", "VS Code", "Vite"],
  },
]



export const projects = [
  {
    title: "Visitor Management System",
    category: "MERN Stack Application",
    description:
      "A smart visitor management system with visitor approvals, authentication, dashboard analytics, and secure entry tracking workflows.",
    image: "src/assets/VisitorManagment.png",
    accent: "from-sky-500 to-cyan-400",
    tech: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],
    github: "https://github.com/Gautam-Shende/MERN_Visitor_Management_.git",
    demo: "https://mern-visitor-management-frontend.vercel.app/login",
    highlights: [
      "Authentication system",
      "Admin dashboard",
      "Visitor tracking",
    ],
  },

  {
    title: "Digital E Gram Panchayat",
    category: "Government Service Platform",
    description:
      "A digital platform for rural governance services including certificates, announcements, grievance management, and citizen access.",
    image: "src/assets/digital_egrampanchayat.jpg",
    accent: "from-emerald-500 to-lime-400",
    tech: [
      "React",
      "Firebase",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Gautam-Shende/e-grampanchayat",
    demo: "https://e-grampanchayat-1de48.firebaseapp.com/",
    highlights: [
      "Government services",
      "Responsive interface",
      "Citizen workflows",
    ],
  },

  {
    title: "SuperMall Web App",
    category: "E-Commerce Platform",
    description:
      "A modern multi-vendor shopping platform where merchants can manage products and customers can explore, order, and manage carts seamlessly.",
    image: "/src/assets/supermall.png",
    accent: "from-indigo-500 to-purple-500",
    tech: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Firebase",
      "Framer Motion",
    ],
    github: "https://github.com/Gautam-Shende/super-mall-application",
    demo: "https://super-mall-ad4ef.firebaseapp.com/",
    highlights: [
      "Merchant dashboard",
      "Cart functionality",
      "Responsive UI",
    ],
  },

  {
    title: "3D Developer Portfolio",
    category: "Frontend Portfolio Experience",
    description:
      "An interactive 3D portfolio with smooth animations, modern UI, dark mode, and immersive developer showcase experience.",
    image: "src/assets/3d_portfolio.jpg",
    accent: "from-violet-500 to-fuchsia-500",
    tech: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Tailwind CSS",
      "Framer Motion",
    ],
    github: "https://github.com/Gautam-Shende/MY-PortFolio-Web.git",
    demo: "https://my-portfolio-web-33855.firebaseapp.com",
    highlights: [
      "3D animations",
      "Interactive experience",
      "Modern responsive UI",
    ],
  },
]

export const experiences = [
  {
    role: "Frontend Development Intern",
    company: "Unified Mentors pvt. ltd",
    period: "Apr 2025 - Jul 2025",
    location: "Hariyana, India, Remote",
    points: [
      "Built 3+ responsive admin dashboards and reduced task execution time by 40%.",
      "Improved dashboard SEO, workflow clarity, and browser compatibility.",
      "Collaborated across 8+ agile sprints with API-first delivery practices.",
    ],
  },
  {
  role: "MERN Stack Development Trainee",
  company: "Tude Dude Online Learning Platform",
  period: "Dec 2025 - Jul 2026",
  location: "India, Remote",
  points: [
    "Completed hands-on training in MERN Stack development including MongoDB, Express.js, React.js, and Node.js.",
    "Built responsive full stack web applications with authentication, REST APIs, and dynamic dashboards.",
    "Improved frontend performance, responsive design, and cross-browser compatibility through real-world projects.",
  ],
},
 
]

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Kamla Nehru Mahavidyalaya, Nagpur",
    period: "2024 - 2028",
    detail:
      "Pursuing BCA with strong interest in MERN Stack Development, Backend Engineering, and Modern Web Technologies. Currently learning Full Stack Development, DBMS, Operating Systems, and Data Structures.",
  },
  {
    degree: "MERN Full Stack Development",
    school: "TudeDude Online Learning Platform..",
    period: "2025 - 2026",
    detail:
       "Completed practical training in MERN Stack Development with hands-on experience in MongoDB, Express.js, React.js, and Node.js. Built responsive full stack applications, REST APIs, authentication systems, and modern user interfaces using industry-standard development practices."
    }
]
