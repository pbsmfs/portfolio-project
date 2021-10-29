import "./title.css"
import md from "../../images/mend.jpg"
import bf from "../../images/bosf.png"

const Title = () => {
    return (
        <div className="t">
            <div className="t-left">
                <div className="t-left-wrapper">
                    <div className="t-intro">
                        Hello, my name is
                    </div>
                    <div className="t-name">
                        Fedor
                    </div>
                    <div className="t-items">
                        <div className="t-items-wrapper">
                            <div className="t-item">
                                junior programmer
                            </div>
                            <div className="t-item">
                                15y.o.
                            </div>
                            <div className="t-item">
                                from Russia
                            </div>
                        </div>
                    </div>
                    <div className="t-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </div>
                </div>
            </div>
            <div className="t-right">
                <div className="t-right-wrapper">
                    <img src={md} alt="" className="t-bg" />
                    <img src={bf} alt="" className="t-img" />   
                </div>
            </div>
        </div>
    )
}

export default Title
