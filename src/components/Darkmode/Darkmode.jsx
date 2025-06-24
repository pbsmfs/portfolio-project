import "./darkmode.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../context";

const Darkmode = () => {
    const theme = useContext(ThemeContext);

    useEffect(() => {
        const savedTheme = localStorage.getItem('themePreference');
        if (savedTheme) {
            theme.dispatch({ type: "SET", payload: JSON.parse(savedTheme) });
        }
    }, [theme]); 

    const handleClick = () => {
        const newState = !theme.state.toggled;
        theme.dispatch({ type: "TOGGLE" });
        
        // Save to localStorage
        localStorage.setItem('themePreference', JSON.stringify(newState));
    };

    return (
        <div className="d">
            <img src={sun} alt="Light mode" className="d-icon" />
            <img src={moon} alt="Dark mode" className="d-icon" />
            <div 
                className="d-button" 
                onClick={handleClick} 
                style={{ left: theme.state.toggled ? 0 : 25 }}
            ></div>
        </div>
    );
};

export default Darkmode;