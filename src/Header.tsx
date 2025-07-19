import { FC, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLink, { NavItem } from './NavLink';
interface HeaderProps {
  onLogin: () => void;
  onSignup: () => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'Markets', id: 'markets' },
  { label: 'Trade', id: 'trade' },
  { label: 'Portfolio', id: 'portfolio' },
  { label: 'News', id: 'news' },
];

const Header: FC<HeaderProps> = ({ onLogin, onSignup }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray/90 bg-opacity-80 backdrop-blur-md z-50">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <span
          className="text-2xl font-bold text-red-300 cursor-pointer"
          onClick={() => handleScroll('home')}
        >
          CryptRem
        </span>
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <NavLink key={item.id} item={item} onClick={handleScroll} />
          ))}
        </div>
        <div className="hidden md:flex space-x-4">
          <button
            onClick={onSignup}
            className="px-4 py-2 rounded-lg bg-primary text-red-300 transition-colors duration-200"
          >
            Sign Up
          </button>
          <button
            onClick={onLogin}
            className="px-4 py-2 rounded-lg border border-primary hover:bg-primary text-red-300 transition-all duration-200"
          >
            Log In
          </button>
        </div>
        <button
          onClick={() => setMobileOpen(open => !open)}
          className="md:hidden text-primary-light hover:text-primary-lighter focus:outline-none"
        >
          <svg width="24" height="24" fill="currentColor">
            {mobileOpen ? (
              <path
                d="M18 6L6 18M6 6l12 12"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            )}
          </svg>
        </button>
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-black shadow-lg overflow-hidden md:hidden"
            >
              <div className="flex flex-col p-4 space-y-2">
                {navItems.map(item => (
                  <NavLink key={item.id} item={item} onClick={handleScroll} />
                ))}
                <button
                  onClick={onSignup}
                  className="mt-2 px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white transition-colors duration-200"
                >
                  Sign Up
                </button>
                <button
                  onClick={onLogin}
                  className="mt-2 px-4 py-2 rounded-lg border border-primary hover:bg-primary hover:text-white text-primary transition-all duration-200"
                >
                  Log In
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;