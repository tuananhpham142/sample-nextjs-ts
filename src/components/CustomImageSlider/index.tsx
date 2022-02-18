import { THEME_COLOR_WARNING } from '@/styles/colorPalette';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent } from 'react';
import Slider, { Settings } from 'react-slick';

const useStyles = makeStyles<Theme, CustomImageSliderProps>((theme: Theme) => ({
    prev: {
        left: 24,
        right: 'auto',
    },
    next: {
        right: 24,
        left: 'auto',
    },
    iconSlick: {
        color: `${THEME_COLOR_WARNING} !important`,
        fontSize: 28,
        cursor: 'pointer',
        borderRadius: '50%',
        background: 'white',
        textAlign: 'center',
    },
    slickArrow: {
        position: 'absolute',
        fontSize: 24,
        display: 'flex',
        borderRadius: 360,
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
        background: 'white',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
    },
    fullHeightSliderImage: {
        '& .slick-list': {
            height: '100% !important',
        },
        '& .slick-list .slick-track': {
            height: '100% !important',
        },
        '& .slick-slide > div': {
            height: '100% !important',
        },
    },
}));

type SliderItem = {
    type: 'IMAGE' | 'VIDEO';
    url: string;
};

interface CustomImageSliderProps {
    className?: string;
    pagingImg?: boolean;
    data: Array<SliderItem>;
}
const CustomImageSlider: FunctionComponent<CustomImageSliderProps> = (props: CustomImageSliderProps) => {
    const { className, pagingImg, data } = props;
    const classes = useStyles(props);
    //@ts-ignore
    const SampleNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <span
                className={clsx('bg-white', {
                    [classes.iconSlick]: true,
                })}
            >
                <i
                    onClick={onClick}
                    className={clsx('flaticon2-right-arrow text-warning', {
                        [classes.slickArrow]: true,
                        [classes.next]: true,
                    })}
                />
            </span>
        );
    };

    //@ts-ignore
    const SamplePrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <span
                className={clsx('bg-white', {
                    [classes.iconSlick]: true,
                })}
            >
                <i
                    onClick={onClick}
                    className={clsx('flaticon2-left-arrow text-warning', {
                        [classes.slickArrow]: true,
                        [classes.prev]: true,
                    })}
                />
            </span>
        );
    };

    const settings: Settings = {
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <Fragment>
            <div className='justify-content-center align-items-center bg-black h-100'>
                <Slider {...settings} className={clsx('h-100', classes.fullHeightSliderImage)}>
                    {data.map((item) => (
                        <div className='overlay h-100 d-flex justify-content-center align-items-center'>
                            <img src={item.url} style={{ objectFit: 'contain', maxHeight: '100vh' }} />
                        </div>
                    ))}
                </Slider>
            </div>
        </Fragment>
    );
};

export default CustomImageSlider;
