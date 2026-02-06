import React from "react";
import { useState } from "react";
import cn from "../lib/utils";

const skills = [
  //==== front end skills
  { name: "HTML/CSS", level: 80, category: "frontend" },
  { name: "JavaScript", level: 80, category: "frontend" },
  { name: "React", level: 75, category: "frontend" },
  { name: "Bootstrap", level: 70, category: "frontend" },
  { name: "Tailwind CSS", level: 70, category: "frontend" },
  { name: "JavaSwing", level: 65, category: "frontend" },
  { name: "Redux", level: 75, category: "frontend" },

  //==== backend skills
  { name: "Java", level: 80, category: "backend" },
  { name: "PHP", level: 70, category: "backend" },
  { name: "Python", level: 80, category: "backend" },
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "Laravel", level: 75, category: "backend" },
  { name: "MongoDB", level: 75, category: "backend" },
  { name: "MySQL", level: 80, category: "backend" },
  { name: "OracleDB", level: 80, category: "backend" },

  //==== Tools and IDEs
  { name: "Git/GitHub", level: 80, category: "tools" },
  { name: "Docker", level: 65, category: "tools" },
  { name: "Xampp", level: 70, category: "tools" },
  { name: "VS Code", level: 85, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
  { name: "Eclipse", level: 75, category: "tools" },
  { name: "NetBeans", level: 70, category: "tools" },
  { name: "WordPress", level: 70, category: "tools" },
];

const Categories = ["frontend", "backend", "tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory,
  );
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My<span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Categories.map((Category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(Category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === Category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover/bd-secondary",
              )}
            >
              {Category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg  shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
