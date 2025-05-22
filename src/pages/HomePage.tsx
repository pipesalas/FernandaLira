import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Activity, Coffee, Award, Users, Book, User, GraduationCap} from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Testimonial from '../components/Testimonial';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Button from '../components/Button';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Sección Hero */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-slate-50 py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1600')] bg-cover bg-center opacity-[0.04]"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-slate-800 leading-tight mb-6 animate-fade-in">
                Hola!
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                Soy Fernanda Lira, psicóloga con una sólida formación académica y más de una década de experiencia en el ámbito clínico y organizacional. Mi enfoque combina técnicas basadas en evidencia con un profundo compromiso por el bienestar de mis pacientes.
              </p>
              <p className="text-lg text-slate-600 mb-4">Ubicada en Valdivia, Fernanda también ofrece sesiones en línea para mayor comodidad y accesibilidad.</p>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl animate-fade-in-delay">
                A lo largo de mi carrera, he trabajado con individuos y equipos, ayudándolos a superar desafíos, desarrollar habilidades y alcanzar sus objetivos personales y profesionales. Mi objetivo es proporcionar un espacio seguro y de apoyo donde puedas explorar tus pensamientos y emociones, y trabajar juntos hacia un cambio positivo.
              </p>
              <div className="flex flex-wrap gap-4 animate-fade-in-delay-2">
                <Button
                  href="https://www.doctoralia.cl/fernanda-lira/psicologo/valdivia"
                  variant="primary"
                  size="lg"
                >
                  Agenda una Consulta
                </Button>
                <Button to="/about" variant="outline" size="lg">
                  Conoce Más Sobre Mí
                </Button>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
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
              Creo en crear un espacio seguro y sin juicios donde puedas explorar tus pensamientos y sentimientos.
              Mi enfoque combina técnicas basadas en evidencia con un cuidado compasivo adaptado a tus necesidades únicas.
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
                Métodos Basados en Evidencia
              </h3>
              <p className="text-slate-600">
                Utilizo enfoques terapéuticos científicamente validados adaptados para abordar tus preocupaciones específicas.
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
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
              <div className="flex items-center">
                <GraduationCap size={24} className="text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Magíster en Psicología Organizacional</p>
                  <p className="text-slate-600">UAI, 2014 - 2015</p>
                </div>
              </div>
              <div className="flex items-center">
                <GraduationCap size={24} className="text-blue-600 mr-3" />
                <div className="text-left">
                  <p className="font-medium text-slate-800">Licenciatura en Psicología</p>
                  <p className="text-slate-600">UAI, 2010 - 2014</p>
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
              Servicios que Ofrezco
            </h2>
            <p className="text-lg text-slate-600">
              Brindo una variedad de servicios psicológicos para ayudarte a enfrentar los desafíos de la vida
              y alcanzar el bienestar emocional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Terapia Individual"
              description="Sesiones de terapia personalizadas para tus necesidades únicas, ayudándote a superar desafíos personales y crecer."
              icon={<User size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Terapia de Pareja"
              description="Mejora la comunicación, resuelve conflictos y fortalece tu relación con tu pareja."
              icon={<Users size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Manejo de Ansiedad"
              description="Aprende estrategias efectivas para manejar la ansiedad, reducir el estrés y recuperar el control de tus pensamientos y emociones."
              icon={<Activity size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Tratamiento de Depresión"
              description="Enfoques basados en evidencia para ayudarte a superar la depresión y redescubrir la alegría y el propósito en tu vida."
              icon={<Heart size={24} />}
              to="/services"
            />
            <ServiceCard
              title="Recuperación de Trauma Complejo"
              description="Terapia especializada para ayudarte a procesar experiencias traumáticas y construir resiliencia para el futuro."
              icon={<Award size={24} />}
              to="/services"
            />
          </div>

          <div className="mt-12 text-center">
            <Button to="/services" variant="secondary" size="lg">
              Ver Todos los Servicios
            </Button>
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