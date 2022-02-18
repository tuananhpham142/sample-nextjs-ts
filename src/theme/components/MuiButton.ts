const MuiButton = {
    styleOverrides: {
        root: {
            boxShadow: 'none',
            minHeight: 40,
            minWidth: 80,
        },
        outlined: {
            boxShadow: 'none',
            minHeight: 40,
            minWidth: 80,
        },
        contained: {
            boxShadow: 'none',
            minWidth: 80,
            '&:hover': {
                boxShadow: 'none',
            },
        },
        containedPrimary: {
            '&:hover': {
                boxShadow: '0 2px 6px rgba(0,0,0,.1)',
            },
        },
    },
};

export default MuiButton;
