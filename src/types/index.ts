import { ChangeEvent, FormEvent } from 'react';

export type SelectPropsType = {
    handleSelect: (e: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
};

export type OnSubmitFormType = (e: FormEvent<HTMLFormElement>) => void;

export interface IPasswordShown {
    password: boolean;
    passwordConfirm: boolean;
}
