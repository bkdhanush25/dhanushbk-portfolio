export interface CreateNavigation{
    selectNav: string,
    setSelectNav: (selectNav: string) => void;
}

export interface CreateAuth{
    isLoggedIn: boolean,
    setIsLoggedIn:(isLoggedIn: boolean) => void;
}

export interface CreateBlog{
    blogTitle: string,
    setBlogTitle: (blogTitle: string) => void;
    blogBannerImage: string,
    setBlogBannerImage: (blogBannerImage: string) => void;
    blogContent: string,
    setBlogContent: (blogContent: string) => void;
    category: string[],
    setCategory: (category: string[]) => void;
    blogAuthor: string,
    setBlogAuthor: (blogAuthor: string) => void;
    likes: number,
    setLikes: (likes: number) => void;
    comments: string[],
    setComments: (comments: string[]) => void;
    createdAt: string,
    setCreatedAt: (createdAt: string) => void;
}