import { useHover } from '@/hooks/useHover';
import { ComponentBackgroundVariant } from '@/models/interfaces/theme';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, CategoryCardProps<any>>((theme: Theme) => ({
    circle: {
        borderRadius: 360,
    },
    title: {
        float: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: (props) => props.titleLine || 1,
        WebkitBoxOrient: 'vertical',
    },
    subtitle: {
        float: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: (props) => props.subtitleLine || 1,
        WebkitBoxOrient: 'vertical',
    },
}));

interface CategoryCardProps<T> {
    className?: string;
    image?: string;
    title: string;
    titleLine?: 1 | 2;
    subtitleLine?: 1 | 2;
    subtitle?: string;
    shadow: 'xs' | 'sm' | 'md' | 'lg';
    onClick?: (data?: T) => void;
    url?: string;
    icon?: any;
    shape: 'square' | 'rounded' | 'circle';
    badgeTitle?: string;
    badgeColor?: ComponentBackgroundVariant;
}
const CategoryCard: FunctionComponent<CategoryCardProps<any>> = <T extends any>(props: CategoryCardProps<T>) => {
    const { className, image, title, subtitle, shadow, onClick, url, icon, badgeTitle, badgeColor, shape } = props;
    const classes = useStyles(props);

    const [hovered, eventHandlers] = useHover();

    return (
        <div
            className={clsx(
                'd-flex align-items-sm-center bg-light-white bg-hover-white shadow-xs p-2 my-4',
                className,
                {
                    ['shadow-md']: hovered,
                    ['rounded-8']: shape === 'rounded',
                    [classes.circle]: shape === 'circle',
                    ['rounded-0']: shape === 'square',
                },
            )}
            {...eventHandlers}
        >
            <div className='symbol symbol-60px me-4 bg-transparent'>
                {image && (
                    <div
                        className='symbol-label bg-transparent'
                        style={{
                            backgroundImage: `url("${image}")`,
                        }}
                    ></div>
                )}
                {icon && !image && (
                    <div className='symbol-label bg-white bg-transparent'>
                        {typeof icon === 'string' ? <i className={clsx(icon, 'fs-2x')} /> : icon}
                    </div>
                )}
            </div>

            <div className='d-flex flex-row-fluid flex-wrap align-items-center text-hover-primary'>
                <div className='flex-grow-1 text-hover-primary'>
                    <Typography
                        variant='subtitle1'
                        component='a'
                        href={url}
                        className={clsx('fw-bolder text-hover-primary hoverable', classes.title)}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography variant='body2' component='span' className={clsx('d-block pt-1', classes.subtitle)}>
                            {subtitle}
                        </Typography>
                    )}
                </div>
                {badgeTitle && <span className='badge badge-${badgeColor} fs-8 fw-bolder my-2 ms-2'>{badgeTitle}</span>}
            </div>
        </div>
    );
};

export default CategoryCard;
