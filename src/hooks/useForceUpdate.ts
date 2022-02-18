import { useCallback, useState } from 'react';

export default () => {
    const [trigger, setTrigger] = useState<boolean>(false);

    return useCallback(() => {
        setTrigger((trigger) => !trigger);
    }, []);
};
