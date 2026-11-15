import offlineUpiImg from "@/assets/project-offline-upi.jpg";
import pawsafeImg from "@/assets/project-pawsafe.jpg";

export const profile = {
  name: "Neha Martolia",
  initials: "NM",
  role: "Aspiring Software Developer",
  tagline: "MCA student building web, backend and Android apps with Java, Spring Boot, React and Node.js.",
  bio: "I'm an MCA student at Graphic Era Deemed to be University and an aspiring Software Developer. I have a strong interest in building web and software applications using Java, Spring Boot, React.js, Node.js, and modern web technologies. I enjoy learning new technologies, solving problems, and developing practical projects.",
  location: "Dehradun, Uttarakhand, India",
  // Add a professional email here to show it on the site.
  email: "",
  github: "https://github.com/Neha-0ss",
  linkedin: "https://www.linkedin.com/in/neha-martolia-12ab60328/",
};

export const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Graphic Era Deemed to be University, Dehradun",
    period: "2025 – 2027",
    score: "CGPA 8.50 (Current)",
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Graphic Era Deemed to be University, Dehradun",
    period: "2022 – 2025",
    score: "CGPA 7.10",
  },
];

export const skillGroups = [
  { title: "Programming Languages", items: ["Java", "C++", "JavaScript", "Python (Basic)", "SQL"] },
  {
    title: "Web Development",
    items: ["HTML5", "CSS3", "React.js", "Node.js", "Express.js", "Spring Boot", "REST APIs"],
  },
  { title: "Databases", items: ["MySQL", "MongoDB", "SQLite"] },
  {
    title: "Core Computer Science",
    items: ["Data Structures & Algorithms", "OOP", "DBMS", "Operating Systems"],
  },
  {
    title: "Tools & Technologies",
    items: ["Git & GitHub", "VS Code", "IntelliJ IDEA", "Android Studio", "Postman"],
  },
];

export const expertise = [
  { title: "Backend Development", desc: "Secure, well-structured services with Spring Boot and Node.js." },
  { title: "Full-Stack Web Development", desc: "End-to-end web apps from database to polished interface." },
  { title: "Android App Development", desc: "Native Java apps with offline storage and background sync." },
  { title: "REST API Development", desc: "Clean, documented APIs tested with Postman." },
  { title: "Database Management", desc: "Relational and document data modelling with MySQL & MongoDB." },
];

export const projects = [
  {
    slug: "offline-upi",
    title: "Offline UPI Payment System",
    role: "Backend Developer · Academic Team Project",
    image: offlineUpiImg,
    description:
      "An Android application that enables users to initiate digital payment transactions without an active internet connection. Transactions are stored locally and automatically synchronized with the backend when internet connectivity is restored.",
    highlights: [
      "Offline-first transactions stored securely on device",
      "Automatic background sync once the network returns",
      "End-to-end encryption with RSA-2048 and AES-256 GCM",
    ],
    tech: [
      "Java",
      "Android Studio",
      "Spring Boot",
      "Room Database",
      "Retrofit",
      "WorkManager",
      "RSA-2048",
      "AES-256 GCM",
    ],
  },
  {
    slug: "pawsafe",
    title: "PawSafe – Animal Rescue & Adoption",
    role: "Full-Stack Developer · Academic Project",
    image: pawsafeImg,
    description:
      "A full-stack web application that connects rescued animals with potential adopters. Users can explore animal listings, submit adoption requests, and manage rescue and adoption activities.",
    highlights: [
      "Browse rescued animals and submit adoption requests",
      "Secure sign-in with JWT and bcrypt password hashing",
      "Tools to manage rescue and adoption activity",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "bcrypt"],
  },
];
