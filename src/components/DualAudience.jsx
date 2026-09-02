import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, Compass, HeartHandshake, Smile, Globe, BookOpen, Trophy, Anchor, CheckCircle2 } from 'lucide-react';

export default function DualAudience() {
  const [activeTab, setActiveTab] = useState('ambos');

  return (
    <section id="experiencia" className="py-20 bg-gradient-to-b from-slate-50 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-network-blue font-bold text-xs sm:text-sm tracking-wider uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
            Una experiencia pensada para toda la familia
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-network-blue-dark mt-3 tracking-tight">
            La tranquilidad de los padres.<br />
            La mayor aventura para los chicos.
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4">
            Sabemos que la decisión de estudiar en el exterior involucra distintas prioridades. Por eso es que te invitamos a participar de este evento.
          </p>

          {/* Persona Filter Tabs for Mobile / Quick focus */}
          <div className="flex items-center justify-center gap-2 mt-8 p-1.5 bg-slate-200/80 rounded-2xl max-w-md mx-auto">
            <button
              onClick={() => setActiveTab('ambos')}
              className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'ambos'
                  ? 'bg-white text-network-blue-dark shadow-sm'
                  : 'text-slate-600 hover:text-network-blue-dark'
              }`}
            >
              Ver Todo
            </button>
            <button
              onClick={() => setActiveTab('padres')}
              className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'padres'
                  ? 'bg-network-blue text-white shadow-sm'
                  : 'text-slate-600 hover:text-network-blue-dark'
              }`}
            >
              👨‍👩‍👧 Para Padres
            </button>
            <button
              onClick={() => setActiveTab('estudiantes')}
              className={`flex-1 py-2 px-4 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                activeTab === 'estudiantes'
                  ? 'bg-network-green text-network-blue-dark shadow-sm'
                  : 'text-slate-600 hover:text-network-blue-dark'
              }`}
            >
              🎒 Para Estudiantes
            </button>
          </div>
        </div>

        {/* 2 Column Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Card 1: Para Padres */}
          {(activeTab === 'ambos' || activeTab === 'padres') && (
            <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-blue-100 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full pointer-events-none"></div>
              
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-network-blue/10 border border-network-blue/20 flex items-center justify-center text-network-blue">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-network-blue">Enfoque y Tranquilidad</span>
                    <h3 className="text-2xl font-extrabold text-network-blue-dark">Para Padres y Madres</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Garantizamos que tu hijo/a esté seguro y contenido.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-blue shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Seguridad de Nivel Mundial</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Nueva Zelanda figura consistentemente en el Top 3 del Índice Global de Paz. Cero armas y comunidades sumamente protegidas.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-blue shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Familias Homestay Verificadas</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Cada familia anfitriona es inspeccionada y monitoreada rigurosamente por el departamento de bienestar escolar de cada colegio.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-blue shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Acompañamiento integral de Network</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Desde la tramitación de visas hasta seguro médico de cobertura internacional y seguimiento durante el viaje.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="#registro"
                  className="w-full inline-flex items-center justify-center gap-2 bg-network-blue hover:bg-network-blue-light text-white font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-md"
                >
                  <span>Agendar charla para padres en el evento</span>
                </a>
              </div>
            </div>
          )}

          {/* Card 2: Para Estudiantes */}
          {(activeTab === 'ambos' || activeTab === 'estudiantes') && (
            <div className="bg-white rounded-3xl p-8 lg:p-10 border-2 border-emerald-100 shadow-card hover:shadow-card-hover transition-all relative overflow-hidden flex flex-col justify-between">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full pointer-events-none"></div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-network-green/20 border border-network-green/30 flex items-center justify-center text-network-blue-dark">
                    <Compass className="w-6 h-6 text-network-green-hover" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-network-green-hover">Aventura y Crecimiento</span>
                    <h3 className="text-2xl font-extrabold text-network-blue-dark">Para Chicos y Chicas</h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  Viví el mejor año de tu vida: hacé amigos de todo el mundo, hablá inglés fluido y elegí materias diferentes.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-green-hover shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Materias Prácticas e Innovadoras</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Robótica, Fotografía y Medios Audiovisuales, Carpinteria, Diseño 3D, Gastronomía, Música y Outdoor Education.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-green-hover shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Deportes y Vida al Aire Libre</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Rugby (con la mística Kiwi), hockey, volley y senderismo en paisajes de película.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-green-hover shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Inglés 100% Fluido y Natural</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Vas a pensar y soñar en inglés viviendo el día a día con amigos locales y de otros países.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-network-green-hover shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-slate-800 text-sm font-bold">Independencia y Madurez</strong>
                      <span className="text-slate-600 text-xs sm:text-sm">Una experiencia que te transforma, te da autonomía, confianza y un perfil internacional inigualable para tu futuro.</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <a
                  href="#colegios"
                  className="w-full inline-flex items-center justify-center gap-2 bg-network-green hover:bg-network-green-hover text-network-blue-dark font-bold text-sm py-3 px-6 rounded-xl transition-all shadow-btn"
                >
                  <span>Ver los colegios y actividades disponibles</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
