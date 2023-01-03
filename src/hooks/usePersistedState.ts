import { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function usePersistedState(key: string, initialValue: any) {
    const [state, setState] = useState(() => {
        const storageValue = localStorage.getItem(key);

        if (storageValue) {
            return storageValue;
        } else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState];
}

export default usePersistedState;
