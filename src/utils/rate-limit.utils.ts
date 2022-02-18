import LRU from 'lru-cache';

const rateLimit = (options: { uniqueTokenPerInterval: number; interval: number }) => {
    const tokenCache = new LRU({
        max: options.uniqueTokenPerInterval || 500,
        maxAge: options.interval || 60000,
    });

    return {
        check: (res: any, limit: number, token: string) =>
            new Promise((resolve, reject) => {
                const tokenCount: any = tokenCache.get(token) || [0];
                if (tokenCount[0] === 0) {
                    tokenCache.set(token, tokenCount);
                }
                tokenCount[0] += 1;

                const currentUsage = tokenCount[0];
                const isRateLimited = currentUsage >= limit;
                res.setHeader('X-RateLimit-Limit', limit);
                res.setHeader('X-RateLimit-Remaining', isRateLimited ? 0 : limit - currentUsage);
                //@ts-ignore
                return isRateLimited ? reject() : resolve();
            }),
    };
};

export default rateLimit;
