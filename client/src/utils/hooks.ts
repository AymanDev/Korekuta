import React from 'react';

/*
 * Just simple hook for all window events
 * @param event - Event name such as mousemove and etc.
 * @param callback - Sooo... this is just callback with event passed inside function
 */
export const useWindowEvent = (event: string, callback: (e: Event) => void) => {
    React.useEffect(() => {
        window.addEventListener(event, callback, true);
        return () => window.removeEventListener(event, callback, true);
    }, [event, callback]);
};

export interface UseOutsideClick<T extends HTMLElement> {
    ref: React.MutableRefObject<T>;
}
export const useOutsideClick = <T extends HTMLElement>(callback: () => void): UseOutsideClick<T> => {
    const ref = React.useRef<T>();

    const handleClickOutside = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as Node)) {
            callback();
        }
    };
    useWindowEvent('click', handleClickOutside);
    return { ref };
};

export const useModal = <T extends HTMLElement>(initialState = false) => {
    const [open, setOpen] = React.useState(initialState);

    const handleClickOutside = () => {
        setOpen(false);
    };

    const { ref } = useOutsideClick<T>(handleClickOutside);
    return { open, setOpen, ref };
};
