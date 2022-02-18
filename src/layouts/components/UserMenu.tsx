import USFlag from '@/_metronic/media/flags/united-states.svg';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Popper from '@mui/material/Popper';
import Typography from '@mui/material/Typography';
import { Fragment, FunctionComponent, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';
interface UserMenuProps {
    avatar: string;
}
const UserMenu: FunctionComponent<UserMenuProps> = (props: UserMenuProps) => {
    const { avatar } = props;
    const [open, setOpen] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<any>(null);

    const handleOpenUserMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        setOpen((previousOpen) => !previousOpen);
        setAnchorEl(anchorEl ? null : e.currentTarget);
    };
    const handleCloseUserMenu = () => {
        setOpen(false);
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <OutsideClickHandler onOutsideClick={handleCloseUserMenu}>
                <div
                    className='cursor-pointer show menu-dropdown d-flex align-items-center justify-content-between w-100'
                    onClick={(e) => handleOpenUserMenu(e)}
                >
                    <div className='d-flex align-items-center symbol symbol-30px symbol-md-40px rounded-circle'>
                        <img src={avatar} alt='metronic' className='rounded-circle me-2' />
                        <Typography className='me-3 font-weight-bold' sx={{ color: 'inherit' }}>
                            Nguyen Lien
                        </Typography>
                    </div>
                    <KeyboardArrowDownIcon />

                    {open && anchorEl !== null && (
                        <Popper open={open} anchorEl={anchorEl} placement='bottom-end'>
                            <div
                                className={
                                    'menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px show mt-2'
                                }
                            >
                                <div className='menu-item px-3'>
                                    <div className='menu-content d-flex align-items-center px-3'>
                                        <div className='symbol symbol-50pxpx me-5'>
                                            <img alt='Logo' src={avatar} />
                                        </div>

                                        <div className='d-flex flex-column'>
                                            <div className='fw-bolder d-flex align-items-center fs-5'>
                                                Max Smith
                                                <span className='badge badge-light-success fw-bolder fs-8 px-2 py-1 ms-2'>
                                                    Pro
                                                </span>
                                            </div>
                                            <a href='/' className='fw-bold text-muted text-hover-primary fs-7'>
                                                max@kt.com
                                            </a>
                                        </div>
                                    </div>
                                </div>

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
                                            <span className='badge badge-light-danger badge-circle fw-bolder fs-7'>
                                                3
                                            </span>
                                        </span>
                                    </a>
                                </div>

                                <div className='menu-item px-5'>
                                    <a href='../../demo4/dist/account/statements.html' className='menu-link px-5'>
                                        My Statements
                                    </a>
                                </div>

                                <div className='separator my-2'></div>

                                <div
                                    className='menu-item px-5'
                                    data-kt-menu-trigger='hover'
                                    data-kt-menu-placement='left-start'
                                    data-kt-menu-flip='bottom'
                                >
                                    <a href='/' className='menu-link px-5'>
                                        <span className='menu-title position-relative'>
                                            Language
                                            <span className='fs-8 rounded bg-light px-3 py-2 position-absolute translate-middle-y top-50 end-0'>
                                                English
                                                <img
                                                    className='w-15px h-15px rounded-1 ms-2'
                                                    src={USFlag}
                                                    alt='metronic'
                                                />
                                            </span>
                                        </span>
                                    </a>

                                    <div className='menu-sub menu-sub-dropdown w-175px py-4'>
                                        <div className='menu-item px-3'>
                                            <a
                                                href='../../demo4/dist/account/settings.html'
                                                className='menu-link d-flex px-5 active'
                                            >
                                                <span className='symbol symbol-20px me-4'>
                                                    <img className='rounded-1' src={USFlag} alt='metronic' />
                                                </span>
                                                English
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* <Languages /> */}

                                <div className='menu-item px-5 my-1'>
                                    <a href='../../demo4/dist/account/settings.html' className='menu-link px-5'>
                                        Account Settings
                                    </a>
                                </div>

                                <div className='menu-item px-5'>
                                    <a
                                        href='../../demo4/dist/authentication/flows/basic/sign-in.html'
                                        className='menu-link px-5'
                                    >
                                        Sign Out
                                    </a>
                                </div>
                            </div>
                        </Popper>
                    )}
                </div>
            </OutsideClickHandler>
        </Fragment>
    );
};

export default UserMenu;
