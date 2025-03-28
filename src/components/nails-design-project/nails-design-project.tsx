import './nails-design-project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function NailsDesignProject() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate('/design');
    };

    return (

        <div className='nails_design_project_details'>
            <div className='nails_design_project_container'>

                <div className='about_project'>
                    <button className='back_btn_project' onClick={goBack}>
                        <FontAwesomeIcon icon={faArrowLeft} className='back_icon' />
                    </button>
                </div>

                <div className='nails_design_img_section'>
                    <img className='nails_design_img' src="https://i.postimg.cc/9VMkxVfb/Frame-27.png" alt='nail' />
                </div>
            </div>
        </div>

    )
}
export default NailsDesignProject;