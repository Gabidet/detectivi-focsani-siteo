import React from 'react';
import { MapPin } from 'lucide-react';
import { companyInfo, coveredAreas } from '../data/mockData';

const MapSection = () => {
  return (
    <section className="py-20 bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Aria de Acoperire
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Activăm în tot Județul Vrancea și zonele limitrofe
          </h2>
          <p className="text-gray-400 flex items-center justify-center gap-2">
            <MapPin className="w-5 h-5 text-[#c9a227]" />
            Sediu: {companyInfo.address}, {companyInfo.city}
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-square">
            <iframe
              title="Locație Detectivi Focșani"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11219.378279874672!2d27.17!3d45.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b6de7d0f4a3a9d%3A0x1234567890abcdef!2sBulevardul%20Unirii%2020%2C%20Foc%C8%99ani%2C%20Romania!5e0!3m2!1sro!2sro!4v1706000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
            
            {/* Overlay with covered areas */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0f]/90 to-transparent p-3">
              <div className="flex flex-wrap gap-2 justify-center">
                {coveredAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-[#c9a227] text-black px-3 py-1.5 rounded-full text-xs font-semibold"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
