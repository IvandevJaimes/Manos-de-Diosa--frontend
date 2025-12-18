import Button from "../../utils/buttons/buttonDesign1";
import LoadingButton from "../../utils/buttons/loadingButton.tsx";
import Input from "../../utils/inputs/inputDesign1";
import SwitchButton from "../../utils/buttons/switchButton";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../utils/messages/errorAlert";
import ShowPassButton from "../../utils/buttons/showPassButton";
import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { authLoginAPI } from "../../../API/authAPI.ts";
import { useTokenStore } from "../../../utilsFunctions/tokenStorage.ts";
import { useNavigate } from "react-router-dom";

type LoginFormValues = {
  identifier: string;
  password: string;
  rememberMe?: boolean;
};

const LoginForm = () => {
  const [showPassWord, setShowPassword] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [loginError, setLoginError] = useState("");
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const { saveToken } = useTokenStore();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginFormValues>();

  useEffect(() => {
    if (!passwordValue.length) setShowPassword(false);
  }, [passwordValue]);

  const handleShow = () => setShowPassword((s) => !s);

  const { mutateAsync, isPending } = useMutation({
    mutationFn: authLoginAPI,
  });

  const loggedUser = async (data: LoginFormValues) => {
    setLoginError("");
    try {
      const tokenCaptcha = await recaptchaRef.current?.executeAsync();
      if (!tokenCaptcha) {
        setLoginError("Error al obtener el captcha. Intentá de nuevo.");
        recaptchaRef.current?.reset();
        return;
      }

      const dataUser = {
        identifier: data.identifier,
        password: data.password,
        captcha: tokenCaptcha,
        rememberMe: !!data.rememberMe,
      };

      const resultLogin = await mutateAsync(dataUser);

      if (resultLogin?.success) {
        reset();
        setShowPassword(false);
        setPasswordValue("");
        setLoginError("");
        if (resultLogin.token) saveToken(resultLogin.token, dataUser.rememberMe);
        navigate("/");
      } else {
        setLoginError(resultLogin?.message || "Error en el login");
      }
    } catch {
      setLoginError("Error inesperado. Revisá la conexión.");
    } finally {
      recaptchaRef.current?.reset();
    }
  };

  return (
    <form className="mt-2" onSubmit={handleSubmit(loggedUser)}>
      <div className="mb-2">
        {loginError ? <ErrorAlert message={loginError} className={"text-m mb-4 errorLogin"} /> : null}
        <label htmlFor="identifier" className="block mb-2 text-sm font-medium text-gray-900">
          Ingresa tu nombre de usuario o e-mail
        </label>
        <Input
          className="w-full p-2.5 bg-transparent"
          type="text"
          maxLength={50}
          {...register("identifier", {
            required: "Completa este campo",
            validate: (value) => value.trim().length > 0 || "No se permiten solo espacios",
          })}
          isIncorrect={errors.identifier ? true : false}
        />
        {errors.identifier ? <ErrorAlert message={errors.identifier?.message} /> : null}
      </div>

      <div className="mb-6">
        <label htmlFor="password" className="block mb-2 mt-4 text-sm font-medium text-gray-900">
          Ingresa tu contraseña
        </label>
        <span className="relative w-full">
          <Input
            className="w-full p-2.5 bg-transparent"
            type={showPassWord ? "text" : "password"}
            maxLength={30}
            minLength={5}
            {...register("password", {
              required: "Completa este campo",
              onChange: (e) => setPasswordValue(e.target.value),
              validate: (value) => value.trim().length > 0 || "No se permiten solo espacios",
            })}
            isIncorrect={errors.password ? true : false}
          >
            <ShowPassButton
              className="absolute right-[15px] top-0"
              isActive={showPassWord}
              onClick={handleShow}
              isShow={passwordValue.length ? true : false}
            />
          </Input>
        </span>

        {errors.password ? <ErrorAlert message={errors.password?.message} /> : null}
      </div>

      <div className="remember-forgot flex items-start mb-6 justify-center text-center">
        <SwitchButton {...register("rememberMe")} />
        <div className="ml-3 text-sm pt-[3px]">
          <label htmlFor="remember" className="font-medium text-gray-900">
            Recordarme
          </label>
        </div>
        <a href="/forgot-password/" className="ml-auto text-sm text-pink-500 pt-[3px] hover:underline">
          ¿Olvidaste tu contraseña?
        </a>
      </div>

      <div className="bottomForm flex gap-2">
        <div>
          <ReCAPTCHA ref={recaptchaRef} sitekey={import.meta.env.VITE_SITE_KEY_CAPTCHA} size="invisible" />
        </div>
        <div className="flex mb-4 w-full items-center pt-2">
          {isPending ? (
            <LoadingButton size="xl" textColor="white" className="loadingBtn" />
          ) : (
            <Button
              size="xl"
              textColor="white"
              className="loginBtn flex items-center justify-center gap-2 text-center"
              onClick={() => setLoginError("")}
              type="submit"
            >
              Iniciar sesión
              <svg className="w-6 h-6 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H4m12 0-4 4m4-4-4-4m3-4h2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3h-2" />
              </svg>
            </Button>
          )}
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
