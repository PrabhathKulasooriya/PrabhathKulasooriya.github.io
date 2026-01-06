import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../assets/assets.js";
import { Github, ExternalLink, ArrowLeft, Layers } from "lucide-react";

const Project = () => {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  // Ensure page starts at the top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-primary text-mint font-mono">
        <h2 className="text-2xl">Project not found</h2>
        <Link to="/#projects" className="mt-4 underline hover:text-bright">
          Return to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-[85px]  md:pt-[100px] min-h-screen w-full flex flex-col font-sans bg-primary text-text px-6 md:px-16 lg:px-32 overflow-x-hidden">
      {/* Back Button */}

      <div className="mb-8 relative">
        <span className="font-mono text-mint text-xs md:text-sm tracking-wider">
          {project.type}
        </span>

        <h1 className="text-3xl md:text-5xl font-bold text-bright mt-3 mb-6 leading-tight">
          {project.title}
        </h1>

        {/* Tech Stack Tags */}
        <div className="flex flex-wrap gap-2 md:gap-3">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 text-[10px] md:text-xs font-mono rounded-full bg-[#112240] text-mint border border-mint/20 whitespace-nowrap"
            >
              {tech}
            </span>
          ))}
        </div>
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 text-mint font-mono text-sm mb-6 hover:-translate-x-1 transition-transform w-fit absolute top-6 right-0 z-100"
        >
          <ArrowLeft size={16} />
          Back to Projects
        </Link>
      </div>

      {/* --- CONTENT GRID --- */}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-start">
        {/* LEFT COLUMN: Buttons & Description */}
        <div className="lg:col-span-1 flex flex-col gap-8 order-2 lg:order-1">
          <div className="flex flex-col gap-4 w-full">
            <a
              href={project.github_repo}
              target="_blank"
              rel="noreferrer"
              className="flex justify-center items-center gap-2 px-6 py-4 border border-mint rounded text-mint font-mono text-sm hover:bg-mint/10 transition-all w-full"
            >
              <Github size={18} />
              View Code
            </a>

            {project.live_link && (
              <a
                href={project.live_link}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center gap-2 px-6 py-4 bg-mint/10 rounded text-mint font-mono text-sm hover:bg-mint/20 transition-all font-bold w-full"
              >
                <ExternalLink size={18} />
                Live Preview
              </a>
            )}
          </div>

          {/* Project Overview Card */}
          <div className="bg-card p-6 rounded-lg shadow-xl border-l-2 border-mint">
            <h3 className="text-bright font-bold text-lg md:text-xl mb-4 flex items-center gap-2">
              <Layers size={20} className="text-mint" />
              Project Overview
            </h3>
            <p className="leading-relaxed text-sm md:text-base text-text">
              {project.description}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Images */}

        <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8 order-1 lg:order-2">
          {project.images &&
            project.images.map((img, index) => (
              <div
                key={index}
                className="w-full rounded-lg overflow-hidden shadow-2xl border border-[#233554] group"
              >
                <img
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  className="w-full h-auto object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            ))}
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

export default Project;
