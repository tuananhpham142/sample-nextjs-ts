import { ComponentStatusVariant } from '@/models/interfaces/theme';
import { Alert, Slide, SlideProps, Snackbar } from '@mui/material';
import { FunctionComponent, SyntheticEvent, useState } from 'react';

interface CustomSnackbarProps {
    open: boolean;
    onClose?: (open: boolean) => void;
    status: ComponentStatusVariant;
    message: string;
    duration?: number;
}

const TransitionRight = (props: SlideProps) => {
    return <Slide {...props} direction='left' />;
};

const CustomSnackbar: FunctionComponent<CustomSnackbarProps> = (props: CustomSnackbarProps) => {
    const { open, onClose, status, message, duration } = props;
    const [isOpen, setIsOpen] = useState<boolean>(open);

    const handleClose = (event: Event | SyntheticEvent<any, Event>, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        if (onClose) {
            onClose(false);
        }
        setIsOpen(false);
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isOpen}
            TransitionComponent={TransitionRight}
            autoHideDuration={duration ? duration : 3000}
            onClose={(event: Event | SyntheticEvent<any, Event>) => handleClose(event)}
        >
            <Alert
                icon={false}
                // iconMapping={{
                //   success: <img src={'/svg/alert_success.svg'} style={{ height: 20, width: 20 }} />,
                //   warning: <img src={'/svg/alert_warning.svg'} style={{ height: 20, width: 20 }} />,
                //   error: <img src={'/svg/alert_danger.svg'} style={{ height: 20, width: 20 }} />,
                //   info: null
                // }}
                onClose={handleClose}
                severity={status}
                variant={'filled'}
            >
                {message}
            </Alert>
        </Snackbar>
    );
};

export default CustomSnackbar;
