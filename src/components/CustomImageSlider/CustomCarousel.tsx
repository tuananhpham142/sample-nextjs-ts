import { MediaItem } from '@/models/Media/MediaModel';
import { THEME_COLOR_WARNING } from '@/styles/colorPalette';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment, FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CustomVideo from '../CustomVideo';
import NextArrow from './NextArrow';
import PrevArrow from './PrevArrow';

const useStyles = makeStyles<Theme, CustomCarouselProps>((theme: Theme) => ({
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
        // background: 'white',
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
        // background: 'white',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 2,
    },
    image: {
        objectFit: 'contain',
        maxHeight: '100vh',
        borderRadius: (props) => (props.rounded ? `8px !important` : '0px !important'),
    },
}));

interface CustomCarouselProps {
    className?: string;
    background?: 'black' | 'light' | 'transparent' | 'white' | 'light-dark' | 'dark';
    data: Array<MediaItem>;
    rounded?: boolean;
}
const CustomCarousel: FunctionComponent<CustomCarouselProps> = (props: CustomCarouselProps) => {
    const { className, data, background, rounded } = props;
    const classes = useStyles(props);
    const { t } = useTranslation();

    const [current, setCurrent] = useState<number>(0);

    return (
        <Fragment>
            <div
                id='kt_security_recent_alerts'
                className={`carousel carousel-custom carousel-stretch slide bg-${background} ${
                    rounded ? `rounded-8` : ''
                }`}
                data-bs-ride='carousel'
                data-bs-interval='8000'
            >
                <div className='d-flex flex-stack align-items-center flex-wrap'></div>
                <PrevArrow
                    size={'6'}
                    buttonSize='md'
                    disabled={current === 0}
                    onClick={() => setCurrent(current - 1)}
                />
                <div className='carousel-inner justify-content-center'>
                    {data.map((item, index) => {
                        if (item.type === 'image') {
                            return (
                                <div
                                    className={clsx('carousel-item overlay h-100', {
                                        ['active']: current === index,
                                    })}
                                >
                                    <div
                                        className={`carousel-wrapper flex-row justify-content-center ${
                                            rounded ? `rounded-8` : ''
                                        }`}
                                    >
                                        <Image
                                            src={item.src}
                                            className={clsx(classes.image, {
                                                ['rounded-8']: rounded,
                                            })}
                                            layout='fill'
                                        />
                                    </div>
                                </div>
                            );
                        } else {
                            return (
                                <div
                                    className={clsx('carousel-item overlay h-100', {
                                        ['active']: current === index,
                                    })}
                                >
                                    <div
                                        className={`carousel-wrapper flex-row justify-content-center ${
                                            rounded ? `rounded-8` : ''
                                        }`}
                                    >
                                        <CustomVideo src={item.src} />
                                        {/* <Image
                                            src={item.src}
                                            className={clsx(classes.image, {
                                                ['rounded-8']: rounded,
                                            })}
                                            layout='fill'
                                        /> */}
                                    </div>
                                </div>
                            );
                        }
                    })}
                </div>
                <NextArrow
                    size={'6'}
                    buttonSize='md'
                    disabled={current === data.length - 1}
                    onClick={() => setCurrent(current + 1)}
                />
            </div>
        </Fragment>
    );
};

CustomCarousel.defaultProps = {
    background: 'black',
    rounded: true,
};

export default CustomCarousel;
