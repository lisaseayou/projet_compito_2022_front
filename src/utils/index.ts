import { format, Locale } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ClipboardEvent } from 'react';

export const formatDate = (
    date: Date,
    formating: string,
    locale: Locale = fr
) => {
    return format(new Date(date), formating, { locale });
};

export const getPlural = (data: object[], value: string) => {
    return data.length > 1 ? `${value}s` : value;
};

export const truncate = (text: string, limit: number = 25) => {
    const splitText = text.split(' ');
    return `${splitText.slice(0, limit).join(' ')} ...`;
};

export const FirstLetterUpperCase = (text: string) => {
    return text.slice(0, 1).toUpperCase() + text.slice(1);
};

export const handleResetDefault = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
};
