const EMAIL_PATTERN =
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
const EMAIL_ADDRESS = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const URL_REGEX_1 = new RegExp(
    '([a-zA-Z0-9]+://)?([a-zA-Z0-9_]+:[a-zA-Z0-9_]+@)?([a-zA-Z0-9.-]+\\.[A-Za-z]{2,4})(:[0-9]+)?(/.*)?',
);
export const URL_REGEX_2 =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
const VN_PHONE_NUMBER = /(84|09|08|07|05|03|01[2|6|8|9])+([0-9]{8})\b/g;
const PHONE_NUMBER = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/im;
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const USER_NAME = /^(?=.{6,20}$)(?![.])(?!.*[.]{2})[a-zA-Z0-9.]+(?<![.])$/im;
const CONTAIN_WHITE_SPACE = /\s+/g;
const ONLY_CHARACTERS = /^[a-zA-Z]*$/;
const CONTAIN_SPECIAL_CHARACTERS = /[~`!@#$%\^&*=\-\[\]\\';,{}|\\"<>\?]/g;
const CONTAIN_JAVASCRIPT_INJECTION = /<(\/)?script.*/g;

// export const COMMON_REGEX = {
//     username: USER_NAME,
//     containWhiteSpace: CONTAIN_WHITE_SPACE,
//     containSpecialCharaters: CONTAIN_SPECIAL_CHARACTERS,
//     containSqlInjection: /[~`!@#$%\^&*=\-\[\]\\';,{}|\\"<>\?]/g,
//     ContainJsInjection: CONTAIN_JAVASCRIPT_INJECTION,
//     vnPhoneNumber: VN_PHONE_NUMBER,
//     emailAddress: EMAIL_ADDRESS,
//     email: EMAIL_PATTERN,
//     slug: SLUG,
//     url_2: URL_REGEX_2,
//     onlyCharacter: ONLY_CHARACTERS,
//     phone: PHONE_NUMBER,
//     url_1: URL_REGEX_1,
// };

const regexValidation = ({ value, regex, trim }: { value: string; regex: RegExp; trim?: boolean }): boolean => {
    const valueToTest = trim ? `${value}`.trim() : value;
    return regex.test(valueToTest);
};

export const isEmptyObject = (obj: JSON) => Object.keys(obj).length < 1;

export const isPhoneOrEmail = (value: string) => {
    const phoneValidation = regexValidation({
        value,
        regex: PHONE_NUMBER,
        trim: true,
    });
    const emailValidation = regexValidation({
        value,
        regex: EMAIL_ADDRESS,
        trim: true,
    });
    return phoneValidation || emailValidation;
};
export const isContainSqlInjection = (value: string) => {
    const trimValue = `${value}`.trim().toLowerCase();
    return trimValue && /('\s*?(\bor\b|\band\b|\bwhere\b))|--/g.test(trimValue);
};
export const isContainJsInjection = (value: string) => {
    const trimValue = `${value}`.trim().toLowerCase();
    return trimValue && /<(\/)?script.*/g.test(trimValue);
};

export const isUrl = (value: string): boolean =>
    regexValidation({
        value,
        regex: URL_REGEX_2,
        trim: true,
    });

export const isEmail = (value: string): boolean =>
    regexValidation({
        value,
        regex: EMAIL_ADDRESS,
        trim: true,
    });

export const isVnPhoneNumber = (value: string): boolean =>
    regexValidation({
        value,
        regex: VN_PHONE_NUMBER,
        trim: true,
    });

export const isValidUsername = (value: string): boolean =>
    regexValidation({
        value,
        regex: USER_NAME,
        trim: true,
    });

export const isIncludesUrl = (value: string): boolean =>
    regexValidation({
        value,
        regex: URL_REGEX_1,
        trim: true,
    });

export const isIncludesEmail = (value: string): boolean =>
    regexValidation({
        value,
        regex: EMAIL_PATTERN,
        trim: true,
    });
