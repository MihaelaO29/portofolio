import './design.css';
import cover from '../../images/black_background.jpg';
import { useNavigate } from 'react-router-dom';

function Design() {

        const navigate = useNavigate();  // Hook-ul pentru navigare
      
        const handleButtonClick = () => {
          navigate('/design-project-details');  
        };

    return (
        <div className='design_section'>
            <div onClick={handleButtonClick} className='design_container'>

                <div className='design_text'>
                    <div className='ux_project'>
                        <div className='ux_project_title'>Panni Bakery</div>
                        <div className='ux_project_description'>Discover a local artisan bakery and easily explore freshly baked sourdough products.</div>
                        <button onClick={handleButtonClick} className='ux_project_button'>View Case Study</button>
                    </div>
                </div>
                
                <div className='project_design_img'>
                    <img className='project_cover_img' src={cover} />
                </div>
            </div>
        </div>
    )
}

export default Design;