// export const toQueryString = (object: Object) =>
//     Object.keys(object)
//         .map((key: string) => (key !== '' ? `${key}=${encodeURI(object[key])}` : undefined))
//         .filter((query: string) => query)
//         .join('&');

export const queryStringToObject = (queryString: string) =>
    queryString
        ? JSON.parse('{"' + decodeURI(queryString.substring(1).replace(/&/g, '","').replace(/=/g, '":"')) + '"}')
        : '';
