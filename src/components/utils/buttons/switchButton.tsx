import React from "react";

interface SwitchProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const SwitchButton = ({
  className = "",
  checked,
  ...props
}: SwitchProps) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        {...props}
      />

      <div
        className={`${ className || "" } relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-gray-300 rounded-full peer transition-colors duration-300 ease-in-out peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all after:duration-300 after:ease-in-out peer-checked:bg-[#f9a8d4]`}      
      ></div>
    </label>
  );
};

export default SwitchButton;
