export interface LoginResponse {
    token: {
        tokenType: 'Bearer';
        expiresIn: string;
        accessToken: string;
        refreshToken: string;
    };
    user?: MyProfileResponse;
}
export interface ForgotPasswordResponse {}

export interface MyProfileResponse {
    email: string;
    brief: string;
    firstName: string;
    lastName: string;
    userName: string;
    avatar: string;
    phone?: string;
}
