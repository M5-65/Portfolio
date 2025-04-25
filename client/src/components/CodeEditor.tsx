import { motion } from "framer-motion";

export default function CodeEditor() {
  return (
    <div className="code-editor bg-slate-800 shadow-xl rounded-lg overflow-hidden">
      <div className="code-editor-header flex items-center p-2 bg-slate-700">
        <div className="w-3 h-3 rounded-full bg-red-500 mx-1"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500 mx-1"></div>
        <div className="w-3 h-3 rounded-full bg-green-500 mx-1"></div>
        <div className="ml-4 text-slate-400 text-sm">Milad-Bamneshin.js</div>
      </div>
      <motion.div 
        className="p-6 bg-slate-900 font-mono text-slate-100 text-sm overflow-x-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <pre><code>
<span className="text-slate-500">// Welcome to my portfolio</span>
<span className="text-pink-400"> const </span>
 <span className="text-blue-400">developer </span> 
 <span className="text-pink-400">= </span>
  <span className="text-yellow-400">{'{'}</span>
  <span className="text-green-400">name</span>
  <span className="text-pink-400">:</span>
   <span className="text-orange-300">'Milad Bamneshin'</span>
   <span className="text-slate-300">, </span>
  <span className="text-green-400">title</span>
  <span className="text-pink-400">:</span> 
  <span className="text-orange-300">'Front-End Developer'</span>
  <span className="text-slate-300">, </span>
  <span className="text-green-400">location</span>
  <span className="text-pink-400">:</span>
   <span className="text-orange-300">'Sydney, Australia'</span>
   <span className="text-slate-300">, </span>
  <span className="text-green-400">expertise</span>
  <span className="text-pink-400">:</span> 
  <span className="text-yellow-400">[</span>
    <span className="text-orange-300">'HTML5', </span>
    <span className="text-orange-300">'CSS3', </span>
    <span className="text-slate-300">'Bootstrap 5', </span>
    <span className="text-orange-300">'Tailwind CSS', </span>
    <span className="text-slate-300">'DOM Manipulation', </span>
    <span className="text-orange-300">'JavaScript ES6', </span>
    <span className="text-slate-300">'TypeScript', </span>
    <span className="text-orange-300">'DOM'</span>
    <span className="text-slate-300">, </span>
    <span className="text-orange-300">'jQuery', </span>
    <span className="text-orange-300">'React.js (Redux, Router, Testing)', </span>
    <span className="text-slate-300">'Vite'</span>
  <span className="text-yellow-400">]</span>
  <span className="text-slate-300">, </span>
  <span className="text-orange-300">'Backend-End Developer'</span>
  <span className="text-green-400">skills</span>
  <span className="text-pink-400">:</span>
   <span className="text-yellow-400">[</span>
    <span className="text-slate-300">'Node.js', </span>
     <span className="text-orange-300">'Express.js'</span>
     <span className="text-slate-300">, </span>
      <span className="text-orange-300">'EJS Templating'</span>
      <span className="text-slate-300">, </span>
    <span className="text-orange-300">'RESTful APIs', </span>
    <span className="text-slate-300">'PostgreSQL', </span>
     <span className="text-orange-300">'SQL', </span>
     <span className="text-slate-300">Tools & Version Control:</span> 
     <span className="text-orange-300"> 'Git, GitHub, Visual Studio Code, PowerShell'</span>
     <span className="text-slate-300">, </span>
     <span className="text-orange-300">'Deployment: Vercel, Netlify', </span>
  <span className="text-yellow-400">]</span>
  <span className="text-slate-300">, </span>
  <span className="text-green-400">contactMe</span>
  <span className="text-pink-400">:</span>
  <span className="text-yellow-400">milad.bamneshin@outlook.com</span>
  <span className="text-blue-400"> function</span>
  <span className="text-yellow-400">(</span>
  <span className="text-yellow-400">)</span> <span className="text-yellow-400">{'{'}</span>
    <span className="text-pink-400">return</span>
     <span className="text-orange-300">'Let\'s work together!'</span>
  <span className="text-yellow-400">{'}'}</span>
<span className="text-yellow-400">{'}'}</span><span className="text-slate-300">;</span>

<span className="text-pink-400">export default</span> developer<span className="text-slate-300">;</span>
        </code></pre>
      </motion.div>
    </div>
  );
}
