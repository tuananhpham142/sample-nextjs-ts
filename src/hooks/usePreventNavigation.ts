import { preventNavigation } from '@/utils/url.utils';
import { useEffect } from 'react';

// Shows browser's native confirm dialog
// if the checker function returns `true`
const usePreventNavigation = (checkerFn: () => boolean) => {
    useEffect(() => {
        const preventUnload = (event: Event) => {
            if (checkerFn()) return preventNavigation(event);
        };

        window.addEventListener('beforeunload', preventUnload);

        return () => {
            window.removeEventListener('beforeunload', preventUnload);
        };
    }, [checkerFn]);
};

export default usePreventNavigation;
