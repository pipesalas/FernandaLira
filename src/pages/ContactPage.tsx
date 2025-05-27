import React from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      <head>
        <meta name="description" content="Psicóloga en Valdivia - Contáctame para agendar sesiones presenciales o en línea. Estoy aquí para ayudarte." />
        <meta name="keywords" content="psicóloga en Valdivia, contacto, sesiones en línea, bienestar emocional" />
      </head>
      {/* Sección de Encabezado */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              Contáctame
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              No dudes en comunicarte. Te responderé lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
                Ponte en contacto
              </h2>
              <p className="text-slate-600 mb-8">
                Ya sea que quieras agendar una cita o tengas preguntas sobre mis servicios, estoy aquí para ayudarte. Completa el formulario y te responderé lo antes posible.
              </p>
              <p className="text-lg text-slate-600 mb-4">Puedes contactarme para sesiones presenciales en Valdivia o en línea desde cualquier lugar.</p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      {/* Icono de Doctoralia (cruz médica, azul) */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-blue-600"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 8v8M8 12h8" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Reserva</h3>
                    <a
                      href="https://www.doctoralia.cl/fernanda-lira/psicologo/valdivia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline hover:text-blue-900 transition-colors duration-200"
                    >
                      Reserva a través de doctoralia
                    </a>
                  </div>
                </div>


                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Mail size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Correo electrónico</h3>
                    <p className="text-slate-600">fernandailirae@gmail.com</p>
                    <p className="text-sm text-slate-500 mt-1">
                      Respondo los correos en 24-48 horas
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <MapPin size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Ubicación</h3>
                    <p className="text-slate-600">
                      Caupolicán 128, Valdivia
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                      <Clock size={20} />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-slate-800">Horario de atención</h3>
                    <div className="text-slate-600">
                      <p>Lunes - Miércoles: 10:00 - 20:00</p>
                      <p>Martes - Jueves: 13:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
                Enviar un mensaje
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Mapa */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6 text-center">
              Ubicación
            </h2>
            <div className="rounded-lg overflow-hidden shadow-sm h-96 bg-white">
              {/* Integración de mapa real usando iframe de Google Maps */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3169.1234567890123!2d-73.2456789012345!3d-39.81912345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sCaupolic%C3%A1n%20128%2C%20Valdivia!5e0!3m2!1ses!2scl!4v1681234567890!5m2!1ses!2scl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;