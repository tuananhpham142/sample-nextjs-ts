import MobileMenuIcon from '@/assets/svg/mobile-menu.svg';
import { Button, Typography } from '@mui/material';
import clsx from 'clsx';
import { FunctionComponent, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

interface MobileMenuProps {}

// const useStyles = makeStyles<Theme, MobileMenuProps>((theme: Theme) => ({}));

const MobileMenu: FunctionComponent<MobileMenuProps> = (props: MobileMenuProps) => {
    // const classes = useStyles(props);

    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    const handleCloseMobileMenu = () => {
        setMobileMenu(false);
    };

    return (
        <div className='topbar-item'>
            <div onClick={() => setMobileMenu(!mobileMenu)} className='btn btn-icon btn-hover-light-primary btn-lg'>
                <span className='svg-icon svg-icon-2x'>
                    <img src={MobileMenuIcon} alt='mobile-menu-icon' />
                </span>
            </div>
            {mobileMenu && (
                <div className='offcanvas-overlay'>
                    <OutsideClickHandler onOutsideClick={handleCloseMobileMenu}>
                        <div
                            className={clsx({
                                ['offcanvas offcanvas-right p-10']: true,
                                ['offcanvas-on']: mobileMenu,
                            })}
                        >
                            <div>
                                {/*begin::Header*/}
                                <div className='offcanvas-header offcanvas-header-navs d-flex align-items-center justify-content-between mb-5'>
                                    <h3 className='fw-bold m-0'>
                                        User Profile
                                        <small className='text-muted fs-7 ms-2'>12 messages</small>
                                    </h3>
                                    <Typography
                                        onClick={handleCloseMobileMenu}
                                        className='btn btn-xs btn-icon btn-light btn-hover-primary'
                                    >
                                        <i className='ki ki-close icon-xs text-muted'></i>
                                    </Typography>
                                </div>
                                {/*end::Header*/}
                                <div className='offcanvas-content pr-5 me-n5 scroll ps ps--active-y'>
                                    <div className='d-flex align-items-center mt-5'>
                                        <div className='symbol symbol-100 me-5'>
                                            <div
                                                className='symbol-label'
                                                style={{
                                                    backgroundImage: `url("/media/users/300_21.jpg")`,
                                                }}
                                            ></div>
                                            <i className='symbol-badge bg-success'></i>
                                        </div>
                                        <div className='d-flex flex-column'>
                                            <a href='#' className='fw-bold fs-5 text-gray-800 text-hover-primary'>
                                                John Doe
                                            </a>
                                            <div className='text-muted mt-1'>Application Developer</div>
                                            <div className='navi mt-2'>
                                                <a className='navi-item'>
                                                    <span className='navi-link p-0 pb-2'>
                                                        <span className='navi-icon me-1'>
                                                            <span className='svg-icon svg-icon-lg svg-icon-primary'>
                                                                <svg
                                                                    width='24px'
                                                                    height='24px'
                                                                    viewBox='0 0 24 24'
                                                                    version='1.1'
                                                                >
                                                                    <g
                                                                        stroke='none'
                                                                        stroke-width='1'
                                                                        fill='none'
                                                                        fillRule='evenodd'
                                                                    >
                                                                        <rect x='0' y='0' width='24' height='24'></rect>
                                                                        <path
                                                                            d='M21,12.0829584 C20.6747915,12.0283988 20.3407122,12 20,12 C16.6862915,12 14,14.6862915 14,18 C14,18.3407122 14.0283988,18.6747915 14.0829584,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,8 C3,6.8954305 3.8954305,6 5,6 L19,6 C20.1045695,6 21,6.8954305 21,8 L21,12.0829584 Z M18.1444251,7.83964668 L12,11.1481833 L5.85557487,7.83964668 C5.4908718,7.6432681 5.03602525,7.77972206 4.83964668,8.14442513 C4.6432681,8.5091282 4.77972206,8.96397475 5.14442513,9.16035332 L11.6444251,12.6603533 C11.8664074,12.7798822 12.1335926,12.7798822 12.3555749,12.6603533 L18.8555749,9.16035332 C19.2202779,8.96397475 19.3567319,8.5091282 19.1603533,8.14442513 C18.9639747,7.77972206 18.5091282,7.6432681 18.1444251,7.83964668 Z'
                                                                            fill='#000000'
                                                                        ></path>
                                                                        <circle
                                                                            fill='#000000'
                                                                            opacity='0.3'
                                                                            cx='19.5'
                                                                            cy='17.5'
                                                                            r='2.5'
                                                                        ></circle>
                                                                    </g>
                                                                </svg>
                                                            </span>
                                                        </span>
                                                        <a
                                                            href='mailto:tuananhpham1402@gmail.com'
                                                            className='navi-text text-muted text-hover-primary'
                                                        >
                                                            tuananhpham1402@gmail.com
                                                        </a>
                                                    </span>
                                                </a>
                                                <Button className='btn btn-sm btn-light-primary fw-bolder py-2 px-5'>
                                                    Sign Out
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='separator separator-dashed mt-8 mb-5'></div>
                                    <div className='navi navi-spacer-x-0 p-0'>
                                        <a href='/' className='navi-item'>
                                            <div className='navi-link'>
                                                <div className='symbol symbol-40 bg-light me-3'>
                                                    <div className='symbol-label'>
                                                        <span className='svg-icon svg-icon-md svg-icon-success'>
                                                            <svg
                                                                width='24px'
                                                                height='24px'
                                                                viewBox='0 0 24 24'
                                                                version='1.1'
                                                            >
                                                                <g
                                                                    stroke='none'
                                                                    stroke-width='1'
                                                                    fill='none'
                                                                    fillRule='evenodd'
                                                                >
                                                                    <rect x='0' y='0' width='24' height='24'></rect>
                                                                    <path
                                                                        d='M13.2070325,4 C13.0721672,4.47683179 13,4.97998812 13,5.5 C13,8.53756612 15.4624339,11 18.5,11 C19.0200119,11 19.5231682,10.9278328 20,10.7929675 L20,17 C20,18.6568542 18.6568542,20 17,20 L7,20 C5.34314575,20 4,18.6568542 4,17 L4,7 C4,5.34314575 5.34314575,4 7,4 L13.2070325,4 Z'
                                                                        fill='#000000'
                                                                    ></path>
                                                                    <circle
                                                                        fill='#000000'
                                                                        opacity='0.3'
                                                                        cx='18.5'
                                                                        cy='5.5'
                                                                        r='2.5'
                                                                    ></circle>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='navi-text'>
                                                    <div className='fw-bold'>My Profile</div>
                                                    <div className='text-muted'>
                                                        Account settings and more
                                                        <span className='label label-light-danger label-inline fw-bold'>
                                                            update
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='/' className='navi-item'>
                                            <div className='navi-link'>
                                                <div className='symbol symbol-40 bg-light me-3'>
                                                    <div className='symbol-label'>
                                                        <span className='svg-icon svg-icon-md svg-icon-warning'>
                                                            <svg
                                                                width='24px'
                                                                height='24px'
                                                                viewBox='0 0 24 24'
                                                                version='1.1'
                                                            >
                                                                <g
                                                                    stroke='none'
                                                                    stroke-width='1'
                                                                    fill='none'
                                                                    fillRule='evenodd'
                                                                >
                                                                    <rect x='0' y='0' width='24' height='24'></rect>
                                                                    <rect
                                                                        fill='#000000'
                                                                        opacity='0.3'
                                                                        x='12'
                                                                        y='4'
                                                                        width='3'
                                                                        height='13'
                                                                        rx='1.5'
                                                                    ></rect>
                                                                    <rect
                                                                        fill='#000000'
                                                                        opacity='0.3'
                                                                        x='7'
                                                                        y='9'
                                                                        width='3'
                                                                        height='8'
                                                                        rx='1.5'
                                                                    ></rect>
                                                                    <path
                                                                        d='M5,19 L20,19 C20.5522847,19 21,19.4477153 21,20 C21,20.5522847 20.5522847,21 20,21 L4,21 C3.44771525,21 3,20.5522847 3,20 L3,4 C3,3.44771525 3.44771525,3 4,3 C4.55228475,3 5,3.44771525 5,4 L5,19 Z'
                                                                        fill='#000000'
                                                                        fillRule='nonzero'
                                                                    ></path>
                                                                    <rect
                                                                        fill='#000000'
                                                                        opacity='0.3'
                                                                        x='17'
                                                                        y='11'
                                                                        width='3'
                                                                        height='6'
                                                                        rx='1.5'
                                                                    ></rect>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='navi-text'>
                                                    <div className='fw-bold'>My Page</div>
                                                    <div className='text-muted'>Page managements</div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='/' className='navi-item'>
                                            <div className='navi-link'>
                                                <div className='symbol symbol-40 bg-light me-3'>
                                                    <div className='symbol-label'>
                                                        <span className='svg-icon svg-icon-md svg-icon-danger'>
                                                            <svg
                                                                width='24px'
                                                                height='24px'
                                                                viewBox='0 0 24 24'
                                                                version='1.1'
                                                            >
                                                                <g
                                                                    stroke='none'
                                                                    stroke-width='1'
                                                                    fill='none'
                                                                    fillRule='evenodd'
                                                                >
                                                                    <polygon points='0 0 24 0 24 24 0 24'></polygon>
                                                                    <path
                                                                        d='M4.85714286,1 L11.7364114,1 C12.0910962,1 12.4343066,1.12568431 12.7051108,1.35473959 L17.4686994,5.3839416 C17.8056532,5.66894833 18,6.08787823 18,6.52920201 L18,19.0833333 C18,20.8738751 17.9795521,21 16.1428571,21 L4.85714286,21 C3.02044787,21 3,20.8738751 3,19.0833333 L3,2.91666667 C3,1.12612489 3.02044787,1 4.85714286,1 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z'
                                                                        fill='#000000'
                                                                        fillRule='nonzero'
                                                                        opacity='0.3'
                                                                    ></path>
                                                                    <path
                                                                        d='M6.85714286,3 L14.7364114,3 C15.0910962,3 15.4343066,3.12568431 15.7051108,3.35473959 L20.4686994,7.3839416 C20.8056532,7.66894833 21,8.08787823 21,8.52920201 L21,21.0833333 C21,22.8738751 20.9795521,23 19.1428571,23 L6.85714286,23 C5.02044787,23 5,22.8738751 5,21.0833333 L5,4.91666667 C5,3.12612489 5.02044787,3 6.85714286,3 Z M8,12 C7.44771525,12 7,12.4477153 7,13 C7,13.5522847 7.44771525,14 8,14 L15,14 C15.5522847,14 16,13.5522847 16,13 C16,12.4477153 15.5522847,12 15,12 L8,12 Z M8,16 C7.44771525,16 7,16.4477153 7,17 C7,17.5522847 7.44771525,18 8,18 L11,18 C11.5522847,18 12,17.5522847 12,17 C12,16.4477153 11.5522847,16 11,16 L8,16 Z'
                                                                        fill='#000000'
                                                                        fillRule='nonzero'
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='navi-text'>
                                                    <div className='fw-bold'>My Contacts</div>
                                                    <div className='text-muted'>Contacts and Inbox</div>
                                                </div>
                                            </div>
                                        </a>

                                        <a href='/' className='navi-item'>
                                            <div className='navi-link'>
                                                <div className='symbol symbol-40 bg-light me-3'>
                                                    <div className='symbol-label'>
                                                        <span className='svg-icon svg-icon-md svg-icon-primary'>
                                                            <svg
                                                                width='24px'
                                                                height='24px'
                                                                viewBox='0 0 24 24'
                                                                version='1.1'
                                                            >
                                                                <g
                                                                    stroke='none'
                                                                    stroke-width='1'
                                                                    fill='none'
                                                                    fillRule='evenodd'
                                                                >
                                                                    <rect x='0' y='0' width='24' height='24'></rect>
                                                                    <path
                                                                        d='M6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 Z M7.5,5 C7.22385763,5 7,5.22385763 7,5.5 C7,5.77614237 7.22385763,6 7.5,6 L13.5,6 C13.7761424,6 14,5.77614237 14,5.5 C14,5.22385763 13.7761424,5 13.5,5 L7.5,5 Z M7.5,7 C7.22385763,7 7,7.22385763 7,7.5 C7,7.77614237 7.22385763,8 7.5,8 L10.5,8 C10.7761424,8 11,7.77614237 11,7.5 C11,7.22385763 10.7761424,7 10.5,7 L7.5,7 Z'
                                                                        fill='#000000'
                                                                        opacity='0.3'
                                                                    ></path>
                                                                    <path
                                                                        d='M3.79274528,6.57253826 L12,12.5 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 Z'
                                                                        fill='#000000'
                                                                    ></path>
                                                                </g>
                                                            </svg>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className='navi-text'>
                                                    <div className='fw-bold'>My Projects</div>
                                                    <div className='text-muted'>latest tasks and projects</div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OutsideClickHandler>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;
