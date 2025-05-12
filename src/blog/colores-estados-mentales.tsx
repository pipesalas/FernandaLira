import React from 'react';

const ColoresEstadosMentales: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-playfair font-bold text-slate-800 mb-6">
        El Significado de los Colores en los Estados Mentales
      </h1>
      <p className="text-slate-600 mb-4">
        Los colores tienen un impacto significativo en nuestras emociones y estados mentales. Aquí exploramos cómo algunos colores comunes pueden influir en nuestro bienestar:
      </p>
      <ul className="list-disc list-inside text-slate-600 mb-4">
        <li><strong>Rojo:</strong> Asociado con la energía y el estrés. Puede aumentar la alerta, pero también puede ser abrumador en exceso.</li>
        <li><strong>Azul:</strong> Relacionado con la calma y la concentración. Es ideal para entornos que requieren enfoque y tranquilidad.</li>
        <li><strong>Verde:</strong> Representa equilibrio y serenidad. Se asocia con la naturaleza y puede promover la relajación.</li>
      </ul>
      <p className="text-slate-600">
        Comprender el impacto de los colores puede ayudarnos a crear entornos que favorezcan nuestro bienestar emocional y mental.
      </p>
    </div>
  );
};

export default ColoresEstadosMentales;
