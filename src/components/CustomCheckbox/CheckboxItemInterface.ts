import { RadioColor } from '../HaloRadioGroup/RadioItemInterface';

export type BaseCheckboxItem = {
    value: boolean | string | number;
    title: string;
    disabled: boolean;
};

export type RichCheckboxItem = {
    value: boolean | string | number;
    title: string;
    subtitle?: string;
    icon?: string;
    img?: string;
    color?: RadioColor;
    disabled: boolean;
};
