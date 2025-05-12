import React from 'react';

const portadaUrl = "https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg";

const UnaTeoriaGeneralDelAmor: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-playfair font-bold text-slate-800 mb-6">
        Libro: "Una teoría general del amor" de Thomas Lewis, Fari Amini y Richard Lannon
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img
          src={portadaUrl}
          alt="Portada de Una teoría general del amor"
          className="w-48 h-auto rounded shadow-md mb-4 md:mb-0 object-cover"
          style={{ minWidth: 160, minHeight: 240 }}
        />
        <div>
          <p className="text-slate-600 mb-4">
            "Una teoría general del amor" explora el fenómeno del amor y la conexión humana desde una perspectiva científica y cultural. Los autores combinan hallazgos de la neurociencia, la psicología y la sabiduría cultural para explicar cómo las relaciones afectan nuestro cerebro y bienestar emocional.
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4">
            <li>Describe el papel del sistema límbico en las emociones y la personalidad.</li>
            <li>Explica cómo la resonancia y regulación límbica influyen en nuestras relaciones.</li>
            <li>Destaca la importancia de la empatía y el vínculo emocional en la salud mental.</li>
          </ul>
          <p className="text-slate-600">
            Es un libro recomendado para quienes desean comprender el amor desde una mirada científica y profunda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnaTeoriaGeneralDelAmor;
