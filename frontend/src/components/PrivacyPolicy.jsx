import React from 'react';
import { ArrowLeft, Shield, FileText, Lock, Users, Clock, Mail, Phone } from 'lucide-react';
import { companyInfo } from '../data/mockData';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 text-[#c9a227] hover:text-[#b8922a] transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Înapoi la pagina principală
        </a>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#c9a227]/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#c9a227]" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-gray-400">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>

        {/* Content */}
        <div className="bg-white/5 rounded-2xl p-6 md:p-10 border border-white/10 space-y-10">
          
          {/* Introduction */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#c9a227]" />
              1. Introducere
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-white">CABINET INDIVIDUAL DETECTIV PARTICULAR ENE D. GABRIEL</strong>, 
                cu sediul în Focșani, Bulevardul Unirii, nr. 20, Județul Vrancea, România, 
                C.U.I. (cod fiscal): <strong className="text-white">29837817</strong>, 
                în calitate de operator de date cu caracter personal, se angajează să protejeze 
                confidențialitatea și securitatea datelor dumneavoastră personale.
              </p>
              <p>
                Prezenta Politică de Confidențialitate descrie modul în care colectăm, utilizăm, 
                stocăm și protejăm datele personale în conformitate cu Regulamentul (UE) 2016/679 
                privind protecția persoanelor fizice în ceea ce privește prelucrarea datelor cu 
                caracter personal (GDPR), Legea nr. 190/2018 privind măsuri de punere în aplicare 
                a Regulamentului GDPR și Legea nr. 329/2003 privind exercitarea profesiei de 
                detectiv particular.
              </p>
            </div>
          </section>

          {/* Data Collected */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#c9a227]" />
              2. Date Personale Colectate prin Site
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>Prin intermediul site-ului nostru și al formularelor de contact, colectăm următoarele categorii de date personale:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong className="text-white">Nume și prenume</strong> - pentru a vă putea identifica și contacta</li>
                <li><strong className="text-white">Adresa de email</strong> - pentru comunicări electronice</li>
                <li><strong className="text-white">Numărul de telefon</strong> - pentru a vă putea contacta rapid în legătură cu solicitarea dumneavoastră</li>
                <li><strong className="text-white">Serviciul solicitat</strong> - pentru a înțelege natura solicitării dumneavoastră</li>
                <li><strong className="text-white">Mesajul transmis</strong> - detalii despre situația pentru care solicitați serviciile noastre</li>
              </ul>
              <p>
                Aceste date sunt colectate exclusiv cu consimțământul dumneavoastră explicit, 
                acordat prin bifarea căsuței de acceptare din formularul de contact.
              </p>
            </div>
          </section>

          {/* Data Processed in Investigations */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#c9a227]" />
              3. Date Prelucrate în Activitatea de Investigații
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                În cadrul activității noastre de detectiv particular, prelucrăm date cu caracter 
                personal în conformitate cu <strong className="text-white">Legea nr. 329/2003</strong> privind 
                exercitarea profesiei de detectiv particular, cu modificările și completările ulterioare.
              </p>
              <p>
                Datele prelucrate în cadrul investigațiilor pot include, în funcție de natura cazului:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Date de identificare ale persoanelor investigate</li>
                <li>Informații privind localizarea și deplasările</li>
                <li>Imagini foto și video obținute legal</li>
                <li>Documente și înscrisuri relevante pentru investigație</li>
                <li>Alte date necesare îndeplinirii obiectivelor contractuale</li>
              </ul>
              <p>
                Toate activitățile de investigație sunt desfășurate cu respectarea strictă a 
                legislației în vigoare, a drepturilor fundamentale ale persoanelor și a principiilor 
                deontologice ale profesiei.
              </p>
            </div>
          </section>

          {/* Legal Basis */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#c9a227]" />
              4. Temeiul Legal al Prelucrării
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Prelucrăm datele dumneavoastră personale în baza următoarelor temeiuri legale 
                prevăzute de <strong className="text-white">Articolul 6 din GDPR</strong>:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Consimțământul</strong> (Art. 6 alin. 1 lit. a) - 
                  pentru datele colectate prin formularul de contact
                </li>
                <li>
                  <strong className="text-white">Executarea unui contract</strong> (Art. 6 alin. 1 lit. b) - 
                  pentru prelucrările necesare îndeplinirii obligațiilor contractuale
                </li>
                <li>
                  <strong className="text-white">Interesul legitim</strong> (Art. 6 alin. 1 lit. f) - 
                  pentru protejarea intereselor legitime ale clientului sau ale terților, 
                  în măsura în care nu prevalează drepturile persoanei vizate
                </li>
                <li>
                  <strong className="text-white">Obligația legală</strong> (Art. 6 alin. 1 lit. c) - 
                  pentru respectarea obligațiilor legale care ne revin
                </li>
              </ul>
              <p className="mt-4">
                În cazul prelucrării categoriilor speciale de date (date sensibile), ne bazăm pe 
                excepțiile prevăzute de <strong className="text-white">Articolul 9 alin. 2 din GDPR</strong>, 
                în special:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Lit. f) - constatarea, exercitarea sau apărarea unui drept în instanță</li>
                <li>Lit. g) - motive de interes public major, în baza legislației române</li>
              </ul>
            </div>
          </section>

          {/* Storage Duration */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[#c9a227]" />
              5. Durata Stocării Datelor
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>Datele personale sunt stocate pe perioade diferite, în funcție de natura lor:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Date din formularul de contact:</strong> păstrate pe 
                  durata necesară soluționării solicitării, dar nu mai mult de 1 an de la ultimul contact
                </li>
                <li>
                  <strong className="text-white">Dosare de investigație:</strong> conform Art. 10 din 
                  Legea 329/2003, registrele de evidență și documentele aferente investigațiilor se 
                  păstrează timp de <strong className="text-white">5 ani</strong> de la finalizarea cazului
                </li>
                <li>
                  <strong className="text-white">Documente contabile și fiscale:</strong> păstrate 
                  conform legislației fiscale, respectiv <strong className="text-white">10 ani</strong>
                </li>
                <li>
                  <strong className="text-white">Date necesare pentru litigii:</strong> până la 
                  soluționarea definitivă a eventualelor dispute
                </li>
              </ul>
              <p>
                La expirarea termenelor de stocare, datele sunt șterse sau anonimizate în mod securizat.
              </p>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Users className="w-5 h-5 text-[#c9a227]" />
              6. Drepturile Dumneavoastră
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>În conformitate cu GDPR, aveți următoarele drepturi în ceea ce privește datele dumneavoastră personale:</p>
              <ul className="list-disc list-inside space-y-3 ml-4">
                <li>
                  <strong className="text-white">Dreptul de acces</strong> (Art. 15 GDPR) - 
                  puteți solicita confirmarea prelucrării și o copie a datelor dumneavoastră
                </li>
                <li>
                  <strong className="text-white">Dreptul la rectificare</strong> (Art. 16 GDPR) - 
                  puteți solicita corectarea datelor inexacte sau completarea celor incomplete
                </li>
                <li>
                  <strong className="text-white">Dreptul la ștergere ("dreptul de a fi uitat")</strong> (Art. 17 GDPR) - 
                  puteți solicita ștergerea datelor în anumite condiții
                </li>
                <li>
                  <strong className="text-white">Dreptul la restricționarea prelucrării</strong> (Art. 18 GDPR) - 
                  puteți solicita limitarea prelucrării în anumite situații
                </li>
                <li>
                  <strong className="text-white">Dreptul la portabilitatea datelor</strong> (Art. 20 GDPR) - 
                  puteți solicita transferul datelor către alt operator
                </li>
                <li>
                  <strong className="text-white">Dreptul la opoziție</strong> (Art. 21 GDPR) - 
                  puteți să vă opuneți prelucrării în anumite situații
                </li>
                <li>
                  <strong className="text-white">Dreptul de a depune plângere</strong> - 
                  la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
                </li>
              </ul>
              <p className="mt-4">
                Pentru exercitarea acestor drepturi, ne puteți contacta la adresa de email: 
                <a href="mailto:detectiviexperti@gmail.com" className="text-[#c9a227] hover:underline ml-1">
                  detectiviexperti@gmail.com
                </a>
              </p>
            </div>
          </section>

          {/* Data Transfer */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#c9a227]" />
              7. Transferul și Divulgarea Datelor
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                <strong className="text-white">Nu vindem, nu închiriem și nu comercializăm</strong> datele 
                dumneavoastră personale către terți în niciun scop.
              </p>
              <p>Datele pot fi divulgate doar în următoarele situații:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  <strong className="text-white">Către client</strong> - rapoartele de investigație 
                  sunt furnizate exclusiv clientului contractant
                </li>
                <li>
                  <strong className="text-white">Autorități publice</strong> - la solicitarea expresă 
                  a organelor de cercetare penală sau a instanțelor de judecată
                </li>
                <li>
                  <strong className="text-white">Obligații legale</strong> - când suntem obligați 
                  prin lege să divulgăm anumite informații
                </li>
              </ul>
              <p>
                Nu transferăm date personale în afara Spațiului Economic European (SEE) decât cu 
                respectarea strictă a garanțiilor prevăzute de GDPR.
              </p>
            </div>
          </section>

          {/* Security */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Lock className="w-5 h-5 text-[#c9a227]" />
              8. Securitatea Datelor
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Implementăm măsuri tehnice și organizatorice adecvate pentru a asigura un nivel de 
                securitate corespunzător riscurilor, inclusiv:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Criptarea datelor în tranzit și în repaus</li>
                <li>Acces restricționat la date pe bază de necesitate</li>
                <li>Sisteme de backup și recuperare în caz de dezastru</li>
                <li>Evaluări periodice ale riscurilor de securitate</li>
                <li>Instruirea personalului privind protecția datelor</li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#c9a227]" />
              9. Date de Contact
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>Pentru orice întrebări sau solicitări privind datele dumneavoastră personale:</p>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10 mt-4">
                <p className="text-white font-semibold mb-3">CABINET INDIVIDUAL DETECTIV PARTICULAR ENE D. GABRIEL</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#c9a227]" />
                    <span>Email: <a href="mailto:detectiviexperti@gmail.com" className="text-[#c9a227] hover:underline">detectiviexperti@gmail.com</a></span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#c9a227]" />
                    <span>Telefon: <a href="tel:0725040500" className="text-[#c9a227] hover:underline">0725 040 500</a></span>
                  </li>
                  <li>Adresa: Bulevardul Unirii, nr. 20, Focșani, Județul Vrancea</li>
                  <li>C.U.I.: 29837817</li>
                </ul>
              </div>
              <p className="mt-4">
                De asemenea, aveți dreptul să depuneți o plângere la 
                <strong className="text-white"> Autoritatea Națională de Supraveghere a Prelucrării 
                Datelor cu Caracter Personal (ANSPDCP)</strong>:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer" className="text-[#c9a227] hover:underline">www.dataprotection.ro</a></li>
                <li>Email: anspdcp@dataprotection.ro</li>
              </ul>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
              <FileText className="w-5 h-5 text-[#c9a227]" />
              10. Modificări ale Politicii
            </h2>
            <div className="text-gray-300 space-y-4 leading-relaxed">
              <p>
                Ne rezervăm dreptul de a actualiza această Politică de Confidențialitate. 
                Orice modificări vor fi publicate pe această pagină, cu actualizarea datei 
                "Ultima actualizare". Vă recomandăm să verificați periodic această pagină.
              </p>
            </div>
          </section>

        </div>

        {/* Footer note */}
        <div className="text-center mt-8">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} CABINET INDIVIDUAL DETECTIV PARTICULAR ENE D. GABRIEL. 
            Toate drepturile rezervate.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
