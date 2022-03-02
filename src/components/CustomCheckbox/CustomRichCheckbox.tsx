import { ButtonSize, CheckboxVariant, Color } from '@/models/interfaces/theme';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';
import { RichCheckboxItem } from './CheckboxItemInterface';

interface CustomRichCheckboxProps<T> {
    className?: string;
    name: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    variant: CheckboxVariant;
    size?: ButtonSize;
    color: Color;
    icon?: string;
    circle?: boolean;
    img?: string;
    errors?: FieldErrors;
    defaultValue?: boolean;
    data: RichCheckboxItem;
    symbol?: 'icon' | 'img';
    displayAsButton?: boolean;
    onChange?: ({ data, selected }: { data?: T; selected: boolean }) => void;
}

const CustomRichCheckbox: FunctionComponent<CustomRichCheckboxProps<any>> = (props: CustomRichCheckboxProps<any>) => {
    const {
        className,
        name,
        inputTitle,
        inputSubtitle,
        defaultValue,
        control,
        rules,
        disabled,
        size,
        color,
        errors,
        variant,
        data,
        icon,
        circle,
        img,
        symbol,
        displayAsButton,
        onChange,
    } = props;

    return (
        <Fragment>
            {inputTitle && (
                <div className={`mb-2`}>
                    <Typography
                        variant='h6'
                        className={clsx({
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
                    <label className={`d-flex flex-stack mb-4 cursor-pointer`}>
                        <span className='d-flex align-items-center me-2'>
                            {(symbol || data?.icon || data?.img) && (
                                <span className={`symbol symbol-50px me-6 symbol-${circle ? 'circle' : 'rounded'}`}>
                                    <span className={`symbol-label bg-light-${data?.color || color}`}>
                                        {(symbol === 'img' || data?.img) && (
                                            <img src={data?.img || img} alt={data.title} />
                                        )}
                                        {(symbol === 'icon' || data.icon) && (
                                            <i
                                                className={clsx(`${data?.icon || icon} text-${data?.color || color}`, {
                                                    ['p-0']: displayAsButton,
                                                })}
                                            />
                                        )}
                                    </span>
                                </span>
                            )}

                            <span className='d-flex flex-column'>
                                <span className='fw-bolder fs-6'>{data?.title}</span>
                                <span className='fs-7 text-muted'>{data?.subtitle}</span>
                            </span>
                        </span>
                        <span
                            className={`form-check form-check-custom form-check-${variant} form-check-${size} form-check-${
                                data?.color || color
                            }`}
                        >
                            <input
                                disabled={data?.disabled}
                                type='checkbox'
                                className='form-check-input'
                                {...field}
                                onChange={(event: any) => {
                                    if (onChange) {
                                        onChange({ selected: event.target.checked });
                                    } else {
                                        field.onChange();
                                    }
                                }}
                                defaultChecked={defaultValue}
                            />
                        </span>
                    </label>
                )}
            />
            {get(errors, name) && (
                <span id='my-helper-text' className={'fs-8 text-danger mt-1'}>
                    {get(errors, name).message}
                </span>
            )}
        </Fragment>
    );
};

CustomRichCheckbox.defaultProps = {
    variant: 'solid',
    size: 'md',
    color: 'primary',
};
export default CustomRichCheckbox;
