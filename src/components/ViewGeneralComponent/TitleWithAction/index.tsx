import { CustomClasses } from '@/models/interfaces/globalInterface';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, TitleWithActionProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
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
    subtitle: {
        textOverflow: 'ellipsis',
        overflow: 'hidden',
        whiteSpace: 'break-spaces',
        wordBreak: 'break-word',
        display: '-webkit-box',
        WebkitLineClamp: 1,
        WebkitBoxOrient: 'vertical',
    },
}));

interface TitleWithActionProps extends CustomClasses<'title' | 'subTitle'> {
    className?: string;
    containerClass?: string;
    title: string;
    titleUrl?: string;
    subtitle?: string;
    hoverable?: boolean;
    action?: ReactNode;
}
const TitleWithAction: FunctionComponent<TitleWithActionProps> = (props: TitleWithActionProps) => {
    const { className, containerClass, title, subtitle, hoverable, action, titleUrl, customClasses } = props;
    const classes = useStyles(props);

    return (
        <div className={clsx('d-flex align-items-center w-100', containerClass)}>
            <div className='d-flex align-items-center flex-grow-1'>
                <div className='d-flex flex-column'>
                    <Typography
                        variant='h3'
                        component={titleUrl ? 'a' : 'span'}
                        href={titleUrl}
                        className={clsx(classes.title, customClasses?.title, {
                            ['hoverable text-hover-primary']: hoverable || titleUrl,
                        })}
                    >
                        {title}
                    </Typography>
                    {subtitle && (
                        <Typography
                            variant='subtitle2'
                            component='span'
                            className={clsx(classes.subtitle, customClasses?.subTitle, 'mt-1')}
                        >
                            {subtitle}
                        </Typography>
                    )}
                </div>
            </div>
            {action && <div className='my-0'>{action}</div>}
        </div>
    );
};

TitleWithAction.defaultProps = {};

export default TitleWithAction;
