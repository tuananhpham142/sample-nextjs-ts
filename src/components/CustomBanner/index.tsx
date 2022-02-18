import { AlignVariant } from '@/models/interfaces/theme';
import { BACKGROUND_DARK } from '@/styles/colorPalette';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import clsx from 'clsx';
import { CSSProperties, Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomBannerProps>((theme: Theme) => ({
    bannerRounded: {
        background: 'white',
        // borderRadius: (props) => (props?.rounded ? `${BORDER_RADIUS_MEDIUM}px !important` : 0),
        height: (props) => (props?.height ? `${props.height}px !important` : 'auto'),
        width: (props) => (props?.width ? `${props.width}px !important` : '100%'),
        [theme.breakpoints.up('xl')]: {
            minHeight: 235,
        },
        [theme.breakpoints.only('lg')]: {
            minHeight: 165,
        },
        [theme.breakpoints.only('md')]: {
            minHeight: 130,
        },
        [theme.breakpoints.only('sm')]: {
            minHeight: 100,
        },
    },
    banner: {
        '& .custom_banner--content': {
            padding: '35px 24px',
            width: '100%',
            zIndex: 2,
        },
        '& .custom_banner--background::before': {
            content: '""',
            background: (props) => props.overlayColor,
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: ' 100%',
            zIndex: 1,
            opacity: (props) => props.overlayOpacity,
            pointerEvent: 'none',
        },
        '&:hover .custom_banner--background': {
            transform: 'scale(1.02)',
        },
    },
    title: {
        float: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitBoxOrient: 'vertical',
        fontSize: 36,
        WebkitLineClamp: (props) => props.titleLine || 'none',
        color: BACKGROUND_DARK,
    },
    subtitle: {
        float: 'left',
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
        color: BACKGROUND_DARK,
    },
    bannerBackground: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        transition: 'all 0.5s ease',
        '& > img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
    },
    imgGradientToTop: {
        position: 'relative',
        '&:before': {
            content: '""',
            background: (props) =>
                `linear-gradient(180deg, ${'rgba(255, 255, 255, 0)'} 50%, ${'rgba(0, 0, 0, 0.5)'} 100%)`,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: '100%',
            zIndex: 1,
            pointerEvent: 'none',
            borderBottomLeftRadius: (props) => (props?.rounded ? 8 : 0),
            borderBottomRightRadius: (props) => (props?.rounded ? 8 : 0),
        },
    },
}));
interface CustomBannerProps {
    className?: string;
    imgUrl: string;
    overlayColor?: string;
    overlayOpacity?: number;
    rounded?: boolean;
    subTitle?: string | ReactNode;
    title?: string | ReactNode;
    titleLine?: 1 | 2;
    description?: string | ReactNode;
    button?: string | ReactNode;
    align?: AlignVariant;
    height?: number | string;
    width?: number | string;
    onClick?: () => void;
    customStyle?: CSSProperties;
    enableGradientBg?: boolean;
    renderContent?: ReactNode;
}
const CustomBanner: FunctionComponent<CustomBannerProps> = (props: CustomBannerProps) => {
    const {
        className,
        imgUrl,
        description,
        title,
        subTitle,
        button,
        align,
        renderContent,
        enableGradientBg,
        onClick,
        customStyle,
    } = props;

    const classes = useStyles(props);

    const handleClick = () => {
        if (onClick) onClick();
    };

    return (
        <Fragment>
            <Box
                onClick={() => {
                    if (onClick) onClick();
                }}
                component={'div'}
                className={clsx(
                    'overflow-hidden custom_banner position-relative cursor-pointer d-flex align-items-center rounded-8',
                    className,
                    classes.banner,
                    classes.bannerRounded,
                    {
                        [classes.imgGradientToTop]: enableGradientBg ? true : false,
                    },
                )}
                style={customStyle}
                // onClick={onClick}
            >
                <div
                    className={clsx('custom_banner--background', {
                        [classes.bannerBackground]: true,
                    })}
                >
                    <img src={imgUrl} loading={'eager'} title={''} alt={''} className='cover-image' />
                </div>
                <div
                    className={clsx('custom_banner--content position-relative', {
                        ['d-md-flex align-items-center justify-content-between']: true,
                    })}
                >
                    <div
                        className={clsx('d-flex flex-column w-100', {
                            'align-items-center justify-content-center': align === 'center',
                            'align-items-start mw-600px': align === 'left',
                            'align-items-end': align === 'right',
                        })}
                    >
                        {subTitle && typeof subTitle === 'string' ? (
                            <Typography
                                variant='h5'
                                sx={(theme) => ({
                                    float: 'left',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                    whiteSpace: 'break-spaces',
                                    wordBreak: 'break-word',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 1,
                                    WebkitBoxOrient: 'vertical',
                                    color: BACKGROUND_DARK,
                                })}
                            >
                                {subTitle}
                            </Typography>
                        ) : (
                            subTitle
                        )}
                        {title && typeof title === 'string' ? <h3 className={classes.title}>{title}</h3> : title}
                        {description && typeof description === 'string' ? (
                            <Typography variant='body1' color='white' className='mb-5 mw-400px'>
                                {description}
                            </Typography>
                        ) : (
                            description
                        )}
                    </div>
                    {/* {button && typeof button === 'string' ? (
                        <CustomButton
                            type='submit'
                            size='md'
                            onClick={() => {
                                if (onClick) onClick();
                            }}
                            isLoading={false}
                            variant={'contained'}
                            color={'primary'}
                            title={button}
                            className='min-w-200px mt-7 mt-md-0'
                        />
                    ) : (
                        button
                    )} */}
                </div>
                {renderContent && renderContent}
            </Box>
        </Fragment>
    );
};

CustomBanner.defaultProps = {
    align: 'left',
    imgUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    rounded: true,
};

export default CustomBanner;
