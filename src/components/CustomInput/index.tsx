import {
    COLOR_INPUT_ERROR,
    TEXT_BLUR_COLOR,
    TEXT_SECONDARY_COLOR,
    THEME_COLOR_DANGER,
    THEME_COLOR_SUCCESS,
} from '@/styles/colorPalette';
import { SIZE_TEXT_CAPTION } from '@/styles/global';
import Skeleton from '@mui/lab/Skeleton';
import { FormHelperText, InputBase, InputBaseProps, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';

const useStyles = makeStyles<Theme, CustomInputProps>((theme: Theme) => ({
    hasError: {
        border: `1px solid ${COLOR_INPUT_ERROR} !important`,
        background: `${COLOR_INPUT_ERROR} !important`,
    },
    success: {
        border: `1px solid ${THEME_COLOR_SUCCESS} !important`,
    },
    helperText: {
        color: THEME_COLOR_DANGER,
        marginTop: theme.spacing(1 / 2),
        fontSize: SIZE_TEXT_CAPTION,
    },
    sectionTitleMargin: {
        marginBottom: theme.spacing(1),
    },
    inputTitle: {
        marginBottom: theme.spacing(1),
    },
    disabled: {
        borderColor: `${TEXT_BLUR_COLOR} !important`,
        color: `${TEXT_BLUR_COLOR} !important`,
        '&:hover': {
            borderColor: `${TEXT_BLUR_COLOR} !important`,
        },
        fontStyle: 'italic !important',
        cursor: 'not-allowed !important',
    },
    circle: {
        borderRadius: '360px !important',
    },
    inputSubtitle: {},
}));

interface CustomInputProps extends InputBaseProps {
    className?: string;
    name: string;
    id: string;
    placeholder?: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    errors?: FieldErrors;
    // inputRef: React.Ref<any>;
    control: Control<any>;
    isLoading?: boolean;
    autoFocus?: boolean;
    disabled?: boolean;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    rows?: number;
    multiline?: boolean;
    shouldValidate?: boolean;
    circle?: boolean;
}

const CustomInput: FunctionComponent<CustomInputProps> = (props: CustomInputProps) => {
    const {
        name,
        id,
        placeholder,
        className,
        inputTitle,
        inputSubtitle,
        errors,
        control,
        isLoading,
        autoFocus,
        rules,
        disabled,
        rows,
        multiline,
        shouldValidate,
        circle,
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
                control={control}
                name={name}
                rules={rules}
                render={({ field }) => {
                    if (isLoading) {
                        return (
                            <Skeleton
                                width={'100%'}
                                style={{
                                    flex: 1,
                                    fontSize: 15,
                                    color: TEXT_SECONDARY_COLOR,
                                    width: '100%',
                                    height: 58,
                                    borderRadius: 8,
                                }}
                            />
                        );
                    } else {
                        return (
                            <InputBase
                                {...{
                                    type: props.type,
                                    ...field,
                                }}
                                startAdornment={props.startAdornment}
                                endAdornment={props.endAdornment}
                                classes={{
                                    disabled: classes.disabled,
                                }}
                                className={clsx({
                                    [`${className}`]: true,
                                    [classes.hasError]: get(errors, name) && !disabled && shouldValidate,
                                    [classes.success]:
                                        !Boolean(get(errors, name)) &&
                                        !disabled &&
                                        control._formValues[name] !== '' &&
                                        shouldValidate,
                                    [classes.circle]: circle,
                                })}
                                rows={rows}
                                multiline={multiline}
                                fullWidth
                                error={get(errors, name)}
                                placeholder={placeholder}
                                id={id}
                                autoFocus={autoFocus}
                            />
                        );
                    }
                }}
            />
            {get(errors, name) && (
                <FormHelperText id='my-helper-text' className={classes.helperText}>
                    {get(errors, name).message}
                </FormHelperText>
            )}
        </Fragment>
    );
};

export default CustomInput;
