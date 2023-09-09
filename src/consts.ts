export const IS_EMPTY = 'поле не может быть пустым';
export const PHONE_JOTTING = 'на случай, если вы забудете свой пароль';
export const EMAIL_JOTTING = 'будем присылать крутые открытки по праздникам';
export const PASSWORD_WARNING = 'не менее 8 символов';
export const EMAIL_WARNING = 'неверный формат почты';
export const PHONE_WARNING = 'неверный формат телефона';
export const REGEX_EMAIL = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
export const REGEX_PHONE = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

export const INITIAL_DATA = {
    login: '',
    password: '',
    phone: '',
    name: '',
    lastName: '',
    eMail: '',
};