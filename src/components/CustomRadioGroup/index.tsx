import { COLOR_INPUT_ERROR, THEME_COLOR_DANGER, THEME_COLOR_SUCCESS } from '@/styles/colorPalette';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { BaseRadioItem, RadioColor } from './RadioItemInterface';

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

interface CustomRadioGroupProps {
    className?: string;
    options: Array<BaseRadioItem>;
    name: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    large?: boolean;
    color: RadioColor;
}

const CustomRadioGroup: FunctionComponent<CustomRadioGroupProps> = (props: CustomRadioGroupProps) => {
    const { name, inputTitle, inputSubtitle, control, rules, disabled, large, color, options } = props;
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
                        {options.map((radio: BaseRadioItem, index: number) => (
                            <div
                                key={index}
                                className={`form-check form-check-${color} form-check-custom form-check-solid ${
                                    large ? 'form-check-lg' : 'form-check-sm'
                                }`}
                            >
                                <input
                                    className='form-check-input'
                                    disabled={radio.disabled}
                                    type='radio'
                                    {...field}
                                    // @ts-ignore
                                    value={radio.value}
                                />
                                <label className='form-check-label'>{radio.title}</label>
                            </div>
                            // <label
                            //     key={index}
                            //     className={`radio radio-${variant} ${large ? 'radio-lg' : ''} ${
                            //         color ? `radio-${color}` : ''
                            //     }`}
                            // >
                            //     {/* @ts-ignore */}
                            //     <input disabled={radio.disabled} type='radio' {...field} />
                            //     <span></span>
                            //     {radio.title}
                            // </label>
                        ))}
                    </>
                )}
            />
        </Fragment>
    );
};

CustomRadioGroup.defaultProps = {
    large: false,
    color: 'primary',
};
export default CustomRadioGroup;
