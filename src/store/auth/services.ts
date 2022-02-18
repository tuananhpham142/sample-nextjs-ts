import axios from '@/api/axios';
import {
    ForgotPasswordRequestInterface,
    LoginRequestInterface,
    RegisterRequestInterface,
    ResetPasswordRequestInterface,
} from '@/models/Auth/AuthRequest';
import { LoginResponse, RegisterResponse } from '@/models/Auth/AuthResponse';
import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';
import { AxiosResponse } from 'axios';

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN;

const urls = {
    refreshToken: `${apiDomain}api/account/token/refresh`,
    login: `${apiDomain}api/account/login-tenant`,
    register: `${apiDomain}api/account/register`,
    confirmAccount: `${apiDomain}api/account/comfirm-account`,
    resendConfirmAccount: `${apiDomain}api/account/resend-confirm-account`,
    resetPassword: `${apiDomain}api/account/reset-password`,
    forgotPassword: `${apiDomain}api/account/forgot-password`,
};

const login = async (body: LoginRequestInterface): Promise<BaseAxiosResponse<LoginResponse>> =>
    axios
        .post<BaseAxiosResponse<LoginResponse>>(urls.login, body)
        .then((res) => res.data)
        .catch((err) => err.response.data);

const signup = async (body: RegisterRequestInterface): Promise<BaseAxiosResponse<RegisterResponse>> =>
    axios
        .post<BaseAxiosResponse<RegisterResponse>>(urls.register, body)
        .then((res) => {
            return res.data;
        })
        .catch((err) => err.response.data);

const forgotPassword = async (body: ForgotPasswordRequestInterface): Promise<BaseAxiosResponse<any>> =>
    axios
        .post<BaseAxiosResponse<any>>(urls.forgotPassword, body)
        .then((res) => res.data)
        .catch((err) => err.response.data);

const resetPassword = async (body: ResetPasswordRequestInterface): Promise<BaseAxiosResponse<any>> =>
    axios
        .post<BaseAxiosResponse<any>>(urls.resetPassword, body)
        .then((res) => res.data)
        .catch((err) => err.response.data);

const logout = async (): Promise<any> => axios.post<any>('auth/logout').then((res) => res.data);

const confirmAccount = async (body: any): Promise<BaseAxiosResponse<any>> => {
    const res: BaseAxiosResponse<any> = await axios.post(urls.confirmAccount, body).catch((err) => err.response.data);
    return res.data;
};

const resendConfirmAccount = async (body: ForgotPasswordRequestInterface): Promise<BaseAxiosResponse<any>> => {
    return axios
        .post<BaseAxiosResponse<any>>(urls.resendConfirmAccount, body)
        .then((res) => res.data)
        .catch((err) => err.response.data);
};

export const refreshToken = async (body: string): Promise<any> => {
    const res: AxiosResponse<any> = await axios.post(`${urls.refreshToken}/${body}`, body);
    return res.data;
};

export default {
    login,
    signup,
    forgotPassword,
    resetPassword,
    logout,
    confirmAccount,
    resendConfirmAccount,
    refreshToken,
};
