import React, { useState } from 'react';
import { MapPin, CheckCircle, GraduationCap, Star, ArrowRight, Compass, Shield, Award, Users } from 'lucide-react';
import { schoolsData } from '../data/schoolsData';

export default function SchoolsGrid({ onSelectSchool }) {
  const [filter, setFilter] = useState('all');

  const filteredSchools = schoolsData.filter(school => {
    if (filter === 'all') return true;
    if (filter === 'auckland') return school.region.toLowerCase().includes('auckland');
    if (filter === 'boys') return school.type.toLowerCase().includes('varones');
    if (filter === 'outdoor') return school.tag.toLowerCase().includes('outdoor') || school.tag.toLowerCase().includes('costa') || school.tag.toLowerCase().includes('arte');
    return true;
  });

  const handleChooseSchool = (schoolName) => {
    if (onSelectSchool) {
      onSelectSchool(schoolName);
    }
    const element = document.getElementById('registro');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="colegios" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-network-green/20 text-network-blue-dark font-bold text-xs sm:text-sm px-3.5 py-1.5 rounded-full mb-3">
            <GraduationCap className="w-4 h-4 text-network-green-hover" />
            <span>Colegios Confirmados para el Evento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-network-blue-dark tracking-tight">
            Conocé a las 6 Escuelas de Nueva Zelanda
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Cada colegio esta ubicado en una zona diferente y cuenta con una personalidad única.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === 'all'
                  ? 'bg-network-blue text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Todos los Colegios (6)
            </button>
            <button
              onClick={() => setFilter('auckland')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === 'auckland'
                  ? 'bg-network-blue text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Región Auckland (3)
            </button>
            <button
              onClick={() => setFilter('outdoor')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === 'outdoor'
                  ? 'bg-network-blue text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Naturaleza & Deportes (Taupo / Kapiti)
            </button>
            <button
              onClick={() => setFilter('boys')}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                filter === 'boys'
                  ? 'bg-network-blue text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Solo Varones (Liston / King's)
            </button>
          </div>
        </div>

        {/* 6 Schools Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSchools.map((school) => (
            <div
              key={school.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col group"
            >
              {/* Image & Badges */}
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                
                {/* Location Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-md text-network-blue-dark text-xs font-bold px-3 py-1 rounded-full shadow-md">
                    <MapPin className="w-3.5 h-3.5 text-network-blue" />
                    {school.city}
                  </span>
                </div>

                {/* Type Badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-network-blue-dark/80 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-1 rounded-full border border-white/20">
                    {school.type}
                  </span>
                </div>

                {/* School Name on Image Bottom */}
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-network-green">
                    {school.tag}
                  </span>
                  <h3 className="text-xl font-extrabold text-white leading-tight mt-0.5">
                    {school.name}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                <div>
                  {/* Highlight box */}
                  <div className="bg-slate-50 border-l-4 border-network-green p-3 rounded-r-xl mb-4">
                    <p className="text-xs font-semibold text-slate-800 italic">
                      "{school.highlight}"
                    </p>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {school.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2.5">
                    {school.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle className="w-4 h-4 text-network-green shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => handleChooseSchool(school.name)}
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-network-blue hover:text-white text-network-blue-dark font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-all group/btn"
                  >
                    <span>Quiero entrevistar a este colegio</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Banner at bottom of grid */}
        <div className="mt-14 bg-gradient-to-r from-network-blue-dark to-network-blue rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-bold">
              ¿No estás seguro de cuál es el colegio ideal para tu hijo/a?
            </h4>
            <p className="text-blue-200 text-sm sm:text-base max-w-2xl">
              En el evento del 17 de septiembre, el equipo de consejeros de <strong>Network</strong> te ayudará a evaluar el perfil del estudiante y coordinar entrevistas con los colegios que mejor coincidan con sus intereses y personalidad.
            </p>
          </div>
          <a
            href="#registro"
            className="shrink-0 inline-flex items-center gap-2 bg-network-green hover:bg-network-green-hover text-network-blue-dark font-extrabold text-sm sm:text-base px-6 py-3.5 rounded-xl shadow-btn transition-all text-center"
          >
            <span>Reservar Asesoramiento</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
