import { useState } from "react";


export default function usePersistedState(key, initialState) {

    const [state, setState] = useState(() => {
        const persistedState = localStorage.getItem(key);

        if (persistedState) {
            return JSON.parse(persistedState);
        }

        return initialState;
    })

    const setPersistedState = (value) => {
        setState(value);

        let serializedValue;

        if (typeof value === "function") {
            serializedValue = JSON.stringify(value(state));

        } else {
            serializedValue = JSON.stringify(value);
        }

        localStorage.setItem(key, serializedValue)
    }

    return [
        state,
        setPersistedState
    ]
}