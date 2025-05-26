import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hover = false,
}) => {
  const baseClasses = 'bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden';
  const hoverClasses = hover ? 'transition-transform duration-200 hover:-translate-y-1 hover:shadow-md' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const combinedClasses = `${baseClasses} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div className={combinedClasses} onClick={onClick}>
      {children}
    </div>
  );
};