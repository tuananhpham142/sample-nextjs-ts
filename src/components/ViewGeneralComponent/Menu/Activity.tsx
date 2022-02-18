import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import { FunctionComponent } from 'react';

const useStyles = makeStyles<Theme, ActivityMenuProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface ActivityMenuProps {
    className?: string;
}
const ActivityMenu: FunctionComponent<ActivityMenuProps> = (props: ActivityMenuProps) => {
    const { className } = props;
    const classes = useStyles(props);

    return (
        <div className={clsx('tab-pane show pl-3 pr-3', className)}>
            <h5 className='fw-bold mb-5'>Hoạt động của bạn</h5>
            <div className='d-flex justify-content-center'>
                <i className='flaticon-interface-3 icon-5x text-light-primary'></i>
            </div>
        </div>
    );
};

export default ActivityMenu;
