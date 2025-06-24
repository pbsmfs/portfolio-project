import "./darkmode.css"
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { useContext } from "react"
import { ThemeContext } from "../../context"

const Darkmode = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        theme.dispatch({type: "TOGGLE"})
    }

    return (
        <div className="d">
            <img src={sun} alt="" className="d-icon" />
            <img src={moon} alt="" className="d-icon" />
            <div className="d-button" onClick={handleClick} style={{left: theme.state.toggled ? 0 : 25}}></div>
        </div>
    )
}

export default Darkmode
