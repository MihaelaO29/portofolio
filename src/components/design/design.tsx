import './design.css';
import { useNavigate } from 'react-router-dom';
import panny_project_cover from '../../images/black_background.webp'
import nadini_project_cover from '../../images/nadini_project.png';
import furnivio_project_cover from '../../images/furnivio_project.png'


function Design() {

    const navigate = useNavigate();  // Hook-ul pentru navigare

    const handleButtonClickProject1 = () => {
        navigate('/panny-design-project');
    };

    const handleButtonClickProject2 = () => {
        navigate('/nails-design-project');
    };

    const handleButtonClickProject3 = () => {
        navigate('/furnivio-design-project');
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
                        <img className='panny_project_cover_img' src={panny_project_cover} alt='backery' />
                    </div>
                </div>


                <div onClick={handleButtonClickProject2} className='nails_design_container'>

                    <div className='nails_design_text'>
                        <div className='nails_ux_project'>
                            <div className='nails_ux_project_title'>Nadini Nails</div>
                            <div className='nails_ux_project_description'>Take a look at a modern and elegant presentation website for a nail studio.</div>
                            <button onClick={handleButtonClickProject2} className='nails_ux_project_button'>View Case Study</button>
                        </div>
                    </div>

                    <div className='nails_project_design_img'>
                        <img className='nails_project_cover_img' src={nadini_project_cover} alt='nails_artist' />
                    </div>
                </div>

                <div onClick={handleButtonClickProject3} className='furnivio_design_container'>

                    <div className='furnivio_design_text'>
                        <div className='furnivio_ux_project'>
                            <div className='furnivio_ux_project_title'>Furnivio</div>
                            <div className='furnivio_ux_project_description'>The Furnivio app gives you quick access to a wide range of high-quality furniture, tailored to any style and space..</div>
                            <button onClick={handleButtonClickProject2} className='furnivio_ux_project_button'>View Project</button>
                        </div>
                    </div>

                    <div className='furnivio_project_design_img'>
                        <img className='furnivio_project_cover_img' src={furnivio_project_cover} alt='furnivio_project' />
                    </div>
                </div>



            </div>
        </div>
    )
}

export default Design;
