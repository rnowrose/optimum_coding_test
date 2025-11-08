import { create } from 'zustand';
import type { User } from '../domain/User';
import type { AuthInfo } from '../domain/Users';

type UserState = {
    isLoggedin: boolean;
    loginInfo: AuthInfo;
    user: User
}

type UserAction = {
    login(params: {username: string, password: string}): void;
    logout(): void;
}