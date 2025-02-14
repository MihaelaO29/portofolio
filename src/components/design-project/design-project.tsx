import './design-project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import challenge from '../../images/challenges.png';
import persona from '../../images/persona.png';
import wireframe from '../../images/wireframe.png';
import prototype from '../../images/prototype.png';

function DesignProject() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/design');
    };

    return (
        <div className='design_project_details'>
            <div className='design_project_container'>

                <div className='about_project'>
                    <button className='back_btn' onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='back_icon' />
                        Go back
                    </button>
                </div>

                <div className='project_presentation'>
                    <div className='project_presentation_info'>
                        <img className='project_presentation_img' src="https://i.postimg.cc/QtRfZPSQ/project-image1.png" />
                    </div>
                </div>

                <div className='project1_details'>
                    <div className='goals'>
                        <div className='goals_title'>Goals and Objectives</div>
                        <div className='goals_content'>
                            <div className='goals_text'>
                                <div>Panni Bakery, an artisanal bakery in Chișinău, needs a modern and attractive website
                                    that reflects the authenticity and quality of its products.</div> <br />

                                <div>The site will be easy to navigate and optimized for mobile devices, providing a pleasant user experience and
                                    attracting more local customers.</div> <br />

                                <div>With an elegant design and well-organized structure, users will be able to explore the range
                                    of artisanal products, discover the natural ingredients used, and understand the passion behind
                                    each creation.</div> <br />

                                <div>The website will include sections dedicated to the menu, the brand's story, and
                                    essential information about location and contact.</div> <br />
                            </div>

                            <div className='goals_extra_info'>
                                <div className='goals_extra_info_text'>
                                    <div className='info_title'>Client</div>
                                    <p>Panni Bakery</p>
                                </div>

                                <div className='goals_extra_info_text'>
                                    <div className='info_title'>Location</div>
                                    <p>Chișinău</p>
                                </div>
                                <div className='goals_extra_info_text'>
                                    <div className='info_title'>Brief</div>
                                    <div>Create a modern, user-friendly website for an artisanal bakery.</div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='challenges'>
                        <div className='challenge_title'>Challenges</div>
                        <div className='challenges_container'>
                            <img className='challenges_img' src={challenge} />
                        </div>
                    </div>


                    <div className='research'>
                        <div className='research_title'>Research</div>
                        <div>To better understand industry standards and identify opportunities for
                            differentiation, I conducted a competitive analysis of several artisanal
                            pastry businesses with presentation websites. This analysis focused on
                            website structure, user experience (UX), content, and visual aspects.<br />
                         
                            I examined 5 competitors, both direct (similar artisanal bakeries)
                            and indirect (bakeries, confectioneries offering artisanal products).<br />
                            <br />
                            The key aspects analyzed were: <br />
                            <br />
                            <strong>Navigation and site structure</strong> – which pages are included and how clearly information is organized. <br />
                            <strong>Design and visual experience</strong> – visual style, brand consistency, and overall site appeal. <br />
                            <strong>Product presentation</strong> – image quality, ingredient descriptions, and brand storytelling.<br />
                            <br />
                            The conclusions from this analysis will help create an efficient structure for the
                            presentation website, providing an attractive and informative user experience aligned
                            with market expectations. <br />
                            <br />
                            As a result of this analysis, I have identified several key points that will
                            guide the development of the website. The focus will be on a clean design,
                            a detailed presentation of the products, an authentic brand story, and simple
                            navigation to create a pleasant and easy-to-use experience for customers.
                        </div>
                        </div>
                        <div className='personas'>
                            <p className='personas_tile'>Personas</p>
                            <p className='personas_text'>Creating a persona helps gain a deeper understanding of the different types
                                of users who will interact with the bakery's presentation website, ensuring
                                that the design and functionality of the site are tailored to meet their needs.</p>
                            <div className='personas_container'>
                                <img className='personas_img' src={persona} />
                            </div>
                        </div>

                        <div className='user_flow'>
                            <div className='user_flow_title'>User Flow</div>
                            <img className='user_flow_img' src="https://i.postimg.cc/L8TQgx6S/userflow.png" />
                        </div>


                        <div className='wireframe'>
                            <div className='wireframe_title'>Wireframe</div>
                            <p>In the next step, I created low-fidelity wireframes to provide
                                a visual understanding of the screens, as well as to create
                                a prototype that will help me test and validate
                                ideas and hypotheses.</p>
                            <div className='wireframe_container'>
                                <img className='wireframe_img' src={wireframe} />
                            </div>
                        </div>

                        <div className='final_result'>
                            <div className='final_result_title'>Final result</div>
                            <div> The final part of this project is the creation of a clear and distinct identity
                                for the bakery's presentation website, reflecting the essence of the brand.
                                My goal was to create an inviting and emotional experience for users, emphasizing the
                                beauty of the products and the tradition behind them. This final design successfully
                                combines aesthetic appeal with functionality, providing a pleasant and easy-to-use
                                experience that reflects the artisanal values of the bakery, while also facilitating
                                the discovery and interaction of customers with the products.
                                Throughout the design process, I employed user-centered principles, incorporating feedback from real users
                                through usability tests to ensure an intuitive interface. The visual elements, including colors, fonts,
                                and images, were thoughtfully chosen to evoke the bakery’s traditional values while remaining modern and
                                fresh.
                                With the high-fidelity prototype, the design not only meets the functional needs but also resonates
                                emotionally with the users, encouraging them to connect with the bakery’s story.
                                </div >        
                            <div className='final_result_container'>
                                <img className='final_result_img' src={prototype} />
                            </div>
                            </div >
                       

                        <div className='link_website'>
                            <a href="https://pannibakery.md/" target="_blank">
                                <button className='webiste_button' >
                                    Visit Panni Bakery Website
                                </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            )
}

            export default DesignProject;