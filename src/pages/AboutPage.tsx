import React from 'react';
import { Award, BookOpen, Coffee, Heart, GraduationCap } from 'lucide-react';
import Button from '../components/Button';

const AboutPage: React.FC = () => {
  return (
    <>
      <head>
        <meta name="description" content="Psicóloga en Valdivia - Conoce más sobre Fernanda Lira, su experiencia y enfoque terapéutico. Sesiones presenciales y en línea disponibles." />
        <meta name="keywords" content="psicóloga en Valdivia, terapia psicológica, sesiones en línea, bienestar emocional" />
      </head>
      {/* Sección de Encabezado */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              Sobre Fernanda Lira
            </h1>
            <p className="text-lg text-slate-600">
              Psicóloga clínica dedicada a ayudarte a alcanzar el bienestar emocional.
            </p>
          </div>
        </div>
      </section>

      {/* Sección Acerca de */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <img
                  src="https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Fernanda Lira"
                  className="w-full h-auto"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
                Mi Trayectoria
              </h2>
              <p className="text-slate-600 mb-4">
                Con más de 15 años de experiencia como psicóloga clínica, he dedicado mi carrera a ayudar a las personas
                a enfrentar los desafíos de la vida y alcanzar el bienestar emocional.
              </p>
              <p className="text-slate-600 mb-4">
                Mi enfoque terapéutico es tanto compasivo como basado en evidencia. Creo en crear un espacio seguro y
                sin juicios donde puedas explorar tus pensamientos y sentimientos, obtener perspectivas y desarrollar
                estrategias para un cambio positivo.
              </p>
              <p className="text-slate-600 mb-6">
                Me especializo en tratar ansiedad, depresión, trauma y problemas de relaciones. Cada plan terapéutico
                se adapta a las necesidades únicas de cada individuo, utilizando diversas modalidades terapéuticas
                como la Terapia Cognitivo-Conductual (TCC), la Terapia Cognitiva Basada en Mindfulness y enfoques
                psicodinámicos.
              </p>
              <p className="text-lg text-slate-600 mb-4">Fernanda trabaja desde Valdivia, pero también ofrece sesiones en línea para quienes no puedan asistir presencialmente.</p>

              <div className="flex gap-4">
                <Button to="/services" variant="primary">
                  Mis Servicios
                </Button>
                <Button to="/contact" variant="outline">
                  Contáctame
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Educación */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              Educación y Diplomados
            </h2>
            <p className="text-slate-600">
              Mi amplia educación y formación me han preparado para brindar la más alta calidad de atención.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">

              {/* Psicóloga */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Psicóloga
                  </h3>
                  <p className="text-slate-600 mb-1">UAI Santiago | 2010 - 2014</p>
                </div>
              </div>

              {/* Magíster Psicología Organizacional */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <GraduationCap size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Magíster en Psicología Organizacional
                  </h3>
                  <p className="text-slate-600 mb-1">UAI Santiago | 2015</p>
                </div>
              </div>

              {/* Riesgo Suicida: Evaluación y Manejo */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Diplomado en Riesgo Suicida: Evaluación y Manejo
                  </h3>
                  <p className="text-slate-600 mb-1">MIDAP | 2023</p>
                </div>
              </div>

              {/* Diplomado PAC */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Diplomado en Psicología de la Alimentación Consciente (PAC)
                  </h3>
                  <p className="text-slate-600 mb-1">Escuela de Salud y Consciencia | 2022</p>
                </div>
              </div>

              {/* Taller Principios LGTB+ */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Taller Principios LGTB+
                  </h3>
                  <p className="text-slate-600 mb-1">Espectro género | 2022</p>
                </div>
              </div>

              {/* Diplomado Psicoanálisis Relacional */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Diplomado Psicoanálisis Relacional
                  </h3>
                  <p className="text-slate-600 mb-1">Centro de Terapia Relacional | 2022</p>
                </div>
              </div>


              {/* Certificación por Competencias MPO */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col md:flex-row">
                <div className="md:w-24 flex-shrink-0 flex justify-center mb-4 md:mb-0">
                  <Award size={32} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                    Certificación por Competencias MPO
                  </h3>
                  <p className="text-slate-600 mb-1">UAI Santiago | 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Filosofía */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              Mi Filosofía
            </h2>
            <p className="text-slate-600">
              Creo en un enfoque holístico y compasivo hacia la salud mental que aborde a la persona completa: mente, cuerpo y espíritu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Centrado en la Compasión
              </h3>
              <p className="text-slate-600">
                Abordo a cada cliente con empatía y comprensión genuinas, creando un espacio seguro para la exploración y la sanación.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                <BookOpen size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Basado en Evidencia
              </h3>
              <p className="text-slate-600">
                Integro las últimas investigaciones y enfoques terapéuticos comprobados para proporcionar un tratamiento efectivo y respaldado por la ciencia.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Colaborativo
              </h3>
              <p className="text-slate-600">
                La terapia es una colaboración. Trabajo estrechamente contigo para desarrollar estrategias personalizadas que se alineen con tus metas y valores.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Estoy aquí para apoyarte en tu camino hacia el bienestar emocional y el crecimiento personal.
              Trabajemos juntos para ayudarte a vivir una vida más plena.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Agenda una Consulta
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;