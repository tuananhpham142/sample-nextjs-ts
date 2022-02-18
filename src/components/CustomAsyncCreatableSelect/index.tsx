import { COLOR_INPUT_ERROR, TEXT_SECONDARY_COLOR, THEME_COLOR_SUCCESS } from '@/styles/colorPalette';
import selectStyles from '@/styles/selectStyles';
import Skeleton from '@mui/lab/Skeleton';
import { FormHelperText, InputBaseProps, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
// import { makeStyles} from '@mui/styles';
import clsx from 'clsx';
import React, { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, FieldErrors, get, RegisterOptions } from 'react-hook-form';
import AsyncCreatableSelect from 'react-select/async-creatable';

const useStyles = makeStyles<Theme, CustomAsyncCreatableSelectProps>((theme: Theme) => ({
    hasError: {
        border: `1px solid ${COLOR_INPUT_ERROR} !important`,
        background: `${COLOR_INPUT_ERROR} !important`,
    },
    success: {
        border: `1px solid ${THEME_COLOR_SUCCESS} !important`,
    },
    helperText: {
        color: '#BE4040',
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

interface CustomAsyncCreatableSelectProps extends InputBaseProps {
    className?: string;
    name: string;
    placeholder?: string;
    inputValue?: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    errors: FieldErrors;
    // inputRef: React.Ref<any>;
    // defaultValue: string | number;
    control: Control<any>;
    value?: any;
    isLoading?: boolean;
    disabled?: boolean;
    isMulti?: boolean;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    onCreateOption: (data: any) => void;
    onInputChange?: any;
    onLoadOptions?: (inputValue: string, callback: (options: any) => void) => Promise<any> | void;
    loadOptions?: (inputValue: string, callback: (options: any) => void) => Promise<any> | void;
    renderOption?: (option: any) => void;
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

const CustomAsyncCreatableSelect: FunctionComponent<CustomAsyncCreatableSelectProps> = (
    props: CustomAsyncCreatableSelectProps,
) => {
    const {
        name,
        placeholder,
        inputValue,
        value,
        inputTitle,
        inputSubtitle,
        errors,
        control,
        isLoading,
        rules,
        disabled,
        isMulti,
        onCreateOption,
        onLoadOptions,
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
                            <AsyncCreatableSelect
                                cacheOptions
                                onChange={field.onChange}
                                loadOptions={onLoadOptions}
                                isSearchable
                                defaultOptions
                                value={value}
                                components={{ MultiValueLabel, SingleValue }}
                                placeholder={placeholder}
                                //@ts-ignore
                                styles={selectStyles}
                                className='basic-single'
                                classNamePrefix='select'
                                isMulti={isMulti}
                                onCreateOption={onCreateOption}
                                isDisabled={disabled}
                                isClearable={true}
                                formatOptionLabel={(option: any) => {
                                    return (
                                        <Fragment>
                                            {option?.__isNew__ ? (
                                                <Typography
                                                    variant='body1'
                                                    className='row justify-center align-item-center text-primary text-hover-primary'
                                                >
                                                    <i className='text-primary flaticon2-plus me-2'></i>
                                                    {`Create new ${option.value}`}
                                                </Typography>
                                            ) : (
                                                <>
                                                    {renderOption ? (
                                                        renderOption(option)
                                                    ) : (
                                                        <Typography variant='body1'>{option.label}</Typography>
                                                    )}
                                                </>
                                            )}
                                        </Fragment>
                                    );
                                }}
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

export default CustomAsyncCreatableSelect;
