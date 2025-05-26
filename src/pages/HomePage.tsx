import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Coffee, Award, Users, Book, User, GraduationCap, MessageSquare } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <>
      <head>
        <meta name="description" content="Psicóloga en Valdivia - Bienvenido al sitio web de Fernanda Lira. Descubre cómo puedo ayudarte a alcanzar el bienestar emocional." />
        <meta name="keywords" content="psicóloga en Valdivia, bienestar emocional, sesiones en línea, terapia psicológica" />
      </head>
      {/* Sección Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-[0.04]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="order-2 lg:order-1 lg:col-span-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 leading-tight mb-6 animate-fade-in">
                Hola!
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Soy psicóloga, con más de diez años de experiencia acompañando a personas y parejas en procesos de cambio y crecimiento. Mi forma de trabajar combina herramientas basadas en la evidencia con una profunda confianza en la capacidad de cada persona para transformar su vida. </p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                A lo largo de mi carrera, he tenido la oportunidad de acompañar a muchas personas y equipos, ayudándolos a enfrentar desafíos, conectar con sus emociones y relaciones, y encontrar nuevas formas de estar en el mundo. </p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Mi propósito es crear un espacio seguro, donde puedas sentirte escuchado/a, pensado/a, y acompañado/a. Un lugar para explorar lo que te preocupa, trabajar lo que te duele, y avanzar hacia una vida más plena con un enfoque afirmativo y humano.              </p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Si estás considerando empezar terapia, te invito a dar ese paso.</p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Aquí estoy para acompañarte ya sea un Valdivia o de manera virtual, de manera flexible y cómoda.</p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Encontrémonos.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                <Button
                  href="https://www.doctoralia.cl/fernanda-lira/psicologo/valdivia"
                  variant="primary"
                  size="lg"
                >
                  Agenda una Consulta
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end lg:col-span-1">
              <div className="relative lg:-ml-16">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden shadow-xl border-4 border-white animate-fade-in">
                  <img
                    src="/profile.png"
                    alt="Fernanda Lira"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-md px-4 py-2 animate-fade-in-delay-3">
                  <p className="text-blue-600 font-medium">Fernanda Lira</p>
                  <p className="text-sm text-slate-500">Psicóloga Clínica</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección Bio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              Mi Enfoque Terapéutico
            </h2>
            <p className="text-lg text-slate-600">
              Creo profundamente que las personas crecemos y nos transformamos a través de las relaciones. 
              Por eso, mi forma de acompañarte en terapia se basa en crear un espacio de trabajo seguro y sin juicios, en donde puedas poner en palabras aquello que duele y que te preocupa, y donde también podamos juntos, descubrir tu capacidad de cambio y crecimiento.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 md:p-8 bg-blue-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-4">
                <Heart size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Cuidado Compasivo
              </h3>
              <p className="text-slate-600">
                La terapia se basa en una base de empatía, comprensión y un cuidado genuino por tu bienestar.
              </p>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-green-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-green-600 mx-auto mb-4">
                <Activity size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                ¿Cómo trabajo?
              </h3>
              <p className="text-slate-600">
                Mi enfoque se inspira en el psicoanálisis relacional, reflexionando a partir en el poder transformador del vínculo terapéutico y en la capacidad que tenemos para construir cambios significativos en nuestra vida.
              </p>
            </div>
            
            <div className="text-center p-6 md:p-8 bg-amber-50 rounded-lg">
              <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mx-auto mb-4">
                <Coffee size={28} />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
                Enfoque Colaborativo
              </h3>
              <p className="text-slate-600">
                Trabajamos juntos como un equipo para identificar metas, desarrollar estrategias y crear un cambio significativo.
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-slate-800 mb-6">
              Formación Académica
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="flex items-start">
                <GraduationCap size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Licenciatura en Psicología</p>
                  <p className="text-slate-600">UAI, 2010 - 2014</p>
                </div>
              </div>
              <div className="flex items-start">
                <GraduationCap size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Magíster en Psicología Organizacional</p>
                  <p className="text-slate-600">UAI, 2014 - 2015</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Diplomado Psicología de Alimentación Consciente TCA</p>
                  <p className="text-slate-600">Escuela de Salud y Consciencia | 2022</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Diplomado Psicoanálisis Relacional</p>
                  <p className="text-slate-600">Centro de Terapia Relacional | 2022</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Diplomado Trauma Relacional Complejo</p>
                  <p className="text-slate-600">Centro de Terapia Relacional | 2024</p>
                </div>
              </div>
              <div className="flex items-start">
                <Book size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Curso de formación Principios LGTBIQ+</p>
                  <p className="text-slate-600">Espectro género | 2022</p>
                </div>
              </div>
              <div className="flex items-start">
                <Book size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Curso de formación Riesgo Suicida: Evaluación y Manejo</p>
                  <p className="text-slate-600">MIDAP | 2023</p>
                </div>
              </div>
              <div className="flex items-start">
                <Book size={24} className="text-blue-600 mr-3 mt-1" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Formación: Trastorno Obsesivo Compulsivo en niños y adolescentes</p>
                  <p className="text-slate-600">ADIPA | 2024</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              ¿En qué puedo acompañarte?
            </h2>
            <p className="text-lg text-slate-600">
              Mi trabajo consiste en acompañar a personas que atraviesan distintos momentos y desafíos complejos en sus vidas, algunas veces estos momentos son dolorosos, otros repletos de confusiones y dudas, otras veces nos sentimos solos e incomprendidos, y otras muchas veces … sentimos estas emociones al mismo tiempo. 
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <User size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Terapia Individual
              </h3>
              <p className="text-slate-600 mb-2">
                Sesiones personalizadas para tu bienestar emocional y desarrollo personal.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Users size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Terapia de Parejas
              </h3>
              <p className="text-slate-600 mb-2">
                Fortalece tu relación y comunicación en pareja.
              </p>
              <span className="text-slate-700 font-medium mb-2">$50.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Activity size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Manejo de Ansiedad
              </h3>
              <p className="text-slate-600 mb-2">
                Estrategias prácticas para reducir ansiedad y recuperar el equilibrio.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Heart size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Tratamiento de Depresión
              </h3>
              <p className="text-slate-600 mb-2">
                Apoyo profesional para superar la depresión y recuperar tu bienestar.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Heart size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Trastornos de la alimentación
              </h3>
              <p className="text-slate-600 mb-2">
                Apoyo para una relación saludable con la comida y el cuerpo.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Award size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Recuperación de Trauma Complejo
              </h3>
              <p className="text-slate-600 mb-2">
                Espacio seguro para sanar heridas emocionales y construir resiliencia.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Book size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Psicoterapia con perspectiva LGBTIQA+
              </h3>
              <p className="text-slate-600 mb-2">
                Terapia inclusiva y afirmativa en un entorno seguro.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <Coffee size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Manejo del Estrés
              </h3>
              <p className="text-slate-600 mb-2">
                Herramientas para reducir el estrés y mejorar tu calidad de vida.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
            <div className="flex flex-col items-start bg-blue-50 rounded-lg p-6 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <MessageSquare size={22} />
              </div>
              <h3 className="text-lg font-playfair font-semibold text-slate-800 mb-2">
                Acompañamiento Profesional
              </h3>
              <p className="text-slate-600 mb-2">
                Apoyo breve y herramientas para profesionales.
              </p>
              <span className="text-slate-700 font-medium mb-2">$30.000 CLP / 60 min</span>
              <Button to="/contact" variant="secondary" size="sm">Agendar</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Testimonios */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-slate-800 mb-6">
              Lo que dicen mis pacientes
            </h2>
          </div>

          <Carousel
            responsive={{
              superLargeDesktop: {
                breakpoint: { max: 4000, min: 1024 },
                items: 3,
              },
              desktop: {
                breakpoint: { max: 1024, min: 768 },
                items: 2,
              },
              tablet: {
                breakpoint: { max: 768, min: 464 },
                items: 1,
              },
              mobile: {
                breakpoint: { max: 464, min: 0 },
                items: 1,
              },
            }}
            infinite
            autoPlay
            autoPlaySpeed={3000}
            keyBoardControl
            showDots
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px"
          >
            <Testimonial
              quote="Una muy linda experiencia, fue muy sencillo hablar y no me sentí nerviosa a pesar de ser la primera cita."
              author="M.C"
              role="Cita Verificada"
            />
            <Testimonial
              quote="Totalmente recomendable... Fernanda abordó de manera muy eficaz, con mucha claridad y tips que fueron de gran ayuda. Muchas gracias."
              author="Nicole"
              role="Opinión Verificada"
            />
            <Testimonial
              quote="Cada sesión es muy completa, se abordan los temas necesarios de buena forma y dándoles el tiempo que requieren. Es una excelente psicóloga Fernanda."
              author="C.V"
              role="Cita Verificada"
            />
            <Testimonial
              quote="La Fer es excelente. Siempre demuestra empatía a lo largo del proceso, acompañándote con atención y comprensión. Además, aplica sus conocimientos teóricos de forma humilde, didáctica y totalmente pertinente, asegurándose de que todo sea claro y adecuado para cada situación."
              author="Angelo"
              role="Cita Verificada"
            />
            <Testimonial
              quote="Solo agradecer por todo, una excelente profesional. La recomiendo 100%."
              author="Pamela"
              role="Cita Verificada"
            />
            <Testimonial
              quote="Una excelente profesional, muy comprometida y atingente en su área. Me he sentido súper cómodo y a gusto en las sesiones, la recomiendo completamente. Ya se notan cambios en la forma de ver las cosas y en entenderse uno mismo."
              author="SSJ"
              role="Cita Verificada"
            />
            <Testimonial
              quote="Llegué con Fernanda en un momento difícil de la vida, su gran capacidad de escucha y profesionalismo fueron de gran aporte; su guía y acompañamiento me ayudaron mucho."
              author="Ac"
              role="Opinión Verificada"
            />
            <Testimonial
              quote="La Fer es excelente en lo que hace. Realiza las acotaciones necesarias y realmente te ayuda a entender tu situación. Personalmente tuve una experiencia fructífera con ella y la recomiendo totalmente. Una persona cálida, acogedora y atenta."
              author="Sofía"
              role="Cita Verificada"
            />
            <Testimonial
              quote="Estoy muy agradecida de la ayuda de Fernanda, muy profesional y al mismo tiempo te hace sentir muy cómoda y acogida. Se nota su dedicación y entrega en cada sesión. La recomiendo mucho."
              author="C.P"
              role="Opinión Verificada"
            />
            <Testimonial
              quote="Una profesional 100% dedicada y comprometida con sus pacientes, tiene una alta vocación y cariño por lo que hace, y se ve ampliamente reflejado en la calidad humana de su atención. La recomiendo a ojos cerrados!"
              author="N.A."
              role="Opinión Verificada"
            />
          </Carousel>
        </div>
      </section>

      {/* Sección de Llamado a la Acción */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-6">
              ¿Listo para Comenzar Tu Viaje?
            </h2>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Dar el primer paso hacia una mejor salud mental puede ser un desafío, pero no tienes que hacerlo solo.
              Estoy aquí para apoyarte en cada paso del camino.
            </p>
            <Button
              href="https://www.doctoralia.cl/fernanda-lira/psicologo/valdivia"
              variant="secondary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Agenda Tu Consulta
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;