import React from 'react';

interface GlassButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

const GlassButton: React.FC<GlassButtonProps> = ({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick
}) => {
  const sizeClasses = {
    sm: 'px-6 py-2.5 text-sm',
    md: 'px-8 py-3.5 text-base',
    lg: 'px-10 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-construction-yellow/70 text-charcoal-black hover:bg-construction-yellow/80 border-construction-yellow/30',
    secondary: 'bg-machinery-gray/60 text-aluminum hover:bg-machinery-gray/70 border-machinery-gray/20',
    outline: 'bg-transparent border-2 border-steel-black text-steel-black hover:bg-steel-black/10'
  };

  const buttonContent = (
    <button
      onClick={onClick}
      className={`
        relative font-semibold overflow-hidden cursor-pointer 
        transition-all duration-300 rounded-full
        backdrop-blur-md border
        shadow-glass hover:shadow-lg
        transform hover:-translate-y-0.5
        ${sizeClasses[size]} ${variantClasses[variant]} ${className}
      `}
    >
      {/* Glass light effect overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.1) 0%, transparent 70%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center w-full">
        {children}
      </div>
    </button>
  );

  return href ? (
    <a href={href} className="inline-block">
      {buttonContent}
    </a>
  ) : (
    buttonContent
  );
};

export default GlassButton;
