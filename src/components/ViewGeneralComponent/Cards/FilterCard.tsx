import { useHover } from '@/hooks/useHover';
import { ComponentBackgroundVariant } from '@/models/interfaces/theme';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, FilterCardProps<any>>((theme: Theme) => ({
    circle: {
        borderRadius: 360,
    },
    fitContent: {
        width: 'fit-content',
    },
}));

export interface FilterCardProps<T> {
    className?: string;
    title: string;
    titleLine?: 1 | 2;
    shadow: 'xs' | 'sm' | 'md' | 'lg';
    onClick?: (data?: T) => void;
    url?: string;
    icon?: any;
    borderType?: 'solid' | 'dashed';
    shape: 'square' | 'rounded' | 'circle';
    filterApplied?: boolean;
    badgeTitle?: string;
    badgeColor?: ComponentBackgroundVariant;
    hoverColor?: ComponentBackgroundVariant;
}
const FilterCard: FunctionComponent<FilterCardProps<any>> = <T extends any>(props: FilterCardProps<T>) => {
    const classes = useStyles(props);
    const {
        className,
        title,
        shadow,
        onClick,
        url,
        icon,
        filterApplied,
        badgeTitle,
        badgeColor,
        shape,
        borderType,
        hoverColor,
    } = props;

    const [hovered, eventHandlers] = useHover();

    return (
        <div
            className={clsx(
                'd-flex align-items-center bg-light-white bg-hover-white shadow-xs px-4 py-3 my-4',
                className,
                {
                    [`border border-${borderType || 'dashed'} border-${badgeColor}`]: filterApplied,
                    ['rounded-8']: shape === 'rounded',
                    [classes.circle]: shape === 'circle',
                    ['rounded-0']: shape === 'square',
                    [`text-hover-${hoverColor}`]: hoverColor ? true : false,
                    [classes.fitContent]: true,
                },
            )}
            {...eventHandlers}
        >
            <div className='symbol symbol-20px me-4 bg-transparent'>
                {icon && (
                    <div
                        className={clsx('symbol-label bg-transparent', {
                            [`text-${badgeColor}`]: filterApplied,
                        })}
                    >
                        {typeof icon === 'string' ? (
                            <i
                                className={clsx(icon, {
                                    [`text-${badgeColor}`]: filterApplied,
                                })}
                            />
                        ) : (
                            icon
                        )}
                    </div>
                )}
            </div>

            <div className={clsx(`d-flex flex-row-fluid flex-wrap align-items-center text-hover-${hoverColor}`)}>
                <div className={`flex-grow-1 text-hover-${hoverColor}`}>
                    <Typography
                        variant='subtitle1'
                        component='a'
                        href={url}
                        className={clsx('fw-bolder hoverable', classes.title, {
                            [`text-${badgeColor}`]: filterApplied,
                            [`text-hover-${hoverColor}`]: true,
                        })}
                    >
                        {title}
                    </Typography>
                </div>
                {filterApplied && badgeTitle &&(
                    <span className={`badge badge-${badgeColor} fs-8 fw-bolder badge-circle ms-4`}>{badgeTitle}</span>
                )}
            </div>
        </div>
    );
};

export default FilterCard;
