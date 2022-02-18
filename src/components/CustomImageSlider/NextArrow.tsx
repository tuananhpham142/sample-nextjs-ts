import LongArrowRightIcon from '@/assets/svg/LongArrowRight.icon';
import { ButtonSize, Size } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent } from 'react';
import { CustomArrowProps } from 'react-slick';
import CustomIconStandalone from '../CustomIconStandalone';

const useStyles = makeStyles<Theme, NextArrowProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
    next: {
        right: 0,
        left: 'auto',
    },
    slickArrow: {
        position: 'absolute',
        // fontSize: 18,
        display: 'flex',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center',
        // width: 44,
        // height: 44,
        // background: 'white',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
    },
}));

interface NextArrowProps extends CustomArrowProps {
    className?: string;
    disabled?: boolean;
    buttonSize?: ButtonSize;
    size: Size;
    tooltipTitle?: string;
}
const NextArrow: FunctionComponent<NextArrowProps> = (props: NextArrowProps) => {
    const { className, disabled, tooltipTitle, onClick, size, buttonSize } = props;
    const classes = useStyles(props);
    return (
        <Fragment>
            <CustomIconStandalone
                size={size}
                buttonSize={buttonSize}
                disabled={disabled}
                circle
                color='primary'
                type='button'
                icon={"icon-arrow-right"}
                onClick={onClick}
                className={clsx('', {
                    [classes.slickArrow]: true,
                    [classes.next]: true,
                    [`${className}`]: true,
                })}
            />
        </Fragment>
    );
};

export default NextArrow;
