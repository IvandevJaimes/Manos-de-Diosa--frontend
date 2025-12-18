
interface AuthLoginProps {
  password?: string;
  identifier?: string;
  captcha?: string;
  data?: object;
}

const url = import.meta.env.VITE_API_URL;

export const authLoginAPI = async (data: AuthLoginProps = {}) => {
  const { identifier, password, captcha } = data; 
  

  try {
    const response = await fetch(`${url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier,
        password,
        captcha,
      }),
    });

    const result = await response.json();


    if (!response.ok) {

      return {
        success: false, 
        message: result.message,
        status: response.status, 
      };
    }


    return {
      success: true,
      message: result.message,
      token: result.token
    };
  } catch (err) {
    
    console.error("Fetch error:", err);
    return {
      success: false,
      message: "Error de conexión con el servidor",
      error: err,
    };
  }
};

