import { ComponentBackgroundVariant, IconSize } from '@/models/interfaces/theme';
import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent } from 'react';
const useStyles = makeStyles<Theme, OverlaySymbolProps<any>>((theme: Theme) => ({
    backgroundImage: {
        backgroundSize: 'cover',
        backgroundImage: (props) => `url("${props.image}")`,
    },
    borderRadius: {
        borderRadius: (props) => {
            if (props?.variant === 'round') {
                return `12px !important`;
            }
            return `0px !important`;
        },
    },
}));

type BackgroundOverlayType = ComponentBackgroundVariant;

interface OverlaySymbolProps<T> {
    className?: string;
    image?: string;
    variant?: 'round' | 'square' | 'circle';
    title?: string;
    opacity?: 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100;
    color: BackgroundOverlayType;
    icon?: string;
    tooltipTitle?: string;
    size?: IconSize;
    hasTooltip?: boolean;
    symbolSize?: 20 | 25 | 30 | 35 | 40 | 45 | 50 | 55 | 60 | 65 | 70 | 75 | 100 | 125 | 150 | 160 | 175 | 200;
    onClick?: (data?: T) => void;
}

const OverlaySymbolComponent: FunctionComponent<OverlaySymbolProps<any>> = (props: OverlaySymbolProps<any>) => {
    const { image, title, variant, color, icon, opacity, size, symbolSize, className, onClick } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            <div
                className={clsx(`symbol symbol-${symbolSize}px`, {
                    // [classes.borderRadius]: variant !== 'circle',
                    ['symbol-circle']: variant === 'circle',
                    [classes.backgroundImage]: image && !icon,
                    [`${className}`]: true,
                })}
                onClick={onClick}
            >
                <div
                    className={clsx('symbol-label fs-4 text-white', {
                        // [classes.borderRadius]: variant !== 'circle',
                        [`bg-${color} bg-hover-${
                            color?.split('-').includes('light') ? color?.replace('light-', '') : color
                        }`]: true,
                        [`bg-opacity-${opacity}`]: opacity,
                        ['text-hover-white']: true,
                    })}
                >
                    {icon ? (
                        <i
                            className={clsx({
                                [icon]: true,
                                [`text-${color?.split('-').includes('light') ? color?.replace('light-', '') : color}`]:
                                    true,
                                [`fs-${size}`]: true,
                                [`text-hover-white`]: true,
                            })}
                        ></i>
                    ) : (
                        title
                    )}
                </div>
            </div>
        </Fragment>
    );
};

const OverlaySymbol: FunctionComponent<OverlaySymbolProps<any>> = (props: OverlaySymbolProps<any>) => {
    const { tooltipTitle, hasTooltip, onClick } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            {hasTooltip ? (
                <div data-for='motorhome__tooltip' data-tip={tooltipTitle}>
                    <OverlaySymbolComponent {...props} />
                </div>
            ) : (
                <OverlaySymbolComponent {...props} />
            )}
        </Fragment>
    );
};

OverlaySymbol.defaultProps = {
    symbolSize: 50,
};

export default OverlaySymbol;
