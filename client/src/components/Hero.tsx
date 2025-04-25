import { motion } from "framer-motion";
import CodeEditor from "./CodeEditor";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <motion.div
            className="md:w-7/12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-green-500 mb-4 font-mono">Hi, my name is</div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4"> Milad Bamneshin</h1>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-600 dark:text-slate-400 mb-6">
              I build things for the web.
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl">
              I'm a front-end developer specializing in building exceptional
              digital experiences. Currently, I'm focused on building
              accessible, human-centered products.
            </p>
            <div className="flex space-x-4">
              <a
                href="#projects"
                className="py-3 px-6 border border-green-500 text-green-500 hover:bg-blue-700 hover:text-white rounded-md transition duration-300"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="py-3 px-6 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-md transition duration-300"
              >
                Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            className="md:w-5/12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <CodeEditor />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
