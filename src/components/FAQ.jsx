import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/schoolsData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-network-blue font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Despejá tus dudas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-network-blue-dark mt-3 tracking-tight">
            Preguntas Frecuentes
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Todo lo que necesitás saber sobre el evento del 17 de septiembre y los programas de intercambio en Nueva Zelanda.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200 bg-slate-50/50 hover:bg-slate-50"
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? 'bg-network-blue text-white rotate-180' : 'bg-slate-200 text-slate-700'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3 bg-white">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Help CTA */}
        <div className="mt-12 text-center bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <p className="text-sm font-semibold text-slate-800 mb-2">
            ¿Tenés alguna otra consulta específica?
          </p>
          <p className="text-xs text-slate-600 mb-4">
            Nuestro equipo de Network está a tu disposición para ayudarte.
          </p>
          <a
            href="https://wa.me/5491100000000?text=Hola!%20Tengo%20una%20consulta%20sobre%20el%20evento%20de%20Nueva%20Zelanda"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-network-blue hover:text-network-blue-light hover:underline"
          >
            <span>Escribinos por WhatsApp directo &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
