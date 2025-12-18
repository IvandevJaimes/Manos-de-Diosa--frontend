import Button from "../buttons/buttonDesign1";
import "./login.css";
import { useNavigate } from "react-router-dom";

const LoginButtons = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 w-full">
      <Button
        size="xl"
        textColor="white"
        className="googleButton flex items-center justify-center text-center w-full gap-4"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M12.037 21.998a10.313 10.313 0 0 1-7.168-3.049 9.888 9.888 0 0 1-2.868-7.118 9.947 9.947 0 0 1 3.064-6.949A10.37 10.37 0 0 1 12.212 2h.176a9.935 9.935 0 0 1 6.614 2.564L16.457 6.88a6.187 6.187 0 0 0-4.131-1.566 6.9 6.9 0 0 0-4.794 1.913 6.618 6.618 0 0 0-2.045 4.657 6.608 6.608 0 0 0 1.882 4.723 6.891 6.891 0 0 0 4.725 2.07h.143c1.41.072 2.8-.354 3.917-1.2a5.77 5.77 0 0 0 2.172-3.41l.043-.117H12.22v-3.41h9.678c.075.617.109 1.238.1 1.859-.099 5.741-4.017 9.6-9.746 9.6l-.215-.002Z"
            clip-rule="evenodd"
          />
        </svg>
        Continuar con Google
      </Button>
      <Button
        size="xl"
        textColor="white"
        className="faceButton flex items-center justify-center text-center w-full gap-3"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            fill-rule="evenodd"
            d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
            clip-rule="evenodd"
          />
        </svg>
        Continuar con Facebook
      </Button>
      <Button
        size="xl"
        textColor="white"
        className="mailButton flex items-center justify-center text-center w-full gap-4"
        onClick={() => navigate("/login")}
      >
        <svg
          className="w-6 h-6 text-white"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="48"
          height="48"
          aria-hidden="true"
        >
          <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
        Continuar con Correo electrónico
      </Button>
      <hr className="border-gray-300" />
      <div className="text-sm font-medium text-gray-500 ">
        ¿No tenés una cuenta?
        <a href="/register/" className="ml-1 text-gray-800 hover:underline ">
          Registrate acá.
        </a>
      </div>
    </div>
  );
};

export default LoginButtons;
