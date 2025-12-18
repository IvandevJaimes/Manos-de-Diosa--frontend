import React from 'react';

type ButtonSize = "sm" | "md" | "lg" | "xl";
type ButtonTextColor = "white" | "black" | "gray1" | "gray2";

interface LoadingButtonProps {
  text?: string;
  className?: string;
  size: ButtonSize;
  textColor: ButtonTextColor;
}

const LoadingButton: React.FC<LoadingButtonProps> = ({ 
  text = "Cargando...", 
  className = "",
  size,
  textColor
}) => {

  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-8 py-2 text-lg",
    xl: "px-16 py-3 text-xl",
  };
  
  const textColorClasses = {
    white: "text-white",
    black: "text-dark",
    gray1: "text-gray-700",
    gray2: "text-gray-500",
  };

  return (
    <button 
      className={`
        flex items-center justify-center gap-3
        rounded-full 
        ${textColorClasses[textColor]}
        font-medium opacity-80 cursor-not-allowed 
        ${sizeClasses[size]}
        ${className}
      `}
      disabled
    >
      {text}
      <svg
          aria-hidden="true"
          className="w-6 h-6 animate-spin spin"
          viewBox="0 0 100 101"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="opacity-25"
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="10"
            fill="none"
          />
          <path
            className="opacity-100"
            fill="currentColor"
            d="M93.9676 39.0409C96.393 38.4038 97.8624 
               35.9116 97.0079 33.5539C95.2932 28.8227 
               92.871 24.3692 89.8167 20.348C85.8452 
               15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 
               4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 
               0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 
               1.69328 37.813 4.19778 38.4501 6.62326C39.0873 
               9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 
               9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 
               10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 
               17.9648 79.3347 21.5619 82.5849 25.841C84.9175 
               28.9121 86.7997 32.2913 88.1811 35.8758C89.083 
               38.2158 91.5421 39.6781 93.9676 39.0409Z"
          />
        </svg>
    </button>
  );
};

export default LoadingButton;
