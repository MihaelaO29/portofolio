import './contact.css';
import { useSpring, animated } from '@react-spring/web';
import contact from '../../images/contact.webp';
import user from '../../images/user.png';
import message from '../../images/message.png';
import contact_background from '../../images/contact_background.jpg';
import arrow from '../../images/arrow.png';
import phone from '../../images/phone.png';
import email from '../../images/contact_email.png';


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

      <div className='contact'
        //  style={{
        //   backgroundImage: `url(${contact_background})`,
        //   backgroundSize: 'cover',
        //    backgroundRepeat: 'no-repeat',
        //    backgroundPosition: 'center',
        //  }}
      >
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
                    <img className='input_img' src={user} alt='user' />
                    <input className='form_input' type='text' placeholder='Name' name='name' required />
                  </div>

                  <div className='form_text_input'>
                    <img className='input_img' src={message} alt='message' />
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
<img src={phone} alt='phone'/>
<div>PHONE</div>
<div className='option_details'>0755239095</div>
</div>

<div className='option2'>
<img/>
<div>ADDRESS</div>
<div className='option_details'>Romania</div>
</div>

<div className='option3'>
<img src={email} alt='email'/>
<div>EMAIL</div>
<div className='option_details'>opriamihaela22@yahoo.com</div>
</div>
</div>
    </div>
    </div>
  )
}

export default Contact;