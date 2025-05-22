import React from 'react';
import { User, Users, Activity, Heart, Award, Book, Coffee, MessageSquare } from 'lucide-react';
import Button from '../components/Button';

const ServicesPage: React.FC = () => {
  return (
    <>
      <head>
        <meta name="description" content="Psicóloga en Valdivia - Servicios de terapia individual, de pareja, manejo de ansiedad, y más. Sesiones presenciales y en línea disponibles." />
        <meta name="keywords" content="psicóloga en Valdivia, terapia psicológica, sesiones en línea, bienestar emocional" />
      </head>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              Mis Servicios
            </h1>
            <p className="text-lg text-slate-600">
              Terapia basada en evidencia para ayudarte a navegar los desafíos de la vida y lograr bienestar emocional.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <User size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Terapia Individual
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Sesiones de terapia personalizadas según tus necesidades específicas, ayudándote a superar
                    desafíos personales, desarrollar estrategias de afrontamiento y lograr un crecimiento significativo.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Users size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Terapia de Parejas
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Mejora la comunicación, resuelve conflictos y fortalece tu relación de
                    pareja mediante sesiones guiadas enfocadas en el entendimiento mutuo y el crecimiento.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $50.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Activity size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Manejo de Ansiedad
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Aprende estrategias efectivas para manejar la ansiedad, reducir el estrés y recuperar
                    el control de tus pensamientos y emociones utilizando técnicas basadas en evidencia.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Heart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Tratamiento de Depresión
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Enfoques basados en evidencia para ayudarte a superar la depresión y redescubrir
                    alegría y propósito en tu vida, con apoyo compasivo durante todo tu proceso.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

               <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Heart size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Trastornos de la alimentación
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Terapia especializada para abordar trastornos de la alimentación, promoviendo una
                    relación saludable con la comida y el cuerpo, y fomentando la autoaceptación.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Award size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Recuperación de Trauma Complejo
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Terapia especializada para ayudarte a procesar experiencias traumáticas y desarrollar
                    resiliencia para el futuro, utilizando EMDR y otros enfoques informados en trauma.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Book size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Psicoterapia con perspectiva LGBTIQA+
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Terapia inclusiva y afirmativa para personas LGBTIQA+, abordando temas como la identidad,
                    la aceptación y el bienestar emocional en un entorno seguro y de apoyo.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <Coffee size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Manejo del Estrés
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Desarrolla estrategias efectivas para manejar el estrés en tu vida personal y profesional,
                    mejorando tu resiliencia y bienestar general.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                    <MessageSquare size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-3">
                    Acompañamiento Profesional
                  </h3>
                  <p className="text-slate-600 mb-4">
                    Sesiones de terapia breves para profesionales que buscan apoyo emocional y
                    herramientas para manejar el estrés y la carga emocional de su trabajo, así como 
                    recomendaciones para el desarrollo profesional dentro de organizaciones.
                  </p>
                  <p className="text-slate-700 font-medium">
                    $30.000 CLP por sesión de 60 minutos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
              Qué Esperar
            </h2>
            <p className="text-slate-600">
              Entender el proceso terapéutico puede ayudar a aliviar cualquier inquietud que puedas tener.
              Esto es lo que puedes esperar al trabajar conmigo.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200"></div>

              {/* Steps */}
              <div className="space-y-12">
                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Consulta Inicial
                      </h3>
                      <p className="text-slate-600">
                        Conversaremos sobre tus inquietudes, metas y expectativas para la terapia
                        para determinar si somos compatibles.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        1
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block"></div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        2
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Evaluación
                      </h3>
                      <p className="text-slate-600">
                        Recopilaré información sobre tu historia, situación actual y
                        desafíos específicos para desarrollar una comprensión integral.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Plan de Tratamiento
                      </h3>
                      <p className="text-slate-600">
                        Juntos estableceremos objetivos claros y desarrollaremos un plan de
                        tratamiento personalizado adaptado a tus necesidades específicas.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        3
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 hidden md:block"></div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        4
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 md:text-left">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Terapia Continua
                      </h3>
                      <p className="text-slate-600">
                        Sesiones regulares enfocadas en abordar tus preocupaciones, desarrollar habilidades
                        y avanzar hacia tus objetivos.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div className="flex flex-col md:flex-row items-center">
                    <div className="flex-1 md:pr-8 mb-4 md:mb-0 md:text-right">
                      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                        Evaluación de Progreso
                      </h3>
                      <p className="text-slate-600">
                        Evaluaremos regularmente tu progreso, ajustaremos nuestro enfoque según sea necesario,
                        y celebraremos los cambios positivos que estés logrando.
                      </p>
                    </div>
                    <div className="md:mx-4 z-10">
                      <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
                        5
                      </div>
                    </div>
                    <div className="flex-1 md:pl-8 hidden md:block"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-playfair font-semibold text-slate-800 mb-6 text-center">
                Seguros y Pagos
              </h2>
              <p className="text-slate-600 mb-6 text-center">
                Puedes rendir la terapia a través de tu ISAPRE o pagar de forma privada.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="md:col-span-1">
                  <h3 className="text-lg font-medium text-slate-800 mb-3">
                    Opciones de Pago
                  </h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Tarjetas de Crédito/Débito
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Transferencias bancarias
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Efectivo
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-playfair font-bold mb-6">
              ¿Lista/o para Comenzar tu Proceso?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Agenda tu consulta inicial hoy, y demos juntos el primer paso hacia 
              tu salud mental y bienestar emocional.
            </p>
            <Button
              to="/contact"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Contáctame
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;