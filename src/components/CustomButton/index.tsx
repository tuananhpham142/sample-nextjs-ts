import { ButtonSize, ButtonVariant, Color } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomButtonProps>((theme: Theme) => ({
    circle: {
        borderRadius: 360,
    },
    disabledCursor: {
        cursor: 'not-allowed',
    },
}));

export interface CustomButtonProps {
    title: string;
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
    startIcon?: ReactNode | HTMLElement;
    endIcon?: ReactNode | HTMLElement;
    className?: string;
    onClick?: () => void;
    onDoubleClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
}

const CustomButton: FunctionComponent<CustomButtonProps> = (props: CustomButtonProps) => {
    const {
        title,
        isLoading,
        variant,
        color,
        id,
        type,
        circle,
        startIcon,
        endIcon,
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
            case 'dark':
                return 'light-dark';
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
                    btn: true,
                    [`btn-${variant}`]: true,
                    [`text-white`]: variant === 'contained' && !color.includes('light'),
                    [`btn-outline`]: variant.includes('outline'),
                    [`btn-outline-dashed`]: variant === 'outline-dashed',
                    [`btn-outline-${color}`]: variant.includes('outline'),
                    [`btn-active-${getActiveColor(color)}`]: variant.includes('outline') || variant === 'light',
                    [`btn-light-bg-${color}`]: variant === 'light',
                    [`btn-${color}`]: variant === 'contained',
                    [`btn-color-${color}`]: variant === 'link',
                    [`btn-${size}`]: size !== 'md',
                    [`w-${width}`]: width,
                    [`h-${height}`]: height,
                    [classes.circle]: circle,
                    [classes.disabledCursor]: disabled,
                    [`${className}`]: className,
                })}
            >
                {startIcon && startIcon}
                {isLoading ? (
                    <span className='fw-bold'>
                        {title}...
                        <span
                            className={clsx({
                                [`spinner-border spinner-border-sm align-middle ms-2`]: true,
                                [`spinner`]: isLoading,
                                [`text-white`]: variant === 'contained' && !color.includes('light'),
                                [`text-${color?.replace('light-', '') || color}`]: variant.includes('outline'),
                            })}
                        ></span>
                    </span>
                ) : (
                    <span className='fw-bold'>
                        <span
                            className={clsx({
                                [`text-white`]: variant === 'contained' && !color.includes('light'),
                                [`text-${color?.replace('light-', '') || color}`]: variant.includes('outline'),
                            })}
                        >
                            {title}
                        </span>
                    </span>
                )}
                {endIcon && endIcon}
            </button>
        </Fragment>
    );
};

CustomButton.defaultProps = {
    variant: 'contained',
    color: 'info',
    size: 'md',
};

export default CustomButton;
