import { create } from 'zustand';
import type { AuthInfo, Users } from '../domain/Users';
import type { Movies } from '../domain/Movies';
import { login as loginApi, logout as logoutApi, addToFavorites } from '../api/user.api';


type UserState = {
    isLoggedin: boolean;
    favoriteMovies: Movies[];
    loginInfo: AuthInfo;
    user: Users
}

type UserAction = {
    login(username: string, password: string): Promise<void>;
    logout(userId: string): Promise<void>;
    addFavorite(userId: number, movieId: number): Promise<void>;
    loadFromStorage(): void;
}

const saveToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

const loadFromStorage = (key: string) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
};

const removeFromStorage = (key: string) => {
    localStorage.removeItem(key);
};

export const useUserStore = create<UserState & UserAction>((set) => ({
    isLoggedin: false,
    favoriteMovies: [],
    loginInfo: {} as AuthInfo,
    user: {} as Users,
    login: async (username, password) => {
        const loginInfo = await loginApi(username, password);
        saveToStorage('isLoggedin', true);
        saveToStorage('loginInfo', loginInfo);
        set({ isLoggedin: true, loginInfo });
    },
    logout: async (userId) => {
        await logoutApi(userId);
        removeFromStorage('isLoggedin');
        removeFromStorage('loginInfo');
        removeFromStorage('user');
        removeFromStorage('favoriteMovies');
        set({ isLoggedin: false, loginInfo: {} as AuthInfo });
    },
    addFavorite: async (userId, movieId) => {
        await addToFavorites(userId, movieId);
    },
    loadFromStorage: () => {
        const isLoggedin = loadFromStorage('isLoggedin') || false;
        const loginInfo = loadFromStorage('loginInfo');
        const user = loadFromStorage('user');
        const favoriteMovies = loadFromStorage('favoriteMovies') || [];
        
        set({ isLoggedin, loginInfo, user, favoriteMovies });
    },
}));
