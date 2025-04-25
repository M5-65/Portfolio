import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  delay?: number;
}

export default function ProjectCard({
  image,
  title,
  description,
  tags,
  githubUrl,
  liveUrl,
  delay = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      className="project-card bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold">{title}</h3>
          <div className="flex space-x-2">
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400",
                "transition-colors duration-200"
              )}
              aria-label={`View ${title} source code on GitHub`}
            >
              <Github size={18} />
            </a>
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "text-slate-500 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400",
                "transition-colors duration-200"
              )}
              aria-label={`View ${title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
        <p className="text-slate-600 dark:text-slate-400 mb-5">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono py-1 px-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
