import { useCallback, useEffect, useRef, useState } from 'react';

const useStateCallback = <T>(initialState: T) => {
    const [state, setState] = useState<T>(initialState);
    const cbRef = useRef<(...args: any[]) => void>(); // mutable ref to store current callback

    const setStateCallback = useCallback((state, cb) => {
        cbRef.current = cb; // store passed callback to ref
        setState(state);
    }, []);

    useEffect(() => {
        // cb.current is `null` on initial render, so we only execute cb on state *updates*
        if (cbRef.current) {
            cbRef.current(state);
            cbRef.current = undefined; // reset callback after execution
        }
    }, [state]);

    return [state, setStateCallback];
};

export default useStateCallback;
