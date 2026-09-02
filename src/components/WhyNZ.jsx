import React from 'react';
import { Shield, Sparkles, BookOpen, Compass, Award, Heart, Check, Users, Mountain, Sun } from 'lucide-react';

export default function WhyNZ() {
  return (
    <section id="por-que-nz" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-network-blue font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
            Destino Educativo #1
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-network-blue-dark mt-3 tracking-tight">
            ¿Por qué Nueva Zelanda es el mejor lugar para estudiar?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Un país líder en calidad de vida, seguridad y pedagogía orientada al futuro, donde cada estudiante es valorado por su talento individual.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pillar 1 */}
          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/10 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              #2 País más Seguro del Mundo
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Según el Global Peace Index. Cero conflictos bélicos, bajísima criminalidad y una cultura cívica basada en el respeto mutuo (Manaakitanga).
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-network-green/20 text-network-green-hover flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Sistema NCEA de Vanguardia
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Enfoque pedagógico práctico y personalizado. Los estudiantes eligen materias según su vocación y aprenden resolviendo problemas reales.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Mountain className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Naturaleza y Aire Puro
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Playas vírgenes, montañas, lagos cristalinos y parques nacionales a pasos de las escuelas. Una vida activa, saludable y sin estrés.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-slate-50 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm hover:shadow-card-hover transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">
              Código Pastoral Obligatorio
            </h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Nueva Zelanda fue el primer país con una ley que obliga por código estatal a las escuelas a velar por el bienestar integral de los alumnos extranjeros.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
