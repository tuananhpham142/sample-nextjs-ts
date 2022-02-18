import { COLOR_ICON } from '@/styles/colorPalette';
import { THEME_COLOR_SECONDARY } from '../../styles/colorPalette';

const MuiCheckbox = {
    styleOverrides: {
        root: {
            color: COLOR_ICON,
        },
        colorPrimary: {
            color: COLOR_ICON,
        },
        colorSecondary: {
            color: THEME_COLOR_SECONDARY,
        },
    },
};

export default MuiCheckbox;
