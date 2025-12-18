import { useEffect } from "react";

type BubbleProps = {
  className?: string;
  visible: boolean;
  setVisible: (visible: boolean) => void;
};

const BubbleAuth = ({ className, visible, setVisible }: BubbleProps) => {
  useEffect(() => {
    const show = setTimeout(() => setVisible(true), 3000);
    const hide = setTimeout(() => setVisible(false), 13000);
    return () => {
      clearTimeout(show);
      clearTimeout(hide);
    };
  }, [setVisible]);

  return (
    <div
      className={`absolute z-50 ${
        className || ""
      }  transform transition-all duration-300 ease-out flex items-center rounded-lg justify-center
        ${
          visible
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2"
        }`}
      role="status"
    >
      <div className="bubblePointer absolute rotate-45"></div>
      <p className="font-boldtext-gray-700 flex items-center justify-center">
        <button
          className="text-gray-700 absolute top-0 left-0"
          onClick={() => setVisible(false)}
        >
          <svg
            className="w-4 h-4 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </button>
        Ingresa para reservar tu cita
      </p>
    </div>
  );
};

export default BubbleAuth;
