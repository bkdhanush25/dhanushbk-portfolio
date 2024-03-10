export interface CreateNavigation{
    selectNav: string,
    setSelectNav: (selectNav: string) => void;
}

export interface CreateAuth{
    isLoggedIn: boolean,
    setIsLoggedIn:(isLoggedIn: boolean) => void;
}