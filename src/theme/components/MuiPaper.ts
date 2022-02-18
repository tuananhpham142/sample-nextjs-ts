import { SHADOW_DEFAULT } from '@/styles/global';

const MuiPaper = {
    styleOverrides: {
        root: {
            // width: '100%',
            // marginBottom: 24,
            // padding: 16,
        },
        rounded: {
            borderRadius: 8,
        },
        elevation1: {
            boxShadow: SHADOW_DEFAULT,
        },
    },
};

export default MuiPaper;
