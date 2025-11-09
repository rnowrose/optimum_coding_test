export interface Users {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    username: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
    token?: string;
}

export interface AuthInfo {
    success?: boolean;
    user_id?: string;
    token?: string;
    message: string;
}

export interface SignUp {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    password: string;
}

export interface SignUpMessage extends SignUp {
    message: string
}

export interface Favorites {
    userId: string;
    movieId: number;
}