import "./title.css"
import md from "../../images/mend.jpg"
import bf from "../../images/dibil.png"
import Header from "../Header/Header"
const Title = () => (<>

    <Header />
    <div className="t">
        <img src={bf} alt="" className="t-img" />
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
                            17y.o.
                        </div>
                        <div className="t-item">
                            from Russia
                        </div>
                    </div>
                </div>
                <div className="t-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
                <iframe className="t-video" width="560" height="315" src="https://www.youtube.com/embed/gwaXYbcZQIs" frameborder="0" allowfullscreen></iframe>
            </div>

        </div>
        <div className="t-right">
            <div className="t-right-wrapper">
                <img src={md} alt="" className="t-bg" />
            </div>
        </div>


        {/* <video src='https://www.youtube.com/watch?v=gwaXYbcZQIs'>xd</video> */}
    </div>
</>
)

export default Title
