// In your context file (e.g., context.js)
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
    toggled: false
};

// Check localStorage for saved preference
if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('themePreference');
    if (savedTheme) {
        INITIAL_STATE.toggled = JSON.parse(savedTheme);
    }
}

export const ThemeContext = createContext(INITIAL_STATE);

const ThemeReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE":
            return {
                toggled: !state.toggled
            };
        case "SET":
            return {
                toggled: action.payload
            };
        default:
            return state;
    }
};

export const ThemeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(ThemeReducer, INITIAL_STATE);

    return (
        <ThemeContext.Provider value={{ state, dispatch }}>
            {children}
        </ThemeContext.Provider>
    );
};