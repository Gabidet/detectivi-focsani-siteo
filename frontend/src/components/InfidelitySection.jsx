import React from 'react';
import { Eye, FileCheck, Shield, Phone, CheckCircle } from 'lucide-react';
import { companyInfo } from '../data/mockData';
import { Button } from './ui/button';

const InfidelitySection = () => {
  const features = [
    {
      icon: Eye,
      title: "Investigații discrete",
      description: "Monitorizare, supraveghere foto-video și verificări de context, realizate legal și profesionist."
    },
    {
      icon: FileCheck,
      title: "Dovezi verificabile",
      description: "Rapoarte detaliate și materiale foto/video pregătite pentru utilizare juridică dacă este nevoie."
    },
    {
      icon: Shield,
      title: "Consultanță confidențială",
      description: "Analizăm situația, stabilim strategia optimă și îți prezentăm opțiunile, fără presiune."
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden min-h-[700px]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-right bg-no-repeat"
        style={{
          backgroundImage: `url('https://customer-assets.emergentagent.com/job_a6e7e9b0-0fe7-4305-96be-d63ea68c51f3/artifacts/q9jar7vn_Detectiv%20Focsani.jpg')`
        }}
      />
      
      {/* Dark Overlay - stronger on left, transparent on right to show image */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/90 to-[#0a0a0f]/40" />
      
      {/* Top and bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
      
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#c9a227]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#c9a227]/10 border border-[#c9a227]/30 rounded-full px-4 py-2 mb-6">
              <Eye className="w-4 h-4 text-[#c9a227]" />
              <span className="text-[#c9a227] text-sm font-medium">Verificare Fidelitate</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Ai suspiciuni?{' '}
              <span className="text-[#c9a227]">Adevărul îți aduce liniștea!</span>
            </h2>

            {/* Subheading */}
            <p className="text-xl text-gray-300 font-medium mb-6">
              Rapid, discret, profesionist.
            </p>

            {/* Highlight text */}
            <p className="text-lg text-[#c9a227] font-semibold mb-6 border-l-4 border-[#c9a227] pl-4">
              Investigații de infidelitate efectuate cu tact și dovezi incontestabile.
            </p>

            {/* Description */}
            <p className="text-gray-400 leading-relaxed mb-8">
              Nu trăi în incertitudine. Fie că e vorba de schimbări subtile de comportament, 
              mesaje șterse sau nopți petrecute „la serviciu", suspiciunile pot distruge viața. 
              Detectivii noștri specializați în infidelitate transformă îndoiala în certitudine, 
              oferindu-ți informațiile necesare pentru a lua decizii clare, fără dramatism inutil 
              și cu maximă discreție.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
                <Button 
                  size="lg" 
                  className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-bold px-8 py-6 w-full sm:w-auto"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Sună Acum: {companyInfo.phone}
                </Button>
              </a>
              <a href="#contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[#c9a227] text-[#c9a227] hover:bg-[#c9a227]/10 font-bold px-8 py-6 w-full sm:w-auto"
                >
                  Consultație Gratuită
                </Button>
              </a>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6">Ce oferim:</h3>
            
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#c9a227]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                >
                  <div className="flex gap-5">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c9a227]/30 transition-colors">
                      <IconComponent className="w-7 h-7 text-[#c9a227]" />
                    </div>
                    
                    {/* Content */}
                    <div>
                      <h4 className="text-lg font-bold text-white mb-2 group-hover:text-[#c9a227] transition-colors">
                        {feature.title}
                      </h4>
                      <p className="text-gray-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-4 pt-4">
              {['100% Confidențial', 'Dovezi Legale', '24/7 Disponibil'].map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfidelitySection;
