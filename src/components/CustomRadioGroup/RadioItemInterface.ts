export type RadioColor = 'dark' | 'danger' | 'primary' | 'success' | 'warning' | 'info';

export type BaseRadioItem = {
    value: boolean | string | number;
    title: string;
    disabled: boolean;
};

export type RichRadioItem = {
    value: boolean | string | number;
    title: string;
    subtitle?: string;
    icon?: string;
    img?: string;
    color?: RadioColor;
    disabled: boolean;
};
