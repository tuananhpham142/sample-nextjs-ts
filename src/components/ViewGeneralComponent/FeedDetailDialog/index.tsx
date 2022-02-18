import { DialogProps, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { Fragment, FunctionComponent, ReactNode, useEffect } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const useStyles = makeStyles<Theme, FeedDetailDialogProps>((theme: Theme) => ({
    dialogContentRoot: {
        padding: 0,
    },
    show: {
        display: 'block',
    },
}));

interface FeedDetailDialogProps extends DialogProps {
    open: boolean;
    children: ReactNode;
    header?: ReactNode;
    submitting?: boolean;
    onClose: () => void;
    onUnmount?: () => void;
}
const FeedDetailDialog: FunctionComponent<FeedDetailDialogProps> = (props: FeedDetailDialogProps) => {
    const { open, children, header, onClose, onUnmount } = props;
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
            {open && <div className='modal-backdrop fade show'></div>}
            <OutsideClickHandler onOutsideClick={(e) => onClose()}>
                <div
                    className={clsx('modal fade show', {
                        [classes.show]: open,
                    })}
                >
                    <div className='modal-dialog modal-fullscreen p-0'>
                        <div className='modal-content'>
                            {header && <div className='modal-header'>{header}</div>}
                            <div className='modal-body p-0'>{children}</div>
                        </div>
                    </div>
                </div>
            </OutsideClickHandler>
        </Fragment>
    );
};

FeedDetailDialog.defaultProps = {};

export default FeedDetailDialog;
