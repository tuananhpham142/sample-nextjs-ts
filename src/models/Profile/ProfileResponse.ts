export interface MyProfileResponeInterface {
    id: string;
    firstName: string | null;
    lastName: string | null;
    address: string | null;
    gender: boolean;
    displayName: string;
    email: string;
    phoneNumber: string | number | null;
    avatar: string;
    cover: string | null;
    username: string;
    link: string | null;
    totalPosts: number;
    totalFollowing: number;
    totalFollower: number;
    totalSave: number;
    description: string;
    createdDate: string;
}
