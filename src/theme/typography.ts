import { TEXT_PRIMARY_COLOR, TEXT_SECONDARY_COLOR } from '@/styles/colorPalette';
import {
    BOLD,
    BOLDER,
    FONT_FAMILY,
    SIZE_TEXT_H1,
    SIZE_TEXT_H2,
    SIZE_TEXT_H3,
    SIZE_TEXT_H4,
    SIZE_TEXT_H5,
    SIZE_TEXT_H6,
} from '@/styles/global';
import {
    SIZE_TEXT_BODY_1,
    SIZE_TEXT_BODY_2,
    SIZE_TEXT_CAPTION,
    SIZE_TEXT_SUBTITLE_1,
    SIZE_TEXT_SUBTITLE_2,
} from './../styles/global';

const typography = {
    fontFamily: FONT_FAMILY,
    // [
    //     '-apple-system',
    //     'BlinkMacSystemFont',
    //     '"Segoe UI"',
    //     '"Helvetica Neue"',
    //     'Poppins',
    //     'sans-serif',
    //     '"Apple Color Emoji"',
    //     '"Segoe UI Emoji"',
    //     '"Segoe UI Symbol"',
    // ].join(','),
    h1: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H1,
        letterSpacing: '0.5px',
        lineHeight: '46px',
    },
    h2: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H2,
        letterSpacing: '0.42px',
        lineHeight: '34px',
    },
    h3: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H3,
        letterSpacing: '0.40px',
        lineHeight: '34px',
    },
    h4: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H4,
        letterSpacing: '0.40px',
        lineHeight: '32px',
    },
    h5: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H5,
        letterSpacing: '0.45px',
        lineHeight: '26px',
    },
    h6: {
        color: TEXT_PRIMARY_COLOR,
        fontWeight: BOLDER,
        fontSize: SIZE_TEXT_H6,
        letterSpacing: '0.4px',
        lineHeight: '20px',
    },
    subtitle1: {
        color: TEXT_PRIMARY_COLOR,
        fontSize: SIZE_TEXT_SUBTITLE_1,
        letterSpacing: '0.45px',
        lineHeight: '20px',
        fontWeight: BOLD,
    },
    subtitle2: {
        fontWeight: BOLD,
        color: TEXT_SECONDARY_COLOR,
        fontSize: SIZE_TEXT_SUBTITLE_2,
        letterSpacing: '0.45px',
        lineHeight: '20px',
    },
    body1: {
        color: TEXT_PRIMARY_COLOR,
        fontSize: SIZE_TEXT_BODY_1,
        letterSpacing: '0.5px',
        lineHeight: '20px',
    },
    body2: {
        color: TEXT_SECONDARY_COLOR,
        fontSize: SIZE_TEXT_BODY_2,
        letterSpacing: '0.35px',
        lineHeight: '20px',
    },
    button: {
        color: TEXT_PRIMARY_COLOR,
        fontSize: SIZE_TEXT_BODY_1,
        'text-transform': 'none',
    },
    caption: {
        color: TEXT_SECONDARY_COLOR,
        fontSize: SIZE_TEXT_CAPTION,
        letterSpacing: '0.24px',
        lineHeight: '20px',
    },
};

export default typography;
