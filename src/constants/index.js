export const CRITICAL_ASSETS = [
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327132/portfolio_projects/dz3yugk13qxxza1xhsa3.png", // grid.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327130/portfolio_projects/rko34uiizzdgag5rhken.jpg", // sky.jpg
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327124/portfolio_projects/yvjc8grnbt2mtmztxghb.png", // particles-bg.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327125/portfolio_projects/rneot917hccnukrgnwjc.png", // planets.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327142/portfolio_projects/k3ikjrwgme9nqfnywfru.png", // coding-pov.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327122/portfolio_projects/naqioteif47haqiiwztc.png", // mountain-3.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327115/portfolio_projects/ftmjcmr7usgc3auakzxn.png", // mountain-2.png
  "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327108/portfolio_projects/nfqi6tjrkz57fszzzv4r.png"  // mountain-1.png
];

export const myProjects = [
  {
    id: 7,
    title: "Artifinity Ai - Where Imagination Meets Intelligence",
    description:
      "A SaaS AI platform built with the MERN stack that empowers users with AI tools for content creation, image generation, and resume review, while integrating a public community showcase.",
    subDescription: [
      "Developed using MongoDB, Express, React, and Node.js with Clerk for secure authentication and billing.",
      "Includes AI tools to write articles, generate blog titles, create images, remove background/objects, and review resumes.",
      "Features a public community section to explore shared user-generated images.",
      "Used Framer Motion and Lenis for smooth animation and scrolling; Tailwind CSS for design consistency.",
    ],
    href: "https://artifinity-ai.vercel.app/",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1754115620/Screenshot_97_fewfgn.png",
    tags: [
      {id: 1, name: "MERN Stack", path: "https://www.rlogical.com/wp-content/uploads/2024/05/mern-stack-development.webp"},
      // { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      // { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      // { id: 3, name: "React", path: "/assets/logos/react.svg" },
      // { id: 4, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 2, name: "Clerk", path: "/assets/logos/clerk.png" },
      { id: 3, name: "Framer Motion", path: "/assets/logos/framer-motion.svg" },
      { id: 4, name: "Lenis", path: "https://lenis.darkroom.engineering/android-chrome-512x512.png" },
    ],
  },
  {
    id: 6,
    title: "Virtual Assistant (MERN Stack)",
    description:
      "A fully functional virtual assistant built using the MERN stack, featuring secure user authentication and deep customization options.",
    subDescription: [
      "Developed using MongoDB, Express, React, and Node.js with JWT-based secure authentication.",
      "Supports personalized dashboard where users can customize commands, appearance, and assistant behavior.",
      "Used React hooks for dynamic frontend interactions and state management.",
      "Scalable backend architecture built with Express and MongoDB for storing user preferences and logs.",
    ],
    href: "https://virtual-assistant-ca86.onrender.com/",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1752326107/portfolio_projects/vysbsr6iejapqfc28otg.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/node.svg" },
    ],
  },
  {
    id: 5,
    title: "C.H.E.T.A.N.A - AI Virtual Assistant",
    description:
      "An intelligent voice-controlled AI assistant built with Python, designed to automate tasks and assist users like Jarvis.",
    subDescription: [
      "Developed with Python and integrated voice recognition using SpeechRecognition and pyttsx3 for TTS.",
      "Uses Groq AI for natural language understanding and Hugging Face APIs for image generation.",
      "Supports personalized responses, web browsing, and local task automation (like opening apps, telling time, etc.).",
      "Future-ready with plans for WhatsApp messaging, better voice modulation, and faster response time.",
    ],
    href: "",
    logo: "",
    image: "https://images.unsplash.com/photo-1730567695200-7c8df5931fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Groq AI", path: "/assets/logos/groq.svg" },
      { id: 3, name: "Hugging Face", path: "/assets/logos/huggingface.svg" },
    ],
  },
  {
    id: 3,
    title: "Brainly – Second Brain",
    description:
      "A modern knowledge management platform that lets you store, organize, and share all your ideas, links, and resources in one intelligent space.",
    subDescription: [
      "Built with Vite + React + TypeScript for the frontend and TypeScript-based backend.",
      "Supports embedding YouTube videos, X (Twitter) posts, and any other links by simply pasting the URL.",
      "Includes smart notes, quick filters, and search functionality for easy navigation.",
      "Allows users to share their curated 'brain' with others for collaboration.",
      "Designed with a minimal, responsive UI and optimized performance for fast loading.",
    ],
    href: "https://brainly-second-brain.vercel.app/",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1755267307/Screenshot_111_vw3z2g.png",
    tags: [
      { id: 1, name: "MERN", path: "https://www.rlogical.com/wp-content/uploads/2024/05/mern-stack-development.webp" },
      { id: 3, name: "TypeScript", path: "/assets/logos/typescript.svg" },
    ],
  },
  {
    id: 2,
    title: "Personal Developer Portfolio Website",
    description:
      "An interactive and SEO-friendly portfolio website built using pure HTML, CSS, and JavaScript to showcase projects and engage users with immersive UI.",
    subDescription: [
      "Crafted a fully responsive layout without using any frontend frameworks.",
      "Integrated Shery.js for dynamic Three.js-style interactions and smooth hover effects.",
      "Focused on performance optimization and SEO best practices for discoverability.",
      "Designed for high user engagement with creative transitions, section reveals, and clean UI.",
    ],
    href: "https://khilesh321.netlify.app",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1752326113/portfolio_projects/rdhkctfs2vvrcctuevdh.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Shery.js", path: "https://res.cloudinary.com/dna4sajpg/image/upload/v1752327688/portfolio_projects/gm5axaetmjsmblgbkkoo.png" },
      { id: 5, name: "GSAP", path: "/assets/logos/gsap.svg" },
    ],
  },
  {
    id: 1,
    title: "HR Management System (Desktop App)",
    description:
      "A GUI-based HR Management System built using Python and CustomTkinter, designed to handle employee records, attendance, salary, and leave management.",
    subDescription: [
      "Created using Python with CustomTkinter for modern and responsive UI design.",
      "Modular structure covering Employees, Attendance, Leave, and Salary sections.",
      "Implemented full CRUD functionality for employee management with validation checks.",
      "Integrated MongoDB to store and manage data efficiently in a NoSQL database.",
      "Designed for desktop usage with clean layout, button-based navigation, and error handling.",
    ],
    href: "",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1752326104/portfolio_projects/cta2efgprj1qnd8wvvkc.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
  {
    id: 0,
    title: "Tic Tac Toe Game (GUI)",
    description:
      "A classic two-player Tic Tac Toe game built with Python, featuring a graphical user interface (GUI) for an enhanced user experience.",
    subDescription: [
      "Developed using Python with CustomTkinter for the GUI components.",
      "Implements player turns, win condition checks, draw detection, and restart prompt.",
      "Great for understanding conditionals, loops, and function-based structure in Python.",
    ],
    href: "",
    logo: "",
    image: "https://res.cloudinary.com/dna4sajpg/image/upload/v1754122590/Screenshot_98_snuesd.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
    ],
  },
];

export const certificateData = [
  {
    id: 1,
    title: "Python Internship – IIT Kharagpur",
    organization: "IIT Kharagpur",
    description: "A summer internship focused on building a GUI-based HR system using Python and MongoDB.",
    href: "https://res.cloudinary.com/dna4sajpg/image/upload/v1756204866/WhatsApp_Image_2025-08-26_at_16.08.17_aa5752cd_yi9hy1.jpg",
  },
  {
    id: 2,
    title: "Java Programming – Certification of Completion",
    organization: 'Knowledge Gate',
    description: "A comprehensive course covering core Java concepts, OOP principles, and basic data structures",
    href: 'https://res.cloudinary.com/dna4sajpg/image/upload/v1754585940/Screenshot_2025-08-07_194846_sx4vlc.png',
  },
  {
    id: 3,
    title: "Ode to Code – Wings 2025",
    organization: 'Gov. College of Engineering, Chh. Sambhajinagar',
    description: "A competitive coding event testing algorithmic and logical thinking under time constraints.",
    href: 'https://res.cloudinary.com/dna4sajpg/image/upload/v1754587461/WhatsApp_Image_2025-08-07_at_22.53.54_7c855ac9_jpq5h5.jpg',
  },
  {
    id: 4,
    title: "Personality Development Club – Active Member",
    organization: 'Gov. College of Engineering, Chh. Sambhajinagar',
    description: "Participated in sessions focused on communication, confidence, and soft skill building.",
    href: 'https://res.cloudinary.com/dna4sajpg/image/upload/v1754587478/WhatsApp_Image_2025-08-07_at_22.53.54_a0449ec7_ipiqu5.jpg',
  },
]


export const mySocials = [
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/khilesh-jawale",
    icon: "ri-linkedin-fill",
  },
  {
    name: "GitHub",
    href: "https://github.com/Khilesh321", 
    icon: "ri-github-fill",
  },
  {
    name: "Telegram",
    href: "https://telegram.me/khilesh_jawale", 
    icon: "ri-telegram-fill",
  },
];


export const experiences = [
  {
    title: "AI Virtual Assistant Developer",
    job: "Personal Project – C.H.E.T.A.N.A",
    date: "2024",
    contents: [
      "Developed 'C.H.E.T.A.N.A' – an intelligent AI assistant using Python, Hugging Face (for image generation), and Groq AI (for textual response).",
      "Implemented voice commands and automated tasks like custom responses, voice interactions, and assistant personalization.",
      "Built speech-to-text and text-to-speech pipelines to mimic real-time assistant interaction similar to JARVIS.",
      "Exploring integration of WhatsApp messaging, faster voice response, and expanding assistant features further.",
    ],
  },
  {
    title: "Python Intern",
    job: "IIT Kharagpur",
    date: "2025",
    contents: [
      "Contributed to automation scripts and data processing tasks using Python.",
      "Learned advanced Python concepts like lambda functions, regular expressions, and OOP.",
      "Collaborated with research mentors and improved problem-solving and clean coding practices.",
    ],
  },
  {
    title: "B.Tech Student (2nd Year)",
    job: "IT, Govt. College of Engg., Chhatrapati Sambhajinagar",
    date: "2025–Present",
    contents: [
      "Pursuing B.Tech in Information Technology with strong focus on coding, development, and computer science fundamentals.",
      "Working on real-world tech projects alongside academics to strengthen practical skills in Python and web technologies.",
      "Passionate about AI, full-stack development, and automation, with a keen interest in learning beyond the classroom.",
      "Enhancing technical, analytical, and communication skills through projects, workshops, and self-learning.",
      "Building an industry-ready profile by combining academic excellence with hands-on experience.",
    ],
  },

];


export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
