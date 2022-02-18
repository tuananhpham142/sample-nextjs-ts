import { ButtonSize, CheckboxVariant, Color } from '@/models/interfaces/theme';
import { THEME_COLOR_DANGER } from '@/styles/colorPalette';
import { SIZE_TEXT_CAPTION } from '@/styles/global';
import { FormHelperText, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';

const useStyles = makeStyles<Theme, CustomSectionProps>((theme: Theme) => ({
    sectionTitleMargin: {
        marginBottom: theme.spacing(1),
    },
    inputTitle: {
        marginBottom: theme.spacing(1),
    },
    helperText: {
        color: THEME_COLOR_DANGER,
        marginTop: theme.spacing(1 / 2),
        fontSize: SIZE_TEXT_CAPTION,
    },
    sectionWrapper: {
        padding: props => props.padding || "60px 0",
        margin: props => props.margin || "0 0 30px 0",
    }
}));

interface CustomSectionProps {
    className?: string;
    children?: ReactNode;
    noTopPadding?: boolean;
    noShadow?: boolean;
    padding?: string;
    margin?: string;
}

const CustomSection: FunctionComponent<CustomSectionProps> = (props: CustomSectionProps) => {
    const { className, children, noTopPadding, noShadow } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            <section
                className={clsx(
                    '',
                    {
                        // ['pt-10 pt-lg-15 ']: !noTopPadding,
                        // ['pb-10 pb-lg-15 mb-13']: !className,
                        ['shadow-small']: !noShadow,
                    },
                    classes.sectionWrapper,
                    className,
                )}
            >
                {children}
            </section>
        </Fragment>
    );
};

CustomSection.defaultProps = {};
export default CustomSection;
