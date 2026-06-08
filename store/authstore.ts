import { create } from 'zustand'

type AuthStore = {
  token: string | null;
  user: any;
  setAuth: (token: string, user: any) => void;
};

export const useAuthStore  = create<AuthStore>((set) => ({
    token:null,
    user: null,
    setAuth: (token,user)=>set({token,user})
}))