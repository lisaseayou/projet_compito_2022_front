import { ClipboardEvent } from 'react';
import { format, Locale } from 'date-fns';
import { fr } from 'date-fns/locale';

/**
 * Format date with locale
 */
export const formatDate = (
    date: Date,
    formating: string,
    locale: Locale = fr
) => {
    return format(new Date(date), formating, { locale });
};

/**
 * Format string singular or plural
 */
export const getPlural = (data: object[], value: string) => {
    return data.length > 1 ? `${value}s` : value;
};

/**
 * Text truncate
 */
export const truncate = (text: string, limit: number = 25) => {
    const splitText = text.split(' ');
    return `${splitText.slice(0, limit).join(' ')} ...`;
};

/**
 * Capitalize the 1st letter of a string
 */
export const firstLetterUpperCase = (value: string) => {
    return value.slice(0, 1).toUpperCase() + value.slice(1);
};


export const handleResetDefault = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
};