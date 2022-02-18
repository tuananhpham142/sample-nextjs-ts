import { BORDER_RADIUS_DEFAULT } from '@/styles/border';
import { COLOR_BACKGROUND_INPUT, COLOR_TEXT_INPUT, THEME_COLOR_PRIMARY } from '@/styles/colorPalette';
import { SIZE_TEXT_BODY_1 } from './../../styles/global';

const MuiInputBase = {
    styleOverrides: {
        input: {
            padding: 0,
            height: '100%',
        },
        root: {
            paddingLeft: 12,
            lineHeight: 1.5,
            flex: 1,
            // border: '1px solid rgba(0, 0, 0, 0.23)',
            fontSize: SIZE_TEXT_BODY_1,
            color: COLOR_TEXT_INPUT,
            padding: '8px 16px',
            width: '100%',
            minHeight: 45,
            borderRadius: BORDER_RADIUS_DEFAULT,
            '&:hover': {
                borderColor: THEME_COLOR_PRIMARY,
            },
            background: COLOR_BACKGROUND_INPUT,
        },
        multiline: {
            lineHeight: 1.5,
            flex: 1,
            fontSize: SIZE_TEXT_BODY_1,
            color: COLOR_TEXT_INPUT,
            padding: 10,
            borderRadius: 8,
            '&:hover': {
                borderColor: THEME_COLOR_PRIMARY,
            },
            background: COLOR_BACKGROUND_INPUT,
            height: 'auto',
        },
    },
};

export default MuiInputBase;
