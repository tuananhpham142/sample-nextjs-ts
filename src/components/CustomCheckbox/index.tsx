import { ButtonSize, CheckboxVariant, Color } from '@/models/interfaces/theme';
import { Typography } from '@mui/material';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';

interface CustomCheckboxProps<T> {
    className?: string;
    name: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    checkboxTitle: string | ReactNode;
    variant: CheckboxVariant;
    size?: ButtonSize;
    color: Color;
    errors?: FieldErrors;
    defaultValue?: boolean;
    onChange?: ({ data, selected }: { data?: T; selected: boolean }) => void;
}

const CustomCheckbox: FunctionComponent<CustomCheckboxProps<any>> = (props: CustomCheckboxProps<any>) => {
    const {
        className,
        name,
        inputTitle,
        inputSubtitle,
        defaultValue,
        control,
        rules,
        disabled,
        checkboxTitle,
        variant,
        size,
        color,
        errors,
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
                    <label
                        className={clsx(
                            `form-check form-check-custom form-check-${variant} form-check-${size} ${
                                color ? `form-check-${color}` : ''
                            }`,
                            className,
                        )}
                    >
                        <input
                            disabled={disabled}
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
                        {typeof checkboxTitle !== 'string' ? (
                            checkboxTitle
                        ) : (
                            <Typography variant='body1' className='form-check-label'>
                                {checkboxTitle}
                            </Typography>
                        )}
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

CustomCheckbox.defaultProps = {
    variant: 'solid',
    size: 'md',
    color: 'primary',
};
export default CustomCheckbox;
