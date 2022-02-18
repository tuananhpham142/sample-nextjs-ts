import PlayIcon from '@/assets/svg/Play.icon';
import { MediaItem } from '@/models/Media/MediaModel';
import { Box, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, ReactNode, useState } from 'react';
import CustomDialog from '../CustomDialog';
import CustomIconStandalone from '../CustomIconStandalone';
import CustomCarousel from '../CustomImageSlider/CustomCarousel';

const useStyles = makeStyles<Theme, CustomGalleryGridProps>((theme: Theme) => ({
    galleryGrid: {
        '& img': {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
        },
        '& .item': {
            position: 'relative',
            overflow: 'hidden',
            // borderRadius: (props) => (props?.rounded ? `${BORDER_RADIUS_DEFAULT}px !important` : 0),
            cursor: 'pointer',
        },
    },
    overlayContent: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.6)',
        '& > h3': {
            fontSize: '24px',
        },
    },
    overlayContentNoBg: {
        background: 'transparent',
    },
    imgGradientToTop: {
        position: 'relative',
        '&:before': {
            content: '""',
            background: (props) =>
                `linear-gradient(180deg, ${'rgba(255, 255, 255, 0)'} 50%, ${
                    props.containerGradientColor || 'rgba(0, 0, 0, 0.5)'
                } 100%)`,
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

interface dialogStateObject {
    itemIndex: any;
    isOpen: boolean;
}

interface CustomGalleryGridProps {
    className?: string;
    items: Array<MediaItem>;
    height?: number | string;
    gap?: number;
    rounded?: boolean;
    horizontal?: boolean;
    viewMore?: string | ReactNode;
    containerGradientColor?: string;
    onClick?: (index: number) => void;
    openPopup?: boolean;
}

const CustomGalleryGrid = (props: CustomGalleryGridProps) => {
    const classes = useStyles(props);
    const { className, items, height, rounded, gap, openPopup, horizontal, viewMore, onClick } = props;

    const [openDialog, setOpenDialog] = useState<dialogStateObject>({
        itemIndex: undefined,
        isOpen: false,
    });

    const maxColumn = 4;
    const rows = () => {
        const itemCount = items?.length;
        if (itemCount > 5) return maxColumn; // 4 dòng
        if (itemCount === 3) return horizontal ? 2 : 3;
        if (itemCount <= 2) return 1;
        else return itemCount - 1;
    };
    const columns = () => {
        const itemCount = items?.length;
        if (itemCount > 5) return maxColumn;
        if (itemCount === 2) return 2;
        if (itemCount === 1) return 1;
        if (itemCount === 3) return horizontal ? 3 : 2;
        else return itemCount - 1;
    };
    const rowEnd = rows() + 1;
    const columEnd = columns() + 1;

    const renderItem = (itemProps: any) => {
        const { itemIdx, item, otherProps } = itemProps;
        const showMoreItems = itemIdx === maxColumn && items.length - 1 > maxColumn;
        const sxHorizontal = () => {
            if (itemIdx === 0 && items.length === 2)
                // main item và trường hợp đặc biệt chỉ có tổng 2 items
                return {
                    gridArea: `1 / 1 / 1 / 2`,
                };
            if (itemIdx === 0)
                // main item
                return {
                    gridArea: `1 / 1 / ${items.length > 2 ? rowEnd : rowEnd - 1} / ${
                        items.length > 2 ? columEnd - 1 : columEnd || 1
                    }`,
                };

            if (itemIdx === 1 && items.length === 2)
                // item thứ 2 và trường hợp đặc biệt chỉ có tổng 2 items
                return {
                    gridColumn: `${2} / span 1`,
                    gridRow: `${1} / span 1`,
                };
            return {
                gridColumn: `${columns()} / span 1`,
                gridRow: `${itemIdx} / span 1`,
            };
        };
        const sxVertical = () => {
            if (itemIdx === 0)
                // main item
                return {
                    gridArea: `1 / 1 / ${items.length > 2 ? rowEnd - 1 : rowEnd} / ${
                        items.length > 2 ? columEnd : columEnd - 1 || 1
                    }`,
                };
            if (itemIdx === 1 && items.length === 2)
                // item thứ 2 và trường hợp đặc biệt chỉ có tổng 2 items
                return {
                    gridColumn: `${2} / span 1`,
                    gridRow: `${1} / span 1`,
                };
            return {
                gridColumn: `${itemIdx} / span 1`,
                gridRow: `${rows()} / span 1`,
            };
        };
        if (item && Object.keys(item).length > 0)
            return (
                <>
                    <Box
                        key={itemIdx}
                        className={clsx('item', { ['rounded-16']: rounded ? true : false })}
                        onClick={() => {
                            if (openPopup) setOpenDialog({ itemIndex: itemIdx, isOpen: true });
                            else if (typeof onClick === 'function') onClick(itemIdx);
                        }}
                        sx={horizontal ? sxHorizontal() : sxVertical}
                    >
                        <div className='position-relative h-100'>
                            <div
                                className={clsx(' d-flex align-items-center justify-content-center', {
                                    [classes.overlayContent]: true,
                                    [classes.overlayContentNoBg]: item?.type === 'video' || !showMoreItems,
                                })}
                            >
                                {showMoreItems && !viewMore ? (
                                    <Typography variant='h4' className='fw-bold' color='white'>
                                        {`+${items.length - (itemIdx + 1)}`}
                                    </Typography>
                                ) : (
                                    item?.type === 'video' && <PlayIcon size='5x' />
                                )}
                            </div>

                            <img src={item?.thumbnail || item.src} alt={item?.alt || ''} title={item?.alt || ''} />
                        </div>
                    </Box>
                </>
            );
    };

    return (
        <Fragment>
            <div
                className={clsx(
                    {
                        [classes.imgGradientToTop]: viewMore ? true : false,
                    },
                    className,
                )}
            >
                <Box
                    className={clsx('custom-gallery-grid', classes.galleryGrid)}
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${columns()}, 1fr)`,
                        gridTemplateRows: `repeat(${rows()}, 1fr)`,
                        height: height || 'auto',
                        gap: `${gap}px ${gap}px !important`,
                    }}
                >
                    {items.map((item, index) => {
                        return (
                            <Fragment key={index}>
                                {index <= maxColumn &&
                                    renderItem({
                                        item,
                                        itemIdx: index,
                                    })}
                            </Fragment>
                        );
                    })}
                </Box>
                {viewMore && (
                    <div className={classes.viewMore}>
                        {typeof viewMore === 'string' ? (
                            <Typography
                                variant='body1'
                                component={'a'}
                                color='white'
                                className='cursor-pointer text-decoration-underline'
                                onClick={() => {
                                    if (openPopup) setOpenDialog({ itemIndex: 1, isOpen: true });
                                    else if (typeof onClick === 'function') onClick(1);
                                }}
                            >
                                {viewMore}
                            </Typography>
                        ) : (
                            <>{viewMore}</>
                        )}
                    </div>
                )}
            </div>

            {openDialog?.isOpen && (
                <CustomDialog
                    title=''
                    type='light'
                    open={openDialog?.isOpen}
                    isLoading={true}
                    fullWidth={true}
                    fullScreen={true}
                    onClose={() => setOpenDialog({ itemIndex: undefined, isOpen: false })}
                    children={
                        <div className='postion-relative' style={{ height: '100vh' }}>
                            <CustomCarousel
                                data={items.map((item) => ({
                                    ...item,
                                    src: item.src,
                                }))}
                                background='light'
                            />
                        </div>
                    }
                />
            )}
        </Fragment>
    );
};

export default CustomGalleryGrid;
