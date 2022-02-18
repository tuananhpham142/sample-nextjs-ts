import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import ListItemSlider from '../ViewGeneralComponent/ListItemSlider';

const useStyles = makeStyles<Theme, CustomTimelineProps>((theme: Theme) => ({
    timelineDot: {
        width: 16,
        height: 16,
    },
    slider: {
        // overflowX: 'clip',
        position: 'relative',
        marginTop: 20,
        cursor: 'pointer',
        '&:before': {
            content: '""',
            width: (props) => '100%',
            background: (props) => props.color || theme.palette.background.default,
            height: 5,
            transform: 'translateY(-50%)',
            top: '50%',
            position: 'absolute',
            display: 'none',
        },
        '& .item:before': {
            content: '""',
            width: (props) => '100%',
            background: (props) => props.color || theme.palette.background.default,
            height: 5,
            transform: 'translateY(-50%)',
            top: '50%',
            position: 'absolute',
            // display: "none"
        },
        '& .connector': {
            width: (props) => '100%',
            background: (props) => props.color || theme.palette.background.default,
            // display: 'none',
        },
        '& .timeline-dot': {
            background: (props) => props.color || theme.palette.background.default,
        },
        '& .timeline-content': {
            width: (props) => props.itemWidth,
            textAlign: 'center',
            marginBottom: 40,
            color: (props) => props.color,
        },
        '& .swiper-wrapper > div:nth-child(odd) .timeline-content': {
            bottom: 'auto',
            top: '0',
            marginBottom: 0,
            marginTop: 40,
        },
        '& .swiper-wrapper > div:nth-child(even) .timeline-content': {
            flexDirection: 'column-reverse !important',
            '& .mb-3': {
                marginBottom: '0 !important',
                marginTop: '0.75rem !important',
            },
        },

        '& .next-arrow': {
            right: 0,
            background: 'rgba(255,255,255,0.6)',
            marginTop: 0,
            display: 'none',
        },
        '& .prev-arrow': {
            left: 0,
            background: 'rgba(255,255,255,0.6)',
            marginTop: 0,
            display: 'none',
        },
        [theme.breakpoints.down('xl')]: {
            '& .next-arrow, & .prev-arrow': {
                display: 'block',
            },
        },
        '& .item': {
            position: 'relative',
            padding: '130px 0px',
        },
    },
    horizontal: {
        '& .connector': {
            width: (props) => props.itemWidth,
            background: (props) => props.color || theme.palette.background.default,
            // marginRight: '-2px',
        },
        '& .timeline-dot': {
            background: (props) => props.color || theme.palette.background.default,
        },
        '& .timeline-content': {
            width: (props) => props.itemWidth,
            textAlign: 'center',
            marginBottom: 20,
            color: (props) => props.color,
        },
        '& .item:nth-child(odd) .timeline-content': {
            bottom: 'auto',
            top: '0',
            marginBottom: 0,
            marginTop: 20,
        },
    },
    vertical: {
        '& .connector': {
            height: (props) => props.itemWidth,
            background: (props) => props.color,
        },
        '& .timeline-dot': {
            background: (props) => props.color,
        },
        '& .timeline-content': {
            width: (props) => props.itemWidth,
            right: 0,
            marginRight: 20,
            top: 0,
            alignItems: 'flex-end',
            textAlign: 'right',
            color: (props) => props.color,
        },
        '& .item:nth-child(odd) .timeline-content': {
            width: (props) => props.itemWidth,
            right: 'auto',
            left: 0,
            marginRight: 0,
            marginLeft: 20,
            top: 0,
            textAlign: 'left',
            alignItems: 'flex-start',
        },
    },
}));

interface CustomTimelineProps {
    className?: string;
    data: Array<any>;
    color?: string;
    horizontal?: boolean;
    itemWidth?: string;
    renderItem: (item: any, index: number) => ReactNode;
}

const CustomTimeline: FunctionComponent<CustomTimelineProps> = (props: CustomTimelineProps) => {
    const { data, color, horizontal, itemWidth, renderItem } = props;
    const classes = useStyles(props);

    const handlers = useSwipeable({
        onSwipedLeft: () => {
            // if (isMobile) setShowUnsaveBtn(true);
        },
        onSwipedRight: () => {
            // if (isMobile) setShowUnsaveBtn(false);
        },
        onTap: () => {},
    });

    useEffect(() => {}, []);
    return (
        <Fragment>
            {horizontal ? (
                <ListItemSlider
                    customClass={clsx({
                        [classes.vertical]: !horizontal,
                        [classes.slider]: horizontal,
                    })}
                    freeMode
                    spaceBetween={0}
                    data={data}
                    render={(item: any, index: number) => {
                        return (
                            <div
                                className={clsx('item d-flex align-items-center justify-content-center w-100', {
                                    ['flex-column']: !horizontal,
                                })}
                            >
                                <div className='position-relative'>
                                    <div className={clsx('rounded-circle timeline-dot', classes.timelineDot)}></div>
                                    <div
                                        className={clsx(
                                            'position-absolute timeline-content d-flex flex-column mt-n5px',
                                            {
                                                ['center-horizontal bottom-0 align-items-center ']: horizontal,
                                            },
                                        )}
                                    >
                                        {renderItem(item, index)}
                                    </div>
                                </div>
                            </div>
                        );
                    }}
                    slidesPerViewResponsive={{ xs: 2, sm: 2, md: 2, lg: 2, xl: 2, xxl: 2 }}
                    // slidesPerViewResponsive={{ xs: 1, sm: 2, md: 4, lg: 4, xl: 8, xxl: 12 }}
                />
            ) : (
                <div
                    {...handlers}
                    className={clsx('timeline-wrapper d-flex align-items-center flex-wrap gap-5', {
                        ['flex-column']: !horizontal,
                    })}
                >
                    <div
                        className={clsx('d-flex align-items-center', {
                            ['flex-column']: !horizontal,
                            [classes.horizontal]: horizontal,
                            [classes.vertical]: !horizontal,
                        })}
                    >
                        {data.map((item, index) => {
                            return (
                                <div
                                    className={clsx('item d-flex align-items-center', {
                                        ['flex-column']: !horizontal,
                                    })}
                                >
                                    <div
                                        className={clsx('connector', {
                                            [`h-5px`]: horizontal,
                                            ['w-5px']: !horizontal,
                                        })}
                                    ></div>

                                    <div className='position-relative'>
                                        <div className={clsx('rounded-circle timeline-dot', classes.timelineDot)}></div>
                                        <div
                                            className={clsx(
                                                'position-absolute timeline-content d-flex flex-column mt-n5px',
                                                {
                                                    ['center-horizontal bottom-0 align-items-center ']: horizontal,
                                                },
                                            )}
                                        >
                                            {renderItem(item, index)}
                                        </div>
                                    </div>
                                    {index === data.length - 1 && (
                                        <div
                                            className={clsx('connector', {
                                                [`h-5px bg-dark`]: horizontal,
                                                ['w-5px bg-dark']: !horizontal,
                                            })}
                                        ></div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </Fragment>
    );
};
CustomTimeline.defaultProps = {
    horizontal: true,
    itemWidth: '200px',
    color: '#222',
};

export default CustomTimeline;
