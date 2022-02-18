import jwt from 'jsonwebtoken';
import Cookies, { CookieSetOptions } from 'universal-cookie';
import { decryptAES, encryptAES } from './crypts.utils';

const AUTH_COOKIE = 'auth';
const USER_INFO_COOKIE = 'user_info';

export const setCookie = ({
    field,
    encrypt,
    value,
    options,
}: {
    field: string;
    encrypt?: boolean;
    value: string;
    options?: CookieSetOptions;
}) => {
    let cookieOptions: CookieSetOptions = {
        secure: process.env.NODE_ENV !== 'production',
        httpOnly: true,
        sameSite: true,
    };

    if (options) {
        cookieOptions = {
            ...cookieOptions,
            ...options,
        };
    }
    const cookies = new Cookies();
    const cookieValue = encrypt ? encryptAES(value) : value;
    cookies.set(field, cookieValue, options);
};

export const getCookie = (field: string) => {
    const cookies = new Cookies();
    const value = cookies.get(field);
    return value ? decryptAES(value) : undefined;
};

export const removeCookie = (field: string) => {
    const cookies = new Cookies();
    return cookies.remove(field);
};

// Token and RefreshToken in Auth
export const getAuthCookie = (field?: string) => {
    const cookies = new Cookies();
    try {
        const value = cookies.get(AUTH_COOKIE);
        if (value) {
            const authInfo = JSON.parse(decryptAES(value));
            return field ? authInfo[field] : authInfo;
        }
        return undefined;
    } catch (error: any) {
        return undefined;
    }
};

export const setAuthCookie = (data: any) => {
    const cookies = new Cookies();
    cookies.set(AUTH_COOKIE, encryptAES(JSON.stringify(data)), {
        path: '/',
        maxAge: data.Expires * 1000,
    });
};

export const removeAuthCookie = () => {
    const cookies = new Cookies();
    cookies.remove(AUTH_COOKIE);
};

export const getRefreshToken = () => {
    const authCookie = getAuthCookie();
    if (authCookie) {
        const { RefreshToken } = authCookie;
        return RefreshToken ? `${RefreshToken}` : undefined;
    }
    return undefined;
};

export const getAccessToken = (field?: string) => {
    const authCookie = getAuthCookie();
    if (authCookie) {
        const { AccessToken } = authCookie;
        return AccessToken
            ? field
                ? //@ts-ignore
                  jwt.decode(AccessToken)[field]
                : `${AccessToken}`
            : undefined;
    }
    return undefined;
};

// User Info

export const setUserInfoCookie = (data: any) => {
    const cookies = new Cookies();

    cookies.set(USER_INFO_COOKIE, encryptAES(JSON.stringify(data)));

    // setCookie({
    //     field: USER_INFO_COOKIE,
    //     value: JSON.stringify(data),
    //     encrypt: true,
    // });
};

export const getUserInfoCookie = () => {
    const cookies = new Cookies();
    try {
        const value = cookies.get(USER_INFO_COOKIE);
        return value ? JSON.parse(decryptAES(value)) : undefined;
    } catch (err: any) {
        return undefined;
    }
};

export const removeUserInfoCookie = () => {
    const cookies = new Cookies();
    cookies.remove(USER_INFO_COOKIE);
};

export const clearAuthentication = () => {
    removeAuthCookie();
    removeUserInfoCookie();
};
