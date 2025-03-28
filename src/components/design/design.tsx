import './design.css';
import { useNavigate } from 'react-router-dom';


function Design() {

    const navigate = useNavigate();  // Hook-ul pentru navigare

    const handleButtonClickProject1 = () => {
        navigate('/panny-design-project');
    };

    const handleButtonClickProject2 = () => {
        navigate('/nails-design-project');
    };

    return (
        <div className='design_section'>
            <div className='design_section_container'>
                <h1 className='design_section_container_title'>UX/UI Projects</h1>
                <div onClick={handleButtonClickProject1} className='panny_design_container'>

                    <div className='panny_design_text'>
                        <div className='panny_ux_project'>
                            <div className='panny_ux_project_title'>Panni Bakery</div>
                            <div className='panny_ux_project_description'>Discover a local artisan bakery and easily explore freshly baked sourdough products.</div>
                            <button onClick={handleButtonClickProject1} className='panny_ux_project_button'>View Case Study</button>
                        </div>
                    </div>

                    <div className='panny_project_design_img'>
                        <img className='panny_project_cover_img' src="https://i.postimg.cc/vTrtFm4y/black-background.jpg" alt='backery' />
                    </div>
                </div>
         

            <div onClick={handleButtonClickProject2}  className='nails_design_container'>

                <div className='nails_design_text'>
                    <div className='nails_ux_project'>
                        <div className='nails_ux_project_title'>Nails Artist</div>
                        <div className='nails_ux_project_description'>See a modern and elegant presentation website for a Nail Artist.</div>
                        <button onClick={handleButtonClickProject2} className='nails_ux_project_button'>View Project</button>
                    </div>
                </div>

                <div className='nails_project_design_img'>
                    <img className='nails_project_cover_img' src="https://i.postimg.cc/6B962DMZ/nail-project.png"  alt='nails_artist' />
                </div>
            </div>
            </div>
        </div>
    )
}

export default Design;
