import { LoginResponse } from '@/models/Auth/AuthResponse';
import { createSlice } from '@reduxjs/toolkit';
import thunk from './thunk';
interface State extends LoginResponse {
    isLoading: boolean;
    isSubmitting: boolean;
    isLogin: boolean;
    username: string;
}

const initialStateLogin: State = {
    isLoading: false,
    isSubmitting: false,
    isLogin: false,
    accessToken: '',
    expires: 0,
    refreshToken: '',
    username: '',
};

const auth = createSlice({
    name: 'auth',
    initialState: initialStateLogin,
    reducers: {},
    extraReducers: (builder) => {
        // Login
        builder.addCase(thunk.login.pending, (state, action) => {
            return {
                ...state,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.login.fulfilled, (state, action) => {
            return {
                ...state,
                isLogin: true,
                isSubmitting: false,
            };
        });
        builder.addCase(thunk.login.rejected, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
                isLogin: false,
            };
        });
        // Register
        builder.addCase(thunk.signup.pending, (state, action) => {
            return {
                ...state,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.signup.fulfilled, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
                Username: action.meta.arg.Username,
            };
        });
        builder.addCase(thunk.signup.rejected, (state, action) => {
            return { ...state, isSubmitting: false };
        });
        // Confirm account
        builder.addCase(thunk.confirmAccount.pending, (state, action) => {
            return {
                ...state,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.confirmAccount.fulfilled, (state, action) => {
            return {
                ...state,
                registerData: null,
                isSubmitting: false,
            };
        });
        builder.addCase(thunk.confirmAccount.rejected, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        // Resend confirm account
        builder.addCase(thunk.resendConfirmAccount.pending, (state, action) => {
            return {
                ...state,
                Username: action.meta.arg.Username,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.resendConfirmAccount.fulfilled, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        builder.addCase(thunk.resendConfirmAccount.rejected, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        // Forgot password
        builder.addCase(thunk.forgotPassword.pending, (state, action) => {
            return {
                ...state,
                Username: action.meta.arg.Username,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.forgotPassword.fulfilled, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        builder.addCase(thunk.forgotPassword.rejected, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        // Reset password
        builder.addCase(thunk.resetPassword.pending, (state, action) => {
            return {
                ...state,
                isSubmitting: true,
            };
        });
        builder.addCase(thunk.resetPassword.fulfilled, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
                Username: '',
            };
        });
        builder.addCase(thunk.resetPassword.rejected, (state, action) => {
            return {
                ...state,
                isSubmitting: false,
            };
        });
        // Logout
        builder.addCase(thunk.logout.pending, (state, action) => {
            return { ...state };
        });
        builder.addCase(thunk.logout.fulfilled, (state, action) => {
            return {
                ...state,
                ...initialStateLogin,
            };
        });
        builder.addCase(thunk.logout.rejected, (state, action) => {
            return { ...state };
        });
    },
});

export default auth;
