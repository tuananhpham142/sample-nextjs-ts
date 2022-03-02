import { CustomClasses } from '@/models/interfaces/globalInterface';
import { ComponentBackgroundVariant } from '@/models/interfaces/theme';
import { BORDER_RADIUS_ROUND } from '@/styles/border';
import DefaultAvatar from '@/_metronic/media/flags/united-states.svg';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, FeedUserCardProps>((theme: Theme) => ({
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

type FeedUserClasses = 'title' | 'subtitle';

interface FeedUserCardProps extends CustomClasses<FeedUserClasses> {
    className?: string;
    imgClassName?: string;
    title: string | ReactNode;
    titleUrl?: string;
    subtitle?: string | ReactNode;
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
const FeedUserCard: FunctionComponent<FeedUserCardProps> = (props: FeedUserCardProps) => {
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
        customClasses,
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
                                    className={clsx({
                                        ['h-50 cursor-pointer']: true,
                                        ['rounded']: true,
                                        [classes.circleImage]: circle,
                                        [classes.fillImage]: true,
                                    })}
                                />
                            </div>
                        </div>
                    )}
                    <div>
                        {typeof title === 'string' ? (
                            <Typography
                                onClick={!titleUrl ? handleClick : () => {}}
                                variant='h6'
                                className={clsx(`text-hover-primary hoverable`, classes.title)}
                                data-for='halo-tooltip'
                                data-tip={title}
                            >
                                {titleUrl ? <Link href={titleUrl}>{title}</Link> : title}
                            </Typography>
                        ) : (
                            <div className={clsx(classes.title, customClasses?.title)}>{title}</div>
                        )}

                        {subtitle && typeof subtitle === 'string' ? (
                            <Typography
                                variant='body2'
                                className={clsx('mt-1', classes.subtitle)}
                                data-for='halo-tooltip'
                                data-tip={subtitle}
                            >
                                {subtitle}
                            </Typography>
                        ) : (
                            <div className={clsx(classes.subtitle, customClasses?.subtitle)}>{subtitle}</div>
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

FeedUserCard.defaultProps = {
    color: 'light-primary',
    titleLine: 1,
};

export default FeedUserCard;
