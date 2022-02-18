import { usePagination } from '@mui/lab/Pagination';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, useState } from 'react';

const useStyles = makeStyles<Theme, CustomPaginationProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface CustomPaginationProps {
    lastPage: number;
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    length: number;
    nextPage: number;
    previousPage: number;
    onChangePage: (page: number) => void;
}
const CustomPagination: FunctionComponent<CustomPaginationProps> = (props: CustomPaginationProps) => {
    const { onChangePage, lastPage, currentPage, hasNextPage, hasPreviousPage, length, nextPage, previousPage } = props;
    const classes = useStyles(props);

    const [selectedPage, setSelectedPage] = useState<number>(1);

    const { items } = usePagination({ count: lastPage });

    const handleChangePage = (page: number) => {
        setSelectedPage(page);
        onChangePage(page);
    };

    const handleNextPage = () => {
        onChangePage(nextPage);
        setSelectedPage(nextPage);
    };
    const handlePrevPage = () => {
        onChangePage(previousPage);
        setSelectedPage(previousPage);
    };

    return (
        <Fragment>
            <div className='d-flex flex-wrap'>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;
                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = (
                            <Typography
                                key={`${type}-${index}`}
                                className={`btn btn-icon fw-bolder btn-sm btn-active-light-primary`}
                            >
                                <i className='flaticon-more-v2' />
                            </Typography>
                        );
                    } else if (type === 'page') {
                        children = (
                            <Typography
                                key={`${type}-${index}`}
                                className={clsx('btn btn-icon fw-bolder btn-sm btn-active-light-primary me-1', {
                                    active: currentPage === page,
                                })}
                                onClick={(e) => {
                                    if (currentPage !== page) {
                                        handleChangePage(page);
                                        item.onClick(e);
                                    }
                                }}
                            >
                                {page}
                            </Typography>
                        );
                    } else if (type === 'previous') {
                        children = (
                            <Typography
                                key={`${type}-${index}`}
                                title='Previous'
                                className={clsx(`btn btn-icon fw-bolder btn-sm me-1`, {
                                    ['disabled']: item.disabled || currentPage > 1,
                                })}
                                onClick={(e) => {
                                    if (currentPage > 1) {
                                        handlePrevPage();
                                        item.onClick(e);
                                    }
                                }}
                                {...item.disabled}
                            >
                                <i className='flaticon2-back text-primary'></i>
                            </Typography>
                        );
                    } else if (type === 'next') {
                        children = (
                            <Typography
                                key={`${type}-${index}`}
                                title='Previous'
                                className={clsx(`btn btn-icon fw-bolder btn-sm`, {
                                    ['disabled']: item.disabled || currentPage < lastPage,
                                })}
                                onClick={(e) => {
                                    if (currentPage < lastPage) {
                                        handleNextPage();
                                        item.onClick(e);
                                    }
                                }}
                                {...item.disabled}
                            >
                                <i className='flaticon2-next text-primary'></i>
                            </Typography>
                        );
                    }

                    return <>{children}</>;
                })}
            </div>
        </Fragment>
    );
};

export default CustomPagination;
