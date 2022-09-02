import { format, Locale } from 'date-fns';
import { fr } from 'date-fns/locale';

export const formatDate = (formating: string, locale: Locale = fr) =>
    format(new Date(), formating, { locale });
