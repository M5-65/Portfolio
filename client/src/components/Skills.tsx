import { motion } from "framer-motion";
import { SkillCard, CompactSkillCard } from "./SkillCard";
import { expertiseSkills, additionalSkills } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.1 }}
        >
          <h2 className="text-3xl font-bold mb-4">My Skillset</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            I've been fortunate to work with a variety of technologies throughout my career. Here's a snapshot of my technical expertise and skills.
          </p>
        </motion.div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-6 text-center">Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseSkills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                description={skill.description}
                level={skill.level}
                delay={index}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-bold mb-6 text-center">Additional Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {additionalSkills.map((skill, index) => (
              <CompactSkillCard
                key={skill.name}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
                delay={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
