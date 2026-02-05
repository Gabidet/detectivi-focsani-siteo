import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo, mottos, stats } from '../data/mockData';
import { Button } from './ui/button';

const Hero = () => {
  const [currentMotto, setCurrentMotto] = useState(0);
  const [fadeState, setFadeState] = useState('visible');

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState('hidden');
      setTimeout(() => {
        setCurrentMotto((prev) => (prev + 1) % mottos.length);
        setFadeState('visible');
      }, 500);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="acasa"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a0a0f 0%, #1a1a2e 50%, #0a0a0f 100%)'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#c9a227]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Detectivi <span className="text-[#c9a227]">Focșani</span>
          </h1>

          {/* Rotating motto */}
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <p
              className={`text-xl md:text-2xl lg:text-3xl text-gray-300 italic transition-opacity duration-500 ${
                fadeState === 'visible' ? 'opacity-100' : 'opacity-0'
              }`}
            >
              „{mottos[currentMotto]}"
            </p>
          </div>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-[#c9a227] font-semibold mb-6">
            Detectivi Particulari Profesioniști
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Cea mai experimentată agenție de detectivi particulari din Focșani. Oferim servicii
            complete de investigații private cu discretie absolută și rezultate garantate.{' '}
            <strong className="text-white">
              Experiență de peste 15 ani în investigații private în Focșani și împrejurimi.
            </strong>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
              <Button
                size="lg"
                className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5 mr-2" />
                Apelează: {companyInfo.phone}
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 font-bold text-lg px-8 py-6 w-full sm:w-auto"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Consultație Gratuită
              </Button>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#c9a227]/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
