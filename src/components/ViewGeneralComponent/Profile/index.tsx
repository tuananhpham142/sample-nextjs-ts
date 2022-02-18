import { DEFAULT_AVATAR } from '@/constants/profile';
import { CustomClasses } from '@/models/interfaces/globalInterface';
import { MyProfileResponeInterface } from '@/models/Profile/ProfileResponse';
import clsx from 'clsx';
import Image from 'next/image';
import { Fragment, FunctionComponent, ReactNode } from 'react';
import ProfileOverview from './ProfileOverview';

interface UserProfileProps extends CustomClasses {
    className?: string;
    data: MyProfileResponeInterface;
    children?: ReactNode;
}
const UserProfile: FunctionComponent<UserProfileProps> = (props: UserProfileProps) => {
    const { className, data, children, customClasses } = props;
    return (
        <Fragment>
            <div className={clsx(className, '')}>
                <div className='position-relative w-100 h-250px'>
                    <Image
                        src={data.avatar || DEFAULT_AVATAR}
                        layout='fill'
                        objectFit='cover'
                        loading='lazy'
                        className=' w-100 h-250px'
                    />
                </div>
                <div
                    className={clsx(
                        'mt-n10 mt-lg-n17 position-relative containermx-8',
                        customClasses?.content,
                    )}
                >
                    <div className='bg-white pt-4 pe-4 ps-4'>
                        <ProfileOverview data={data} />
                        {children}
                    </div>
                </div>
            </div>
        </Fragment>
    );
};
UserProfile.defaultProps = {
    customClasses: {},
};
export default UserProfile;
