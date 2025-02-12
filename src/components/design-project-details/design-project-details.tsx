import './design-project-details.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import project_presentation_img from '../../images/project_image1.png';
import personas from '../../images/persona.png';
import userflow from '../../images/userflow.png';
import wireframe from '../../images/wireframe.png';
import challenges from '../../images/challenges.png'
import prototype from '../../images/prototype.png';

function DesignProjectDetails() {
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
                        <img className='project_presentation_img' src={project_presentation_img} />
                    </div>
                </div>

                <div className='project1_details'>

                    <div className='goals'>
                        <div className='goals_title'>Goals and Objectives</div>
                        <div className='goals_content'>
                            <div className='goals_text'>
                                <p>Panni Bakery, an artisanal bakery in Chișinău, needs a modern and attractive website
                                    that reflects the authenticity and quality of its products.</p>

                                <p>The site will be easy to navigate and optimized for mobile devices, providing a pleasant user experience and
                                    attracting more local customers.</p>

                                <p>With an elegant design and well-organized structure, users will be able to explore the range
                                    of artisanal products, discover the natural ingredients used, and understand the passion behind
                                    each creation.</p>

                                <p>The website will include sections dedicated to the menu, the brand's story, and
                                    essential information about location and contact.</p>
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
                                    <p>Create a modern, user-friendly website for an artisanal bakery.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className='challenges'>
                        <div className='challenge_title'>Challenges</div>
                        <div className='challenges_container'>
                            <img className='challenges_img' src={challenges} />
                        </div>
                    </div>


                    <div className='research'>
                        <div className='research_title'>Research</div>
                        <p>To better understand industry standards and identify opportunities for
                            differentiation, I conducted a competitive analysis of several artisanal
                            pastry businesses with presentation websites. This analysis focused on
                            website structure, user experience (UX), content, and visual aspects.
                            <p> I examined 5 competitors, both direct (similar artisanal bakeries)
                                and indirect (bakeries, confectioneries offering artisanal products).</p>
                            <p> The key aspects analyzed were: </p>
                            <strong>Navigation and site structure</strong> – which pages are included and how clearly information is organized. <br />
                            <strong>Design and visual experience</strong> – visual style, brand consistency, and overall site appeal.  <br />
                            <strong>Product presentation</strong> – image quality, ingredient descriptions, and brand storytelling. </p>
                        <p> The conclusions from this analysis will help create an efficient structure for the
                            presentation website, providing an attractive and informative user experience aligned
                            with market expectations.
                        </p>
                        <p>As a result of this analysis, I have identified several key points that will
                            guide the development of the website. The focus will be on a clean design,
                            a detailed presentation of the products, an authentic brand story, and simple
                            navigation to create a pleasant and easy-to-use experience for customers.</p>
                    </div>

                    <div className='personas'>
                        <p className='personas_tile'>Personas</p>
                        <p className='personas_text'>Creating a persona helps gain a deeper understanding of the different types
                            of users who will interact with the bakery's presentation website, ensuring
                            that the design and functionality of the site are tailored to meet their needs.</p>
                        <div className='personas_conatiner'>
                            <img className='personas_img' src={personas} />
                        </div>
                    </div>

                    <div className='user_flow'>
                        <div className='user_flow_title'>User Flow</div>
                        <img className='user_flow_img' src={userflow} />
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
                        <p> The final part of this project is the creation of a clear and distinct identity
                            for the bakery's presentation website, reflecting the essence of the brand.
                            My goal was to create an inviting and emotional experience for users, emphasizing the
                            beauty of the products and the tradition behind them.</p> <p> This final design successfully
                                combines aesthetic appeal with functionality, providing a pleasant and easy-to-use
                                experience that reflects the artisanal values of the bakery, while also facilitating
                                the discovery and interaction of customers with the products.</p> <p>
                            Throughout the design process, I employed user-centered principles, incorporating feedback from real users
                            through usability tests to ensure an intuitive interface. The visual elements, including colors, fonts,
                            and images, were thoughtfully chosen to evoke the bakery’s traditional values while remaining modern and
                            fresh.</p> <p>
                            With the high-fidelity prototype, the design not only meets the functional needs but also resonates
                            emotionally with the users, encouraging them to connect with the bakery’s story. </p>
                        <div className='final_result_container'>
                            <img className='final_result_img' src={prototype} />
                        </div>
                    </div>

                    <div className='link_website'>
                    <a href="https://pannibakery.md/" target="_blank">
                        <button className='webiste_button' >
                        Visit Panni Bakery website
                        </button>
                    </a>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DesignProjectDetails;