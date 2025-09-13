'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children?: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon' | 'fab';
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  icon,
  iconPosition = 'left',
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const sizeClasses = {
    sm: 'px-3 py-2 text-xs sm:px-4 sm:py-2 sm:text-sm gap-1.5 sm:gap-2 min-h-[40px] sm:min-h-[44px] touch-manipulation',
    md: 'px-4 py-2.5 text-sm sm:px-6 sm:py-3 sm:text-base gap-2 min-h-[40px] sm:min-h-[44px] touch-manipulation',
    lg: 'px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg gap-3 min-h-[44px] sm:min-h-[48px] touch-manipulation',
    icon: 'h-9 w-9 sm:h-11 sm:w-11 min-h-[40px] sm:min-h-[44px] touch-manipulation',
    fab: 'h-12 w-12 sm:h-14 sm:w-14 text-base sm:text-lg min-h-[48px] sm:min-h-[56px] touch-manipulation',
  };
  
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300',
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {icon && iconPosition === 'left' && icon}
      {children}
      {icon && iconPosition === 'right' && icon}
    </motion.button>
  );
};

export default Button;
