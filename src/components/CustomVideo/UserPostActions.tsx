import BookmarkIcon from '@/assets/svg/Bookmark.icon';
import CommentIcon from '@/assets/svg/Comment.icon';
import HeartIcon from '@/assets/svg/Heart.icon';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, CustomVideoUserPostActionProps>((theme: Theme) => ({}));

interface CustomVideoUserPostActionProps {
    className?: string;
    totalComment: number;
    totalSave: number;
    totalLike: number;
    horizontal?: boolean;
}

const CustomVideoUserPostAction: FunctionComponent<CustomVideoUserPostActionProps> = (
    props: CustomVideoUserPostActionProps,
) => {
    const classes = useStyles(props);
    const { className, totalComment, totalSave, totalLike, horizontal } = props;

    return (
        <div
            className={clsx(
                {
                    ['d-flex']: true,
                    ['flex-column align-items-end justify-content-end']: !horizontal,
                },
                className,
            )}
        >
            <Typography
                component='span'
                variant='body2'
                className={clsx('text-white hoverable fw-bold text-hover-primary d-flex', {
                    ['flex-column align-items-end mb-3']: !horizontal,
                    ['me-3']: horizontal,
                })}
            >
                <CommentIcon size='3' color='light' hoverColor='primary' />
                {totalComment}
            </Typography>
            <Typography
                component='span'
                variant='body2'
                className={clsx('text-white hoverable fw-bold text-hover-primary d-flex', {
                    ['flex-column align-items-end mb-3']: !horizontal,
                    ['me-3']: horizontal,
                })}
            >
                <HeartIcon size='3' color='light' hoverColor='danger' />
                {totalLike}
            </Typography>
            <Typography
                component='span'
                variant='body2'
                className={clsx('text-white hoverable fw-bold text-hover-primary d-flex', {
                    ['flex-column align-items-end mb-3']: !horizontal,
                    ['me-3']: horizontal,
                })}
            >
                <BookmarkIcon size='3' color='light' hoverColor='info' />
                {totalSave}
            </Typography>
        </div>
    );
};
export default CustomVideoUserPostAction;
