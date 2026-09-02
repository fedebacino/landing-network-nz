import React, { useState } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip message */}
      {showTooltip && (
        <div className="bg-white text-slate-800 text-xs font-medium py-2.5 px-4 rounded-2xl shadow-xl border border-slate-200 max-w-xs flex items-center justify-between gap-3 animate-float">
          <span>
            💬 ¿Tenés dudas sobre el evento del 17 de Septiembre? <strong>Escribinos</strong>
          </span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-slate-600 p-0.5"
            aria-label="Cerrar mensaje"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href="https://wa.me/5491100000000?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20colegios%20de%20Nueva%20Zelanda%20del%2017%20de%20septiembre"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 hover:scale-110 active:scale-95 transition-transform drop-shadow-2xl flex items-center justify-center glow-effect"
        title="Chatear por WhatsApp con Network"
      >
        <WhatsAppIcon colored={true} className="w-14 h-14" />
      </a>
    </div>
  );
}
