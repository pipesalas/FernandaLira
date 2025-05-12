import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  to?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  to,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 transition-all duration-300 hover:shadow-md h-full flex flex-col group">
      <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold text-slate-800 mb-2">
        {title}
      </h3>
      <p className="text-slate-600 mb-4 flex-grow">{description}</p>
      {to && (
        <Link
          to={to}
          className="text-blue-600 font-medium inline-flex items-center group-hover:text-blue-700 transition-colors duration-300"
        >
          Learn more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default ServiceCard;