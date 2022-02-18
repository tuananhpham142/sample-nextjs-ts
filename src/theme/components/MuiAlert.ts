import { THEME_COLOR_DANGER, THEME_COLOR_INFO, THEME_COLOR_SUCCESS, THEME_COLOR_WARNING } from '@/styles/colorPalette';

const MuiAlert = {
    styleOverrides: {
        root: {
            fontSize: 14,
            borderRadius: 8,
        },
        filledSuccess: {
            backgroundColor: THEME_COLOR_SUCCESS,
        },
        filledInfo: {
            backgroundColor: THEME_COLOR_INFO,
        },
        filledWarning: {
            backgroundColor: THEME_COLOR_WARNING,
        },
        filledError: {
            backgroundColor: THEME_COLOR_DANGER,
        },
        outlinedSuccess: {
            backgroundColor: THEME_COLOR_SUCCESS,
        },
        outlinedInfo: {
            backgroundColor: THEME_COLOR_INFO,
        },
        outlinedWarning: {
            backgroundColor: THEME_COLOR_INFO,
        },
        outlinedError: {
            backgroundColor: THEME_COLOR_DANGER,
        },
        standardSuccess: {
            backgroundColor: THEME_COLOR_SUCCESS,
        },
        standardInfo: {
            backgroundColor: THEME_COLOR_INFO,
        },
        standardWarning: {
            backgroundColor: THEME_COLOR_INFO,
        },
        standardError: {
            backgroundColor: THEME_COLOR_DANGER,
        },
    },
};

export default MuiAlert;
