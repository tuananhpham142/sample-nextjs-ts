import { UserPostOfPlace } from '@/models/UserPost/UserPostModel';
import { THEME_COLOR_DARK_50 } from '@/styles/colorPalette';
import { trimmedTextByCharacters } from '@/utils/string.utils';
import { isContainJsInjection, isContainSqlInjection } from '@/utils/validator.utils';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import Image from 'next/image';
import { FunctionComponent } from 'react';
import CustomVideoUserPostAction from './UserPostActions';

const useStyles = makeStyles<Theme, CustomVideoInfoProps>((theme: Theme) => ({
    subtitle: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        // WebkitLineClamp: (props) => props.placeLine || 1,
        WebkitBoxOrient: 'vertical',
    },
    title: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
    },
    address: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: (props) => props.placeLine || 1,
        WebkitBoxOrient: 'vertical',
    },
    bgGray: {
        background: THEME_COLOR_DARK_50,
    },
    dotBefore: {
        position: 'relative',
        paddingLeft: 10,
        '&:before': {
            content: '""',
            width: 4,
            height: 4,
            display: 'block',
            borderRadius: '50%',
            background: THEME_COLOR_DARK_50,
            position: 'absolute',
            top: '50%',
            left: '0',
            transform: 'translateY(-50%)',
        },
    },
    dotAfter: {
        position: 'relative',
        paddingRight: 15,
        '&:after': {
            position: 'absolute',
            top: '50%',
            right: '0',
            transform: 'translateY(-50%)',
            content: '""',
            width: 4,
            height: 4,
            display: 'block',
            borderRadius: '50%',
            background: THEME_COLOR_DARK_50,
        },
    },
    dotWhite: {
        '&:before, &:after': {
            background: '#fff',
        },
    },
}));

interface CustomVideoInfoProps extends Omit<UserPostOfPlace, 'media'> {
    className?: string;
    placeLine?: number;
    showFollowBtn?: boolean;
    showAction?: boolean;
    contentTrimedLength?: number;
}

const CustomVideoUserPostInfo: FunctionComponent<CustomVideoInfoProps> = (props: CustomVideoInfoProps) => {
    const classes = useStyles(props);
    const {
        className,
        user,
        place,
        createdDate,
        updatedDate,
        rating,
        totalComment,
        totalSave,
        totalLike,
        content,
        showFollowBtn,
        showAction,
        contentTrimedLength,
    } = props;

    const renderTextContent = (text: string, mention: string) => {
        let htmlText = trimmedTextByCharacters(text, contentTrimedLength || 120).replace('{{mention}}', ``);
        if (isContainSqlInjection(htmlText) || isContainJsInjection(htmlText)) {
            return text;
        }

        return (
            <>
                {mention && <strong className='text-hover-primary hoverable'>{mention}</strong>}
                {htmlText}
                {(contentTrimedLength || 120) < content.length && (
                    <Typography color='gray' variant='body1' component='a' className='fs-12px'>
                        Xem thêm
                    </Typography>
                )}
            </>
        );
    };

    return (
        <div className={clsx(className, 'p-3 pe-8 position-relative')}>
            <div className={clsx(`d-flex mb-2 align-items-center`)}>
                {user?.url && (
                    <div className=' position-relative rounded-circle w-25px h-25px me-2'>
                        <Image src={user.url} layout='fill' loading='lazy' className={'cover-image rounded-circle '} />
                    </div>
                )}
                <Typography variant='h6' color='white' className={clsx('text-hover-primary hoverable', classes.title)}>
                    {user?.username || user.name}
                </Typography>
                {showFollowBtn && (
                    <>
                        <Typography
                            color='white'
                            variant='body1'
                            component='span'
                            className={clsx('fs-12px ms-3', classes.dotBefore, classes.dotWhite)}
                        >
                            Theo dõi
                        </Typography>
                    </>
                )}
            </div>
            <Typography variant='body1' className='mb-1' color='white'>
                {renderTextContent(content, '')}
            </Typography>
            <Typography
                variant='body1'
                color='darkgrey'
                className={clsx('fs-12px ', classes.address, classes.dotBefore, classes.dotAfter)}
            >
                {place.address}
            </Typography>
            {showAction && (
                <div className={'position-absolute bottom-0 end-0 pe-3'}>
                    <CustomVideoUserPostAction
                        totalComment={totalComment}
                        totalSave={totalSave}
                        totalLike={totalLike}
                        horizontal={false}
                    />
                </div>
            )}
        </div>
    );
};
CustomVideoUserPostInfo.defaultProps = {
    contentTrimedLength: 60,
};
export default CustomVideoUserPostInfo;
