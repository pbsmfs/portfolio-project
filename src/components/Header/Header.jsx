import "./header.css"
import Darkmode from "../Darkmode/Darkmode"
import { Link } from "react-router-dom"
const Header = () => {

    return (
        <>
        <Darkmode/>
        <div className="h-btn-wrapper">
            <Link className="h-link" to='/' >Title</Link> 
            <Link className="h-link" to='/about' >About me</Link> 
            <Link className="h-link" to='/contact' >Contact me</Link> 
        </div>
        </>
    )
}

export default Header