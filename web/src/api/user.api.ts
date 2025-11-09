import type { AuthInfo, SignUp, SignUpMessage, Users } from "../domain/Users";

function login(username: string, password: string): Promise<AuthInfo> {
    return fetch(`http://localhost:8000/api/users/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password
        }),
    })
    .then((response) => {
        console.log('Response status:', response); 
        return response.json();
    });

}

function logout(userId: string): Promise<string> {
    return fetch(`http://localhost:8000/api/users/logout/${userId}`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user_id: userId }),
    })
    .then((response) => {
        if (response.ok) {
            return "success";
        }
        throw new Error("Failed to logout");
    });
}

function register(signUp: SignUp): Promise<SignUpMessage> {
    return fetch(`http://localhost:8000/api/users/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(signUp),
    })
    .then((response) => {
        return response.json();
    });
}

function getUserDetails(userId: number): Promise<Users> {
    return fetch(`http://localhost:8000/api/users/${userId}`)
        .then((response) => {
            return response.json();
        });
}

function addToFavorites(userId: number, movieId: number): Promise<string> {
    return fetch(`http://localhost:8000/api/users/${userId}/favorites`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, movieId }),
    })
    .then((response) => {
        if (response.ok) {
            return "success";
        }
        throw new Error("Failed to add to favorites");
    });
}

export {
    login,
    register,
    getUserDetails,
    addToFavorites,
    logout
}