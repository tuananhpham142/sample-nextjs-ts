import { ButtonSize, ComponentBackgroundVariant, IconSize } from '@/models/interfaces/theme';
import {
    BACKGROUND_WHITE,
    THEME_COLOR_DANGER_HOVER,
    THEME_COLOR_INFO_HOVER,
    THEME_COLOR_PRIMARY_HOVER,
    THEME_COLOR_SUCCESS_HOVER,
    THEME_COLOR_WARNING_HOVER,
} from '@/styles/colorPalette';
import { Theme, Tooltip } from '@mui/material';
import { makeStyles, withStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { CSSProperties, Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomIconStandaloneProps>((theme: Theme) => ({
    cursorPointer: {
        cursor: 'pointer',
    },
    disabledCursor: {
        cursor: 'not-allowed',
    },
    circle: {
        borderRadius: 360,
    },
    darkWarning: {
        background: (props) => {
            if (props?.darken) {
                return `${THEME_COLOR_WARNING_HOVER} !important`;
            }
        },
    },
    darkPrimary: {
        background: (props) => {
            if (props?.darken) {
                return `${THEME_COLOR_PRIMARY_HOVER} !important`;
            }
        },
    },
    darkSuccess: {
        background: (props) => {
            if (props?.darken) {
                return `${THEME_COLOR_SUCCESS_HOVER} !important`;
            }
        },
    },
    darkInfo: {
        background: (props) => {
            if (props?.darken) {
                return `${THEME_COLOR_INFO_HOVER} !important`;
            }
        },
    },
    darkDanger: {
        background: (props) => {
            if (props?.darken) {
                return `${THEME_COLOR_DANGER_HOVER} !important`;
            }
        },
    },
}));
const HtmlTooltip = withStyles((theme: Theme) => ({
    tooltip: {
        boxShadow: '0px 0px 20px 0px rgb(0 0 0 / 15%)',
        maxWidth: 200,
        padding: '0.75rem 1rem',
        textAlign: 'center',
        backgroundColor: BACKGROUND_WHITE,
        background: 'white !important',
        borderRadius: 4,
    },
}))(Tooltip);

interface CustomIconStandaloneProps {
    className?: string;
    textClass?: string;
    icon?: string | ReactNode;
    disabled?: boolean;
    isLoading?: boolean;
    size: IconSize;
    onClick?: (event: any) => void;
    hoverable?: boolean;
    variant?: 'outline' | 'outline-dashed' | 'contained';
    type?: 'button' | 'icon';
    buttonSize?: ButtonSize;
    color?: ComponentBackgroundVariant;
    circle?: boolean;
    darken?: boolean;
    customStyle?: CSSProperties;
}

const CustomIconStandalone: FunctionComponent<CustomIconStandaloneProps> = (props: CustomIconStandaloneProps) => {
    const {
        icon,
        textClass,
        size,
        className,
        variant,
        onClick,
        hoverable,
        type,
        buttonSize,
        color,
        disabled,
        isLoading,
        darken,
        circle,
        customStyle,
    } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            {/* <HtmlTooltip
                placement={tooltipPlacement}
                title={
                    <Fragment>
                        <Typography variant='body1'>{tooltipTitle}</Typography>
                    </Fragment>
                }
            > */}
            {type === 'button' ? (
                <button
                    disabled={disabled}
                    onClick={onClick}
                    className={clsx(className, {
                        [`btn btn-${buttonSize} btn-icon`]: !Boolean(disabled),
                        [`btn-${color}`]: variant === 'contained',
                        [`btn-outline btn-outline-${color} btn-active-light-${color}`]: variant === 'outline',
                        [`btn-outline btn-outline-dashed btn-outline-${color} btn-active-light-${color}`]:
                            variant === 'outline-dashed',
                        [`btn btn-${buttonSize} btn-icon btn-light btn-active-light`]: disabled,
                        [classes.disabledCursor]: disabled,
                        [classes.circle]: circle,
                        [classes.darkWarning]: !Boolean(disabled) && darken && color?.includes('warning'),
                        [classes.darkPrimary]: !Boolean(disabled) && darken && color?.includes('primary'),
                        [classes.darkSuccess]: !Boolean(disabled) && darken && color?.includes('success'),
                        [classes.darkInfo]: !Boolean(disabled) && darken && color?.includes('info'),
                        [classes.darkDanger]: !Boolean(disabled) && darken && color?.includes('danger'),
                    })}
                    type='button'
                    style={customStyle}
                >
                    {isLoading ? (
                        <span
                            className={clsx({
                                [`spinner-border spinner-border-sm align-middle ms-2`]: true,
                                [`spinner`]: isLoading,
                                [`text-white`]: true,
                                [`${textClass}`]: true,
                            })}
                            style={customStyle}
                        ></span>
                    ) : typeof icon === 'string' ? (
                        <i
                            className={clsx({
                                [`${icon}`]: true,
                                [`fs-${size}`]: true,
                                [classes.cursorPointer]: true,
                                [`text-${color}`]: variant?.includes('outline'),
                                [`${textClass}`]: true,
                            })}
                        />
                    ) : (
                        <>{icon}</>
                    )}
                </button>
            ) : typeof icon === 'string' ? (
                <i
                    className={clsx(className, {
                        [`${icon}`]: true,
                        [`fs-${size}`]: true,
                        'text-hover-primary': hoverable && type === 'icon',
                        [classes.cursorPointer]: true,
                        [`text-${color}`]: type === 'icon',
                        [classes.circle]: circle,
                    })}
                ></i>
            ) : (
                <>{icon}</>
            )}
            {/* </HtmlTooltip> */}
        </Fragment>
    );
};

CustomIconStandalone.defaultProps = {
    size: '1',
    hoverable: true,
    type: 'icon',
    buttonSize: 'sm',
    color: 'primary',
    variant: 'contained',
};

export default CustomIconStandalone;
