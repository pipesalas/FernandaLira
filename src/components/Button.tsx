import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseStyles = 'rounded-md font-medium transition-all duration-300 inline-flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm hover:shadow',
    secondary: 'bg-blue-100 hover:bg-blue-200 text-blue-700',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'px-5 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';
  
  const buttonClass = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabledStyles}`;

  if (to) {
    return (
      <Link to={to} className={buttonClass}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClass} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button 
      type={type} 
      onClick={onClick} 
      className={buttonClass}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;