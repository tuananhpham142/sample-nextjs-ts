import { isUrl } from './validator.utils';

export const getSearchParams = <T extends string>(selectedParams: Array<T>): Record<T, string> | undefined => {
    if (typeof window === 'undefined') {
        return;
    }

    const url = new URL(window.location.href);
    const queryString = url.search;
    const urlParams = new URLSearchParams(queryString);
    const params: Record<string, string> = {};

    selectedParams.forEach((selectedParam) => {
        params[selectedParam] = urlParams?.get(selectedParam) || '';
    });

    return params;
};

export function preventNavigation(event: Event) {
    event.preventDefault();

    // event.returnValue = true;

    return '';
}

export const addRedirectUrl = (url: string, redirectTo: string): string | undefined => {
    if (isUrl(url) && isUrl(redirectTo)) {
        const param = new URLSearchParams({ redirectTo });
        return redirectTo ? url + '?' + param.toString() : url;
    }
    return undefined;
};
