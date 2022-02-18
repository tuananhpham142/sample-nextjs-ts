import { Size } from '@/models/interfaces/theme';
import { Box, Rating, SvgIcon, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';

const useStyles = makeStyles<Theme, CustomRatingProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface CustomRatingProps {
    className?: string;
    rating: number;
    size: Size;
    label?: number | string | ReactNode;
    paddingX?: number;
    labelPlacement?: 'left' | 'right';
    color: 'warning' | 'primary' | 'danger' | 'info' | 'dark';
    readOnly?: boolean;
    onChange?: (value: number | null) => void;
}
const CustomRating: FunctionComponent<CustomRatingProps> = (props: CustomRatingProps) => {
    const { className, rating, readOnly, size, color, label, paddingX, labelPlacement, onChange } = props;
    const classes = useStyles(props);

    const handleChange = (newValue: number | null) => {
        return onChange ? onChange(newValue) : null;
    };

    return (
        <Fragment>
            <Box
                sx={{
                    // width: 200,
                    display: 'flex',
                    alignItems: 'center',
                }}
                className={className}
            >
                {label && labelPlacement === 'left' && <Box sx={{ mr: 0.5 }}>{label}</Box>}
                <Rating
                    onChange={(event, newValue) => {
                        handleChange(newValue);
                    }}
                    classes={{
                        icon: `px-${paddingX}`,
                    }}
                    name='text-feedback'
                    value={rating}
                    readOnly={readOnly}
                    precision={0.01}
                    icon={
                        <SvgIcon
                            className={clsx(
                                `text-${color} text-hover-${color} bg-hover-${color} fs-${size} justify-content-center align-items-center`,
                            )}
                        >
                            <svg
                                id='Layer_1'
                                data-name='Layer 1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                            >
                                <path d='M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z' />
                            </svg>
                        </SvgIcon>
                    }
                    emptyIcon={
                        <SvgIcon
                            className={clsx(`text-light-${color} fs-${size} justify-content-center align-items-center`)}
                        >
                            <svg
                                id='Layer_1'
                                data-name='Layer 1'
                                xmlns='http://www.w3.org/2000/svg'
                                viewBox='0 0 512 512'
                            >
                                <path d='M510.37,183.83a21.33,21.33,0,0,0-19.71-13.17H334.79L276,13.84a21.33,21.33,0,0,0-39.95,0L177.21,170.66H21.33A21.33,21.33,0,0,0,6.25,207.08L125.71,326.54,86,485.48A21.34,21.34,0,0,0,119.07,508L256,410.21,392.93,508A21.34,21.34,0,0,0,426,485.48L386.29,326.54,505.75,207.08A21.33,21.33,0,0,0,510.37,183.83Z' />
                            </svg>
                        </SvgIcon>
                    }
                />
                {label && labelPlacement === 'right' && <Box sx={{ ml: 0.5 }}>{label}</Box>}
            </Box>
        </Fragment>
    );
};

CustomRating.defaultProps = {
    labelPlacement: 'right',
};

export default CustomRating;
