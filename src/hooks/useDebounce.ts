import { useState, useEffect, useRef } from 'preact/compat';

function useDebounce<T>(value: T, delay: number): [T, AbortController] {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    const abortControllerRef = useRef<AbortController>(new AbortController());

    useEffect(() => {
        abortControllerRef.current = new AbortController();

        const timer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(timer);
            abortControllerRef.current.abort();
        };
    }, [value, delay]);


    return [debouncedValue, abortControllerRef.current];
}

export default useDebounce; 