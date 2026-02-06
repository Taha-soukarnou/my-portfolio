import React from "react";
import { Code, Database, FrameIcon, User } from "lucide-react";

const AboutMeSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-semibold text-center text-primary">
              Junior Fullstack Dev & Computer science student
            </h3>
            <p className="text-muted-foreground text-center">
              I’m a full-stack developer and computer science student with
              experience building modern web applications and working across
              different technologies. I enjoy writing clean, well-structured
              code and turning ideas into practical, scalable solutions through
              real-world projects.
            </p>
            <p className="text-muted-foreground text-center">
              My interests include modern web development, backend systems,
              software architecture, and understanding how applications work
              from design to deployment. I enjoy learning new technologies and
              improving the structure and quality of my code.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="/public/mycv/CV fr.pdf"
                download="CV fr.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary  hover:bg-primary/10 hover:text-primary-foreground hover:shadow-[0_0_10px_rgba(139,92,246,0.5)] hover:scale-105 active:scale-95"
              >
                {" "}
                Download CV
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">
                    Full-stack Development
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Building complete web applications, from clean UIs to solid
                    backend logic.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">
                    UI/UX Design
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Crafting intuitive interfaces that prioritize user needs and
                    seamless interactions.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradiant-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Database />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-primary">
                    Database Management
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    Designing efficient schemas and optimizing data flow for
                    secure, high-performance applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
