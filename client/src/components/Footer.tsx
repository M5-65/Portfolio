import { Github, Linkedin, Twitter, Codepen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-800 dark:bg-slate-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-2xl font-bold text-white flex items-center">
              <span className="text-green-500 mr-1">&lt;</span>MB
              <span className="text-green-500">/&gt;</span>
            </a>
            <p className="text-slate-400 mt-2">Building exceptional web experiences.</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-8">
            <div className="flex space-x-4 justify-center">
              <a
                href="https://github.com/MiladBamneshin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/MiladBamneshin-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/MiladBamneshin_dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://codepen.io/MiladBamneshin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition duration-200"
                aria-label="CodePen"
              >
                <Codepen className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-center md:text-right">
              <a
                href="/assets/Milad_CV.pdf"
                className="text-green-400 hover:text-green-300 transition duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
        
        <hr className="border-slate-700 my-8" />
        
        <div className="text-center text-slate-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Milad Bamneshin. All rights reserved.</p>
          <p className="mt-2">Designed and built with Milad Bamneshin</p>
        </div>
      </div>
    </footer>
  );
}

