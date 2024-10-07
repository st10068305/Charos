import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  toggle: () => void;
}

const useAuth = create<AuthState>()((set) => ({
  isAuthenticated: false,
  toggle: () => set((state) => ({ isAuthenticated: !state.isAuthenticated })),
}));

export default useAuth;
