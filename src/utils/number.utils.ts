import numeral from 'numeral';

export const roundByNum = (value: string | number, step: '0.1' | '0.25' | '0.5' | '1') => {
    let inverse = 1.0 / parseFloat(step);
    const valueToRound = typeof value === 'number' ? value : parseFloat(value);
    return Math.round(valueToRound * inverse) / inverse;
};

export const formatNumber = (num: number, isCompact?: boolean, divide: number = 10000) => {
    if (num > divide && isCompact) {
        return numeral(num).format('0,0.0a');
    }
    return numeral(num).format('0,0');
};
export const bytesToSize = (bytes: number) => {
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return 'n/a';
    const i: number = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)).toString());
    if (i === 0) return `${bytes} ${sizes[i]})`;
    return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`;
};
