import React from 'react';

const BlogPage: React.FC = () => {
  return (
    <>
      {/* Header Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-slate-800 mb-6">
              Blog
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Explora artículos y recomendaciones sobre salud mental y bienestar.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
            Artículos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Article */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Cómo manejar la ansiedad en el día a día
              </h3>
              <p className="text-slate-600 mb-4">
                Descubre estrategias prácticas para reducir la ansiedad y mejorar tu bienestar emocional.
              </p>
              <a
                href="/blog/ansiedad-dia-a-dia"
                className="text-blue-600 hover:underline font-medium"
              >
                Leer más
              </a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Entendiendo la Diversidad LGTBQI+
              </h3>
              <p className="text-slate-600 mb-4">
                Aprende sobre la importancia de la inclusión y el respeto hacia las personas de la comunidad LGTBQI+.
              </p>
              <a
                href="/blog/diversidad-lgtbqi"
                className="text-blue-600 hover:underline font-medium"
              >
                Leer más
              </a>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                El Significado de los Colores en los Estados Mentales
              </h3>
              <p className="text-slate-600 mb-4">
                Descubre cómo los colores como el rojo, azul y verde pueden influir en nuestras emociones y estados mentales.
              </p>
              <a
                href="/blog/colores-estados-mentales"
                className="text-blue-600 hover:underline font-medium"
              >
                Leer más
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recommendations Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-playfair font-semibold text-slate-800 mb-6">
            Recomendaciones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Recommendation */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-slate-800 mb-4">
                Libro: "El poder del ahora" de Eckhart Tolle
              </h3>
              <p className="text-slate-600 mb-4">
                Una guía práctica para vivir en el presente y encontrar la paz interior.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Más información
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogPage;
