import { Description } from "@radix-ui/react-toast";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Tag } from "lucide-react";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Flashcard Quizer",
    description:
      "An interactive, bilingual flashcard application designed to demonstrate modern React patterns.",
    image: "/projects/flashcard.png",
    tags: ["React", "TailwindCSS"],
    demoUrl: "https://flashcard-quizer.vercel.app/",
    githubUrl: "https://github.com/Taha-soukarnou/flashcard-quizer-react-.git",
  },
  {
    id: 2,
    title: "Medical Center Mnagement App",
    description:
      "A medical center management application for handling patients. ",
    image: "/projects/Cmj.png",
    tags: ["Java", "JavaSwing", "Sql"],
    githubUrl:
      "https://github.com/Taha-soukarnou/Centre-Medical-Java-Projet-.git",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="conatainer mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured
          <span className="text-primary"> Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A selection of projects where I turn ideas into functional,
          well-structured web applications.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 items-center">
                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-xl text-primary font-semibold mb-1 text-center">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 text-center">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      className="text-foreground/80 hover:text-primary transition-colors duration-300 ml-4"
                    >
                      <ExternalLink />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 mb-4 ml-4"
                  >
                    <Github />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Taha-soukarnou"
            className="cosmic-button w-fit flex  mx-auto items-center gap-2"
            target="_blank"
          >
            Check My Gitub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
