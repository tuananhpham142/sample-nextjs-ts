import { RadioColor } from '@/components/CustomRadioGroup/RadioItemInterface';
import { StayingFor } from '../Search/SearchModel';

export type StayingForItem = {
    name: string;
    description: string;
    value: StayingFor;
    color: RadioColor;
    icon?: string;
};
