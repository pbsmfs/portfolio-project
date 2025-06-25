import './contact.css';
import { useRef, useState, useEffect } from 'react';
import emailjs from 'emailjs-com';
import { useContext } from 'react';
import { ThemeContext } from '../../context';
import Header from '../Header/Header';
import { webSocketService } from '../../utils/websocket';

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const [messageCount, setMessageCount] = useState(0);
  const theme = useContext(ThemeContext);
  const toggled = theme.state.toggled;

  // Form validation state
  const [errors, setErrors] = useState({
    from_name: '',
    from_email: '',
    user_subject: '',
    message: ''
  });

  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    user_subject: '',
    message: ''
  });

  const [isFormValid, setIsFormValid] = useState(false);


  useEffect(() => {
    webSocketService.connect(process.env.REACT_APP_WS_URL);
    webSocketService.registerCallback('updateCount', (count) => {
      setMessageCount(count);
    });
  
    return () => {
      webSocketService.disconnect();
    };
  }, []);


  // Form validation
  useEffect(() => {
    const isValid = Object.values(errors).every(x => x === '') && 
                   Object.values(formData).every(x => x !== '');
    setIsFormValid(isValid);
  }, [errors, formData]);

  const validateField = (name, value) => {
    let error = '';
    
    switch(name) {
      case 'from_name':
        if (!value.trim()) error = 'Name is required';
        else if (value.length < 2) error = 'Name must be at least 2 characters';
        break;
      case 'from_email':
        if (!value.trim()) error = 'Email is required';
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Please enter a valid email';
        }
        break;
      case 'user_subject':
        if (!value.trim()) error = 'Subject is required';
        else if (value.length < 5) error = 'Subject must be at least 5 characters';
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (!isFormValid) return;
  
    try {
      // Добавляем credentials для CORS
      const response = await fetch(process.env.REACT_APP_API_URL+'/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
        credentials: 'include',
        mode: 'cors'
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID, 
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
        form.current, 
        process.env.REACT_APP_EMAILJS_USER_ID
      );
  
      setDone(true);
      setTimeout(() => setDone(false), 5000);
      
      // Сброс формы
      setFormData({
        from_name: '',
        from_email: '',
        user_subject: '',
        message: ''
      });
  
    } catch (error) {
      console.error('Error:', error);
      // Обработка ошибки для пользователя
    }
  };

  return (
    <>
      <Header />
      <div className="c" style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}> 
        <div className="c-wrapper">
          <div className="c-bg" style={{ backgroundColor: toggled ? "rgb(5, 5, 100)" : "yellowgreen"}}></div>
          <div className="c-left">
            <h1 className="c-title">Contact me</h1>
            <div className="c-sub">
              Have questions or want to collaborate? Send me a message!
            </div>
            <div className="message-counter" style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}>
              Messages sent: <strong>{messageCount}</strong>
            </div>
          </div>
          <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className={errors.from_name ? 'error' : ''}
                  style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}
                />
                {errors.from_name && <span className="error-message">{errors.from_name}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  className={errors.from_email ? 'error' : ''}
                  style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}
                />
                {errors.from_email && <span className="error-message">{errors.from_email}</span>}
              </div>

              <div className="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  name="user_subject"
                  value={formData.user_subject}
                  onChange={handleChange}
                  className={errors.user_subject ? 'error' : ''}
                  style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}
                />
                {errors.user_subject && <span className="error-message">{errors.user_subject}</span>}
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  style={{ backgroundColor: toggled ? "#222" : "white", color: toggled && "white" }}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <button
                type="submit"
                style={{ 
                  backgroundColor: toggled ? "rgb(5, 5, 100)" : "yellowgreen",
                  opacity: isFormValid ? 1 : 0.6,
                  cursor: isFormValid ? 'pointer' : 'not-allowed'
                }}
                disabled={!isFormValid}
              >
                Send Message
              </button>

              {done && <div className="success-message">Thank you! Your message has been sent.</div>}
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;