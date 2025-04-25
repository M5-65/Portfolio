import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projects } from "../data/portfolioData";

const filters = ["all", "react", "javascript", "node"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  console.log("Active Filter:", activeFilter);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "all") return true;
    return project.tags.some((tag) =>
      tag.toLowerCase().includes(activeFilter.toLowerCase())
    );
  });

  return (
    <section id="projects" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of my recent work. Each project showcases different skills and technologies from my toolkit.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1 bg-white dark:bg-slate-800 rounded-lg shadow-sm">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "ghost"}
                className={cn(
                  "capitalize",
                  activeFilter === filter
                    ? "bg-blue-600 text-white hover:bg-blue-700"
                    : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
                onClick={() => {
                  console.log("Selected Filter:", filter);
                  setActiveFilter(filter);
                }}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        
        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
              delay={index}
            />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <a
            href="https://github.com/MiladBamneshin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200 shadow-md hover:shadow-lg"
          >
            View All Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
