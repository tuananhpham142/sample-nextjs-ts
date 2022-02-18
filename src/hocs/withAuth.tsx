import { paths } from '@/routes/routeConfig';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const withAuth = (WrappedComponent: any) => (props: any) => {
    // const isLogin = getAuthCookie();
    const isLogin = false;
    const router = useRouter();

    useEffect(() => {
        if (!isLogin) router.push(paths.Signin);
    }, [isLogin]);

    return <WrappedComponent {...props} />;
};
export default withAuth;
