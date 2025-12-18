
import { ReactNode } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  isRequired?: boolean;
  isIncorrect?: boolean;
  children?: ReactNode;
}

const InputDesign1 = ({
  className = "",
  placeholder,
  type = "text",
  maxLength,
  minLength,
  isRequired = false,
  isIncorrect = false,
  children,
  ...props
}: InputProps) => {
  return (
    <>
      <input
        type={type}
        className={`${className} text-gray-800 text-sm rounded-lg outline-none focus:ring-gray-700 ${
          isIncorrect
            ? "border-red-300 ring-red-100 focus:ring-red-400"
            : "border-gray-200 text-gray-700 focus:ring-gray-700"
        }`}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxLength}
        minLength={minLength}
        {...props}
      />
      {children}
    </>
  );
};

export default InputDesign1;
