import { ChangeEvent, FormEvent } from 'react';
import { ConnectedUser } from './User';

export type SelectPropsType = {
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
};

export type OnSubmitFormType = (e: FormEvent<HTMLFormElement>) => void;

export interface IPasswordShown {
    password: boolean;
    passwordConfirm: boolean;
}

export interface FormValidation {
    required?: string;
    pattern?: {
        value: RegExp;
        message: string
    };
    minLength?: {
        value: number
        message: string
    };
}

export interface IRootState {
    user: ConnectedUser
}