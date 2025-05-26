import React from 'react';

interface LinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export const Link: React.FC<LinkProps> = ({
  href,
  children,
  className = '',
  external = false,
}) => {
  const baseClasses = 'inline-flex items-center transition-colors';
  const combinedClasses = `${baseClasses} ${className}`;

  if (external) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={combinedClasses}>
      {children}
    </a>
  );
};