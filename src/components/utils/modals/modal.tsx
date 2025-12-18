import React from "react";
import "./modal.css";
import { useEffect } from "react";

interface ModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = ({
  className,
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <div
        id="sidebar-overlay"
        onClick={onClose}
        aria-hidden={!isOpen}
        style={{
          display: isOpen ? "block" : "none",
          opacity: isOpen ? 1 : 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          transition: "opacity 300ms ease-in-out, visibility 300ms ease-in-out",
          position: "fixed",
          inset: 0,
          zIndex: 9999,
        }}
        className={`transition-opacity duration-300 ease-in-out ${
          isOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      ></div>

      <div
        className="modalContainer fixed inset-0 flex justify-center items-center w-full h-full"
        aria-modal="true"
        id="default-modal"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className={`${className || ""} modal relative rounded-lg shadow-sm overflow-hidden`}
          style={{ zIndex: 10000 }}
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-gray-200 dark:border-gray-600">
            {title && (
              <h3 className="text-xl font-bold text-gray-900">{title}</h3>
            )}
            <button
              onClick={onClose}
              className="text-gray-800 hover:text-gray-600 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center cursor-pointer transition"
            >
              <svg
                className="w-3 h-3"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="p-4 md:p-5 space-y-4">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 dark:border-gray-600">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
