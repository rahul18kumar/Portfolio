import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot, FaMicrochip, FaDesktop,FaLock,FaJs,FaExchangeAlt } from 'react-icons/fa';

import profile from  '../assets/profile.jpg';
import Img_Rahul from  '../assets/img_cover.jpg';
import projectImg1 from '../assets/project1.avif';


export const assets = {
    profile,
}

export const portimg = {
  Img_Rahul,
}


export const aboutInfo = [
    {
      icon: FaLightbulb,
      title: 'Innovative',
      description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
      color: 'text-purple'
    },
    {
      icon: FaPaintBrush,
      title: 'Design Oriented',
      description: 'Beautiful design and user experience are at the heart of everything I create.',
      color: 'text-pink'
    },
    {
      icon: FaCode,
      title: 'Clean Code',
      description: 'I write maintainable, efficient code following best practices and modern patterns.',
      color: 'text-blue'
    }
  ];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces using modern web technologies.',
    tags: ['HTML5, CSS3, JavaScript (ES6+)', 'Tailwind CSS', 'React.js', 'Redux (State Management)']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Developing scalable server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express.js', 'JWT Authentication', 'REST API Design', 'Cloudinary (Media Storage)']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and managing structured and NoSQL databases.',
    tags: ['MongoDB', 'Mongoose (ODM)', 'MySQL', 'SQLite']
  },  
  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Tools I use for development, collaboration, and version control.',
    tags: ['Git & GitHub', 'Visual Studio Code', 'Postman']
  },
  {
    title: 'Systems & Electronics',
    icon: FaMicrochip,
    description: 'Strong foundation in electronics and system-level understanding.',
    tags: [' Embedded Systems & Microcontroller Basics', 'Digital & Analog Electronics', 'Hardware-Software Integration Concepts']
  },
  {
    title: 'Operating Systems & Computer Skills',
    icon: FaDesktop,
    description: 'Comfortable working with system environments and development tools.',
    tags: ['Windows','Linux (Ubuntu)',' Computer System Troubleshooting', 'CLI (Command Line Interface)']
  }
  // {
  //   title: '## SOON to be',
  //   icon: FaMobileAlt,
  //   description: '##',
  //   tags: ['1']
  // },
  // {
  //   title: 'Soon to be',
  //   icon: FaCloud,
  //   description: '##',
  //   tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
  // },

];

export const projects = [
  {
    title: "YouTube-like Video Streaming Backend",
    description:
      "Designed and developed a scalable backend system for a video streaming platform with JWT authentication, CRUD Operation on feature like updation of avatar & coverimage.",
    image: projectImg1,
    tech: ["Node.js", "Express.js", "MongoDB", "JWT", "Cloudinary"],
    icons: [FaNodeJs, FaDatabase, FaCloud, FaLock],
    demo: "#",   //backend have no UI till now
    code: "https://github.com/rahul18kumar/node-backend",
  },
  {
    title: "Todo Application",
    description:
      "A state-managed Todo app using React Context API with persistent storage and dynamic UI updates.",
    image: projectImg1,
    tech: ["React", "Context API", "Local Storage"],
    icons: [FaReact, FaDatabase],
    demo: "https://react-todo-context-api-three.vercel.app/",
    code: "https://github.com/rahul18kumar/react-todo-context-api",
  },
  {
     title: "Currency Converter",
    description:
      "Real-time currency converter using API integration with dynamic UI updates and responsive design.",
    image: projectImg1,
    tech: ["JavaScript", "API", "CSS"],
    icons: [FaJs, FaExchangeAlt],
    demo: "https://currency-converter-r18.netlify.app/",
    code: "https://github.com/rahul18kumar/currency_converter",
  },
  {
    title: "PW Skills UI Clone",
    description:
      "Responsive UI clone built using Tailwind CSS with clean design.",
    image: projectImg1,
    tech: ["HTML5", "Tailwind CSS"],
    icons: [FaReact],
    demo: "https://pw-skills-clone-rk.netlify.app/",
    code: "https://github.com/rahul18kumar/pw-skillss-clone",
  },
  {
    title: "Personal Portfolio",
    description: "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg1,
    tech: ["React.js", "Tailwind CSS", "Framer Motion"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
];


export const workData = [
  {
    role: "Research Intern ",
    company: "CSIR - National Physical Laboratory (NPL), India",
    duration: "Sep 2025 - Mar 2026",
    description:
      "Worked on implementation of Software Defined Radio (SDR), gaining hands-on experience in communication systems, signal processing, and hardware-software integration",
    color: "purple"
  },
  {
    role: "Software Developer ",
    company: "Self Learning",
    duration: "2025 - Present",
    description:
      "Built responsive UI applications using React, Tailwind CSS, JavaScript,  while strengthening fundamentals of development and problem solving.",
    color: "purple"
  }
];
