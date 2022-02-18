import {
    ConfirmAccountRequestInterface,
    ForgotPasswordRequestInterface,
    LoginRequestInterface,
    RegisterRequestInterface,
    ResetPasswordRequestInterface,
} from '@/models/Auth/AuthRequest';
import { LoginResponse, RegisterResponse } from '@/models/Auth/AuthResponse';
import { BaseAxiosResponse } from '@/models/interfaces/globalInterface';
import i18n from '@/translations/index';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { showSnackbar } from '../customSnackbar';
import { AppDispatch } from '../redux';
import services from './services';

const login = createAsyncThunk<BaseAxiosResponse<LoginResponse>, LoginRequestInterface, {}>(
    'auth/login',
    async (payload: LoginRequestInterface, { rejectWithValue }) => {
        try {
            const response = await services.login(payload);

            if (!response?.data?.accessToken) {
                throw response;
            }
            return response;
        } catch (err: any) {
            return rejectWithValue(err.Message);
        }
    },
);

const signup = createAsyncThunk<
    BaseAxiosResponse<RegisterResponse>,
    RegisterRequestInterface,
    {
        dispatch: AppDispatch;
    }
>('auth/signup', async (payload: RegisterRequestInterface, { rejectWithValue, dispatch }) => {
    try {
        const response = await services.signup(payload);
        if (!(response?.code === 1)) {
            throw response;
        }

        dispatch(
            showSnackbar({
                message: 'Success',
                type: 'success',
            }),
        );
        return response;
    } catch (err: any) {
        dispatch(
            showSnackbar({
                message: err.Message,
                type: 'error',
            }),
        );
        return rejectWithValue(err.Message);
    }
});

const confirmAccount = createAsyncThunk<
    BaseAxiosResponse<any>,
    ConfirmAccountRequestInterface,
    { dispatch: AppDispatch }
>('auth/confirmAccount', async (payload: ConfirmAccountRequestInterface, { rejectWithValue, dispatch }) => {
    try {
        const response = await services.confirmAccount(payload);
        if (!(response?.code === 1)) {
            throw response;
        }
        return response;
    } catch (err: any) {
        dispatch(
            showSnackbar({
                message: err.Message,
                type: 'error',
            }),
        );
        return rejectWithValue(err.Message);
    }
});

const forgotPassword = createAsyncThunk<
    BaseAxiosResponse<any>,
    ForgotPasswordRequestInterface,
    { dispatch: AppDispatch }
>('auth/forgotPassword', async (payload: ForgotPasswordRequestInterface, { rejectWithValue, dispatch }) => {
    try {
        const response = await services.forgotPassword(payload);
        if (!(response?.code === 1)) {
            throw response;
        }
        dispatch(
            showSnackbar({
                message: i18n.t('common:notify.auth.sendConfirmationCodeSuccess'),
                type: 'success',
            }),
        );
        return response;
    } catch (err: any) {
        dispatch(
            showSnackbar({
                message: err.response.data.Message,
                type: 'error',
            }),
        );
        return rejectWithValue(err.Message);
    }
});

const resetPassword = createAsyncThunk<
    BaseAxiosResponse<any>,
    ResetPasswordRequestInterface,
    { dispatch: AppDispatch }
>('auth/resetPassword', async (payload: ResetPasswordRequestInterface, { rejectWithValue, dispatch }) => {
    try {
        const response = await services.resetPassword(payload);
        if (!(response?.code === 1)) {
            throw response;
        }
        dispatch(
            showSnackbar({
                message: 'Success',
                type: 'success',
            }),
        );
        return response;
    } catch (err: any) {
        dispatch(
            showSnackbar({
                message: err.Message,
                type: 'error',
            }),
        );
        return rejectWithValue(err.Message);
    }
});

const resendConfirmAccount = createAsyncThunk<
    BaseAxiosResponse<any>,
    ForgotPasswordRequestInterface,
    { dispatch: AppDispatch }
>('auth/resendConfirmAccount', async (payload: ForgotPasswordRequestInterface, { rejectWithValue, dispatch }) => {
    try {
        const response = await services.resendConfirmAccount(payload);
        if (!(response?.code === 1)) {
            throw response;
        }
        dispatch(
            showSnackbar({
                message: i18n.t('common:notify.auth.sendConfirmationCodeSuccess'),
                type: 'success',
            }),
        );
        return response;
    } catch (err: any) {
        dispatch(
            showSnackbar({
                message: err.response.data.Message,
                type: 'error',
            }),
        );
        return rejectWithValue(err.Message);
    }
});

const logout = createAsyncThunk('auth/logout', async () => {
    return await services.logout();
});

export default {
    login,
    signup,
    forgotPassword,
    resetPassword,
    logout,
    confirmAccount,
    resendConfirmAccount,
};
