import './contact.css';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLocationDot} from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import contact from '../../images/contact.png';
import arrow from '../../images/arrow.png';



function Contact() {

  interface MovingImageProps {
    src: string;
    alt: string;
  }
  
  const MovingImage: React.FC<MovingImageProps> = ({ src, alt }) => {
    const props = useSpring({
      from: { transform: 'translateY(0px)' },
      to: { transform: 'translateY(-20px)' },
      config: { duration: 1000 },
      loop: { reverse: true },
    });
  
    return <animated.img src={src} alt={alt} style={props} className="moving-image" />;
  };
  

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

                <form className='form'>
                  <div className='form_heading'>CONTACT ME</div>
                  <div className='form_text_input'>
                  <FontAwesomeIcon className='input_img' icon={faUser} />
                    <input className='form_input' type='text' placeholder='Name' name='name' required />
                  </div>

                  <div className='form_text_input'>
                  <FontAwesomeIcon className='input_img' icon={faEnvelope} />
                    <input className='form_input' type='email' placeholder='Email' name='email' required />

                  </div>

                  <div className='form_text_textarea'>
                    <textarea className='form_textarea' placeholder='Message' name='text' required></textarea>
                  </div>
                  <button className='contact_btn'>SEND</button>
                </form>
              </div>
            </div>
         </div>
         <div className='arrow_img'>
         <MovingImage src={arrow} alt="arrow" />
        </div>
        </div>
  
      </div>

<div className='contact_info'>   
  <div className='contact_info_heading'>Get in touch with me!</div>
<div className='contact_options'>
<div className='option1' >
<FontAwesomeIcon  className='icon' icon={faPhone} />
<div>PHONE</div>
<div className='option_details'>0755239095</div>
</div>

<div className='option2'>
<FontAwesomeIcon className='icon' icon={faLocationDot} />
<div>ADDRESS</div>
<div className='option_details'>Romania</div>
</div>

<div className='option3'>
<FontAwesomeIcon className='icon' icon={faEnvelope} />
<div>EMAIL</div>
<div className='option_details'>opriamihaela22@yahoo.com</div>
</div>

<div className='option4'>
<FontAwesomeIcon className='icon_social' icon={faLinkedin} />
<div>Social</div>
<div className='option_details'>LinkedIn Profile</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Contact;