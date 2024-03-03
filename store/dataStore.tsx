import { create } from "zustand";
import { CreateNavigation } from "@/types/storeProps";


export const useNavigation = create<CreateNavigation>((set) => ({
    selectNav: "Home",
    setSelectNav: (selectNav) => set({ selectNav })
}));

