import numeral from 'numeral';

export type CurrencyUnit = 'VND' | 'USD' | 'EUR' | 'JPY' | 'CNY';

export const getCurrency = (currency?: CurrencyUnit, symbol?: boolean) => {
    switch (currency) {
        case 'VND':
            return symbol ? 'đ' : currency;
        case 'USD':
            return symbol ? '$' : currency;
        case 'EUR':
            return symbol ? '€' : currency;
        case 'JPY':
            return symbol ? '¥' : currency;
        case 'CNY':
            return symbol ? '¥' : currency;
        default:
            return currency;
    }
};

export const formatCurrency = ({
    num,
    isCompact,
    divide = 10000,
    currency,
    symbol,
}: {
    num: number;
    isCompact?: boolean;
    divide: number;
    currency?: CurrencyUnit;
    symbol?: boolean;
}) => {
    if (num > divide && isCompact) {
        return {
            price: numeral(num).format('0,0.0a'),
            currency: getCurrency(currency, symbol),
        };
    }
    return {
        price: numeral(num).format('0,0'),
        currency: getCurrency(currency, symbol),
    };
};
