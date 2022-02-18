import { UserVideoStory } from '@/models/UserPost/UserPostModel';
import { Grid, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, useEffect, useRef, useState } from 'react';
import { isMobile } from 'react-device-detect';
import ListItemSlider from '../ViewGeneralComponent/ListItemSlider';
import CustomVideoCard from './VideoCard';

const useStyles = makeStyles<Theme, CustomVideoListProps>((theme: Theme) => ({
    videoWrapper: {
        width: '100%',
    },
    videoAbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        '& > video': {
            objectFit: 'fill',
        },
    },
    imgGradientToTop: {
        position: 'relative',
        '&:before': {
            content: '""',
            // background: (props) =>
            //     `linear-gradient(180deg, ${'rgba(255, 255, 255, 0)'} 50%, ${
            //         props.containerGradientColor || 'rgba(0, 0, 0, 0.5)'
            //     } 100%)`,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '30%',
            zIndex: 1,
            pointerEvent: 'none',
            borderBottomLeftRadius: (props) => (props?.rounded ? 8 : 0),
            borderBottomRightRadius: (props) => (props?.rounded ? 8 : 0),
        },
    },
    viewMore: {
        position: 'absolute',
        right: 15,
        bottom: 8,
        zIndex: 2,
    },
}));

interface CustomVideoListProps {
    className?: string;
    data: Array<UserVideoStory>;
    videoHeight?: string | number;
    rounded?: boolean;
    layout?: 'slider' | 'grid';
    autoPlayOnScroll?: boolean;
    onClick?: () => void;
}

const CustomVideoList: FunctionComponent<CustomVideoListProps> = (props: CustomVideoListProps) => {
    const classes = useStyles(props);
    const { className, data, rounded, autoPlayOnScroll, layout, videoHeight, onClick } = props;

    //ref
    const videoRef = useRef<Array<HTMLDivElement | null>>([]);
    //state

    const [showVideo, setShowVideo] = useState(false);
    const [anchorEl, setAnchorEl] = useState(undefined);
    const [playingIndex, setPlayingIndex] = useState<number | undefined>(undefined);
    const [intersectingVideoIndex, setIntersectingVideoIndex] = useState<Array<number> | undefined>(undefined);
    let videoPlayingTimeOut: NodeJS.Timeout | undefined = undefined;
    //function
    const handleMouseOver = (index: number) => {
        videoPlayingTimeOut = setTimeout(() => {
            if (autoPlayOnScroll && intersectingVideoIndex?.indexOf(index) !== -1 && layout !== 'slider')
                setPlayingIndex(index);
            else setPlayingIndex(index);
        }, 100);
    };

    const renderVideoCard = (item: UserVideoStory, index: number) => {
        return (
            <CustomVideoCard
                getRef={(el) => {
                    if (el) videoRef.current[index] = el;
                }}
                data={item}
                onMouseOver={() => handleMouseOver(index)}
                onMouseOut={() => {
                    if (videoPlayingTimeOut) clearTimeout(videoPlayingTimeOut);
                }}
                autoPlay={playingIndex === index}
                rounded={true}
                muted={true}
                controls={false}
                loop={false}
                {...(layout === 'slider' && {
                    width: 300,
                })}
                height={videoHeight}
            />
        );
    };
    useEffect(() => {
        if (autoPlayOnScroll && isMobile) {
            const options = {
                root: null,
                rootMargin: '0px',
                threshold: 0.8,
            };
            const observer = new IntersectionObserver((entries) => {
                const intersectingEntry = entries.filter((entry) => entry.isIntersecting) || [];
                let intersectingIndexes: Array<number> = [];
                videoRef.current.forEach((ref, index) => {
                    if (intersectingEntry.findIndex((entry) => ref === entry.target) !== -1)
                        intersectingIndexes.push(index);
                });
                if (intersectingIndexes.length >= 1) {
                    setIntersectingVideoIndex(intersectingIndexes);
                    if (intersectingIndexes.indexOf(0) !== -1) setPlayingIndex(0);
                    // if (intersectingIndexes.length === 1 && isMobile) setPlayingIndex(intersectingIndexes[0]);
                } else {
                    setPlayingIndex(undefined);
                    setIntersectingVideoIndex(undefined);
                }
            }, options);
            if (videoRef?.current)
                videoRef?.current.forEach((ref) => {
                    if (ref) observer.observe(ref);
                });
            return () => {
                if (videoRef?.current)
                    videoRef?.current.forEach((ref) => {
                        if (ref) observer.unobserve(ref);
                    });
            };
        }
    }, []);

    return (
        <Fragment>
            <div
                className={clsx(
                    {
                        [classes.videoWrapper]: true,
                    },
                    className,
                )}
                onClick={() => {
                    if (typeof onClick === 'function') onClick();
                }}
            >
                {layout === 'slider' ? (
                    <ListItemSlider
                        spaceBetween={8}
                        data={data}
                        render={renderVideoCard}
                        freeMode
                        slidesPerView={'auto'}
                        slidesPerViewResponsive={{ xs: 1.5, sm: 1.5, md: 2.3, lg: 3, xl: 4, xxl: 4 }}
                    />
                ) : (
                    <Grid container spacing={2}>
                        {data.map((item, index) => {
                            return (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    {renderVideoCard(item, index)}
                                </Grid>
                            );
                        })}
                    </Grid>
                )}
            </div>
        </Fragment>
    );
};
CustomVideoList.defaultProps = {
    autoPlayOnScroll: true,
    layout: 'grid',
};
export default CustomVideoList;
