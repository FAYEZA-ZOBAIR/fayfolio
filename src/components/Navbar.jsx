import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // 🧠 THIS WAS MISSING

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const menuVariants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <header className="w-full px-6 py-4 bg-white shadow-sm z-[60] fixed top-0 left-0 right-0 h-[64px]">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="text-[20px] sm:text-[22px] md:text-[24px] font-bold font-sora tracking-tight"
        >
          <span className="text-black">Fay</span>
          <span className="text-[#B9FF66]">Folio</span>
        </a>

        {/* Nav Links - Hidden on mobile */}
        <ul className="hidden md:flex gap-4 lg:gap-6 text-[14px] lg:text-[16px] font-medium font-sora text-black">
          <li><a href="#skills" className="hover:text-[#B9FF66] transition">Skills</a></li>
          <li><a href="#projects" className="hover:text-[#B9FF66] transition">Projects</a></li>
          <li><a href="#journey" className="hover:text-[#B9FF66] transition">Journey</a></li>
          <li><a href="#about" className="hover:text-[#B9FF66] transition">About Me</a></li>
          <li><a href="#contact" className="hover:text-[#B9FF66] transition">Contact</a></li>
        </ul>

        {/* CV Button - Hidden on mobile */}
        <a
          href="https://drive.google.com/file/d/1su6heqnfCK_CUEyqIoG0yqbY8kPBzrjT/view"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block"
        >
          <button className="bg-black text-white px-5 h-[40px] md:h-[44px] rounded-[4px] hover:bg-[#B9FF66] hover:text-black transition text-sm font-semibold font-sora">
            Download CV
          </button>
        </a>

        {/* Hamburger Menu - Shown on mobile */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-[100] flex flex-col items-center px-6 min-h-screen"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={backdropVariants}
          >
            {/* Close Button */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 text-black hover:text-[#B9FF66] transition"
            >
              <X size={28} />
            </button>

            {/* Mobile Menu Links */}
            <motion.nav
              className="flex flex-col justify-start items-center mt-20 gap-6 text-xl font-semibold font-sora text-black"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.a href="#skills" onClick={() => setMenuOpen(false)} variants={linkVariants}>Skills</motion.a>
              <motion.a href="#projects" onClick={() => setMenuOpen(false)} variants={linkVariants}>Projects</motion.a>
              <motion.a href="#journey" onClick={() => setMenuOpen(false)} variants={linkVariants}>Journey</motion.a>
              <motion.a href="#about" onClick={() => setMenuOpen(false)} variants={linkVariants}>About Me</motion.a>
              <motion.a href="#contact" onClick={() => setMenuOpen(false)} variants={linkVariants}>Contact</motion.a>

              {/* Mobile CV Button */}
              <motion.a
                href="https://drive.google.com/file/d/1su6heqnfCK_CUEyqIoG0yqbY8kPBzrjT/view"
                target="_blank"
                rel="noopener noreferrer"
                variants={linkVariants}
              >
                <button className="mt-8 bg-black text-white px-6 py-3 rounded-[4px] text-base hover:bg-[#B9FF66] hover:text-black transition font-sora">
                  Download CV
                </button>
              </motion.a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
