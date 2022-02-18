import { paths } from '@/routes/routeConfig';
import { Theme, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import clsx from 'clsx';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Fragment, FunctionComponent } from 'react';
import { isMobile } from 'react-device-detect';

const ListItemSlider = dynamic(() => import('@/components/ViewGeneralComponent/ListItemSlider'), {
    ssr: false,
});
interface ProfileMenuProps {
    className?: string;
    activeColor?: string;
}

const useStyles = makeStyles<Theme, ProfileMenuProps>((theme: Theme) => ({
    borderBottomColor: {
        borderBottomColor: 'inherit !important',
    },
    borderBottomColorOnHover: {
        borderBottom: '2px solid transparent',
        '&:hover': {
            borderBottomColor: 'inherit !important',
        },
    },
}));
const ProfileMenu: FunctionComponent<ProfileMenuProps> = (props: ProfileMenuProps) => {
    const classes = useStyles(props);
    const { className, activeColor } = props;
    const router = useRouter();
    const { slugname } = router.query;

    return (
        <Fragment>
            <ListItemSlider
                customClass={clsx('px-3', className)}
                spaceBetween={5}
                data={[
                    {
                        text: 'Chuyến đi',
                        link: paths.UserPlantrips,
                    },
                    {
                        text: 'Lich trinh',
                        link: paths.UserPlantrips,
                    },
                    {
                        text: 'Ảnh',
                        link: paths.UserPhotos,
                    },
                    {
                        text: 'Review',
                        link: paths.UserReviews,
                    },
                    {
                        text: 'Địa điểm',
                        link: paths.UserPlaces,
                    },
                    {
                        text: 'Đã lưu',
                        link: paths.UserSaved,
                    },
                ]}
                {...(isMobile ? { arrow: true } : { arrow: false })}
                render={(item: any) => {
                    return (
                        <div className='nav-item'>
                            <Typography
                                variant='h6'
                                className={clsx('text-active-warning me-6 hoverable p-2', {
                                    [`text-active-${activeColor}`]: true,
                                    [classes.borderBottomColorOnHover]: true,
                                    [`active ${classes.borderBottomColor}`]: item.link === router.pathname,
                                })}
                                onClick={() => {
                                    router.push({
                                        pathname: item.link,
                                        query: { slugname: slugname },
                                    });
                                }}
                            >
                                {item.text}
                            </Typography>
                        </div>
                    );
                }}
                freeMode
            />
        </Fragment>
    );
};

export default ProfileMenu;
