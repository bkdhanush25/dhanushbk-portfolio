import { create } from "zustand";
import { CreateNavigation,CreateAuth, CreateBlog } from "@/types/storeProps";


export const useNavigation = create<CreateNavigation>((set) => ({
    selectNav: "Home",
    setSelectNav: (selectNav) => set({ selectNav })
}));

export const useAuth = create<CreateAuth>((set) => ({
    isLoggedIn: false,
    setIsLoggedIn: (isLoggedIn) => set({ isLoggedIn })
}));

export const useBlog = create<CreateBlog>((set) => ({
    blogTitle:"",
    setBlogTitle: (blogTitle) => set({ blogTitle }),
    blogContent:"",
    setBlogContent: (blogContent) => set({ blogContent }),
    category:[],
    setCategory: (category) => set({ category }),
    blogAuthor:"",
    setBlogAuthor: (blogAuthor) => set({ blogAuthor }),
    likes:0,
    setLikes: (likes) => set({ likes }),
    comments:[],
    setComments: (comments) => set({ comments }),
    createdAt:"",
    setCreatedAt: (createdAt) => set({ createdAt }),

}));

