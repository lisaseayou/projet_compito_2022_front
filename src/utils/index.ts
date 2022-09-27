import { format, Locale } from 'date-fns';
import { fr } from 'date-fns/locale';
import { ClipboardEvent } from 'react';

export const formatDate = (formating: string, locale: Locale = fr) =>
    format(new Date(), formating, { locale });

export const handleResetDefault = (e: ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
};
