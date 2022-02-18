import { THEME_COLOR_PRIMARY } from '@/styles/colorPalette';
const MuiOutlinedInput = {
    styleOverrides: {
        root: {
            height: 48,
            borderRadius: 8,
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: THEME_COLOR_PRIMARY,
            },
        },
        input: {
            paddingLeft: 16,
            paddingRight: 16,
        },
    },
};

export default MuiOutlinedInput;
