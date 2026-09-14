import { useState, useEffect } from 'react';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0D0D1A]/95 backdrop-blur-md border-b border-[#2A2A45] shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-[#E8E8F0] hover:text-[#FF2E90] transition-colors p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Brand logo + name */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-btn flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="text-xl font-bold text-[#E8E8F0]">Dev Stack</span>
          </div>

          {/* Center nav links - Desktop */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#9494B8] hover:text-[#E8E8F0] transition-colors text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right side buttons - Desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#contact" className="px-4 py-2 text-[#E8E8F0] hover:text-[#FF2E90] transition-colors text-sm font-medium">
              Sign In
            </a>
            <a href="#contact" className="gradient-btn text-white px-5 py-2 rounded-full text-sm font-semibold">
              Sign Up
            </a>
          </div>

          {/* Mobile menu buttons */}
          <div className="lg:hidden flex items-center gap-2">
            <a href="#contact" className="px-3 py-1.5 text-[#E8E8F0] hover:text-[#FF2E90] transition-colors text-sm font-medium">
              Sign In
            </a>
            <a href="#contact" className="gradient-btn text-white px-4 py-1.5 rounded-full text-sm font-semibold">
              Sign Up
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#1A1A2E]/98 backdrop-blur-md border-b border-[#2A2A45]">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#9494B8] hover:text-[#E8E8F0] transition-colors text-base font-medium py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
