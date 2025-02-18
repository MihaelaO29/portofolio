import './design.css';
import { useNavigate } from 'react-router-dom';

function Design() {

    const navigate = useNavigate();  // Hook-ul pentru navigare

    const handleButtonClick = () => {
        navigate('/design-project');
    };

    return (
        <div className='design_section'>
            <div className='design_section_container'>
                <h1 className='design_section_container_title'>UX/UI Projects</h1>
                <div onClick={handleButtonClick} className='design_container'>

                    <div className='design_text'>
                        <div className='ux_project'>
                            <div className='ux_project_title'>Panni Bakery</div>
                            <div className='ux_project_description'>Discover a local artisan bakery and easily explore freshly baked sourdough products.</div>
                            <button onClick={handleButtonClick} className='ux_project_button'>View Case Study</button>
                        </div>
                    </div>

                    <div className='project_design_img'>
                        <img className='project_cover_img' src="https://i.postimg.cc/vTrtFm4y/black-background.jpg" alt='ux_project_image' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Design;