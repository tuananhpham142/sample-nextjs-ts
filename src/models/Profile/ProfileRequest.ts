export interface GetMyProfileRequest {}
export interface UpdateProfileRequest {
    Address: string | null;
    Link: string | null;
    Birthday: string | null;
    DisplayName: string;
    Email: string;
    PhoneNumber: null;
    Avatar: string;
    Cover: string;
}
