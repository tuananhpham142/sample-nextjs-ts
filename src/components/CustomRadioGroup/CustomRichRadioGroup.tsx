import { COLOR_INPUT_ERROR, THEME_COLOR_DANGER, THEME_COLOR_SUCCESS } from '@/styles/colorPalette';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import isEqual from 'lodash/isEqual';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';
import { RadioColor, RichRadioItem } from './RadioItemInterface';

const useStyles = makeStyles<Theme, CustomRichRadioGroupProps<any>>((theme: Theme) => ({
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

interface CustomRichRadioGroupProps<T> {
    className?: string;
    options: Array<RichRadioItem>;
    name: string;
    defaultValue?: any;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    icon?: string;
    circle?: boolean;
    img?: string;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    large?: boolean;
    symbol?: 'icon' | 'img';
    color: RadioColor;
    displayAsButton?: boolean;
}

const CustomRichRadioGroup: FunctionComponent<CustomRichRadioGroupProps<any>> = (
    props: CustomRichRadioGroupProps<any>,
) => {
    const {
        name,
        inputTitle,
        inputSubtitle,
        control,
        rules,
        disabled,
        large,
        color,
        options,
        icon,
        defaultValue,
        img,
        circle,
        symbol,
        displayAsButton,
    } = props;
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
                defaultValue={defaultValue}
                rules={rules}
                render={({ field }) => (
                    <>
                        {options.map((radio: RichRadioItem, index: number) => (
                            <label
                                className={clsx(`d-flex flex-stack mb-4 cursor-pointer`, {
                                    [`btn btn-outline btn-outline-dashed btn-outline-${
                                        radio?.color || color
                                    } btn-active-light-${radio?.color || color} text-start`]: displayAsButton,
                                    active: isEqual(defaultValue, radio.value),
                                })}
                            >
                                <span className='d-flex align-items-center me-2'>
                                    {(symbol || radio.icon || radio.img) && (
                                        <span
                                            className={`symbol symbol-50px me-6 symbol-${
                                                circle ? 'circle' : 'rounded'
                                            }`}
                                        >
                                            <span className={`symbol-label bg-light-${radio?.color || color}`}>
                                                {(symbol === 'img' || radio.img) && (
                                                    <img src={radio?.img || img} alt={radio.title} />
                                                )}
                                                {(symbol === 'icon' || radio.icon) && (
                                                    <i
                                                        className={clsx(
                                                            `${radio?.icon || icon} text-${radio?.color || color}`,
                                                            {
                                                                ['p-0']: displayAsButton,
                                                            },
                                                        )}
                                                    />
                                                )}
                                            </span>
                                        </span>
                                    )}

                                    <span className='d-flex flex-column'>
                                        <span className='fw-bolder fs-6'>{radio.title}</span>
                                        <span className='fs-7 text-muted'>{radio.subtitle}</span>
                                    </span>
                                </span>
                                <span
                                    className={`form-check form-check-custom form-check-solid form-check-${
                                        radio?.color || color
                                    }`}
                                >
                                    <input
                                        disabled={radio.disabled}
                                        className='form-check-input'
                                        type='radio'
                                        {...field}
                                        // @ts-ignore
                                        value={radio.value}
                                        defaultChecked={isEqual(defaultValue, radio.value)}
                                    />
                                </span>
                            </label>
                        ))}
                    </>
                )}
            />
        </Fragment>
    );
};

CustomRichRadioGroup.defaultProps = {
    large: false,
    color: 'primary',
};
export default CustomRichRadioGroup;
