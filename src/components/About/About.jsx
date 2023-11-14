import "./about.css"
import jk from '../../images/231.jpg'
import ProjectList from "../ProjectList/ProjectList"
import Header from "../Header/Header"

const About = () => {
    return (
        <>
        <Header />
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={jk} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <div className="a-title">
                    About me
                </div>
                <div className="a-sub">
                    some text some text some text
                </div>
                <ul className="a-desc">
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                </ul>
            </div>
        </div>
        <ProjectList/>
        </>
    )
}

export default About
