import { onBeforeUnload } from '@/utils/schedulers.utils';
import { useEffect } from 'react';

export default function useBeforeUnload(callback: VoidFunction) {
    useEffect(() => {
        return onBeforeUnload(callback);
    }, [callback]);
}
