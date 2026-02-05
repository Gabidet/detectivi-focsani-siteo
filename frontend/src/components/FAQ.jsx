import React from 'react';
import { Phone } from 'lucide-react';
import { faqs, companyInfo } from '../data/mockData';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ = () => {
  return (
    <section className="py-20 bg-[#0f0f14]">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Întrebări Frecvente
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Întrebări Despre Detectiv Particular Focșani
          </h2>
          <p className="text-gray-400">
            Răspunsuri la cele mai frecvente întrebări despre serviciile noastre de detectivi în
            Focșani.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`item-${faq.id}`}
              className="bg-white/5 border border-white/10 rounded-xl px-6 data-[state=open]:border-[#c9a227]/50"
            >
              <AccordionTrigger className="text-white hover:text-[#c9a227] text-left py-5 hover:no-underline">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-gray-400 pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Aveți alte întrebări? Contactați echipa noastră de detectivi din Focșani.
          </p>
          <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>
            <Button className="bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold px-8">
              <Phone className="w-4 h-4 mr-2" />
              {companyInfo.phone} - Consultație Gratuită
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
