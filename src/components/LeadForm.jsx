import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Calendar, Clock, MapPin, Sparkles, AlertCircle, Phone, Mail, User, BookOpen, Heart, Download } from 'lucide-react';
import confetti from 'canvas-confetti';
import WhatsAppIcon from './WhatsAppIcon';
import { schoolsData } from '../data/schoolsData';
import { config } from '../config';

export default function LeadForm({ selectedSchool = null }) {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    currentGrade: '',
    targetYear: '2027',
    duration: '1 Año Escolar',
    interestedSchools: [],
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Sync pre-selected school from card clicks
  useEffect(() => {
    if (selectedSchool) {
      setFormData(prev => {
        if (!prev.interestedSchools.includes(selectedSchool)) {
          return {
            ...prev,
            interestedSchools: [...prev.interestedSchools, selectedSchool]
          };
        }
        return prev;
      });
    }
  }, [selectedSchool]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSchoolToggle = (schoolName) => {
    setFormData(prev => {
      const exists = prev.interestedSchools.includes(schoolName);
      if (exists) {
        return {
          ...prev,
          interestedSchools: prev.interestedSchools.filter(s => s !== schoolName)
        };
      } else {
        return {
          ...prev,
          interestedSchools: [...prev.interestedSchools, schoolName]
        };
      }
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.parentName.trim()) newErrors.parentName = 'Ingresá el nombre del padre, madre o tutor';
    if (!formData.studentName.trim()) newErrors.studentName = 'Ingresá el nombre del estudiante';
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Ingresá un correo electrónico válido';
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      newErrors.phone = 'Ingresá un WhatsApp de contacto válido para enviar la entrada';
    }
    if (!formData.currentGrade) newErrors.currentGrade = 'Seleccioná el año escolar actual';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const submissionPayload = {
      fecha: new Date().toLocaleString('es-AR', { timeZone: 'America/Argentina/Buenos_Aires' }),
      padre_tutor: formData.parentName,
      estudiante: formData.studentName,
      whatsapp: formData.phone,
      email: formData.email,
      ano_actual: formData.currentGrade,
      ano_viaje: formData.targetYear,
      duracion: formData.duration,
      colegios_interes: formData.interestedSchools.join(', '),
      notas: formData.notes
    };

    // 1. Guardar localmente como respaldo
    try {
      const existing = JSON.parse(localStorage.getItem('network_event_leads') || '[]');
      const leadRecord = {
        ...formData,
        id: Date.now(),
        createdAt: new Date().toISOString()
      };
      localStorage.setItem('network_event_leads', JSON.stringify([leadRecord, ...existing]));
    } catch (err) {
      console.error("Local storage save error", err);
    }

    // 2. Enviar a Google Sheets vía Webhook
    const sheetsUrl = config.googleSheetsUrl || import.meta.env.VITE_GOOGLE_SHEETS_URL || "";
    if (sheetsUrl) {
      try {
        await fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(submissionPayload),
        });
      } catch (err) {
        console.warn("Error enviando a Google Sheets:", err);
      }
    }

    setSubmittedData({ ...formData });
    setIsSubmitting(false);
    setIsSuccess(true);

    // Trigger Confetti Celebration
    try {
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // Fallback
    }
  };

  // Google Calendar Event Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("Evento Colegios de Nueva Zelanda - Network")}&dates=20260917T190000/20260917T220000&details=${encodeURIComponent("Encuentro presencial con las directoras de 6 colegios de Nueva Zelanda organizado por Network (Viajes | Turismo | Educación).")}&location=${encodeURIComponent("Buenos Aires, Argentina")}`;

  return (
    <section id="registro" className="py-20 bg-gradient-to-b from-white via-slate-50 to-slate-100 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 bg-network-green/20 text-network-blue-dark font-bold text-xs sm:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-network-green-hover" />
            Inscripción Gratuita • Cupos Limitados
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-network-blue-dark tracking-tight">
            Reservá tu lugar en el evento
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Completá el formulario para recibir tu confirmación para el <strong>17 de septiembre a las 19:00 hs en Buenos Aires</strong>.
          </p>
        </div>

        {/* Form Container Card */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-slate-200/80 shadow-2xl relative overflow-hidden">
          <div className="brand-rainbow-bar absolute top-0 left-0 right-0"></div>

          {isSuccess ? (
            /* Success State */
            <div className="py-8 text-center space-y-6">
              <div className="w-20 h-20 bg-network-green/20 text-network-green-hover border-2 border-network-green/40 rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10 text-network-green-hover" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-extrabold text-network-green-hover uppercase tracking-widest bg-green-50 px-3 py-1 rounded-full">
                  ¡Lugar Reservado con Éxito!
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-network-blue-dark">
                  ¡Nos vemos el 17 de Septiembre, {submittedData?.parentName?.split(' ')[0]}!
                </h3>
                <p className="text-slate-600 text-sm sm:text-base max-w-lg mx-auto">
                  Registramos la inscripción para vos y para <strong>{submittedData?.studentName}</strong>. Te enviamos la confirmación con los datos de acceso a <strong>{submittedData?.email}</strong> y por WhatsApp a <strong>{submittedData?.phone}</strong>.
                </p>
              </div>

              {/* Event Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 max-w-md mx-auto text-left text-xs sm:text-sm space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <Calendar className="w-4 h-4 text-network-blue" />
                  <span>Fecha: Martes 17 de Septiembre • 19:00 hs</span>
                </div>
                <div className="flex items-center gap-2 text-slate-800 font-semibold">
                  <MapPin className="w-4 h-4 text-network-blue" />
                  <span>Lugar: Buenos Aires (Dirección enviada a tu email)</span>
                </div>
                {submittedData?.interestedSchools?.length > 0 && (
                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-slate-500 font-medium block">Colegios de interés seleccionados:</span>
                    <span className="text-network-blue font-bold">
                      {submittedData.interestedSchools.join(', ')}
                    </span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
                <a
                  href={googleCalendarUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-network-blue hover:bg-network-blue-light text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Añadir a Google Calendar</span>
                </a>

                <a
                  href={`https://wa.me/5491170083601?text=Hola!%20Acabo%20de%20registrarme%20para%20el%20evento%20de%20Nueva%20Zelanda%20del%2017%20de%20Septiembre%20a%20nombre%20de%20${encodeURIComponent(submittedData?.parentName || '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold text-sm px-6 py-3.5 rounded-xl shadow-md transition-all"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  <span>Confirmar por WhatsApp</span>
                </a>
              </div>

              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({
                    parentName: '',
                    studentName: '',
                    phone: '',
                    email: '',
                    currentGrade: '',
                    targetYear: '2027',
                    duration: '1 Año Escolar',
                    interestedSchools: [],
                    notes: ''
                  });
                }}
                className="text-xs text-slate-500 hover:text-slate-700 underline pt-4 block mx-auto"
              >
                Registrar a otra familia o estudiante
              </button>
            </div>
          ) : (
            /* Lead Capture Form */
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Row 1: Names */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nombre del Padre / Madre / Tutor *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleChange}
                      placeholder="Ej: Marcelo García"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all ${
                        errors.parentName ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.parentName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.parentName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Nombre del Estudiante *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="text"
                      name="studentName"
                      value={formData.studentName}
                      onChange={handleChange}
                      placeholder="Ej: Sofía García"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all ${
                        errors.studentName ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.studentName && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.studentName}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Contact Info */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    WhatsApp de Contacto *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Ej: +54 9 11 5555-1234"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all ${
                        errors.phone ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  <span className="text-[11px] text-slate-400 mt-1 block">Para enviarte la ubicación y acreditación del evento.</span>
                  {errors.phone && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phone}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Correo Electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ejemplo@correo.com"
                      className={`w-full pl-10 pr-4 py-3 bg-slate-50 rounded-xl border text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all ${
                        errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 3: Academic / Travel details */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Año escolar actual *
                  </label>
                  <select
                    name="currentGrade"
                    value={formData.currentGrade}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-slate-50 rounded-xl border text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all ${
                      errors.currentGrade ? 'border-red-500 bg-red-50/30' : 'border-slate-200'
                    }`}
                  >
                    <option value="">Seleccionar año</option>
                    <option value="1° Año Secundaria">1° Año Secundaria</option>
                    <option value="2° Año Secundaria">2° Año Secundaria</option>
                    <option value="3° Año Secundaria">3° Año Secundaria</option>
                    <option value="4° Año Secundaria">4° Año Secundaria</option>
                    <option value="5° Año Secundaria">5° Año Secundaria</option>
                    <option value="6° Año Secundaria">6° Año Secundaria</option>
                  </select>
                  {errors.currentGrade && (
                    <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.currentGrade}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Año proyectado de viaje
                  </label>
                  <select
                    name="targetYear"
                    value={formData.targetYear}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all"
                  >
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029 o posterior</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Duración deseada
                  </label>
                  <select
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all"
                  >
                    <option value="6 Semanas">6 Semanas</option>
                    <option value="1 Term (~10 semanas)">1 Term (~10 semanas)</option>
                    <option value="1 Semestre (~6 meses)">1 Semestre (~6 meses)</option>
                    <option value="1 Año Escolar Completo">1 Año Escolar Completo</option>
                    <option value="Graduación Secundaria">Graduación Secundaria</option>
                    <option value="Aún no estoy seguro">Aún no estoy seguro</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Schools Preference Checkboxes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Colegios que te gustaría entrevistar en el evento (Opcional):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                  {schoolsData.map((school) => {
                    const isChecked = formData.interestedSchools.includes(school.name);
                    return (
                      <button
                        type="button"
                        key={school.id}
                        onClick={() => handleSchoolToggle(school.name)}
                        className={`text-left p-2.5 rounded-xl text-xs font-semibold border transition-all flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'bg-network-blue text-white border-network-blue shadow-sm'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                      >
                        <span className="truncate">{school.name}</span>
                        {isChecked && <CheckCircle2 className="w-4 h-4 text-network-green shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Pregunta o interés particular (Opcional)
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  rows={2}
                  placeholder="Ej: Nos interesa saber sobre el programa de rugby y las familias anfitrionas..."
                  className="w-full px-4 py-2.5 bg-slate-50 rounded-xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-network-blue transition-all"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-3 bg-network-green hover:bg-network-green-hover disabled:opacity-75 text-network-blue-dark font-extrabold text-base sm:text-lg py-4 px-8 rounded-2xl shadow-btn hover:shadow-btn-hover transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-5 h-5 border-3 border-network-blue-dark border-t-transparent rounded-full animate-spin"></span>
                      Confirmando reserva...
                    </span>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Confirmar Mi Lugar en el Evento</span>
                    </>
                  )}
                </button>
                <p className="text-center text-[11px] text-slate-400 mt-2">
                  🔒 Tus datos están 100% protegidos por Network. Entrada gratuita y cupos limitados.
                </p>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
