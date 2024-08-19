import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import contact from '../../images/contact.png';
import arrow from '../../images/arrow.png';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import Spinner from '../../utils/spinner/spinner';
import { useState } from 'react';

function Contact() {
  const [spinner, setSpinner] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpinner(true);

    if (form.current) {
      emailjs
        .sendForm('opriamihaela22@gmail.com', 'template_28buh0j', form.current, 'fnWTaPBE4gasSM1vw')
        .then(
          () => {
            toast.success("Thank you for your message 😃");
            form.current?.reset();
            setSpinner(false);
          },
          () => {
            toast.error("I didn't receive your message 😢");
            setSpinner(false);
          },
        );
    } else {
      setSpinner(false);
    }
  };

  const openPhoneNumber = () => {
    window.open('tel:+0755239095', '_blank');
  }

  const openEmail = () => {
    window.open('mailto:opriamihaela22@gmail.com', '_blank');
  }

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/place/Bra%C8%99ov/@45.6525685,25.5140617,12z/data=!3m1!4b1!4m6!3m5!1s0x40b35b862aa214f1:0x6cf5f2ef54391e0f!8m2!3d45.6426802!4d25.5887252!16zL20vMGhqdGc?entry=ttu`, '_blank');
  }

  const openLinkedin = () => {
    window.open('https://www.linkedin.com/in/mihaela-opria-03a8252b7/', '_blank');
  }

  return (
    <div className='contact_section'>
      <div className='contact'>
        <div className='contact_heading'>

          <div className='contact_container'>
            <div className='form_contact_details'>
              <div className='contact_img'>
                <img className='contact_img_moving' src={contact} alt='contact' />
              </div>

              <div className='wrap_contact'>

                <form className='form' ref={form} onSubmit={sendEmail}>
                  <div className='form_heading'>CONTACT ME</div>

                  <div className='form_text_input'>
                    <FontAwesomeIcon className='input_img' icon={faUser} />
                    <input className='form_input' type='text' placeholder='Name' name='user_name' required disabled={spinner} />
                    <span className='focus_input'></span>
                  </div>

                  <div className='form_text_input'>
                    <FontAwesomeIcon className='input_img' icon={faEnvelope} />
                    <input className='form_input' type='email' placeholder='Email' name='user_email' required disabled={spinner} />
                    <span className='focus_input'></span>
                  </div>

                  <div className='form_text_input'>
                    <textarea className='form_textarea' placeholder='Message' name='message' required disabled={spinner}></textarea>
                    <span className='focus_input'></span>
                  </div>
                  <button className={`contact_btn ${spinner ? 'spinning' : ''}`}
                    type='submit'
                    disabled={spinner}>
                    {spinner ? <Spinner /> : 'Send'}
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className='arrow_img'>
            <img src={arrow} alt="arrow" />
          </div>
        </div>
      </div>

      <div className='contact_info'>
        <div className='contact_info_heading'>Get in touch with me!</div>
        <div className='contact_options'>
          <div className='option1 contact_option' onClick={openPhoneNumber} >
            <FontAwesomeIcon className='icon' icon={faPhone} />
            <div>PHONE</div>
            <div className='option_details'>0755239095</div>
          </div>

          <div className='option2 contact_option' onClick={openGoogleMaps}>
            <FontAwesomeIcon className='icon' icon={faLocationDot} />
            <div>ADDRESS</div>
            <div className='option_details'>Romania</div>
          </div>

          <div className='option3 contact_option' onClick={openEmail}>
            <FontAwesomeIcon className='icon' icon={faEnvelope} />
            <div>EMAIL</div>
            <div className='option_details'>opriamihaela22@gmail.com</div>
          </div>

          <div className='option4 contact_option' onClick={openLinkedin}>
            <FontAwesomeIcon className='icon_social' icon={faLinkedin} />
            <div>Social</div>
            <div className='option_details'>LinkedIn Profile</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;