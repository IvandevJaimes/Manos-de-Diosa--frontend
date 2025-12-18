interface GetProfileProps {
    token: string;
}
  
const url = import.meta.env.VITE_API_URL;
  
export const getProfileAPI = async ({ token }: GetProfileProps) => {
    try {
      const response = await fetch(`${url}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
  
      const result = await response.json();
  
      if (!response.ok) {
        return {
          success: false,
          message: result.message,
          status: response.status
        };
      }
  
      return {
        success: true,
        data: result.data
      };
    } catch (err) {
      return {
        success: false,
        message: "Error de conexión con el servidor",
        error: err
      };
    }
};
  

export const editProfileAPI = async (token: string | null, fields: any) => {
  const formData = new FormData();

  if (fields.avatar) {
    formData.append("avatar", fields.avatar);
  }

  const cleanFields = { ...fields };
  delete cleanFields.avatar;

  if (Object.keys(cleanFields).length > 0) {
    formData.append("fields", JSON.stringify(cleanFields));
  }

  const response = await fetch(`${url}/profile/update`, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: formData
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.message || "Error desconocido");
  }

  return { success: true, data: result.data };
};
