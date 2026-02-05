import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { companyInfo, coveredAreas, serviceOptions } from '../data/mockData';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Label } from './ui/label';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-20 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-[#c9a227] text-sm font-semibold tracking-widest uppercase mb-3">
            Contactați-ne
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Contact Detectiv Focșani
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Contactați echipa noastră de detectivi particulari din Focșani pentru o consultație
            confidențială și gratuită.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Informații de Contact</h3>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              <a
                href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}
                className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c9a227]/30 transition-colors">
                  <Phone className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <p className="text-[#c9a227] font-bold text-lg">{companyInfo.phone}</p>
                  <p className="text-gray-500 text-sm">Disponibil 24/7</p>
                </div>
              </a>

              <a
                href={`mailto:${companyInfo.email}`}
                className="flex items-start gap-4 bg-white/5 rounded-xl p-5 border border-white/10 hover:border-[#c9a227]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#c9a227]/20 rounded-xl flex items-center justify-center group-hover:bg-[#c9a227]/30 transition-colors">
                  <Mail className="w-6 h-6 text-[#c9a227]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <p className="text-[#c9a227] font-bold">{companyInfo.email}</p>
                  <p className="text-gray-500 text-sm">Răspuns în maxim 2 ore</p>
                </div>
              </a>
            </div>

            {/* Location & Hours */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-5 h-5 text-[#c9a227]" />
                  <h4 className="text-white font-semibold">Locație</h4>
                </div>
                <p className="text-gray-400 text-sm">{companyInfo.address}</p>
                <p className="text-gray-400 text-sm">{companyInfo.city}, România</p>
                <p className="text-[#c9a227] text-sm mt-2 font-medium">Acoperim tot Județul Vrancea</p>
              </div>

              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="w-5 h-5 text-[#c9a227]" />
                  <h4 className="text-white font-semibold">Program</h4>
                </div>
                <p className="text-[#c9a227] font-bold">24/7 Disponibili</p>
                <p className="text-gray-400 text-sm mt-1">Situații de urgență acceptate</p>
              </div>
            </div>

            {/* Covered Areas */}
            <div>
              <h4 className="text-white font-semibold mb-4">Zone Acoperite de Detectivii Focșani</h4>
              <div className="flex flex-wrap gap-2">
                {coveredAreas.map((area, index) => (
                  <span
                    key={index}
                    className="bg-[#c9a227]/10 text-[#c9a227] px-3 py-1.5 rounded-full text-sm border border-[#c9a227]/20"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 rounded-2xl p-6 md:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-white mb-6">Formular de Contact</h3>

            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Send className="w-8 h-8 text-green-500" />
                </div>
                <h4 className="text-white text-xl font-semibold mb-2">Mesaj trimis cu succes!</h4>
                <p className="text-gray-400">Vă vom contacta în cel mai scurt timp.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Nume complet <span className="text-[#c9a227]">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
                    placeholder="Numele dumneavoastră"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
                    placeholder="email@exemplu.ro"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Telefon <span className="text-[#c9a227]">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227]"
                    placeholder="07XX XXX XXX"
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-white mb-2 block">
                    Serviciu solicitat
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => setFormData({ ...formData, service: value })}
                  >
                    <SelectTrigger className="bg-white/5 border-white/10 text-white">
                      <SelectValue placeholder="Selectați un serviciu" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1a1a2e] border-white/10">
                      {serviceOptions.slice(1).map((option) => (
                        <SelectItem
                          key={option.value}
                          value={option.value}
                          className="text-white hover:bg-white/10 focus:bg-white/10"
                        >
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white mb-2 block">
                    Mesaj <span className="text-[#c9a227]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#c9a227] resize-none"
                    placeholder="Descrieți pe scurt situația dumneavoastră..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#c9a227] hover:bg-[#b8922a] text-black font-semibold py-6"
                >
                  {isSubmitting ? (
                    'Se trimite...'
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Trimite Mesajul
                    </>
                  )}
                </Button>

                <p className="text-gray-500 text-sm text-center">
                  * Toate informațiile sunt strict confidențiale și protejate conform GDPR.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
