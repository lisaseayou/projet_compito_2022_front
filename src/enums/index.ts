export enum BreakPointEnum {
    SM = 'sm',
    MD = 'md',
    LG = 'lg',
    XL = 'xl',
    '2XL' = '2xl',
}

export enum LinkVariantEnum {
    NAV = 'nav',
    BACK = 'back',
}

export enum FontSizeEnum {
    XS = 'text-xs',
    SM = 'text-sm',
    BASE = 'text-base',
    LG = 'text-lg',
    XL = 'text-xl',
    '2XL' = 'text-2xl',
    '3XL' = 'text-3xl',
    '4XL' = 'text-4xl',
    '5XL' = 'text-5xl',
    '6XL' = 'text-6xl',
    '7XL' = 'text-7xl',
    '8XL' = 'text-8xl',
    '9XL' = 'text-9xl',
}

export enum FontWeightEnum {
    THIN = 'font-thin',
    EXTRALIGHT = 'font-extralight',
    LIGHT = 'font-light',
    NORMAL = 'font-normal',
    MEDIUM = 'font-medium',
    SEMIBOLD = 'font-semibold',
    BOLD = 'font-bold',
    EXTRABOLD = 'font-extrabold',
    BLACK = 'font-black',
}

export enum TypographyVariantEnum {
    H1 = 'h1',
    H2 = 'h2',
    H3 = 'h3',
    H4 = 'h4',
    H5 = 'h5',
    H6 = 'h6',
    P = 'p',
    BUTTON = 'button',
}

export enum TextTransformEnum {
    UPPERCASE = 'uppercase',
    LOWERCASE = 'lowercase',
    CAPITALIZE = 'capitalize',
    NORMAL = 'normal-case',
}

export enum TextLineHeightEnum {
    LINE_HEIGHT_3 = 'leading-3',
    LINE_HEIGHT_4 = 'leading-4',
    LINE_HEIGHT_5 = 'leading-5',
    LINE_HEIGHT_6 = 'leading-6',
    LINE_HEIGHT_7 = 'leading-7',
    LINE_HEIGHT_8 = 'leading-8',
    LINE_HEIGHT_9 = 'leading-9',
    LINE_HEIGHT_10 = 'leading-10',
    NONE = 'leading-none',
    TIGHT = 'leading-tight',
    SNUG = 'leading-snug',
    NORMAL = 'leading-normal',
    RELAXED = 'leading-relaxed',
    LOOSE = 'leading-loose',
}

export enum JustifyContentEnum {
    START = "justify-start",
    END = "justify-end",
    CENTER = "justify-center",
    BETWEEN = "justify-between",
    AROUND = "justify-around",
    EVENLY = "justify-evenly",
}

export enum ButtonTypeEnum {
    BUTTON = 'button',
    SUBMIT = 'submit',
}

export enum ButtonVariantEnum {
    OUTLINE = 'outline',
    PRIMARY = 'primary',
    LIGHT = 'light',
    FORM = 'form',
    CTA = 'cta',
    CANCEL = 'cancel',
    DELETE = 'delete',
}

export enum IconEnum {
    CHECK_CIRCLE = 'checkCircleIcon',
    EYE = 'EyeIcon',
    EYE_OFF = 'EyeOffIcon',
    EYE_OUTLINE = 'EyeIconOutline',
    EYE_OFF_OUTLINE = 'EyeOffIconOutline',
    LOCK_CLOSED = 'LockClosed',
    MAIL = 'MailIcon',
    USER = 'UserIcon',
    CLOCK_OUTLINE = 'ClockIcon',
    CHAT_ALT_OUTLINE = 'ChatAltIcon',
    PENCIL_OUTLINE = 'PencilIcon',
    TRASH_OUTLINE = 'TrashIcon',
    TRASH = 'TrashIcon',
    BRIEFCASE = ' BriefcaseIcon',
    PLUS = "plus"
}

export enum OpacityEnum {
    NONE = 'opacity-0',
    OPACITY_5 = 'opacity-5',
    OPACITY_10 = 'opacity-10',
    OPACITY_15 = 'opacity-15',
    OPACITY_20 = 'opacity-20',
    OPACITY_25 = 'opacity-25',
    OPACITY_30 = 'opacity-30',
    OPACITY_40 = 'opacity-40',
    OPACITY_45 = 'opacity-45',
    OPACITY_50 = 'opacity-50',
    OPACITY_60 = 'opacity-60',
    OPACITY_70 = 'opacity-70',
    OPACITY_75 = 'opacity-75',
    OPACITY_80 = 'opacity-80',
    OPACITY_90 = 'opacity-90',
    OPACITY_95 = 'opacity-95',
    OPACITY_100 = 'opacity-100',
}

export enum TextFieldVariantEnum {
    NO_LABEL = 'no-label',
    LABEL = 'label',
}

export enum RoleEnum {
    USER = 'USER',
    ADMIN = 'ADMIN',
    SUPER_ADMIN = 'SUPER_ADMIN',
}

export enum ProgressTypeEnum {
    TASK = 'task',
}

export enum AlertVariantEnum {
    INPUT_ERROR = 'input_error',
    FORM_ERROR = 'form_error',
}

export enum RouteEnum {
    NOT_FOUND = '*',
    HOME = '/',
    LOGIN = '/auth/login',
    REGISTER = '/auth/register',
    FORGOT_PASSWORD = '/auth/forgot-password',
    CHECK_EMAIL = '/auth/check-email',
    RESET_PASSWORD = '/auth/reset-password/:resetToken',
    RESET_PASSWORD_CONFIRM = '/auth/reset-password-confirm',
    LOGOUT = '/logout',
    USER_HOME = '/user/home',
    PROJECTS = '/projects',
    ADD_PROJECT = '/addproject',
    PROJECT_DETAILS = '/project-details/:projectId',
    TASKS = '/tasks',
    ADD_TASK = '/addtask',
    DASHBOARD = '/dashboard',
    PROFIL = '/profil',
}

export enum AuthLayoutVariantEnum {
    LOGIN = "login",
    REGISTER = "register"
}

export enum StatusEnum {
    TO_DO = "à faire",
    IN_PROGRESS = "en cours",
    FINISH = "terminé"
}