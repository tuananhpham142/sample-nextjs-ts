import { Popper } from '@mui/material';
import { Fragment, FunctionComponent } from 'react';

interface ActionMenuProps {
    className?: string;
    handleClose: () => void;
    anchorEl: any;
    open: boolean;
}
const ActionMenu: FunctionComponent<ActionMenuProps> = (props: ActionMenuProps) => {
    const { className, anchorEl, open, handleClose } = props;

    return (
        <Fragment>
            <Popper open={open} anchorEl={anchorEl} placement='bottom-end' onBlur={handleClose}>
                <div
                    className={
                        'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px show mt-2'
                    }
                >
                    <div className='separator my-2'></div>

                    <div className='menu-item px-5'>
                        <a href='../../demo4/dist/account/overview.html' className='menu-link px-5'>
                            My Profile
                        </a>
                    </div>

                    <div className='menu-item px-5'>
                        <a href='../../demo4/dist/pages/projects/list.html' className='menu-link px-5'>
                            <span className='menu-text'>My Projects</span>
                            <span className='menu-badge'>
                                <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>3</span>
                            </span>
                        </a>
                    </div>

                    <div className='menu-item px-5'>
                        <a href='../../demo4/dist/account/statements.html' className='menu-link px-5'>
                            My Statements
                        </a>
                    </div>

                    <div className='separator my-2'></div>

                    <div className='menu-item px-5 my-1'>
                        <a href='../../demo4/dist/account/settings.html' className='menu-link px-5'>
                            Account Settings
                        </a>
                    </div>

                    <div className='menu-item px-5'>
                        <a href='../../demo4/dist/authentication/flows/basic/sign-in.html' className='menu-link px-5'>
                            Sign Out
                        </a>
                    </div>
                </div>
            </Popper>
        </Fragment>
    );
};

export default ActionMenu;
