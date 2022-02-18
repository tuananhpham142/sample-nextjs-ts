import { createTheme } from '@mui/material/styles';
import components from './components';
import palette from './palette';
import typography from './typography';
const theme = createTheme({
    palette,
    typography,
    components,
    breakpoints: {
        keys: ['xs', 'sm', 'md', 'lg', 'xl'],
        values: { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200 },
    },
});

export default theme;
