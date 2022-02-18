import { ComponentBackgroundVariant } from '@/models/interfaces/theme';
import { BORDER_RADIUS_ROUND } from '@/styles/border';
import DefaultAvatar from '@/_metronic/media/flags/united-states.svg';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import CustomTooltip from '../CustomTooltip';

const useStyles = makeStyles<Theme, CustomSimpleCardProps>((theme: Theme) => ({
    circleImage: {
        borderRadius: `${BORDER_RADIUS_ROUND} !important`,
    },
    title: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: (props) => props.titleLine || 1,
        WebkitBoxOrient: 'vertical',
    },
    subtitle: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: (props) => props.subTitleLine || 1,
        WebkitBoxOrient: 'vertical',
    },
    fillImage: {
        objectFit: 'cover',
    },
    badge: {
        position: 'absolute',
        top: 0,
        right: 5,
        width: 10,
        height: 10,
    },
}));

interface CustomSimpleCardProps {
    className?: string;
    imgClassName?: string;
    title: string;
    titleUrl?: string;
    subtitle?: string;
    titleLine?: 1 | 2;
    subTitleLine?: 1 | 2;
    imgUrl?: string;
    circle?: boolean;
    label?: string;
    color?: ComponentBackgroundVariant;
    onLabelClick?: () => void;
    onClick?: () => void;
    action?: ReactNode;
    vertical?: boolean;
    showBadge?: boolean;
    badgeColor?: ComponentBackgroundVariant;
}
const CustomSimpleCard: FunctionComponent<CustomSimpleCardProps> = (props: CustomSimpleCardProps) => {
    const {
        className,
        imgClassName,
        title,
        vertical,
        titleLine,
        titleUrl,
        subtitle,
        imgUrl,
        circle,
        label,
        action,
        color,
        badgeColor,
        showBadge,
        onLabelClick,
        onClick,
    } = props;
    const classes = useStyles(props);

    const handleLabelClick = () => {
        if (onLabelClick) onLabelClick();
    };
    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <Fragment>
            <div
                className={clsx('d-flex align-items-center justify-content-between w-100', className, {
                    [`flex-column`]: vertical,
                })}
            >
                <div
                    className={clsx('d-flex align-items-center me-2', {
                        [`flex-column text-center`]: vertical,
                    })}
                >
                    {imgUrl && (
                        <div
                            className={clsx(
                                `symbol symbol-50px symbol-${color} flex-shrink-0 rounded`,
                                {
                                    [`symbol-circle`]: circle,
                                    [`me-3`]: !vertical,
                                },
                                imgClassName,
                            )}
                        >
                            <div className={clsx('symbol-label position-relative', imgClassName)}>
                                <Image
                                    onClick={handleClick}
                                    src={imgUrl || DefaultAvatar}
                                    layout='fill'
                                    loading='lazy'
                                    alt={title}
                                    className={clsx({
                                        ['h-50 cursor-pointer']: true,
                                        ['rounded']: true,
                                        [classes.circleImage]: circle,
                                        [classes.fillImage]: true,
                                    })}
                                />
                                {showBadge && (
                                    <span
                                        className={clsx(
                                            `badge-${badgeColor || 'danger'} fs-8 fw-bolder rounded-circle`,
                                            classes.badge,
                                        )}
                                    ></span>
                                )}
                            </div>
                        </div>
                    )}
                    <div>
                        <CustomTooltip
                            placement={'top-start'}
                            title={
                                <Typography variant='body1' className='text-gray-800'>
                                    {title}
                                </Typography>
                            }
                        >
                            <Typography
                                onClick={!titleUrl ? handleClick : () => {}}
                                variant='h6'
                                className={clsx(`text-hover-primary hoverable`, classes.title)}
                            >
                                {titleUrl ? <Link href={titleUrl}>{title}</Link> : title}
                            </Typography>
                        </CustomTooltip>
                        {subtitle && (
                            <Typography variant='body2' className={clsx('mt-1', classes.subtitle)}>
                                {subtitle}
                            </Typography>
                        )}
                    </div>
                </div>
                {label && (
                    <Typography
                        variant='caption'
                        onClick={handleLabelClick}
                        className={`
                        badge badge-${color} badge-inline fw-bold
                        text-${
                            color?.includes('light-') ? color.replace('light-', '') : color
                        } py-3 px-2 cursor-pointer`}
                    >
                        {label}
                    </Typography>
                )}
                {action}
            </div>
        </Fragment>
    );
};

CustomSimpleCard.defaultProps = {
    color: 'light-primary',
    titleLine: 1,
};

export default CustomSimpleCard;
