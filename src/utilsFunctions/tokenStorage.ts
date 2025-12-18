import { create } from "zustand";

interface TokenState {
  token: string | null;
  rememberMe: boolean;
  saveToken: (token: string, rememberMe: boolean) => void;
  removeToken: () => void;
  getToken: () => string | null;
}

export const useTokenStore = create<TokenState>((set, get) => ({
  token: localStorage.getItem("token") || sessionStorage.getItem("token"),
  rememberMe: !!localStorage.getItem("token"),

  saveToken: (token, rememberMe) => {
    if (rememberMe) {
      localStorage.setItem("token", token);
      sessionStorage.removeItem("token");
    } else {
      sessionStorage.setItem("token", token);
      localStorage.removeItem("token");
    }

    set({ token, rememberMe });
  },

  removeToken: () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    set({ token: null, rememberMe: false });
  },

  getToken: () => {
    return get().token;
  }
}));
