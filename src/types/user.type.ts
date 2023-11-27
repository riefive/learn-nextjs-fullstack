export interface UserType {
    id: string;
    name: string;
    email: string;
    role: string;
    password: string | undefined;
    avatar?: string;
}
