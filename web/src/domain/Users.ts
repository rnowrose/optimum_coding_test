export interface Users {
    id: number;
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
    user_id?: number;
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