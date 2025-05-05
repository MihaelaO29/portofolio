import './furnivio-design-project.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import furnivio_app from '../../images/furnivio_app.webp';


function FurnivioDesignProject() {


    const navigate = useNavigate();

    const goBack = () => {
        navigate('/design');
    };


    return (

        <div className='furnivio_design_project_details'>
            
       <div className='furnivio_design_project_container'>
       <div className='about_project'>
            <button className='back_btn_project' onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} className='back_icon' />
            </button>
            </div>
            </div>

            <div className='furnivio_project_presentation'>
        <img className='furnvio_app' src={furnivio_app} alt='design_app'/>

        </div>



        </div>
    )
}


export default FurnivioDesignProject;
