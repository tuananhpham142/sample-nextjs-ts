import { THEME_COLOR_DANGER } from '@/styles/colorPalette';
import { SIZE_TEXT_CAPTION } from '@/styles/global';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CSSProperties, Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomContainerProps>((theme: Theme) => ({
    sectionTitleMargin: {
        marginBottom: theme.spacing(1),
    },
    inputTitle: {
        marginBottom: theme.spacing(1),
    },
    helperText: {
        color: THEME_COLOR_DANGER,
        marginTop: theme.spacing(1 / 2),
        fontSize: SIZE_TEXT_CAPTION,
    },
}));

interface CustomContainerProps {
    className?: string;
    children?: ReactNode;
    customStyle?: CSSProperties;
}

const CustomContainer: FunctionComponent<CustomContainerProps> = (props: CustomContainerProps) => {
    const { className, children, customStyle } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            <div className='container' style={customStyle}>
                {children}
            </div>
        </Fragment>
    );
};

CustomContainer.defaultProps = {};
export default CustomContainer;
