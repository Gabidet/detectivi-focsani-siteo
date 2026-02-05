import React from 'react';
import { Quote, Star } from 'lucide-react';
import { testimonials, aboutStats } from '../data/mockData';

const Testimonials = () => {
  return (
    <section id="testimoniale" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Identități Protejate
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ce Spun Clienții Noștri din Focșani
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Peste 500 de cazuri rezolvate cu succes în Focșani și împrejurimi. Iată câteva mărturii
            ale clienților noștri (identitățile sunt protejate conform GDPR).
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10 hover:border-[#c9a227]/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="mb-4">
                <Quote className="w-10 h-10 text-[#c9a227]/30" />
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 text-lg leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Blurred Image */}
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover blur-sm"
                  />
                  <div className="absolute inset-0 bg-[#c9a227]/20" />
                </div>

                <div className="flex-1">
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.role}</p>
                </div>

                <div className="text-right">
                  <div className="flex gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#c9a227] text-[#c9a227]" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">{testimonial.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {aboutStats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-gradient-to-br from-white/5 to-transparent rounded-xl p-6 border border-white/10"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#c9a227] mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
