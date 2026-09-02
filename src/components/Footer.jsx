import React from 'react';
import { MapPin, Mail, Globe, ArrowUp, Phone } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-network-blue-dark text-white pt-16 pb-12 border-t border-white/10 relative">
      <div className="brand-rainbow-bar absolute top-0 left-0 right-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <img
              src="/assets/logo-network.png"
              alt="Network"
              className="h-10 w-auto object-contain brightness-0 invert"
            />
            <p className="text-xs sm:text-sm text-blue-200 leading-relaxed">
              <strong>Network | Viajes • Turismo • Educación</strong>. Conectamos a estudiantes con experiencias internacionales de primer nivel, con acompañamiento humano, seguro y personalizado en cada etapa.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://network.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-network-green hover:text-network-blue-dark flex items-center justify-center transition-all"
                title="Sitio Web Oficial"
              >
                <Globe className="w-4 h-4" />
              </a>
              {/* WhatsApp Icon */}
              <a
                href="https://wa.me/5491170083601?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20colegios%20de%20Nueva%20Zelanda%20del%2017%20de%20septiembre"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all"
                title="WhatsApp Oficial"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              {/* Instagram SVG */}
              <a
                href="https://www.instagram.com/networkargentina/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-network-green hover:text-network-blue-dark flex items-center justify-center transition-all"
                title="Instagram: @Networkargentina"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* Facebook SVG */}
              <a
                href="https://www.facebook.com/NetworkArgentina"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/10 hover:bg-network-green hover:text-network-blue-dark flex items-center justify-center transition-all"
                title="Facebook: NetworkArgentina"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Event Details */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-base">El Evento</h4>
            <ul className="space-y-2 text-blue-200">
              <li className="flex items-start gap-2">
                <span className="text-network-green font-bold">•</span>
                <span>Martes 17 de Septiembre • 19:00 hs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-network-green font-bold">•</span>
                <span>Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-network-green font-bold">•</span>
                <span>6 Colegios de Nueva Zelanda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-network-green font-bold">•</span>
                <span>Entrevistas personalizadas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-network-green font-bold">•</span>
                <span>Entrada libre con inscripción previa</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Schools */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-base">Colegios Participantes</h4>
            <ul className="space-y-1.5 text-blue-200">
              <li>Rosehill College (Auckland)</li>
              <li>Long Bay College (Auckland)</li>
              <li>Liston College (Auckland)</li>
              <li>Taupo-nui-a-Tia College (Taupo)</li>
              <li>Paraparaumu College (Kapiti)</li>
              <li>King's High School (Dunedin)</li>
            </ul>
          </div>

          {/* Col 4: Contact Network */}
          <div className="space-y-3 text-xs sm:text-sm">
            <h4 className="font-bold text-white text-base">Contacto Network</h4>
            <div className="space-y-2.5 text-blue-200">
              <p className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-network-green shrink-0" />
                <a href="https://network.com.ar" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  network.com.ar
                </a>
              </p>
              <p className="flex items-center gap-2">
                <WhatsAppIcon className="w-4 h-4 text-network-green shrink-0" />
                <a href="https://wa.me/5491170083601" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  +54 9 11 7008-3601
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-network-green shrink-0" />
                <span>info@network.com.ar</span>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-network-green shrink-0" />
                <span>Buenos Aires, Argentina</span>
              </p>
            </div>
            <div className="pt-2">
              <a
                href="#registro"
                className="w-full inline-flex items-center justify-center bg-network-green hover:bg-network-green-hover text-network-blue-dark font-bold text-xs py-2.5 px-4 rounded-xl shadow-btn transition-all"
              >
                Inscribirme al Evento
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-300/80">
          <p>
            © {new Date().getFullYear()} Network (Viajes | Turismo | Educación). Todos los derechos reservados.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-network-green hover:text-network-green-light font-semibold transition-colors"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
