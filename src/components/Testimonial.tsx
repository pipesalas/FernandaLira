import React from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ quote, author, role }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm border border-slate-100 h-full">
      <svg
        className="w-10 h-10 text-blue-200 mb-4"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-slate-700 mb-4 italic">{quote}</p>
      <div>
        <p className="font-semibold text-slate-800">{author}</p>
        {role && <p className="text-sm text-slate-500">{role}</p>}
      </div>
    </div>
  );
};

export default Testimonial;