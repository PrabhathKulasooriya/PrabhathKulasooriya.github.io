import React from "react";
import { Link } from "react-router-dom";
import {
  Github,
  Phone,
  MapPin,
  Mail,
  ExternalLink,
  Code,
  Database,
  Server,
  Linkedin,
} from "lucide-react";

import { projects } from "../assets/assets.js";

const Home = () => {

  return (
    <div className="min-h-screen w-full flex flex-col font-sans bg-[primary] text-text">
      {/* HERO SECTION */}
      <div
        id="about"
        className="min-h-screen flex flex-col justify-center px-6 md:px-24 lg:px-32 pt-20"
      >
        <span className="font-mono mb-5 text-lg text-mint">Hi, my name is</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-bright">
          Isuru Prabhath.
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-main">
          I build things for the web.
        </h2>
        <p className="max-w-xl text-lg mb-12 leading-relaxed text-text">
          I am a self-motivated <b>Web Developer - Intern</b> and undergraduate at
          UCSC. I specialize in the MERN stack and have a passion for creating
          clean, efficient code. I am always eager to learn and improve my skills.
          I'm currently looking for internship opportunities to apply my knowledge.
        </p>

        <div>
          <a
            href="#projects"
            className="px-8 py-4 border border-mint rounded font-mono text-sm text-mint transition-all duration-300 hover:bg-mint/10"
          >
            Check out my work
          </a>
        </div>
      </div>

      {/* SKILLS & EDUCATION SECTION */}
      <div id="education" className="py-24 px-6 md:px-24 lg:px-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl font-bold text-bright">
            <span className="font-mono text-xl mr-2 text-mint">02.</span>
            Education & Skills
          </span>
          <div className="h-[1px] bg-[#233554] flex-grow max-w-xs"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-bright">
              <span className="text-mint">▹</span> Education
            </h3>
            <div className="border-l-2 border-card pl-6 space-y-8">
              <div>
                <h4 className="text-lg font-bold text-bright">
                  Bachelor of Information Technology
                </h4>
                <p className="font-mono text-sm mb-2 text-mint">
                  University Of Colombo School of Computing
                </p>
                <p className="text-sm">Undergraduate</p>
              </div>
              <div>
                <h4 className="text-lg font-bold text-bright">
                  Higher Diploma in IT
                </h4>
                <p className="font-mono text-sm text-mint">
                  University Of Colombo School of Computing
                </p>
              </div>

              <div>
                <h4 className="text-lg font-bold text-bright">Diploma in IT</h4>
                <p className="font-mono text-sm text-mint">
                  University Of Colombo School of Computing
                </p>
              </div>
            </div>
          </div>

          {/* Skills Column */}
          <div>
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2 text-bright">
              <span className="text-mint">▹</span> Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { name: "HTML & CSS", icon: <Code size={16} /> },
                { name: "JavaScript ", icon: <Code size={16} /> },
                { name: "React", icon: <Code size={16} /> },
                { name: "Tailwind CSS", icon: <Code size={16} /> },
                { name: "Node.js & Express", icon: <Server size={16} /> },
                { name: "MongoDB", icon: <Database size={16} /> },
                { name: "PHP", icon: <Server size={16} /> },
                { name: "Laravel", icon: <Server size={16} /> },
                { name: "MySQL", icon: <Database size={16} /> },
              ].map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 font-mono text-sm hover:-translate-y-1 transition-transform"
                >
                  <span className="text-mint">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div id="projects" className="py-24 px-6 md:px-24 lg:px-32">
        <div className="flex items-center gap-4 mb-12">
          <span className="text-2xl font-bold text-bright">
            <span className="font-mono text-xl mr-2 text-mint">03.</span>
            Some Things I've Built
          </span>
          <div className="h-[1px] bg-[#233554] flex-grow max-w-xs"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 rounded bg-card md:hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="text-mint">
                    <Code size={40} />
                  </div>
                  <Link to={`/project/${project.id}`} rel="noreferrer">
                    <ExternalLink
                      size={30}
                      className="hover:text-mint cursor-pointer"
                    />
                  </Link>
                </div>

                <h3 className="text-xl font-bold mb-2 text-bright group-hover:text-mint transition-colors">
                  {project.title}
                </h3>

                <p className="mb-6 text-sm leading-relaxed text-text">
                  {project.description}
                </p>
              </div>

              <ul className="flex flex-wrap gap-3 font-mono text-xs opacity-80 text-text">
                {project.tech.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CONTACT SECTION */}
      <div
        id="contact"
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-24"
      >
        <span className="font-mono text-lg mb-4 text-mint">
          04. What's Next?
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-bright">
          Get In Touch
        </h2>
        <p className="max-w-lg text-lg mb-12 text-text">
          I am currently looking for internship opportunities. Whether you have
          a question or just want to say hi, I'll try my best to get back to
          you!
        </p>

        <a
          href="mailto:prabhath.kulasooriya@gmail.com"
          className="px-8 py-4 border border-mint rounded font-mono text-sm text-mint transition-all duration-300 hover:bg-mint/10 mb-12"
        >
          Say Hello
        </a>

        {/* Contact Details */}

        <div className="flex flex-wrap justify-center gap-8 text-sm font-mono mt-8 w-full max-w-4xl">
          <div className="flex flex-col items-center gap-2 p-4 rounded hover:bg-card transition-colors min-w-[200px]">
            <Phone className="text-mint" />
            <span>+94 766961896</span>
          </div>

          <a
            href="mailto:prabhath.kulasooriya@gmail.com"
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-card transition-colors min-w-[200px]"
          >
            <Mail className="text-mint" />
            <span>prabhath.kulasooriya@gmail.com</span>
          </a>

          <div className="flex flex-col items-center gap-2 p-4 rounded hover:bg-card transition-colors min-w-[200px]">
            <MapPin className="text-mint" />
            <span className="text-center">Kuliyapitiya, Sri Lanka</span>
          </div>

          <a
            href="https://github.com/PrabhathKulasooriya"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-card transition-colors cursor-pointer min-w-[200px]"
          >
            <Github className="text-mint" />
            <span>GitHub Profile</span>
          </a>

          <a
            href="https://www.linkedin.com/in/isuru-prabhath-kulasooriya"
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-2 p-4 rounded hover:bg-card transition-colors cursor-pointer min-w-[200px]"
          >
            <Linkedin className="text-mint" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>

      <footer className="py-6 text-center text-xs font-mono text-text">
        <p className="hover:text-mint transition-colors cursor-default">
          Designed & Developed by Isuru Prabhath Kulasooriya
        </p>
      </footer>
    </div>
  );
};

export default Home;
