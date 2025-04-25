import {
  Code,
  Braces,
  LineChart,
  FileCode,
  LayoutGrid,
  Code2,
  GitBranch,
  Github,
  Plug,
  FileJson,
  Database
} from "lucide-react";

export const expertiseSkills = 
  [
    {
      name: "HTML5, CSS3",
      icon: "FileText", 
      description: "Creating semantic, accessible, and well-structured web pages using modern HTML and CSS standards.",
      level: 95,
    },
    {
      name: "Bootstrap 5, Tailwind CSS",
      icon: "LayoutDashboard",
      description: "Building responsive layouts using utility-first and component-based CSS frameworks with Flexbox and Grid.",
      level: 100,
    },
    {
      name: "JavaScript (ES6), TypeScript",
      icon: "Code2", 
      description: "Writing clean, modern, and type-safe JavaScript using ES6+ features and TypeScript for large-scale apps.",
      level: 80,
    },
    {
      name: "DOM Manipulation",
      icon: "MousePointerClick", 
      description: "Interacting with and modifying the DOM using vanilla JavaScript for dynamic UI updates and event handling.",
      level: 90,
    },
    {
      name: "React.js (Redux, Router, Testing)",
      icon: "Atom", 
      description: "Building reusable components, managing state with Redux, navigating with React Router, and writing unit tests.",
      level: 80,
    },
    {
      name: "Vite, jQuery",
      icon: "Zap", 
      description: "Developing fast modern apps with Vite and handling DOM operations with jQuery when necessary.",
      level: 90,
    },
  ];

export const additionalSkills = 
  [
    {
      name: "Node.js, Express.js",
      icon: "Server", 
      description: "Building scalable backend services and APIs with Node.js and Express.js.",
      level: 75,
    },
    {
      name: "EJS Templating, RESTful APIs",
      icon: "Code", 
      description: "Creating dynamic server-rendered pages and designing RESTful API endpoints for data-driven apps.",
      level: 80,
    },
    {
      name: "PostgreSQL, SQL",
      icon: "Database", 
      description: "Writing efficient SQL queries, managing relational databases, and optimizing data storage with PostgreSQL.",
      level: 70,
    },
    {
      name: "Git, GitHub",
      icon: "GitBranch", 
      description: "Version control and collaborative development using Git and GitHub best practices.",
      level: 100,
    },
    {
      name: "Visual Studio Code, PowerShell",
      icon: "Terminal", 
      description: "Efficient development with VS Code and automation via command-line tools like PowerShell.",
      level: 100,
    },
    {
      name: "Vercel, Netlify",
      icon: "Cloud", 
      description: "Deploying modern front-end apps and serverless functions using Vercel and Netlify.",
      level: 80,
    },
  ];

export const projects = [
  {
    id: 1,
    title: "E-commerce Dashboard",
    description: "A comprehensive dashboard with real-time analytics, inventory management, and order processing.",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Node.js", "Redux", "Chart.js"],
    githubUrl: "https://github.com/M5-65/E-commerce-Dashboard",
  },
  {
    id: 2,
    title: "Task Manager",
    description: "A feature-rich task management app with drag-and-drop, reminders, and team collaboration tools.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "HTML5", "CSS3", "LocalStorage"],
    githubUrl: "https://github.com/M5-65/Task-Manager",
  },
  {
    id: 3,
    title: "Weather App",
    description: "Real-time weather forecasting app with location detection, interactive maps, and historical data.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "OpenWeather API", "Chart.js"],
    githubUrl: "https://github.com/M5-65/weather-app",
  },
  {
    id: 4,
    title: "Recipe Finder",
    description: "Search recipes by ingredients, dietary restrictions, and cooking time. Includes meal planning and shopping lists.",
    image: "https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["Node.js", "Express", "MongoDB", "EJS"],
    githubUrl: "https://github.com/M5-65/recipe-finder",
  },
  {
    id: 5,
    title: "Code Editor",
    description: "Web-based code editor with syntax highlighting, linting, and real-time collaboration features.",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["React.js", "Monaco Editor", "WebSockets"],
    githubUrl: "https://github.com/M5-65/web-code-editor",
  },
  {
    id: 6,
    title: "Music Player",
    description: "A sleek music player with playlist management, audio visualization, and seamless audio playback.",
    image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    tags: ["JavaScript", "Web Audio API", "CSS Animation"],
    githubUrl: "https://github.com/M5-65/music-player",
  },
];
