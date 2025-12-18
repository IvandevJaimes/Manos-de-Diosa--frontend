import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getProfileAPI, editProfileAPI } from "../API/profileAPI";


export const useProfileQuery = () => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token") ||
    null;

  return useQuery({
    queryKey: ["profile", token],
    queryFn: () => getProfileAPI({ token: token as string }),
    enabled: !!token,
    retry: 1
  });
};

export const useEditProfileMutation = () => {
  const queryClient = useQueryClient();

  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token") ||
    null;

  const mutation = useMutation({
    mutationFn: (fields) => editProfileAPI(token, fields),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });

  return {
    ...mutation, 
    data: mutation.data,
    error: mutation.error,
  };
};
