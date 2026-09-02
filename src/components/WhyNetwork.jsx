import React from 'react';
import { Plane, ShieldCheck, Award, HeartHandshake, PhoneCall, FileSpreadsheet, Sparkles } from 'lucide-react';

export default function WhyNetwork() {
  return (
    <section className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-network-blue font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Respaldo y Trayectoria
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-network-blue-dark mt-3 tracking-tight">
            ¿Por qué viajar con Network?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            En <strong>Network (Viajes | Turismo | Educación)</strong> nos especializamos en transformar sueños educativos en experiencias seguras, inolvidables y perfectamente organizadas.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-network-blue/10 text-network-blue flex items-center justify-center">
              <HeartHandshake className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-network-blue-dark">
              Acompañamiento Personalizado 360°
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              No sos un número de expediente. Te asignamos un asesor educativo dedicado que acompaña a la familia antes de partir, durante toda la estadía en Nueva Zelanda y al regresar.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-network-green/20 text-network-green-hover flex items-center justify-center">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-network-blue-dark">
              Gestión Integral de Visas y Trámites
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Nos encargamos de todo el papeleo: Student Visa ante la Embajada e Inmigración de Nueva Zelanda, seguro médico internacional obligatorio y homologación de materias.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-network-blue-dark">
              Vínculo Directo con los Colegios
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Trabajamos sin intermediarios fantasmas. Mantenemos una relación estrecha y constante con los directores internacionales de las mejores escuelas secundarias de Nueva Zelanda.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
