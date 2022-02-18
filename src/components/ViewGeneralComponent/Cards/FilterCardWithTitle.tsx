import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';
import { isMobile } from 'react-device-detect';
import ListItemSlider from '../ListItemSlider';
import FilterCard, { FilterCardProps } from './FilterCard';

const useStyles = makeStyles<Theme, FilterCardListWithTitleProps<any>>((theme: Theme) => ({
    circle: {
        borderRadius: 360,
    },
    fitContent: {
        width: 'fit-content',
    },
}));
type cardProps = FilterCardProps<any>;

interface FilterCardListWithTitleProps<T> {
    className?: string;
    activeFilter?: string;
    title?: ReactNode | string;
    icon?: any;
    filterData: Array<string>;
    renderFilterList?: ReactNode;
}
const FilterCardListWithTitle: FunctionComponent<FilterCardListWithTitleProps<any>> = <T extends any>(
    props: FilterCardListWithTitleProps<T>,
) => {
    const classes = useStyles(props);
    const { className, title, renderFilterList, filterData, activeFilter, icon } = props;

    return (
        <div className={clsx('d-sm-flex align-items-center justify-content-between overflow-hidden', className)}>
            {title && (
                <div className='me-sm-4 me-md-10 flex-grow-1 d-flex flex-sm-column min-w-100px gap-2 gap-sm-0'>
                    {title && typeof title === 'string' ? (
                        <Typography variant='h5' className='color-gray-900 fw-bold'>
                            {title}
                        </Typography>
                    ) : (
                        <>{title}</>
                    )}
                </div>
            )}
            {renderFilterList ? (
                renderFilterList
            ) : (
                <ListItemSlider
                    spaceBetween={9}
                    data={filterData}
                    render={(title: string) => (
                        <FilterCard
                            title={title}
                            icon={icon ? icon : 'flaticon2-location'}
                            onClick={() => console.log('clicked')}
                            shadow='xs'
                            shape='rounded'
                            borderType='solid'
                            className='border-hover-warning border h-md-55px min-w-lg-200px'
                            hoverColor='warning'
                            badgeColor='warning'
                            filterApplied={title === activeFilter ? true : false}
                        />
                    )}
                    freeSolo
                    {...(isMobile
                        ? {
                              arrow: true,
                          }
                        : {
                              arrow: false,
                          })}
                    slidesPerView={'auto'}
                    customClass='mw-100'
                />
            )}
        </div>
    );
};

export default FilterCardListWithTitle;
