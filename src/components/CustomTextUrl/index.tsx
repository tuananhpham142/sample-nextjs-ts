import { Theme, Typography, TypographyTypeMap } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomTextUrlProps>((theme: Theme) => ({}));

interface CustomTextUrlProps {
    variant: TypographyTypeMap['props']['variant'];
    onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
    className?: string;
    href?: string;
    children: string | ReactNode;
}
const CustomTextUrl: FunctionComponent<CustomTextUrlProps> = (props: CustomTextUrlProps) => {
    const { className, variant, href, onClick, children } = props;
    const classes = useStyles(props);
    return (
        <Typography
            variant={variant}
            component='a'
            onClick={onClick}
            {...(href && onClick === undefined ? { href } : undefined)}
            color='primary'
            className={clsx('link-primary hoverable', className)}
        >
            {children}
        </Typography>
    );
};

export default CustomTextUrl;
