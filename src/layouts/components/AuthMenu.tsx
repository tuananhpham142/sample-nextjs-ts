import { paths } from '@/routes/routeConfig';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useRouter } from 'next/router';
import { Fragment, FunctionComponent, useState } from 'react';
import OutsideClickHandler from 'react-outside-click-handler';

const useStyles = makeStyles<Theme, AuthMenuProps>((theme: Theme) => ({
    root: {
        marginTop: theme.spacing(3),
        borderRadius: '0',
        boxShadow: 'none',
    },
}));

interface AuthMenuProps {
    className?: string;
}
const AuthMenu: FunctionComponent<AuthMenuProps> = (props: AuthMenuProps) => {
    const { className } = props;
    const classes = useStyles(props);
    const router = useRouter();

    const [authOpen, setAuthOpen] = useState<boolean>(false);

    return (
        <Fragment>
            <div className={`dropdown ${authOpen ? 'show' : ''}`}>
                <div
                    className="topbar-item"
                    data-toggle="dropdown"
                    data-offset="10px,0px"
                    aria-expanded="true">
                    <div
                        onClick={() => setAuthOpen(!authOpen)}
                        className="btn btn-icon btn-hover-light-primary btn-dropdown btn-lg">
                        <i className="flaticon2-user icon-xl text-primary"></i>
                    </div>
                </div>
                {authOpen && (
                    <OutsideClickHandler onOutsideClick={() => setAuthOpen(false)}>
                        <div
                            className={`dropdown-menu p-0 m-0 dropdown-menu-left dropdown-menu-anim-up dropdown-menu-lg ${
                                authOpen ? 'show' : ''
                            }`}
                            x-placement="bottom-end"
                            style={{
                                position: 'absolute',
                                transform: 'translate3d(-292px, 79px, 0px)',
                                top: 0,
                                right: 0,
                                willChange: 'transform',
                            }}>
                            <div
                                className="d-flex flex-column flex-center py-10 bgi-size-cover bgi-no-repeat rounded-top"
                                style={{
                                    backgroundImage: `url("/media/bg/bg-9.jpg")`,
                                }}>
                                <h4 className="text-white fw-bold">Authentication</h4>
                            </div>

                            <div className="row row-paddingless">
                                <div className="col-6">
                                    <Typography
                                        onClick={() => router.push(paths.Signin)}
                                        className="d-block py-10 px-5 text-center bg-hover-light">
                                        <span className="svg-icon svg-icon-3x svg-icon-success">
                                            <svg
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1">
                                                <g
                                                    stroke="none"
                                                    stroke-width="1"
                                                    fill="none"
                                                    fillRule="evenodd">
                                                    <polygon points="0 0 24 0 24 24 0 24"></polygon>
                                                    <path
                                                        d="M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z"
                                                        fill="#000000"
                                                        fillRule="nonzero"
                                                        opacity="0.3"></path>
                                                    <path
                                                        d="M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z"
                                                        fill="#000000"
                                                        fillRule="nonzero"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="d-block text-gray-800 fw-bold fs-6 mt-2 mb-1">
                                            Sign in
                                        </span>
                                        <span className="d-block text-gray-400 font-size-lg">
                                            Start sharing
                                        </span>
                                    </Typography>
                                </div>

                                <div className="col-6">
                                    <Typography
                                        onClick={() => router.push(paths.Register)}
                                        className="d-block py-10 px-5 text-center bg-hover-light border-bottom">
                                        <span className="svg-icon svg-icon-3x svg-icon-success">
                                            <svg
                                                width="24px"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                version="1.1">
                                                <g
                                                    stroke="none"
                                                    stroke-width="1"
                                                    fill="none"
                                                    fillRule="evenodd">
                                                    <rect x="0" y="0" width="24" height="24"></rect>
                                                    <path
                                                        d="M14.8571499,13 C14.9499122,12.7223297 15,12.4263059 15,12.1190476 L15,6.88095238 C15,5.28984632 13.6568542,4 12,4 L11.7272727,4 C10.2210416,4 9,5.17258756 9,6.61904762 L10.0909091,6.61904762 C10.0909091,5.75117158 10.823534,5.04761905 11.7272727,5.04761905 L12,5.04761905 C13.0543618,5.04761905 13.9090909,5.86843034 13.9090909,6.88095238 L13.9090909,12.1190476 C13.9090909,12.4383379 13.8240964,12.7385644 13.6746497,13 L10.3253503,13 C10.1759036,12.7385644 10.0909091,12.4383379 10.0909091,12.1190476 L10.0909091,9.5 C10.0909091,9.06606198 10.4572216,8.71428571 10.9090909,8.71428571 C11.3609602,8.71428571 11.7272727,9.06606198 11.7272727,9.5 L11.7272727,11.3333333 L12.8181818,11.3333333 L12.8181818,9.5 C12.8181818,8.48747796 11.9634527,7.66666667 10.9090909,7.66666667 C9.85472911,7.66666667 9,8.48747796 9,9.5 L9,12.1190476 C9,12.4263059 9.0500878,12.7223297 9.14285008,13 L6,13 C5.44771525,13 5,12.5522847 5,12 L5,3 C5,2.44771525 5.44771525,2 6,2 L18,2 C18.5522847,2 19,2.44771525 19,3 L19,12 C19,12.5522847 18.5522847,13 18,13 L14.8571499,13 Z"
                                                        fill="#000000"
                                                        opacity="0.3"></path>
                                                    <path
                                                        d="M9,10.3333333 L9,12.1190476 C9,13.7101537 10.3431458,15 12,15 C13.6568542,15 15,13.7101537 15,12.1190476 L15,10.3333333 L20.2072547,6.57253826 C20.4311176,6.4108595 20.7436609,6.46126971 20.9053396,6.68513259 C20.9668779,6.77033951 21,6.87277228 21,6.97787787 L21,17 C21,18.1045695 20.1045695,19 19,19 L5,19 C3.8954305,19 3,18.1045695 3,17 L3,6.97787787 C3,6.70173549 3.22385763,6.47787787 3.5,6.47787787 C3.60510559,6.47787787 3.70753836,6.51099993 3.79274528,6.57253826 L9,10.3333333 Z M10.0909091,11.1212121 L12,12.5 L13.9090909,11.1212121 L13.9090909,12.1190476 C13.9090909,13.1315697 13.0543618,13.952381 12,13.952381 C10.9456382,13.952381 10.0909091,13.1315697 10.0909091,12.1190476 L10.0909091,11.1212121 Z"
                                                        fill="#000000"></path>
                                                </g>
                                            </svg>
                                        </span>
                                        <span className="d-block text-gray-800 fw-bold fs-6 mt-2 mb-1">
                                            Sign up
                                        </span>
                                        <span className="d-block text-gray-400 font-size-lg">
                                            Getting started
                                        </span>
                                    </Typography>
                                </div>
                            </div>
                        </div>
                    </OutsideClickHandler>
                )}
            </div>
        </Fragment>
    );
};

export default AuthMenu;
