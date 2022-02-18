import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, SectionTitleProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface SectionTitleProps {
    className?: string;
    containerClass?: string;
    title: string;
    subtitle: string;
    hoverable?: boolean;
    alignment: 'left' | 'right' | 'center';
}
const SectionTitle: FunctionComponent<SectionTitleProps> = (props: SectionTitleProps) => {
    const { className, containerClass, title, subtitle, hoverable, alignment } = props;
    const classes = useStyles(props);

    return (
        <div
            className={clsx(`text-${alignment} w-100`, {
                [`${containerClass}`]: containerClass,
            })}
        >
            <Typography variant='h1' color='textPrimary' className={clsx('fw-bolder', { ['hoverable']: hoverable })}>
                {title}
            </Typography>
            <Typography variant='h5' color='textSecondary' className={clsx('fw-bold', { ['hoverable']: hoverable })}>
                {subtitle}
            </Typography>
        </div>
    );
};

SectionTitle.defaultProps = {
    alignment: 'center',
};

export default SectionTitle;
