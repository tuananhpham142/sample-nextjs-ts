export interface LoginRequest {
  email: string;
  password: string;
}

export interface ForgotPasswordRequest {
  email: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  password_confirmation?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
  userName: string;
  agreeTerms: boolean;
}

export interface MyProfileRequest {}
