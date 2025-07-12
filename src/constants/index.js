export const CRITICAL_ASSETS = [
  '/assets/grid.png',
  '/assets/sky.jpg',
  '/assets/particles-bg.png',
  '/assets/planets.png',
  '/assets/coding-pov.png',
  '/assets/mountain-3.png',
  '/assets/mountain-2.png',
  '/assets/mountain-1.png'
];
export const myProjects = [
  {
    id: 1,
    title: "Virtual Assistant (MERN Stack)",
    description:
      "A fully functional virtual assistant built using the MERN stack, featuring secure user authentication and deep customization options.",
    subDescription: [
      "Developed using MongoDB, Express, React, and Node.js with JWT-based secure authentication.",
      "Supports personalized dashboard where users can customize commands, appearance, and assistant behavior.",
      "Used React hooks for dynamic frontend interactions and state management.",
      "Scalable backend architecture built with Express and MongoDB for storing user preferences and logs.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/mern-assistant.png",
    tags: [
      { id: 1, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 2, name: "Express.js", path: "/assets/logos/express.svg" },
      { id: 3, name: "React", path: "/assets/logos/react.svg" },
      { id: 4, name: "Node.js", path: "/assets/logos/node.svg" },
    ],
  },
  {
    id: 2,
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
    image:
      "https://images.unsplash.com/photo-1730567695200-7c8df5931fe0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwcm9maWxlLXBhZ2V8Mnx8fGVufDB8fHx8fA%3D%3D",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "Groq AI", path: "/assets/logos/groq.svg" },
      { id: 3, name: "Hugging Face", path: "/assets/logos/huggingface.svg" },
    ],
  },
  {
    id: 3,
    title: "Wanderlust - Travel Stay Booking App",
    description:
      "A compact full-stack web app inspired by Airbnb, built using Node.js, Express, EJS, and MongoDB for listing and booking travel stays.",
    subDescription: [
      "Created a responsive and dynamic UI using EJS templating and Bootstrap for layout and components.",
      "Implemented full CRUD features for listing stays, and review system.",
      "Used MongoDB as the backend database for storing user info, stay details, and reviews.",
      "Integrated RESTful routing, flash messages, and error handling for smooth UX.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wanderlust.png",
    tags: [
      { id: 1, name: "Node", path: "/assets/logos/node.svg" },
      { id: 2, name: "Express", path: "/assets/logos/express.svg" },
      { id: 3, name: "EJS", path: "/assets/logos/ejs.svg" },
      { id: 4, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
      { id: 5, name: "Bootstrap", path: "/assets/logos/bootstrap.svg" },
    ],
  },
  {
    id: 4,
    title: "Cynthia Ugwu Website Clone",
    description:
      "A pixel-perfect clone of Cynthia Ugwu’s portfolio website built using only HTML, CSS, and JavaScript to replicate her unique interactive design style.",
    subDescription: [
      "Recreated smooth scroll, hover animations, and creative transitions without any external frameworks.",
      "Implemented custom cursor effects and dynamic image hover features using vanilla JavaScript.",
      "Focused on performance and design accuracy to closely mirror the original experience.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/cynthia-clone.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
    ],
  },
  {
    id: 5,
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
    image: "/assets/projects/portfolio.png",
    tags: [
      { id: 1, name: "HTML", path: "/assets/logos/html5.svg" },
      { id: 2, name: "CSS", path: "/assets/logos/css3.svg" },
      { id: 3, name: "JavaScript", path: "/assets/logos/javascript.svg" },
      { id: 4, name: "Shery.js", path: "/assets/logos/sheryjs.png" },
      { id: 5, name: "GSAP", path: "/assets/logos/gsap.svg" },
    ],
  },
  {
    id: 6,
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
    image: "/assets/projects/hr-management.png",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "MongoDB", path: "/assets/logos/mongodb.svg" },
    ],
  },
];


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
    title: "Freelance Web Developer",
    job: "Self-Employed",
    date: "2025–Present",
    contents: [
      "Built responsive websites using React, TailwindCSS, and Vite with modern UI and smooth performance.",
      "Deployed projects on Netlify and GitHub Pages with clean version control using Git.",
      "Used Flexbox, Grid, and reusable components to ensure mobile-first, scalable designs.",
      "Communicated with clients for requirement gathering and timely project delivery.",
      "Currently exploring Three.js to integrate 3D visuals in future web projects.",
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
