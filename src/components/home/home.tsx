import './home.css';
import backgound from './../../images/background.jpg'
import { useEffect, useState } from 'react';

function Home() {
    const [activatedLetter, setActivatedLetter] = useState(12);
    let time: any;

    useEffect(() => {
        clearInterval(time);
        time = setInterval(() => {
            setActivatedLetter(generateRandomNumber());
        }, 1000);
    }, [])

    const generateRandomNumber = () => {
        return Math.floor(Math.random() * 11)
    }

    useEffect(() => {
        console.log(activatedLetter)
    }, [activatedLetter])

    return (
        <div className='home_section'
            style={{
                backgroundImage: `url(${backgound})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
            }}
        >
            <div className='home'>
                <div className='home_container'>
                    <div className='full_name'>
                        <div className='overlay'>
                            <div className='first_name'>
                                <div className='text'>

                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 0 ? 'active_letter' : ''}`}>M</div>
                                        <div className={`shadow ${activatedLetter === 0 ? 'active_shadow' : ''}`}>M</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 1 ? 'active_letter' : ''}`}>I</div>
                                        <div className={`shadow ${activatedLetter === 1 ? 'active_shadow' : ''}`}>I</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 2 ? 'active_letter' : ''}`}>H</div>
                                        <div className={`shadow ${activatedLetter === 2 ? 'active_shadow' : ''}`}>H</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 3 ? 'active_letter' : ''}`}>A</div>
                                        <div className={`shadow ${activatedLetter === 3 ? 'active_shadow' : ''}`}>A</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 4 ? 'active_letter' : ''}`}>E</div>
                                        <div className={`shadow ${activatedLetter === 4 ? 'active_shadow' : ''}`}>E</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 5 ? 'active_letter' : ''}`}>L</div>
                                        <div className={`shadow ${activatedLetter === 5 ? 'active_shadow' : ''}`}>L</div>
                                    </div>
                                    <div className='wrapper'>
                                        <div className={`letter ${activatedLetter === 6 ? 'active_letter' : ''}`}>A</div>
                                        <div className={`shadow ${activatedLetter === 6 ? 'active_shadow' : ''}`}>A</div>
                                    </div>
                                </div>

                                <div className='last_name'>
                                    <div className='text'>
                                        <div className='wrapper'>
                                            <div className={`letter ${activatedLetter === 7 ? 'active_letter' : ''}`}>O</div>
                                            <div className={`shadow ${activatedLetter === 7 ? 'active_shadow' : ''}`}>O</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className={`letter ${activatedLetter === 8 ? 'active_letter' : ''}`}>P</div>
                                            <div className={`shadow ${activatedLetter === 8 ? 'active_shadow' : ''}`}>P</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className={`letter ${activatedLetter === 9 ? 'active_letter' : ''}`}>R</div>
                                            <div className={`shadow ${activatedLetter === 9 ? 'active_shadow' : ''}`}>R</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className={`letter ${activatedLetter === 10 ? 'active_letter' : ''}`}>I</div>
                                            <div className={`shadow ${activatedLetter === 10 ? 'active_shadow' : ''}`}>I</div>
                                        </div>

                                        <div className='wrapper'>
                                            <div className={`letter ${activatedLetter === 11 ? 'active_letter' : ''}`}>A</div>
                                            <div className={`shadow ${activatedLetter === 11 ? 'active_shadow' : ''}`}>A</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='home_content_description'>FRONT END DEVELOPER</div>
                </div>
            </div>
        </div>
    )
}

export default Home;