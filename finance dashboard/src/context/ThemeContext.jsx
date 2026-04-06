import { useContext, createContext, useState, useEffect, } from 'react';

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    const [dark, setDark] = useState(
        localStorage.getItem("dark") || "light"
    );

    useEffect(() => {
        document.documentElement.classList.remove("dark", "light");
        document.documentElement.classList.add(dark);
        localStorage.setItem("dark", dark);
    }, [dark]);

    const toggletheme = () => {
        setDark((prev) => (prev === "light" ? "dark" : "light"));

    }


    return (
        <ThemeContext.Provider value={{ dark, toggletheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useTheme=()=>{
    return useContext(ThemeContext);
}