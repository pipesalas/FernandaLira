import React from 'react';

const ElPoderDelAhora: React.FC = () => {
  const portadaUrl = "https://m.media-amazon.com/images/I/71Xk6J1pA+L.jpg";
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-playfair font-bold text-slate-800 mb-6">
        Libro: "El poder del ahora" de Eckhart Tolle
      </h1>
      <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
        <img
          src={portadaUrl}
          alt="Portada de El poder del ahora"
          className="w-48 h-auto rounded shadow-md mb-4 md:mb-0 object-cover"
          style={{ minWidth: 160, minHeight: 240 }}
        />
        <div>
          <p className="text-slate-600 mb-4">
            Una guía práctica para vivir en el presente y encontrar la paz interior. Este libro ofrece herramientas y reflexiones para aprender a desconectarse del ruido mental y enfocarse en el momento presente.
          </p>
          <ul className="list-disc list-inside text-slate-600 mb-4">
            <li>Aprende a vivir en el presente y reducir el estrés.</li>
            <li>Descubre cómo desconectarte del ruido mental.</li>
            <li>Encuentra herramientas para mejorar tu bienestar emocional.</li>
          </ul>
          <p className="text-slate-600">
            Este libro es una lectura recomendada para quienes buscan mejorar su bienestar emocional y espiritual.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElPoderDelAhora;
