import {
    COLOR_INPUT_ERROR,
    TEXT_SECONDARY_COLOR,
    THEME_COLOR_DANGER,
    THEME_COLOR_SUCCESS,
} from '@/styles/colorPalette';
import selectStyles from '@/styles/selectStyles';
import Skeleton from '@mui/lab/Skeleton';
import { FormHelperText, InputBaseProps, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';
import Select from 'react-select';

const useStyles = makeStyles<Theme, CustomSelectProps>((theme: Theme) => ({
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
    inputSubtitle: {},
}));

interface CustomSelectProps<T = any> extends InputBaseProps {
    className?: string;
    name: string;
    placeholder?: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    errors: FieldErrors;
    // inputRef: React.Ref<any>;
    // defaultValue: string | number;
    control: Control<any>;
    isLoading?: boolean;
    onCreateOption?: () => void;
    onInputChange?: () => void;
    onLoadOptions?: () => void;
    renderOption?: (option: any) => void;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    disabled?: boolean;
    options: Array<T>;
    isMulti?: boolean;
}

const MultiValueLabel = (props: any) => {
    return (
        <Typography variant='body1' className='px-4 d-flex align-items-center text-dark'>
            {props.data.label}
        </Typography>
    );
};

const SingleValue = (props: any) => {
    return (
        <Typography variant='body1' className='px-4 d-flex align-items-center text-dark'>
            {props.data.label}
        </Typography>
    );
};

const CustomSelect: FunctionComponent<CustomSelectProps> = (props: CustomSelectProps) => {
    const {
        name,
        inputTitle,
        inputSubtitle,
        errors,
        control,
        isLoading,
        rules,
        options,
        disabled,
        isMulti,
        renderOption,
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
                            <Select
                                onChange={field.onChange}
                                //@ts-ignore
                                styles={selectStyles}
                                components={{ MultiValueLabel, SingleValue }}
                                placeholder={'Select Variation'}
                                className='basic-single'
                                classNamePrefix='select'
                                defaultValue={options[0]}
                                formatOptionLabel={(option: any) => (
                                    <>
                                        {renderOption ? (
                                            renderOption(option)
                                        ) : (
                                            <Typography variant='body1'>{option.label}</Typography>
                                        )}
                                    </>
                                )}
                                isDisabled={disabled}
                                isClearable={true}
                                isSearchable={true}
                                options={options}
                                closeMenuOnSelect={!isMulti}
                                isMulti={isMulti}
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

export default CustomSelect;
