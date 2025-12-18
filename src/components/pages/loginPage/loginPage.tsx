import logo from "../../../assets/Manos-de-Diosa-Logo (1).png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import LoginForm from "./loginForm";
import "./loginPage.css";

const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <main className="mainLogin w-full h-[100vh]">
      <div className=" flex flex-col justify-center items-center py-8 px-6 mx-auto ">
        <Link
          to="/"
          className="flex justify-center items-center mb-8 text-3xl font-semibold lg:mb-10 dark:text-white"
        >
          <span className="logo">
            <img
              src={logo}
              alt="Logo Manos de Diosa"
              className="object-cover"
            />
          </span>
        </Link>

        <div className="loginForm p-6 w-full sm:p-8 lg:p-10 bg-white rounded-lg shadow lg:max-w-screen-sm dark:bg-gray-800">
          <div className="flex justify-start text-center gap-4">
            <svg
              className="backButton w-8 h-8 text-gray-800 hover:text-gray-600 cursor-pointer pt-[1px]"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              onClick={() => navigate(-1)}
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m15 19-7-7 7-7"
              />
            </svg>

            <h1 className="mb-3 text-2xl font-bold text-gray-800">
              Inicia sesión en tu cuenta
            </h1>
          </div>
          <LoginForm></LoginForm>

          <div className="text-sm font-medium text-gray-500 ">
            ¿No tenés una cuenta?
            <a
              href="/register/"
              className="ml-1 text-gray-800 hover:underline "
            >
              Registrate acá.
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
