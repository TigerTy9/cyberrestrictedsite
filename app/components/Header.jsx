import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black/80 text-white px-6 py-5 mx-auto rounded-xl mt-6 shadow-lg border border-purple-500 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="inline-flex items-center gap-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="text-purple-400 font-bold">📚</span>
          </motion.div>
          <span className="text-xl font-bold tracking-widest glitch-text">GlitchBooks</span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center space-x-10 font-medium">
          {['Home', 'Books', 'About'].map((label, i) => (
            <li key={i}>
              <NavLink
                to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                className={({ isActive }) =>
                  isActive ? 'text-purple-400 neon-text' : 'hover:text-purple-300 transition'
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            onClick={() => setIsMenuOpen(true)}
            className="text-purple-400 hover:text-purple-300 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-0 left-0 w-full bg-black border-b border-purple-500 z-50"
          >
            <div className="p-5">
              <div className="flex items-center justify-between mb-4">
                <Link to="/" className="inline-flex items-center gap-2">
                  <span className="text-purple-400 font-bold">📚</span>
                  <span className="text-xl font-bold tracking-widest glitch-text">GlitchBooks</span>
                </Link>
                <button
                  aria-label="Close Menu"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-purple-400 hover:text-purple-300 text-2xl"
                >
                  ✕
                </button>
              </div>
              <nav>
                <ul className="space-y-4">
                  {['Home', 'Books', 'About'].map((label, i) => (
                    <li key={i}>
                      <Link
                        to={label === 'Home' ? '/' : `/${label.toLowerCase()}`}
                        className="block text-white hover:text-purple-300 font-medium"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;