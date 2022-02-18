import { ButtonSize, ButtonVariant, Color } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomIconButtonProps>((theme: Theme) => ({
    circle: {
        borderRadius: 360,
    },
    disabledCursor: {
        cursor: 'not-allowed',
    },
}));

interface CustomIconButtonProps {
    type?: 'submit' | 'reset';
    id?: string;
    color: Color;
    variant: ButtonVariant;
    size: ButtonSize;
    circle?: boolean;
    disabled?: boolean;
    isLoading?: boolean;
    hover?: boolean;
    width?: string | number;
    height?: string | number;
    icon?: ReactNode | HTMLElement;
    className?: string;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const CustomIconButton: FunctionComponent<CustomIconButtonProps> = (props: CustomIconButtonProps) => {
    const {
        isLoading,
        variant,
        color,
        id,
        type,
        circle,
        icon,
        hover,
        size,
        width,
        height,
        className,
        disabled,
        onDoubleClick,
        onMouseEnter,
        onMouseLeave,
        onClick,
    } = props;
    const classes = useStyles(props);

    const getActiveColor = (color: string) => {
        switch (color) {
            case 'info':
                return 'light-info';
            case 'primary':
                return 'light-primary';
            case 'danger':
                return 'light-danger';
            case 'success':
                return 'light-success';
            case 'warning':
                return 'light-warning';
            default:
                return color;
                break;
        }
    };

    return (
        <Fragment>
            <button
                onClick={onClick}
                onDoubleClick={onDoubleClick}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                type={type}
                disabled={disabled || isLoading}
                id={id}
                className={clsx({
                    [`${className}`]: className,
                    btn: true,
                    ['btn btn-icon']: true,
                    [`btn-outline`]: variant.includes('outline'),
                    [`btn-outline-dashed`]: variant === 'outline-dashed',
                    [`btn-outline-${color}`]: variant.includes('outline'),
                    [`btn-${size}`]: size !== 'md',
                    [`w-${width}`]: width,
                    [`h-${height}`]: height,
                    [`text-white`]: variant === 'contained' && !color.includes('light'),
                    [`text-light-${color}`]: variant !== 'contained',
                    [`btn-active-${getActiveColor(color)}`]: variant.includes('outline') || variant === 'light',
                    [`btn-light-bg-${color}`]: variant === 'light',
                    [`btn-${color}`]: variant === 'contained',
                    [classes.circle]: circle,
                    [classes.disabledCursor]: disabled,
                })}
            >
                {isLoading ? (
                    <span className='fw-bold'>
                        <span
                            className={clsx({
                                [`spinner-border spinner-border-sm align-middle ms-2`]: true,
                                [`spinner`]: isLoading,
                                [`text-white`]: variant === 'contained',
                                [`text-light-${color}`]: variant !== 'contained',
                            })}
                        ></span>
                    </span>
                ) : (
                    <>{icon && <span>{icon}</span>}</>
                )}
            </button>
        </Fragment>
    );
};

CustomIconButton.defaultProps = {
    variant: 'contained',
    color: 'info',
    size: 'md',
};

export default CustomIconButton;
