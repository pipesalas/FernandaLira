import React from 'react';

const AnsiedadDiaADia: React.FC = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-4xl font-playfair font-bold text-slate-800 mb-6">
        Cómo manejar la ansiedad en el día a día
      </h1>
      <p className="text-slate-600 mb-4">
        La ansiedad es una respuesta natural del cuerpo ante situaciones de estrés. Sin embargo, cuando se vuelve crónica, puede afectar nuestra calidad de vida. Aquí te presentamos algunas estrategias prácticas para manejarla:
      </p>
      <ul className="list-disc list-inside text-slate-600 mb-4">
        <li>Practica la respiración profunda para calmar tu mente.</li>
        <li>Establece una rutina diaria que incluya tiempo para el autocuidado.</li>
        <li>Busca apoyo en amigos, familiares o un profesional de la salud mental.</li>
      </ul>
      <p className="text-slate-600">
        Recuerda que no estás solo y que hay recursos disponibles para ayudarte a superar la ansiedad.
      </p>
    </div>
  );
};

export default AnsiedadDiaADia;
