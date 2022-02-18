import {
    TEXT_BLUR_COLOR,
    TEXT_PRIMARY_COLOR,
    TEXT_SECONDARY_COLOR,
    THEME_COLOR_DANGER,
    THEME_COLOR_DANGER_INVERSE,
    THEME_COLOR_INFO,
    THEME_COLOR_INFO_INVERSE,
    THEME_COLOR_PRIMARY,
    THEME_COLOR_PRIMARY_INVERSE,
    THEME_COLOR_SECONDARY,
    THEME_COLOR_SECONDARY_INVERSE,
    THEME_COLOR_SUCCESS,
    THEME_COLOR_SUCCESS_INVERSE,
    THEME_COLOR_WARNING,
    THEME_COLOR_WARNING_INVERSE,
} from '@/styles/colorPalette';
import { PaletteOptions } from '@mui/material';
// import { ColorObject } from '@mui/system';

const white = '#ffffff';
const black = '#000000';

interface ColorPaletteTheme {
    light: string;
    dark: string;
    main: string;
    contrastText: string;
}

interface ExternalPalette extends PaletteOptions {
    haloPrimary: ColorPaletteTheme;
    haloSecondary: ColorPaletteTheme;
}

const palette: ExternalPalette = {
    primary: {
        contrastText: THEME_COLOR_PRIMARY_INVERSE,
        main: THEME_COLOR_PRIMARY,
    },
    secondary: {
        contrastText: THEME_COLOR_SECONDARY_INVERSE,
        main: THEME_COLOR_SECONDARY,
    },
    success: {
        contrastText: THEME_COLOR_SUCCESS_INVERSE,
        main: THEME_COLOR_SUCCESS,
    },
    info: {
        contrastText: THEME_COLOR_INFO_INVERSE,
        main: THEME_COLOR_INFO,
    },
    warning: {
        contrastText: THEME_COLOR_WARNING_INVERSE,
        main: THEME_COLOR_WARNING,
    },
    error: {
        contrastText: THEME_COLOR_DANGER_INVERSE,
        main: THEME_COLOR_DANGER,
    },
    text: {
        primary: TEXT_PRIMARY_COLOR,
        secondary: TEXT_SECONDARY_COLOR,
        disabled: TEXT_BLUR_COLOR,
    },
    background: {
        default: white,
        paper: white,
    },
    divider: TEXT_BLUR_COLOR,
    haloPrimary: {
        light: TEXT_BLUR_COLOR,
        dark: '',
        main: '',
        contrastText: '',
    },
    haloSecondary: {
        light: '',
        dark: '',
        main: '',
        contrastText: '',
    },
};

export default palette;
