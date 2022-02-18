import { COLOR_INPUT_ERROR, THEME_COLOR_DANGER, THEME_COLOR_SUCCESS } from '@/styles/colorPalette';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

const useStyles = makeStyles<Theme, CustomRadioGroupProps>((theme: Theme) => ({
    hasError: {
        border: `1px solid ${COLOR_INPUT_ERROR} !important`,
        background: `${COLOR_INPUT_ERROR} !important`,
    },
    success: {
        border: `1px solid ${THEME_COLOR_SUCCESS} !important`,
    },
    helperText: {
        color: THEME_COLOR_DANGER,
        marginTop: theme.spacing(1),
    },
    sectionTitleMargin: {
        marginBottom: theme.spacing(1),
    },
    inputTitle: {
        marginBottom: theme.spacing(1),
    },
    checked: {
        color: THEME_COLOR_SUCCESS,
    },
    unChecked: {
        color: THEME_COLOR_DANGER,
    },
    inputSubtitle: {},
}));

interface RadioItem {
    value: boolean | string;
    title: string;
    disabled: boolean;
}

interface CustomRadioGroupProps {
    className?: string;
    options: Array<RadioItem>;
    name: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    variant: 'rounded' | 'outlined' | 'square';
    large?: boolean;
    color: 'default' | 'danger' | 'primary' | 'success' | 'warning' | 'info';
}

const CustomRadioGroup: FunctionComponent<CustomRadioGroupProps> = (props: CustomRadioGroupProps) => {
    const { name, inputTitle, inputSubtitle, control, rules, disabled, variant, large, color, options } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            {inputTitle && (
                <div className={classes.sectionTitleMargin}>
                    <Typography
                        variant='h6'
                        className={clsx({
                            [classes.titleMargin]: Boolean(inputSubtitle),
                            'text-muted': disabled,
                        })}
                    >
                        {inputTitle}
                    </Typography>
                    <Typography
                        variant='caption'
                        className={clsx({
                            'text-muted': disabled,
                        })}
                    >
                        {inputSubtitle}
                    </Typography>
                </div>
            )}

            <Controller
                name={name}
                control={control}
                defaultValue={false}
                rules={rules}
                render={({ field }) => (
                    <>
                        {options.map((radio: RadioItem, index: number) => (
                            <label
                                key={index}
                                className={`radio radio-${variant} ${large ? 'radio-lg' : ''} ${
                                    color ? `radio-${color}` : ''
                                }`}
                            >
                                {/* @ts-ignore */}
                                <input disabled={radio.disabled} type='radio' {...field} />
                                <span></span>
                                {radio.title}
                            </label>
                        ))}
                    </>
                )}
            />
        </Fragment>
    );
};

CustomRadioGroup.defaultProps = {
    variant: 'rounded',
    large: false,
    color: 'primary',
};
export default CustomRadioGroup;
