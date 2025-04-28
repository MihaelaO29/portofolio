import './nails-design-project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import nadini_presentation from '../../images/30.png';
import nadini_personas from '../../images/nadini_personas.jpg';
import nadini_wireframe from '../../images/nadini_wireframe.png';
import nadini_prototype from '../../images/nadini_prototype.png';


function NailsDesignProject() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/design');
    };

    return (

        <div className='nadini_design_project_details'>
            <div className='nadini_design_project_container'>
                <div className='about_project'>
                    <button className='back_btn_project' onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='back_icon' />
                    </button>
                </div>

                <div className='project_presentation'>
                    <div className='project_presentation_info'>
                        <img className='project_presentation_img' src={nadini_presentation} alt='nadini-project' />
                    </div>
                </div>

                <div className='project1_details'>
                    <div className='nadini_goals'>
                        <div className='nadini_goals_title'>Goals and Objectives</div>
                        <div>  Nadini Nails is a nail studio aiming to establish a modern and elegant online presence that reflects the professionalism and passion behind the brand.
                            The website is designed to be intuitive and fully optimized for mobile devices, providing a pleasant user experience and attracting local clients interested in beauty services.
                            <br /><br />With a feminine aesthetic and a clean, airy layout, visitors can easily discover the services offered and quickly access the information needed to book an appointment.
                            The site includes dedicated sections for the price list, the brand story, current offers, contact details, and links to social media platforms.
                        </div>
                        <div>

                        </div>



                        <div className='nadini_challenges'>
                            <div className='nadini_challenges_title'>Challenges</div>
                            <div className='nadini_challenge_text'>
                                <strong>Mobile Optimization</strong> -
                                One of the most important aspects of this project was optimizing the website for mobile use. The challenge was to adapt the design and functionalities in a way that ensures a smooth user experience on smaller screens, without sacrificing design or performance.  <br /> <br />
                                <strong>Clear Presentation of Services</strong> -
                                Another key aspect was organizing the information about the services in a clear and easily accessible manner. The challenge was to create a structure that highlights the various treatments without visually overcrowding the page or overwhelming the users with information.<br /> <br />
                                <strong>Brand Story</strong> -
                                Nadini Nails is a young brand with a deep passion for beauty, and the challenge was to integrate this story in an engaging way, while not diverting the users' attention from the main purpose of the site. The brand story had to be both authentic and consistent with the rest of the website.<br /> <br />
                                <strong>Maintaining a Consistent Visual Identity </strong> -
                                It is essential for the website to reflect the personality of the Nadini Nails brand, while also being easy to navigate. The challenge was to create a visual identity that is both elegant and functional, without allowing the visual elements to overwhelm the user.<br /> <br />
                            </div>
                        </div>

                        <div className='nadini_research'>
                            <div className='nadini_research_title'>Research</div>
                            <div className='nadini_research_text'>
                                Before starting the project, I conducted detailed research to better understand the target audience of Nadini Nails. I carried out interviews and surveys with users from the target group (women aged between 25 and 40, interested in manicure services) to understand their specific needs and preferences regarding the design and functionality of a nail salon website.
                                <p>Key Insights:</p>
                                <p>1. Mobile Accessibility – many users prefer to access the website quickly from their mobile phones, highlighting the importance of a responsive design.</p>
                                <p>2. Simplicity of Information – users prefer to quickly access information about services and prices without feeling overwhelmed by complex or cluttered content.</p>
                                <p>3. Personalized and Authentic Vision – women want to feel that they are treated with professionalism and that each service reflects a personalized approach to beauty.</p>
                                The conclusions from this research will help in developing a well-structured, user-friendly website that provides an intuitive, accessible, and professional experience, aligned with the needs and expectations of the target audience.<br />
                                As a result of this analysis, we identified key points that will guide the development of the website.

                            </div>
                        </div>

                        <div className='nadini_personas'>
                            <div className='nadini_personas_title'>Personas</div>
                            <div>
                                <div className='nadini_personas_container'>
                                    <img className='nadini_personas_img' src={nadini_personas} alt='personas' />
                                </div>
                            </div>
                        </div>

                        <div className='nadini_wireframe'>
                            <div className='nadini_wireframe_title'>Wireframe</div>
                            <div className='nadini_wireframe_text'>
                                The wireframe was created to clearly define the information
                                hierarchy, navigation flow, and placement of key elements
                                before developing the final visual design.

                            </div>
                            <div>
                                <div className='nadini_wireframe_conainer'>
                                    <img className='nadini_wireframe_img' src={nadini_wireframe} alt='wireframe' />
                                </div>
                            </div>
                        </div>

                        <div className='nadini_result'>
                            <div className='nadini_result_title'>Final result</div>
                            <div className='nadini_result_text'>After completing the research, analysis, and design phases, the Nadini Nails website project resulted in a digital platform that is elegant, user-friendly, and fully optimized for mobile devices.
                                <br /> The website faithfully reflects the brand's core values: femininity, professionalism, and a keen attention to detail. Its clean and airy design, enhanced with subtle feminine accents, provides users with a pleasant and efficient digital experience.
                                <br /> <br />Key deliverables include:    <br />

                                - Responsive wireframes – carefully crafted to provide a seamless, intuitive navigation experience across all devices   <br />
                                - Full UI design in Figma, featuring a refined color palette, modern typography, and responsive layouts   <br />
                                - Well-structured content sections – including services, pricing, brand story, special offers, contact information, and direct social media integration   <br />
                                <br />
                                The final website successfully meets the needs of the target audience, offering a professional and accessible platform that supports the brand's growth in the online space.
                            </div>
                            <div className='nadini_result_container'>
                                <img className='nadini_result_img' src={nadini_prototype} alt='prototype' />
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}
export default NailsDesignProject;