import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-100 dark:bg-slate-800/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="flex items-center mb-6">
              <h2 className="text-3xl font-bold">About Me</h2>
              <div className="h-px bg-primary-500 flex-grow ml-4"></div>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
            Hi, I’m Milad — a Front-End Developer based in Sydney with
             a passion for crafting interactive and engaging web applications.
            I love turning complex ideas into clean, user-friendly experiences
             that are both functional and visually appealing.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
            With a strong background in modern JavaScript frameworks like
             React, Next.js, and Vue.js, I specialize in building responsive, accessible,
              and scalable interfaces. Whether it's an e-commerce store, a dashboard,
               or a personal portfolio, I’m all about creating products that users enjoy and remember.
            </p>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
            I value clean code, great design, and working collaboratively with developers
             and designers alike. I'm always learning, improving, and exploring new tools to
              stay ahead in front-end development.
              Let’s build something awesome together.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 bg-slate-800 hover:bg-slate-900 dark:bg-slate-700 dark:hover:bg-slate-600 text-white rounded-md transition duration-200"
              >
                <Github size={16} /> GitHub
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition duration-200"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2 px-4 bg-sky-500 hover:bg-sky-600 text-white rounded-md transition duration-200"
              >
                <Twitter size={16} /> Twitter
              </a>
            </div>
          </motion.div>
          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 bg-primary-500/20 rounded-md transform rotate-3"></div>
              <div className="absolute inset-0 bg-green-500/20 rounded-md transform -rotate-3"></div>
              <img
                src="./assets/IMG_0617.jpeg"
                alt="Milad Bamneshin"
                className="absolute inset-0 rounded-md object-cover w-full h-full shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
