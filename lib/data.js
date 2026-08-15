// lib/data.jsx
import {
  LayoutGrid,
  MonitorSmartphone,
  Webhook,
  BrainCircuit,
  FileText,
  Server,
  Mail, Phone, Cake, MapPin
} from "lucide-react";

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.11 20.45H3.56V9h3.55v11.45z" />
  </svg>
);

const GitHubIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.04-.02-2.04-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export const profile = {
  name: 'HUSSNAIN ALI',
  role: 'SOFTWARE ENGINEER',
  image: '/images/hussnain.png',
  email: 'hussnain.stack@gmail.com',
  phone: '03155254877',
  location: 'PUNJAB, PAKISTAN',
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hussnain-ali-01161a3a0/', icon: LinkedInIcon },
    { label: 'GitHub', href: 'https://github.com/hussnain-stack14', icon: GitHubIcon },
    { label: 'Email', href: 'mailto:hussnain.stack@gmail.com', icon: Mail },
  ],
};

export const tabs = [
  { key: 'about', label: 'About', mobileLabel: 'About' },
  { key: 'resume', label: 'Resume', mobileLabel: 'Resume' },
  { key: 'portfolio', label: 'Portfolio', mobileLabel: 'Work' },
  { key: 'contact', label: 'Contact', mobileLabel: 'Contact' },
];

export const sidebarContacts = [
  { label: 'Email', value: profile.email, icon: Mail },
  { label: 'Phone', value: profile.phone, icon: Phone },
  { label: 'Location', value: profile.location, icon: MapPin },
];

export const services = [
  {
    title: 'Business Web Development',
    description: 'Modern websites for businesses, startus and personal brands.',
    icon: <LayoutGrid className="w-14 h-14 text-primary" />,
  },
  {
    title: 'Full Stack Web Application',
    description: 'Frontend, backend, database and authentication.',
    icon: <LayoutGrid className="w-14 h-14 text-primary" />,
  },
  {
    title: 'Responsive Web Design',
    description: 'Clean, intuitive interfaces that work seamlessly across all devices.',
    icon: <MonitorSmartphone className="w-14 h-14 text-primary" />,
  },
  {
    title: 'APIs & Backend Development',
    description: 'Reliable server-side logic and authentication with Node.js and Express.',
    icon: <Server className="w-14 h-14 text-primary" />,
  },
  {
    title: 'API Development & Testing',
    description: 'REST APIs, Authentication and database integration.',
    icon: <Webhook className="w-14 h-14 text-primary" />,
  },
  {
    title: 'AI Chatbot & Third-Party APIs',
    description: 'Integrating AI chatbots and APIs for smarter user experiences.',
    icon: <BrainCircuit className="w-14 h-14 text-primary" />,
  },
  
];

export const testimonials = [
  { name: 'Verified client', quote: 'Great communication and delivered exactly what was needed for the project.', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80' },
  { name: 'verified client', quote: 'Reliable, detail-oriented, and easy to work with throughout the project.', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=2' },
];

export const clients = ['FEAT Technologies Pvt Ltd, Lahore', 'DecodeLabs'];

export const education = [
  { title: 'BS Software Engineering', meta: 'National University of Modern Languages', date: '2023 – 2027', location: 'Punjab , Pakistan' },
  { title: 'ICS', meta: 'GOVT. municipal  Graduate college ', date: '2020 – 2023', location: 'Faisalbad , Punjab' },
];

export const experience = [
 
  {
    title: 'Full Stack Developer Intern',
    meta: 'FEAT Technologies Pvt Ltd',
    date: 'Jun 2026 – Sep 2026',
    location: 'Remote',
    badge: 'Internship',
    details: [
      'Revamped a SaaS application for the Food Safety Quality project, focusing on performance, scalability, and user experience.',
      'Built the frontend using React.js to deliver a smooth, responsive interface.',
      'Developed the backend using Express.js with MongoDB, providing secure and scalable APIs to support evolving application requirements.',
    ],
  },
   {
    title: 'Full Stack Developer Intern',
    meta: 'DecodeLabs',
    date: 'Aug 2026 – Sep 2026',
    location: 'Remote',
    badge: 'Internship',
    details: [
      'Worked as a full-stack developer across 4 different projects.',
      'Contributed to both frontend and backend development using the MERN stack.',
    ],
  },
];

export const skills = [
  { label: 'React / Next.js', percent: 92, category: 'Frontend' },
  { label: 'Node.js / Express', percent: 90, category: 'Backend' },
  { label: 'MongoDB', percent: 90, category: 'Database' },
  { label: 'JavaScript', percent: 92, category: 'Language' },
  { label: 'Tailwind CSS', percent: 90, category: 'Frontend' },
  { label: 'UI/UX (Figma)', percent: 88, category: 'Design' },
  { label: 'SQL', percent: 60, category: 'Database' },
  { label: 'PostgreSQL', percent: 35, category: 'Database' },
  { label: 'Thunder Client', percent: 65, category: 'Tools' },
  { label: 'C# (Visual & Advanced Programming)', percent: 60, category: 'Language' },
  { label: 'C / C++ / Java (Basics)', percent: 45, category: 'Language' },
  { label: 'Deployment (Vercel / Netlify)', percent: 65, category: 'DevOps' },
  { label: 'Git & GitHub', percent: 65, category: 'Tools' },
  { label: 'JWT Authentication', percent: 80, category: 'Concepts' },
  { label: 'Password Hashing (bcrypt)', percent: 78, category: 'Concepts' },
  { label: 'REST API Design', percent: 85, category: 'Concepts' },
  { label: 'WebSockets', percent: 75, category: 'Concepts' },
  { label: '3-Tier Architecture', percent: 72, category: 'Concepts' },
  { label: 'SQL Injection Prevention', percent: 70, category: 'Concepts' },
];

export const projects = [
  { title: 'Davixa Blogs', category: 'Website', thumbnail: '/images/davixa.png', link: 'https://devixa-blog.netlify.app/', accent: 'from-violet-500 to-fuchsia-500' },
  { title: 'Promtix gallery', category: 'Web Application', thumbnail: '/images/promtix-gallery.png', link: 'https://promptix-gallery.vercel.app/', accent: 'from-sky-500 to-cyan-500' },
  { title: 'Echoshop', category: 'Ecommerce', thumbnail: '/images/ecommerce.png', link: 'https://echoshop-hussnain.netlify.app/', accent: 'from-emerald-500 to-lime-500' },
  { title: 'Loop Chat', category: 'Chat App', thumbnail: '/images/project-4.svg', link: '#', accent: 'from-amber-500 to-orange-500' },
  { title: 'Mosaic Studio', category: 'Website', thumbnail: '/images/project-5.svg', link: '#', accent: 'from-rose-500 to-pink-500' },
  { title: 'Vertex CRM', category: 'Web Application', thumbnail: '/images/project-6.svg', link: '#', accent: 'from-indigo-500 to-violet-500' },
];

export const filters = ['All', 'Website', 'Web Application', 'Dashboard', 'Ecommerce', 'Chat App'];