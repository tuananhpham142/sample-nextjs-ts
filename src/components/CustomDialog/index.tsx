import { Color } from '@/models/interfaces/theme';
import { Dialog, DialogActions, DialogContent, DialogProps, Grid, Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode, useEffect } from 'react';
import CustomButton from '../CustomButton';
import CustomIconStandalone from '../CustomIconStandalone';

const useStyles = makeStyles<Theme, CustomDialogProps>((theme: Theme) => ({
    dialogContentRoot: {
        padding: 0,
    },
}));

interface CustomDialogProps extends DialogProps {
    type: Color;
    open: boolean;
    fullScreen?: boolean;
    noActions?: boolean;
    isLoading?: boolean;
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false;
    fullWidth?: boolean;
    children: ReactNode;
    dialogContentClasses?: string;
    title: string;
    submitTitle?: string;
    cancelTitle?: string;
    submitting?: boolean;
    onCancel?: () => void;
    onClose?: () => void;
    onSubmit?: (data?: any) => void;
    onUnmount?: () => void;
}
const CustomDialog: FunctionComponent<CustomDialogProps> = (props: CustomDialogProps) => {
    const {
        open,
        fullScreen,
        isLoading,
        noActions,
        submitTitle,
        cancelTitle,
        maxWidth,
        fullWidth,
        type,
        dialogContentClasses,
        submitting,
        children,
        title,
        onClose,
        onCancel,
        onSubmit,
        onUnmount,
    } = props;
    const classes = useStyles(props);

    useEffect(() => {
        return () => {
            if (onUnmount) {
                onUnmount();
            }
        };
    }, []);

    return (
        <Fragment>
            {/* Do not reorder props */}
            <Dialog
                fullScreen={fullScreen}
                fullWidth={!fullScreen && (fullWidth || true)}
                maxWidth={!fullScreen && (maxWidth || 'sm')}
                open={open}
                onClose={onClose}
            >
                <div className='modal-content'>
                    <Grid
                        container
                        className='modal-header p-6 pb-0 border-0'
                        justifyContent={'space-between'}
                        alignItems={'center'}
                    >
                        <Typography variant='h5' className='modal-title'>
                            {title}
                        </Typography>
                        {onClose && (
                            <CustomIconStandalone
                                size='1x'
                                icon='flaticon2-cross'
                                onClick={onClose}
                                color='dark'
                                className='text-hover-danger'
                            />
                        )}
                    </Grid>
                    <DialogContent
                        className={clsx('modal-body scroll-y pt-0', classes.dialogContentRoot, dialogContentClasses)}
                        style={{ boxShadow: 'none' }}
                    >
                        <div className='modal-body'>{children}</div>
                    </DialogContent>
                    {!noActions && (
                        <DialogActions className='modal-footer p-6 pt-0 border-0'>
                            {onCancel && (
                                <CustomButton
                                    id='somebutton'
                                    height={100}
                                    size='md'
                                    onClick={onCancel}
                                    circle={false}
                                    isLoading={isLoading}
                                    variant={'contained'}
                                    color={'light'}
                                    title={cancelTitle || 'Close'}
                                />
                            )}
                            {onSubmit && (
                                <CustomButton
                                    id='somebutton'
                                    height={100}
                                    size='md'
                                    onClick={onSubmit}
                                    circle={false}
                                    isLoading={isLoading}
                                    variant={'contained'}
                                    title={submitTitle || 'Save changes'}
                                    color={type}
                                />
                            )}
                        </DialogActions>
                    )}
                </div>
            </Dialog>
        </Fragment>
    );
};

CustomDialog.defaultProps = {
    type: 'primary',
    maxWidth: 'md',
    fullWidth: true,
    title: 'Example dialog',
};

export default CustomDialog;
