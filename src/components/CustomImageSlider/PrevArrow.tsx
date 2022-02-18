import LongArrowLeftIcon from '@/assets/svg/LongArrowLeft.icon';
import { ButtonSize, Size } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent } from 'react';
import { CustomArrowProps } from 'react-slick';
import CustomIconStandalone from '../CustomIconStandalone';

const useStyles = makeStyles<Theme, PrevArrowProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
    prev: {
        left: 0,
        right: 'auto',
    },
    slickArrow: {
        position: 'absolute',
        // fontSize: 24,
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

interface PrevArrowProps extends CustomArrowProps {
    className?: string;
    disabled?: boolean;
    buttonSize?: ButtonSize;
    size: Size;
    tooltipTitle?: string;
}
const PrevArrow: FunctionComponent<PrevArrowProps> = (props: PrevArrowProps) => {
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
                icon={"icon-arrow-left"}
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

export default PrevArrow;
