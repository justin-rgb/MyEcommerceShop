

export interface IUser {
    id?: number;
    name: string; 
    email: string;
    password: string;
    role: IUserRole[];

    createdAt: string;
    updatedAt: string;
}

export interface IUserRole {
    idRole: number;
    roleName: string;
}