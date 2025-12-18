import { useState } from "react";
import "./navbar.css";
import manosdeDiosaLogo from "../../assets/Manos-de-Diosa-Logo (1).png";
import LoginButton from "../utils/buttons/buttonDesign1";
import BubbleAuth from "../utils/messages/bubbleAuth.tsx";
import { useProfileQuery } from "../../querys/profileQuery.ts";
import BubbleProfile from "../utils/profile/profileBubble.tsx";
import { useLocation, Link } from "react-router-dom";
interface NavbarProps {
  handleToggle?: () => void;
  handleOpen?: () => void;
}

const Navbar = ({ handleToggle, handleOpen }: NavbarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const [visible, setVisible] = useState(false);
  const { data, isLoading } = useProfileQuery();

  return (
    <>
      <nav className="navbarTop">
        <div className="flex justify-between items-center py-4 px-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <button
              onClick={handleToggle}
              className="openSidebar text-white hover:text-gray-800 cursor-pointer md:hidden mr-4"
              type="button"
              aria-label="Abrir menú"
            >
              <svg
                className="w-8 h-8"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2zm0 4h14a1 1 0 010 2H3a1 1 0 110-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <a
              href="#"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src={manosdeDiosaLogo}
                alt="Logo Manos de Diosa"
                className="logoManosdeDiosa"
              />
            </a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <section className="flex items-center max-w-sm mx-auto bg-gray-900 rounded-2xl px-3 py-2 searchBar">
              <input
                type="text"
                placeholder="Buscar"
                className="w-full rounded-2xl border border-gray-700 bg-gray-900 p-2 text-sm text-white placeholder-gray-400 focus:border-gray-500 focus:ring-gray-200 outline-none"
              />
              <button
                type="button"
                className="ml-2 text-gray-400 hover:text-blue-500"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </section>
            <section className="searchButtonMb ">
              <button
                type="button"
                className="border border-gray-700 bg-gray-900 px-4 py-2 text-m text-gray-400 hover:cursor-pointer hover:border-gray-300 transition duration-200 ease-in-out "
              >
                <span>
                  <p>Buscar</p>
                </span>
                <div>
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m2-5a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </button>
            </section>
            {currentPath !== "/perfil" && (
              <div>
                {isLoading ? (
                  <BubbleProfile isLoading={true} className="bubbleProfile" />
                ) : data?.success ? (
                  <Link to={"/perfil"}>
                    <>
                      <BubbleProfile
                        avatar={data.data?.avatar}
                        className="bubbleProfile"
                      />
                    </>
                  </Link>
                ) : (
                  <div className="loginButton flex items-center">
                    <LoginButton
                      onClick={() => {
                        handleOpen?.();
                        setVisible(false);
                      }}
                      size="md"
                      textColor="white"
                    >
                      Iniciar sesión
                    </LoginButton>

                    <BubbleAuth
                      className="bubble"
                      visible={visible}
                      setVisible={setVisible}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>

      <nav className="navbarLinks">
        <div className="px-4 py-3">
          <div className="flex items-center text-center">
            <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
              {currentPath !== "/" && (
                <li className="ml-4">
                  <a href="/" className="text-white hover:underline">
                    Inicio
                  </a>
                </li>
              )}

              {currentPath !== "/servicios" && (
                <li>
                  <a href="/servicios" className="text-white hover:underline">
                    Servicios
                  </a>
                </li>
              )}

              {currentPath !== "/cursos" && (
                <li>
                  <a href="/cursos" className="text-white hover:underline">
                    Cursos
                  </a>
                </li>
              )}

              {currentPath !== "/contacto" && (
                <li>
                  <a href="/contacto" className="text-white hover:underline">
                    Contacto
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
