import { ButtonSize, CheckboxVariant, Color } from '@/models/interfaces/theme';
import { THEME_COLOR_DANGER } from '@/styles/colorPalette';
import { SIZE_TEXT_CAPTION } from '@/styles/global';
import { FormHelperText, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';

const useStyles = makeStyles<Theme, CustomCheckboxProps>((theme: Theme) => ({
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
}));

interface CustomCheckboxProps {
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
}

const CustomCheckbox: FunctionComponent<CustomCheckboxProps> = (props: CustomCheckboxProps) => {
    const {
        className,
        name,
        inputTitle,
        inputSubtitle,
        control,
        rules,
        disabled,
        checkboxTitle,
        variant,
        size,
        color,
        errors,
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
                defaultValue={false}
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
                        <input disabled={disabled} type='checkbox' className='form-check-input' {...field} />
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
                <FormHelperText id='my-helper-text' className={classes.helperText}>
                    {get(errors, name).message}
                </FormHelperText>
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
