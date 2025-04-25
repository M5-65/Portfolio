import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useScrollActive } from "../lib/hooks";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useScrollActive();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 dark:bg-slate-900/80 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a
          href="#home"
          className="text-2xl font-bold text-primary-600 dark:text-primary-400 flex items-center"
        >
          <span className="text-green-500 mr-1">&lt;</span>MB
          <span className="text-green-500">/&gt;</span>
        </a>

        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "transition duration-200",
                activeSection === link.href.substring(1)
                  ? "text-primary-600 dark:text-primary-400"
                  : "text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400"
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <a
            href="/assets/Milad_CV.pdf"
            className="py-3 px-6 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded-md transition duration-300"

          >
            Resume
          </a>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden bg-white dark:bg-slate-900 shadow-md absolute w-full animate-fade-in transition-all duration-300",
          mobileMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="container mx-auto px-4 py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 px-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md transition duration-200"
              onClick={closeMobileMenu}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/resume.pdf"
            className="py-2 px-4 bg-primary-600 hover:bg-primary-700 text-white rounded-md transition duration-200 text-center"
            onClick={closeMobileMenu}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
