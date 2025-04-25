import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Code,
  Braces,
  LineChart,
  FileCode,
  LayoutGrid,
  Code2,
  GitBranch,
  Github,
  Plug,
  FileJson,
  Database
} from "lucide-react";

interface SkillCardProps {
  icon: keyof typeof iconMapping;
  name: string;
  description?: string;
  level: number;
  className?: string;
  delay?: number;
  iconClassName?: string;
}

const iconMapping = {
  Code: <Code size={24} />,
  Braces: <Braces size={24} />,
  LineChart: <LineChart size={24} />,
  FileCode: <FileCode size={24} />,
  LayoutGrid: <LayoutGrid size={24} />,
  Code2: <Code2 size={24} />,
  GitBranch: <GitBranch size={22} />,
  Github: <Github size={22} />,
  Plug: <Plug size={22} />,
  FileJson: <FileJson size={22} />,
  Database: <Database size={22} />
};

const getIconComponent = (iconName: string) => {
  return iconMapping[iconName as keyof typeof iconMapping] || <Code size={24} />;
};

export function SkillCard({
  icon,
  name,
  description,
  level,
  className,
  delay = 0,
  iconClassName
}: SkillCardProps) {
  const iconComponent = getIconComponent(icon);

  return (
    <motion.div
      className={cn(
        "bg-white dark:bg-slate-800 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300",
        className
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="flex items-center mb-4">
        <div className={cn(
          "w-12 h-12 flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg mr-4",
          iconClassName
        )}>
          {iconComponent}
        </div>
        <h4 className="text-xl font-bold">{name}</h4>
      </div>
      {description && (
        <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>
      )}
      <div className="skill-progress bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </motion.div>
  );
}

export function CompactSkillCard({
  icon,
  name,
  level,
  delay = 0,
}: Omit<SkillCardProps, 'description' | 'className' | 'iconClassName'>) {
  const iconComponent = getIconComponent(icon);
  
  return (
    <motion.div
      className="bg-white dark:bg-slate-800 rounded-lg p-4 text-center shadow-sm hover:shadow-md transition duration-300"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay: delay * 0.1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center bg-slate-100 dark:bg-slate-700 rounded-full">
        <div className="text-green-500 text-2xl">{iconComponent}</div>
      </div>
      <h5 className="font-semibold">{name}</h5>
      <div className="skill-progress mt-2 bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-full rounded-full"
          style={{ width: `${level}%` }} 
        ></div>
      </div>
    </motion.div>
  );
}
