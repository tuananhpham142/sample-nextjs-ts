import { urlExtractor } from '@/utils/string.utils';
import { useEffect, useState } from 'react';

export const useUrlScraping = (value: string, extractType: 'FIRST' | 'LAST' | 'ALL' = 'FIRST', delay = 500) => {
    const [metaValue, setMetaValue] = useState<{ img: string; title: string; description: string } | null>(null);

    useEffect(() => {
        const handler = setTimeout(() => {
            const url = urlExtractor(value, extractType);
            if (url) {
                // const metaTags = await dataScrapingApi(url);
                // setMetaValue(metaTags);
            }
            setMetaValue(null);
        }, delay);

        return () => {
            clearTimeout(handler);
        };
    }, [value]);

    return metaValue;
};
