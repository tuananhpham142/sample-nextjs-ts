import { Color } from '@/models/interfaces/theme';
import { COLOR_INPUT_ERROR, THEME_COLOR_DANGER, THEME_COLOR_SUCCESS } from '@/styles/colorPalette';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import { Control, Controller, RegisterOptions } from 'react-hook-form';

const useStyles = makeStyles<Theme, CustomSwitchProps>((theme: Theme) => ({
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

interface CustomSwitchProps {
    className?: string;
    name: string;
    inputTitle?: string | ReactNode;
    inputSubtitle?: string | ReactNode;
    // inputRef: React.Ref<any>;
    control: Control<any>;
    rules?: Exclude<RegisterOptions, 'valueAsNumber' | 'valueAsDate' | 'setValueAs'>;
    isChecked?: boolean;
    disabled?: boolean;
    checkedTitle: string;
    unCheckedTitle: string;
    outlined?: boolean;
    size?: 'lg' | 'sm' | 'md';
    color: Color;
}

const CustomSwitch: FunctionComponent<CustomSwitchProps> = (props: CustomSwitchProps) => {
    const {
        name,
        inputTitle,
        inputSubtitle,
        control,
        rules,
        disabled,
        checkedTitle,
        unCheckedTitle,
        isChecked,
        outlined,
        size,
        color,
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
                    <span
                        className={`
                        switch switch-icon
                        ${outlined ? `switch-outline` : ''} 
                        ${size ? `switch-${size}` : ''} 
                        ${color ? `switch-${color}` : ''}
                        `}
                    >
                        <label className='d-flex align-items-center'>
                            <input disabled={disabled} type='checkbox' {...field} />
                            <span></span>
                        </label>
                        <div
                            className={clsx('ms-4', {
                                [classes.checked]: isChecked,
                                [classes.unChecked]: !isChecked,
                            })}
                        >
                            {isChecked ? checkedTitle : unCheckedTitle}
                        </div>
                    </span>
                )}
            />
        </Fragment>
    );
};

CustomSwitch.defaultProps = {
    size: 'md',
    color: 'primary',
};

export default CustomSwitch;
