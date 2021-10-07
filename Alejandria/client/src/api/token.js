import { TOKEN } from "../utils/constants";

export function setTokenApi(token) {
    localStorage.setItem(TOKEN, token);
}

export function getTokenApi(token) {
    return localStorage.getItem(TOKEN);
}

export function deleteTokenApi(token) {
    return localStorage.removeItem(TOKEN);
}