export interface IUser {
    id: string;
    name: string;
    email: string;
    roles?: string[];
    resetTokenExpiry?: string;
    resetToken?: number;
    createdAt?: Date;
    updatedAt?: Date;
    url?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    description?: string;
}

export interface IPasswordUser {
    password: string;
    passwordConfirm: string;
}

export type RegisterUserVariables = Pick<IUser, 'name' | 'email' | 'roles'> &
    IPasswordUser;

export type LoginUserVariables = Pick<IUser, 'email'> & {
    password: string;
};

export type ForgotPasswordVariables = Pick<IUser, 'email'>;

export interface ILoginUser {
    login: Pick<IUser, 'id' | 'name' | 'email' | 'roles'> & {
        success: boolean;
    };
}

export type UpdateUserVariables = Pick<
    IUser,
    'name' | 'email' | 'url' | 'description' | 'twitter' | 'github' | 'linkedin'
>;

export interface IRegisterUser {
    register: Pick<IUser, 'id' | 'name' | 'email' | 'roles'> & {
        success: boolean;
    };
}

export interface IForgotPassword {
    requestResetPassword: Pick<
        IUser,
        'id' | 'name' | 'email' | 'roles' | 'resetToken' | 'resetTokenExpiry'
    >;
}

export interface IRequestResetPassword {
    requestResetPassword: Pick<
        IUser,
        'id' | 'name' | 'email' | 'roles' | 'resetToken' | 'resetTokenExpiry'
    >;
}

export interface IGetUserByResetToken {
    userByResetToken: Pick<IUser, 'id' | 'email' | 'resetToken'>;
}

export interface IResetPassword {
    resetPassword: Pick<
        IUser,
        'id' | 'name' | 'email' | 'roles' | 'resetToken' | 'resetTokenExpiry'
    >;
}
