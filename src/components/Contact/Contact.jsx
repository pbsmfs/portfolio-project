import './contact.css'
import { useRef } from 'react'


const Contact = () => {
    const formRef = useRef()
    
    return (
        <div className="c"> 
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">
                        Contact me
                    </h1>
                    <div className="c-sub">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam hendrerit nisi sed sollicitudin pellentesque. Nunc posuere purus rhoncus pulvinar aliquam. Ut aliquet tristique nisl vitae volutpat.
                    </p>
                    <form>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea name="user_message" rows="5"></textarea>
                        <button ref={formRef} onClick={(e) =>{e.preventDefault()}}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
