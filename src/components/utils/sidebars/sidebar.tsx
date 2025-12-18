import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./sidebar.css";

interface SidebarProps {
  open: boolean;
  handleClose: () => void;
}

const Sidebar = ({ open, handleClose }: SidebarProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const node = (
    <>
      {/* Fondo oscuro */}
      <div
        id="sidebar-overlay"
        onClick={handleClose}
        aria-hidden={!open}
        style={{
          display: open ? "block" : "none",
          opacity: open ? 1 : 0,
          backgroundColor: "rgba(0,0,0,0.6)",
          transition: "opacity 300ms ease-in-out, visibility 300ms ease-in-out",
          position: "fixed",
          inset: 0,
          zIndex: 99999,
        }}
        className={`transition-opacity duration-300 ease-in-out ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        id="drawer-navigation"
        style={{ zIndex: 100000, position: "fixed", top: 0, left: 0 }}
        className={`sideBar w-64 h-screen p-4 overflow-y-auto bg-gray-900 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h3
          id="drawer-navigation-label"
          className=" font-semibold text-gray-700"
        >
          Menú
        </h3>

        <button
          type="button"
          onClick={handleClose}
          aria-controls="drawer-navigation"
          className="text-gray-300 bg-transparent hover:bg-gray-500 hover:text-gray-500 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span className="sr-only">Close menu</span>
        </button>

        <div className="py-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-100 ease-in-out"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Inicio</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-100 ease-in-out"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="ms-3">Productos</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-100 ease-in-out"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="ms-3">Ofertas</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-100 ease-in-out"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="ms-3">Nosotros</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-700 rounded-lg hover:bg-gray-200 transition duration-100 ease-in-out"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <span className="ms-3">Contacto</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );

  return typeof document !== "undefined"
    ? createPortal(node, document.body)
    : node;
};

export default Sidebar;
