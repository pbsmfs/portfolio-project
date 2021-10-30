import './contact.css'
import { useRef, useState } from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {

const form = useRef();
const [done, setDone] = useState(false)

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ok3ysug', 'template_8mkv4k9', form.current, 'user_WMuCMQzlDdsB7UILHcLFp')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          setTimeout(setDone, 5000, false)
      }, (error) => {
          console.log(error.text);
      });
    }
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
                    <form ref={form} onSubmit={sendEmail}>
                        <input type="text" placeholder="Name" name="user_name"/>
                        <input type="text" placeholder="Subject" name="user_subject"/>
                        <input type="text" placeholder="Email" name="user_email"/>
                        <textarea name="user_message" rows="5"></textarea>
                        <button>Submit</button>
                        <div className="c-done">
                            {done && 'Thank you for your letter.'}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact
