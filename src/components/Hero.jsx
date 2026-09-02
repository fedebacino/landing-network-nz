import React from 'react';
import { Calendar, MapPin, ShieldCheck, Award, Users, CheckCircle, ArrowRight, Plane, Star } from 'lucide-react';
import CountdownTimer from './CountdownTimer';

export default function Hero({ onSelectSchool }) {
  return (
    <section className="relative overflow-hidden bg-radial-hero text-white pt-10 pb-20 lg:pt-14 lg:pb-28">
      {/* Decorative background grid and flight path elements */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#99c23b_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
      
      {/* Glow Circles */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-network-blue-light/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-network-green/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Main Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Event Tagline Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-blue-100 shadow-inner">
              <span className="w-2.5 h-2.5 rounded-full bg-network-green animate-ping"></span>
              <MapPin className="w-4 h-4 text-network-green" />
              <span>Buenos Aires • 17 de Septiembre</span>
              <span className="text-white/40">|</span>
              <span className="text-network-green font-bold">Cupos Limitados</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Estudiá en <span className="text-transparent bg-clip-text bg-gradient-to-r from-network-green to-[#d4ff6b]">Nueva Zelanda</span>
              <span className="block mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-100 font-sans">
                Conocé cara a cara a las directoras de 6 colegios de primer nivel
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg text-blue-100/90 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Un encuentro presencial y exclusivo en Buenos Aires para <strong>estudiantes secundarios</strong> y <strong>sus familias</strong>. Descubrí cómo vivir una experiencia educativa y de vida transformadora en el país más seguro del mundo, con el respaldo integral de <strong className="text-white">Network</strong>.
            </p>

            {/* Key Value Bullets */}
            <div className="grid sm:grid-cols-2 gap-3 pt-2 text-sm text-left max-w-xl mx-auto lg:mx-0">
              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <CheckCircle className="w-5 h-5 text-network-green shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Entrevistas 1 a 1</strong>
                  <span className="text-blue-200 text-xs">Conversá directo con las representantes de NZ</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <ShieldCheck className="w-5 h-5 text-network-green shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Convalidación de materias</strong>
                  <span className="text-blue-200 text-xs">Homologación garantizada en Argentina</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <Award className="w-5 h-5 text-network-green shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Familias auditadas (Homestay)</strong>
                  <span className="text-blue-200 text-xs">Máxima seguridad y contención diaria</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-white/5 border border-white/10 rounded-xl p-3 backdrop-blur-sm">
                <Users className="w-5 h-5 text-network-green shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white">Asesoramiento Network 360°</strong>
                  <span className="text-blue-200 text-xs">Trámites, visas y seguimiento continuo</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#registro"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-network-green hover:bg-network-green-hover text-network-blue-dark font-extrabold text-base sm:text-lg px-8 py-4 rounded-xl shadow-btn hover:shadow-btn-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Asegurar Mi Lugar Gratis</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#colegios"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm sm:text-base px-6 py-4 rounded-xl backdrop-blur-md transition-all text-center"
              >
                <span>Ver los 6 Colegios</span>
              </a>
            </div>

            {/* Social Proof Mini */}
            <div className="pt-2 flex items-center justify-center lg:justify-start gap-3 text-xs text-blue-200">
              <div className="flex -space-x-2">
                <img className="w-7 h-7 rounded-full border-2 border-network-blue object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="Alumna" />
                <img className="w-7 h-7 rounded-full border-2 border-network-blue object-cover" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&q=80" alt="Alumno" />
                <img className="w-7 h-7 rounded-full border-2 border-network-blue object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80" alt="Alumna" />
              </div>
              <div className="flex items-center gap-1 text-network-green">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span>Cientos de familias ya viajaron con nosotros</span>
            </div>
          </div>

          {/* Right Column: Interactive Countdown & Quick Card */}
          <div className="lg:col-span-5 space-y-6">
            {/* Countdown Component */}
            <CountdownTimer />

            {/* Feature Card Preview */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl text-white relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-network-green/20 rounded-full blur-2xl"></div>
              
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-network-green/20 border border-network-green/40 flex items-center justify-center text-network-green">
                  <Plane className="w-5 h-5 transform -rotate-45" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Colegios Confirmados</h3>
                  <p className="text-xs text-blue-200">Directoras presentes en Buenos Aires</p>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">Rosehill College</span>
                  <span className="text-blue-200">Auckland</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">Long Bay College</span>
                  <span className="text-blue-200">Auckland Costa</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">Liston College</span>
                  <span className="text-blue-200">Auckland (Varones)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">Taupo-nui-a-Tia College</span>
                  <span className="text-blue-200">Taupo (Outdoor)</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">Paraparaumu College</span>
                  <span className="text-blue-200">Kapiti Coast</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <span className="font-semibold text-white">King's High School</span>
                  <span className="text-blue-200">Dunedin (Varones)</span>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-white/15 text-center">
                <a
                  href="#registro"
                  className="text-xs font-bold text-network-green hover:text-network-green-light underline underline-offset-4 flex items-center justify-center gap-1.5"
                >
                  Registrarme para agendar entrevistas con ellos &rarr;
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
