import { URL_REGEX_2 } from './validator.utils';

export const capitalize = (string: string): string => {
    if (typeof string === 'string') {
        if (!string) {
            return '';
        }
        return string[0].toUpperCase() + string.slice(1);
    }
    return string;
};

export const truncate = (input: string, length: number): string => {
    if (!input) {
        return '';
    }
    return input.length > length ? `${input.substring(0, length - 1)}...` : input;
};

export const cleanAccents = (str: string): string => {
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, 'A');
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, 'E');
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, 'I');
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, 'O');
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, 'U');
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, 'Y');
    str = str.replace(/Đ/g, 'D');
    // Combining Diacritical Marks
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huyền, sắc, hỏi, ngã, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ''); // mũ â (ê), mũ ă, mũ ơ (ư)

    return str;
};

export const toSlug = (value: string) => {
    let slug = '';
    slug = value.toLowerCase().replace(/\s{2,}/g, ' ');
    slug = slug.replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, 'a');
    slug = slug.replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, 'e');
    slug = slug.replace(/i|í|ì|ỉ|ĩ|ị/gi, 'i');
    slug = slug.replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, 'o');
    slug = slug.replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, 'u');
    slug = slug.replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, 'y');
    slug = slug.replace(/đ/gi, 'd');
    slug = slug.replace(/\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_/gi, '');
    slug = slug.replace(/ /gi, ' - ');
    slug = slug.replace(/\-\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-\-/gi, '-');
    slug = slug.replace(/\-\-\-/gi, '-');
    slug = slug.replace(/\-\-/gi, '-');
    slug = '@' + slug + '@';
    slug = slug.replace(/\@\-|\-\@|\@/gi, '');
    slug = slug.replace(/\s-\s/g, '-');

    return slug;
};

export const getFirstLetterOfName = (name: string) => {
    let splitName = name.split(' ');
    let itemLast = splitName.slice(-1).pop();
    return itemLast!.substring(0, 1);
};

export const ellipsisLongText = (text: string, count: number) => {
    return {
        displayText: text.length > count ? `${text.substring(0, count)}...` : text,
        totalLength: text.length,
    };
};

export const trimmedTextByCharacters = (text: string, characters: number) => {
    if (text.length <= characters) {
        return text;
    }
    //trim the string to the maximum length
    let trimmedString = text.slice(0, characters);

    //re-trim if we are in the middle of a word
    trimmedString = trimmedString.slice(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' ')));

    if (trimmedString.length < text.length) {
        return `${trimmedString}...`;
    }

    return text;
};

export const urlExtractor = (
    value: string,
    extractIndex: 'FIRST' | 'LAST' | 'ALL' = 'ALL',
): string | Array<string> | undefined => {
    const result: Array<string> | null = value.match(URL_REGEX_2);
    if (extractIndex === 'FIRST') {
        return result ? result[0] : undefined;
    }
    if (extractIndex === 'LAST') {
        return result ? result[result.length - 1] : undefined;
    }
    if (extractIndex === 'ALL') {
        return result || undefined;
    }

    return undefined;
};

export const guessNameFromEmail = (email: string) => {
    let [parsedName] = email.split('@');
    parsedName = parsedName
        .split(/[^a-zA-Z]+/g)
        .map(capitalize)
        .join(' ')
        .trim();
    return parsedName;
};
