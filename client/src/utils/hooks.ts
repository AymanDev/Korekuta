import React from 'react';

/**
 * Hook for handling window events
 * @param event Name of the event to listen
 * @param callback Callback function for handling events
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

/**
 * Use this hook for handling clicks outside certain elements
 *
 * ?? There also might be a problem because this works on useEffect hook
 * ?? which may cause issues when component is unmounted and mounted after quickly
 *
 * @param callback Callback for handling when click is proceed outside element
 * @returns {UseOutsideClick} Object with ref which you have to pass in some HTMLElement for this hook work
 */
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

export interface UseModal<T extends HTMLElement> {
    ref: React.MutableRefObject<T>;
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
/**
 * Quick realization of 3 values always required for modals
 *
 * @param initialState Optional value for default visibility state
 * @returns {UseModal} Object with 3 values for operating with modals
 */
export const useModal = <T extends HTMLElement>(initialState = false): UseModal<T> => {
    const [open, setOpen] = React.useState(initialState);

    const handleClickOutside = () => {
        setOpen(false);
    };

    const { ref } = useOutsideClick<T>(handleClickOutside);
    return { open, setOpen, ref };
};
