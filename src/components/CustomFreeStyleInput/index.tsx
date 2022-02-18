import { FormHelperText, InputBase, InputBaseProps, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';
import { THEME_COLOR_DANGER } from '../../styles/colorPalette';

const useStyles = makeStyles<Theme, CustomFreeStyleInputProps>((theme: Theme) => ({
    helperText: {
        color: THEME_COLOR_DANGER,
        marginTop: 4,
    },
    circle: {
        borderRadius: '360px !important',
    },
    textCenter: {
        padding: '0 !important',
        textAlign: 'center',
    },
    autoHeight: {
        minHeight: 'auto',
    },
}));

interface CustomFreeStyleInputProps extends InputBaseProps {
    className?: string;
    name: string;
    id: string;
    placeholder?: string;
    errors?: FieldErrors;
    control: Control<any>;
    autoFocus?: boolean;
    disabled?: boolean;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    textCenter?: boolean;
    autoHeight?: boolean;
    circle?: boolean;
    maxLength?: number;
}

const CustomFreeStyleInput: FunctionComponent<CustomFreeStyleInputProps> = (props: CustomFreeStyleInputProps) => {
    const {
        name,
        id,
        placeholder,
        className,
        errors,
        control,
        autoFocus,
        rules,
        disabled,
        textCenter,
        autoHeight,
        circle,
        maxLength,
    } = props;
    const classes = useStyles(props);

    return (
        <Fragment>
            <Controller
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => (
                    <InputBase
                        {...{
                            type: props.type,
                            ...props,
                            ...field,
                        }}
                        inputProps={{ maxLength }}
                        disabled={disabled}
                        startAdornment={props.startAdornment}
                        endAdornment={props.endAdornment}
                        className={clsx({
                            'border-0': true,
                            [`${className}`]: true,
                            [classes.circle]: circle,
                        })}
                        classes={{
                            root: autoHeight ? classes.autoHeight : undefined,
                            input: textCenter ? classes.textCenter : undefined,
                        }}
                        fullWidth
                        error={get(errors, name)}
                        placeholder={placeholder}
                        id={id}
                        autoFocus={autoFocus}
                    />
                )}
            />
            {errors && get(errors, name) && (
                <FormHelperText id='my-helper-text' className={classes.helperText}>
                    {get(errors, name).message}
                </FormHelperText>
            )}
        </Fragment>
    );
};

export default CustomFreeStyleInput;
