import "./header.css"
import { Link } from "react-router-dom"
const Header = () => {

    return (
        <div className="h-btn-wrapper">
            <Link className="h-link" to='/' >Title</Link> 
            <Link className="h-link" to='/about' >About me</Link> 
            <Link className="h-link" to='/contact' >Contact me</Link> 
        </div>
    )
}

export default Header