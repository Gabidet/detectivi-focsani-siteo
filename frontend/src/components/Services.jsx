import React from 'react';
import { Heart, Eye, Radio, Activity, Search, Building, Users, FileWarning, Phone, CheckCircle } from 'lucide-react';
import { services, companyInfo } from '../data/mockData';
import { Button } from './ui/button';

const iconMap = {
  Heart: Heart,
  Eye: Eye,
  Radio: Radio,
  Activity: Activity,
  Search: Search,
  Building: Building,
  Users: Users,
  FileWarning: FileWarning
};

const Services = () => {
  return (
    <section id="servicii" className="py-20 bg-[#0f0f14]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Servicii Detectiv Particular Focșani
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Serviciile Noastre de Investigații Private
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Oferim servicii complete de detectiv particular în Focșani, adaptate nevoilor
            dumneavoastră. Echipa noastră de detectivi profesioniști vă garantează discretie și
            rezultate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#c9a227]/50 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="w-14 h-14 bg-[#c9a227]/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#c9a227]/30 transition-colors">
                  <IconComponent className="w-7 h-7 text-[#c9a227]" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#c9a227] transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-[#c9a227] flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center bg-gradient-to-r from-[#c9a227]/10 via-[#c9a227]/5 to-[#c9a227]/10 rounded-2xl p-8 border border-[#c9a227]/20">
          <p className="text-gray-300 mb-4">
            Nu găsiți serviciul de care aveți nevoie? Contactați-ne pentru o consultație personalizată.
          </p>
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
            <Button className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold px-8">
              <Phone className="w-4 h-4 mr-2" />
              Solicită Ofertă: {companyInfo.phone}
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
