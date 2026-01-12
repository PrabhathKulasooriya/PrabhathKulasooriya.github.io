import image_1 from './1.png';
import image_2 from './2.png';
import image_3 from './3.png';
import image_4 from './4.png';
import image_5 from './5.png';
import image_6 from './6.png';
import image_7 from './7.png';

export const images = {
  image_1,
  image_2,
  image_3,
  image_4,
  image_5,
  image_6,
  image_7,
};

export const projects = [
  {
    id: 1,
    title: "AI Chatbot",
    tech: ["MERN Stack", "OpenAI API", "Stripe", "JWT", "Tailwind"],
    description:
      "An AI-powered chatbot featuring natural language processing and image generation. Includes real-time chat functionality, secure session management, and Stripe payment integration.",
    type: "Featured Project",
    live_link: "",
    github_repo: "https://github.com/PrabhathKulasooriya/quickGPT-AI-chatbot",
    images: [image_3, image_7],
  },
  {
    id: 3,
    title: "E-Commerce Website",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    description:
      "A comprehensive e-commerce platform with product management, shopping cart functionality, and a secure admin dashboard for order and user management.",
    type: "Web Application",
    live_link: "",
    github_repo:
      "https://github.com/PrabhathKulasooriya/Fabrilia-clothing-store",
    images: [image_1, image_2],
  },
  {
    id: 4,
    title: "Online Movie Ticket Booking System",
    tech: ["Laravel", "MySQL", "Blade Templates", "Bootstrap"],
    description:
      "Complete cinema booking system allowing seat selection, show schedules, payment integration, and ticket management. Includes a robust admin panel for analytics and manage movies and showtimes.",
    type: "Full Stack System",
    live_link: "",
    github_repo:
      "https://github.com/PrabhathKulasooriya/Cineverse-Movie-ticket-booking-website",
    images: [image_4, image_5, image_6],
  },
];