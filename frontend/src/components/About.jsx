import React from 'react';
import { Shield, Clock, Lock, FileCheck, CheckCircle } from 'lucide-react';
import { companyInfo, aboutStats, features } from '../data/mockData';

const iconMap = {
  Shield: Shield,
  Clock: Clock,
  Lock: Lock,
  FileCheck: FileCheck
};

const About = () => {
  return (
    <section id="despre" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Despre DETECTIVI FOCȘANI
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Agenție de Detectivi Particulari în Focșani
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              <strong className="text-[#c9a227]">DETECTIVI FOCȘANI</strong> este liderul
              serviciilor de investigații private în Județul Vrancea. Cu peste 15 ani de experiență,
              echipa noastră de detectivi particulari oferă soluții profesionale pentru toate
              tipurile de investigații. Suntem specializați în verificare fidelitate, supraveghere
              partener, background check și investigații corporate în Focșani și împrejurimi.
              Oferim și servicii de detectare camere și microfoane spion precum și teste
              poligraf/detector de minciuni.
            </p>

            <p className="text-gray-400 leading-relaxed mb-8">
              Echipa noastră de <strong className="text-white">detectivi particulari din Focșani</strong>{' '}
              este formată din investigatori experimentați și atestați conform legislației în
              vigoare. Folosim cele mai eficiente metode investigative, tehnologie de ultimă
              generație și metode legale pentru a obține dovezi admisibile în instanță.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => {
                const IconComponent = iconMap[feature.icon];
                return (
                  <div
                    key={index}
                    className="flex items-center gap-3 bg-white/5 rounded-lg p-4 border border-white/10"
                  >
                    <div className="w-10 h-10 bg-[#c9a227]/20 rounded-lg flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#c9a227]" />
                    </div>
                    <span className="text-white font-medium">{feature.text}</span>
                  </div>
                );
              })}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {aboutStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-[#c9a227]/10 to-transparent rounded-xl p-4 border border-[#c9a227]/20"
                >
                  <div className="text-2xl md:text-3xl font-bold text-[#c9a227] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - License Card */}
          <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl p-8 border border-white/10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#c9a227]/20 rounded-full flex items-center justify-center">
                <FileCheck className="w-6 h-6 text-[#c9a227]" />
              </div>
              <div>
                <span className="text-[#c9a227] text-sm font-medium">Document Oficial</span>
                <h3 className="text-xl font-bold text-white">Agenție Licențiată și Autorizată</h3>
              </div>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Suntem o agenție de detectivi particulari pe deplin autorizată să funcționeze conform
              legislației române. Licența noastră garantează că toate investigațiile sunt efectuate
              legal, iar dovezile obținute sunt{' '}
              <strong className="text-white">admisibile în instanță</strong>.
            </p>

            {/* License Features */}
            <div className="space-y-3 mb-6">
              {['Licență IGPR', 'Asigurare Profesională', 'Conformitate GDPR'].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-[#c9a227]" />
                  <span className="text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* License Image Placeholder */}
            <div className="relative rounded-xl overflow-hidden border border-white/10">
              <div className="aspect-[4/3] bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] flex items-center justify-center">
                <div className="text-center">
                  <Shield className="w-16 h-16 text-[#c9a227]/50 mx-auto mb-4" />
                  <p className="text-gray-500 text-sm">Licență verificată și activă</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coverage note */}
        <div className="mt-12 text-center">
          <p className="text-[#c9a227] font-medium">
            Acoperim întregul Județ Vrancea și zonele limitrofe
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
