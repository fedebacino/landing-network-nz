import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2, UserCheck, MessageSquare, Coffee, FileCheck, ArrowRight } from 'lucide-react';

export default function EventDetails() {
  return (
    <section id="el-evento" className="py-20 bg-gradient-to-br from-slate-900 via-network-blue-dark to-slate-900 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(#99c23b_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 bg-network-green text-network-blue-dark font-extrabold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider">
            17 de Septiembre • Buenos Aires
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mt-4 tracking-tight">
            ¿Cómo será la dinámica del evento?
          </h2>
          <p className="text-blue-100 text-base sm:text-lg mt-4">
            Un formato ágil, cálido y personalizado para que aproveches al máximo cada minuto con las delegadas de Nueva Zelanda y el equipo de Network.
          </p>
        </div>

        {/* 4 Steps Timeline */}
        <div className="grid md:grid-cols-4 gap-6 relative">
          
          {/* Step 1 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-network-green/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-network-green text-network-blue-dark font-black flex items-center justify-center text-lg mb-4 shadow-md">
                1
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Acreditación y Bienvenida</h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Recepción exclusiva de las familias registradas con entrega de carpeta informativa, folletería de cada colegio y credencial de acceso.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-network-green font-semibold">
              <Coffee className="w-4 h-4" />
              <span>Coffee Break & Networking</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-network-green/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-network-green text-network-blue-dark font-black flex items-center justify-center text-lg mb-4 shadow-md">
                2
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Charla Introductoria</h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Breve presentación sobre cómo funciona el año escolar en Nueva Zelanda, el estilo de vida kiwi y el sistema de convalidaciones en Argentina.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-network-green font-semibold">
              <CheckCircle2 className="w-4 h-4" />
              <span>Dudas iniciales resueltas</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-network-green/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-network-green text-network-blue-dark font-black flex items-center justify-center text-lg mb-4 shadow-md">
                3
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Entrevistas 1 a 1</h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Espacio de mesas privadas para conversar directamente con las directoras y representantes de los colegios que más te interesen (con traducción si se requiere).
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-network-green font-semibold">
              <MessageSquare className="w-4 h-4" />
              <span>Atención 100% personalizada</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/15 hover:border-network-green/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-network-green text-network-blue-dark font-black flex items-center justify-center text-lg mb-4 shadow-md">
                4
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Plan de Viaje con Network</h3>
              <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                Asesoramiento con nuestros consultores sobre cotizaciones, formas de pago, fechas de inicio (febrero / julio), trámite de visas y pasos a seguir.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 text-xs text-network-green font-semibold">
              <FileCheck className="w-4 h-4" />
              <span>Hoja de ruta clara para viajar</span>
            </div>
          </div>

        </div>

        {/* Quick Location & Schedule Card */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-network-green/20 border border-network-green/40 flex items-center justify-center text-network-green shrink-0">
              <Calendar className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-bold text-white text-lg sm:text-xl">
                Martes 17 de Septiembre • 19:00 hs
              </h4>
              <p className="text-blue-200 text-xs sm:text-sm">
                Buenos Aires, Argentina • Recepción puntual
              </p>
            </div>
          </div>

          <a
            href="#registro"
            className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-network-green hover:bg-network-green-hover text-network-blue-dark font-extrabold text-sm px-6 py-3.5 rounded-xl shadow-btn transition-all text-center"
          >
            <span>Reservar Mi Lugar Gratuito</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
