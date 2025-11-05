import {useState} from 'react';

export function useLocalStorage (key, initialValue) {

    const [storedValue, setStoredValue] = useState (() => {
        try {
            const item = window.localStorage.getItem(key);
            return;
        }
        catch (error) {
            console.error(error);
            return initialValue;
        }
    });

    const setValue = value => {
        try {
            if (typeof setText === 'function') setText(value);
            window.localStorage.setItem('text', JSON.stringify(value));
        } catch (error) {
            console.error(error);
        }

    }
    return [storedValue, setValue]
}
