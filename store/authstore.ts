import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as SecureStore from "expo-secure-store";

type AuthStore = {
  token: string | null;
  user: any;
  setAuth: (token: string, user: any) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: null,
      user: null,

      setAuth: (token, user) => set({ token, user }),

      logout: () => set({ token: null, user: null }),
    }),
    {
      name: "auth-storage",

      storage: createJSONStorage(() => ({
        setItem: async (name, value) => {
          await SecureStore.setItemAsync(name, value);
        },
        getItem: async (name) => {
          return await SecureStore.getItemAsync(name);
        },
        removeItem: async (name) => {
          await SecureStore.deleteItemAsync(name);
        },
      })),
    }
  )
);