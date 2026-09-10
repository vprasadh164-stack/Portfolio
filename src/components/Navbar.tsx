import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenPlayground: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPlayground }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Live India Time Clock (IST)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-GB', options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'WORK', id: 'work' },
    { label: 'ABOUT', id: 'about' },
    { label: 'EXPERIENCE', id: 'experience' },
    { label: 'PLAYGROUND', action: onOpenPlayground, isSpecial: true },
    { label: 'CONTACT', id: 'contact' },
  ];

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/85 backdrop-blur-md border-b border-[#222220] py-4'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Brand Left */}
          <div className="flex items-center gap-6">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="text-lg md:text-xl font-bold tracking-tight text-[#E8E8E5] hover:text-white transition-colors focus:outline-none"
              aria-label="Venkatesh Home"
            >
              {PERSONAL_INFO.shortName}
            </button>

            {/* India live clock - subtle pill */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full border border-[#2a2a28] bg-[#161615] text-[11px] font-mono-code text-[#A3A39E]">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>INDIA</span>
              <span className="text-[#E8E8E5] font-medium">{currentTime || '12:00:00'} IST</span>
            </div>
          </div>

          {/* Status badge: Available for Opportunities */}
          <div className="hidden xl:flex items-center gap-2 text-[11px] font-mono-code uppercase tracking-wider text-[#A3A39E]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>AVAILABLE FOR OPPORTUNITIES</span>
          </div>

          {/* Desktop Links Right */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => (item.action ? item.action() : scrollToSection(item.id!))}
                className={`text-xs md:text-sm font-medium tracking-wider uppercase transition-colors relative py-1 group ${
                  item.isSpecial
                    ? 'text-white flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#333330] hover:border-[#E8E8E5] bg-[#1c1c1a]'
                    : 'text-[#A3A39E] hover:text-[#E8E8E5]'
                }`}
              >
                {item.isSpecial && <Sparkles className="w-3 h-3 text-[#E8E8E5]" />}
                {item.label}
                {!item.isSpecial && (
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E8E8E5] transition-all duration-300 group-hover:w-full" />
                )}
              </button>
            ))}
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onOpenPlayground}
              className="px-2.5 py-1 text-[11px] font-mono-code uppercase tracking-wider border border-[#333330] rounded-full text-[#E8E8E5] bg-[#181817] flex items-center gap-1"
            >
              <Sparkles className="w-2.5 h-2.5 text-[#E8E8E5]" />
              SIM
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#E8E8E5] hover:text-white focus:outline-none"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-[#111111] text-[#E8E8E5] flex flex-col justify-between p-8 md:hidden"
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between border-b border-[#222220] pb-6">
              <span className="text-xl font-bold tracking-tight">{PERSONAL_INFO.shortName}</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 rounded-full border border-[#2a2a28] hover:bg-[#222220]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Links with Massive Editorial Typography */}
            <div className="flex flex-col gap-6 my-auto">
              {navLinks.map((item, idx) => (
                <button
                  key={item.label}
                  onClick={() => {
                    if (item.action) {
                      setMobileMenuOpen(false);
                      item.action();
                    } else {
                      scrollToSection(item.id!);
                    }
                  }}
                  className="text-left group flex items-baseline justify-between border-b border-[#1c1c1a] pb-4"
                >
                  <span className="text-3xl font-extrabold tracking-tighter group-hover:translate-x-2 transition-transform">
                    {item.label}
                  </span>
                  <span className="font-mono-code text-xs text-[#73736f]">0{idx + 1}</span>
                </button>
              ))}
            </div>

            {/* Mobile Footer with Live Info */}
            <div className="border-t border-[#222220] pt-6 flex flex-col gap-4 text-xs font-mono-code text-[#A3A39E]">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AVAILABLE FOR OPPORTUNITIES
                </span>
                <span>INDIA {currentTime} IST</span>
              </div>
              <div className="flex justify-between items-center text-[#E8E8E5]">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="underline underline-offset-4 flex items-center gap-1"
                >
                  Get in touch <ArrowUpRight className="w-3 h-3" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 flex items-center gap-1"
                >
                  LinkedIn <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
