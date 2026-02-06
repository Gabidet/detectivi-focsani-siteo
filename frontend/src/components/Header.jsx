import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { companyInfo, mottos } from '../data/mockData';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentMotto, setCurrentMotto] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMotto((prev) => (prev + 1) % mottos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '/', label: 'Acasă' },
    { href: '/#servicii', label: 'Servicii' },
    { href: '/#despre', label: 'Despre Noi' },
    { href: '/blog', label: 'Blog' },
    { href: '/#contact', label: 'Contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0a0f]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#c9a227] text-black py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm font-medium">
          <span>100% Confidențial</span>
          <span>Firmă Autorizată IGPR</span>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#acasa" className="flex items-center gap-4">
            <img
              src={companyInfo.logo}
              alt="Detectivi Focșani Logo"
              className="h-28 w-28 object-contain rounded-full"
            />
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-wide">DETECTIVI</span>
              <span className="text-[#c9a227] text-base font-semibold tracking-widest">FOCȘANI</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#c9a227] transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
              <Button className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold px-6">
                <Phone className="w-4 h-4 mr-2" />
                {companyInfo.phone}
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-[#c9a227] transition-colors font-medium py-2"
                >
                  {link.label}
                </a>
              ))}
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                <Button className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold w-full mt-2">
                  <Phone className="w-4 h-4 mr-2" />
                  {companyInfo.phone}
                </Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
