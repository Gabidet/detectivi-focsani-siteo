import React from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { Button } from './ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050508] border-t border-white/10">
      {/* WhatsApp CTA */}
      <div className="py-8 bg-gradient-to-r from-[#c9a227]/10 via-[#c9a227]/5 to-[#c9a227]/10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <a
            href={`https://wa.me/${companyInfo.whatsapp}?text=Bună%20ziua!%20Doresc%20mai%20multe%20informații.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              Scrie-ne pe WhatsApp
            </Button>
          </a>
        </div>
      </div>

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
                { href: '#acasa', label: 'Acasă' },
                { href: '#servicii', label: 'Servicii' },
                { href: '#despre', label: 'Despre Noi' },
                { href: '#testimoniale', label: 'Testimoniale' },
                { href: '#contact', label: 'Contact' }
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
