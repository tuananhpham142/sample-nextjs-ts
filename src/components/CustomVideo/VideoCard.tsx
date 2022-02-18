import { UserVideoStory } from '@/models/UserPost/UserPostModel';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment, FunctionComponent, useState } from 'react';
import CustomVideo, { VideoSettingProps } from '.';
import CustomVideoUserPostAction from './UserPostActions';
import CustomVideoUserPostInfo from './VideoUserPostInfo';

const useStyles = makeStyles<Theme, CustomVideoCardProps>((theme: Theme) => ({
    videoWrapper: {
        width: (props) => props.width || '100%',
        height: (props) => props.height || '420px',
        cursor: 'pointer',
    },
    videoAbs: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 2,
        '& > video': {
            objectFit: 'fill',
        },
    },
    imgGradientToTop: {
        position: 'relative',
        '&:before': {
            content: '""',
            background: (props) =>
                `linear-gradient(180deg, ${'rgba(255, 255, 255, 0)'} 30%, ${
                    props.containerGradientColor || 'rgba(0, 0, 0, 0.5)'
                } 100%)`,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '30%',
            zIndex: 2,
            pointerEvents: 'none',
            borderBottomLeftRadius: (props) => (props?.rounded ? 8 : 0),
            borderBottomRightRadius: (props) => (props?.rounded ? 8 : 0),
        },
    },
    viewMore: {
        position: 'absolute',
        right: 0,
        left: 0,
        bottom: 8,
        zIndex: 2,
        width: '100%',
    },
    image: {
        zIndex: 0,
    },
}));

interface CustomVideoCardProps extends VideoSettingProps {
    className?: string;
    data: UserVideoStory;
    width?: number | string;
    height?: number | string;
    rounded?: boolean;
    getRef?: (el: HTMLDivElement | null) => void;
    autoPlay?: boolean;
    containerGradientColor?: string;
    onClick?: () => void;
    onMouseOver?: () => void;
    onMouseOut?: () => void;
}

const CustomVideoCard: FunctionComponent<CustomVideoCardProps> = (props: CustomVideoCardProps) => {
    const classes = useStyles(props);
    const [imgUrl, setImgUrl] = useState<string>('');
    const { className, data, onClick, onMouseOver, onMouseOut, autoPlay, getRef, rounded, ...otherVideoProps } = props;

    return (
        <Fragment>
            <div
                className={clsx(
                    {
                        [classes.videoWrapper]: true,
                        [classes.imgGradientToTop]: true,
                        ['rounded-8 overflow-hidden bg-gray']: rounded,
                    },
                    className,
                )}
                ref={(el) => {
                    if (typeof getRef === 'function') getRef(el);
                }}
                onClick={() => {
                    if (typeof onClick === 'function') onClick();
                }}
                onMouseOver={(e) => {
                    if (typeof onMouseOver === 'function') onMouseOver();
                }}
                onMouseOut={(e) => {
                    if (typeof onMouseOut === 'function') onMouseOut();
                }}
            >
                <Image
                    src={imgUrl || data.media.thumbnail}
                    layout='fill'
                    loading={'lazy'}
                    objectFit='cover'
                    className={classes.image}
                />

                {autoPlay && (
                    <CustomVideo
                        src={data.media.src}
                        playing={true}
                        className={clsx(
                            {
                                [classes.videoAbs]: true,
                            },
                            'position-relative',
                        )}
                        onClick={() => {}}
                        {...otherVideoProps}
                    />
                )}
                <div className={clsx(classes.viewMore, 'mw-250px')}>
                    <CustomVideoUserPostInfo
                        id={data.id}
                        user={data.user}
                        showFollowBtn={true}
                        place={data.place}
                        createdDate={data.createdDate}
                        updatedDate={data.updatedDate}
                        rating={data.rating}
                        totalComment={data.totalComment}
                        totalSave={data.totalSave}
                        totalLike={data.totalLike}
                        content={data.content}
                        showAction={false}
                    />
                </div>
                <div className='position-absolute bottom-0 end-0 pe-3 pb-2' style={{ zIndex: 2 }}>
                    <CustomVideoUserPostAction
                        totalComment={data.totalComment}
                        totalSave={data.totalSave}
                        totalLike={data.totalLike}
                        horizontal={false}
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default CustomVideoCard;
