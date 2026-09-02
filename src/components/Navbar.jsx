import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, Sparkles, Menu, X, ArrowRight, MessageCircle } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Notification Bar */}
      <div className="bg-network-blue-dark text-white text-xs sm:text-sm py-2 px-4 border-b border-white/10 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3 mx-auto md:mx-0">
            <span className="inline-flex items-center gap-1.5 bg-network-green text-network-blue-dark font-bold px-2.5 py-0.5 rounded-full text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 fill-current" /> Evento Exclusivo
            </span>
            <span className="flex items-center gap-1 font-medium text-blue-100">
              <MapPin className="w-3.5 h-3.5 text-network-green" /> Buenos Aires
            </span>
            <span className="text-white/40 hidden sm:inline">•</span>
            <span className="flex items-center gap-1 font-semibold text-white">
              <Calendar className="w-3.5 h-3.5 text-network-green" /> 17 de Septiembre
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-blue-200 text-xs">
            <span>6 Directoras de Colegios en persona</span>
            <span className="text-white/40">•</span>
            <span className="text-network-green font-semibold">Entrada Gratuita con Registro</span>
          </div>
        </div>
      </div>

      {/* Brand Rainbow Bar */}
      <div className="brand-rainbow-bar"></div>

      {/* Main Sticky Navigation */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2 sm:py-2.5'
            : 'bg-white py-2.5 sm:py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Network */}
          <a href="#" className="flex items-center gap-2 group shrink-0">
            <img
              src="/assets/logo-network.png"
              alt="Network - Viajes | Turismo | Educación"
              className="h-12 sm:h-14 lg:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#experiencia" className="hover:text-network-blue transition-colors">
              Para Padres y Chicos
            </a>
            <a href="#colegios" className="hover:text-network-blue transition-colors">
              Colegios de NZ
            </a>
            <a href="#por-que-nz" className="hover:text-network-blue transition-colors">
              ¿Por qué Nueva Zelanda?
            </a>
            <a href="#el-evento" className="hover:text-network-blue transition-colors">
              El Evento
            </a>
            <a href="#faq" className="hover:text-network-blue transition-colors">
              Preguntas
            </a>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20evento%20de%20colegios%20de%20Nueva%20Zelanda%20del%2017%20de%20septiembre"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 text-slate-600 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all"
              title="Consultar por WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-green-600" />
            </a>

            <a
              href="#registro"
              className="inline-flex items-center gap-2 bg-network-green hover:bg-network-green-hover text-network-blue-dark font-bold text-sm px-5 py-2.5 rounded-xl shadow-btn hover:shadow-btn-hover transition-all transform active:scale-95"
            >
              <span>Reservar Mi Lugar</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="#registro"
              className="bg-network-green text-network-blue-dark font-bold text-xs px-3 py-2 rounded-lg"
            >
              Reservar
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-100 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <a
              href="#experiencia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-network-blue"
            >
              Para Padres y Chicos
            </a>
            <a
              href="#colegios"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-network-blue"
            >
              Colegios de NZ
            </a>
            <a
              href="#por-que-nz"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-network-blue"
            >
              ¿Por qué Nueva Zelanda?
            </a>
            <a
              href="#el-evento"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-network-blue"
            >
              El Evento
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-slate-700 font-medium hover:text-network-blue"
            >
              Preguntas Frecuentes
            </a>
            <div className="pt-2">
              <a
                href="#registro"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-network-green text-network-blue-dark font-bold py-3 rounded-xl shadow-btn text-center"
              >
                <span>Registrarme Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
