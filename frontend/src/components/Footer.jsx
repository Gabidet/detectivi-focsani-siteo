import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-white/10">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={companyInfo.logo}
                alt="Detectivi Focșani Logo"
                className="h-12 w-12 object-contain rounded-full"
              />
              <div>
                <span className="text-lg font-bold text-white">DETECTIVI</span>
                <span className="block text-[#c9a227] text-sm font-semibold">FOCȘANI</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Agenție de detectivi particulari licențiată și autorizată în Focșani. 
              Investigații private profesionale cu discretie absolută și rezultate garantate.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Linkuri Rapide</h4>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Acasă' },
                { href: '/#servicii', label: 'Servicii' },
                { href: '/#despre', label: 'Despre Noi' },
                { href: '/blog', label: 'Blog' },
                { href: '/#contact', label: 'Contact' },
                { href: '/politica-confidentialitate', label: 'Politica de Confidențialitate' }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 text-[#c9a227]" />
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="flex items-center gap-3 text-gray-400 hover:text-[#c9a227] transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 text-[#c9a227]" />
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <MapPin className="w-4 h-4 text-[#c9a227] mt-0.5" />
                <span>
                  {companyInfo.address}<br />
                  {companyInfo.city}, România
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Detectivi Focșani. Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
