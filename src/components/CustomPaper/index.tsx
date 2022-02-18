import { ComponentBackgroundVariant, Opacity } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomPaperProps>((theme: Theme) => ({}));

type CustomPaperProps = {
    className?: string;
    background: ComponentBackgroundVariant;
    opacity?: Opacity;
    children: ReactNode | HTMLElement;
};

const CustomPaper: FunctionComponent<CustomPaperProps> = (props: CustomPaperProps) => {
    const { children, background, className, opacity } = props;
    const classes = useStyles(props);

    return (
        <div
            className={clsx({
                [`bg-opacity-${opacity}`]: opacity,
                [`bg-${background}`]: true,
                className,
            })}
        >
            {children}
        </div>
    );
};

CustomPaper.defaultProps = {
    background: 'white',
};

export default CustomPaper;
