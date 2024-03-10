import { create } from "zustand";
import { CreateNavigation,CreateAuth } from "@/types/storeProps";


export const useNavigation = create<CreateNavigation>((set) => ({
    selectNav: "Home",
    setSelectNav: (selectNav) => set({ selectNav })
}));

export const useAuth = create<CreateAuth>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn })
}));

