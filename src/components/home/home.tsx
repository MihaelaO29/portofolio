import './home.css';
import backgound from './../../images/background.jpg'

function Home() {
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
                            <div className='text'>
                                <div className='wrapper'>
                                    <div className='letter'>M</div>
                                    <div className='shadow'>M</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>I</div>
                                    <div className='shadow'>I</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>H</div>
                                    <div className='shadow'>H</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>A</div>
                                    <div className='shadow'>A</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>E</div>
                                    <div className='shadow'>E</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>L</div>
                                    <div className='shadow'>L</div>
                                </div>
                                <div className='wrapper'>
                                    <div className='letter'>A</div>
                                    <div className='shadow'>A</div>
                                </div>


                                <div className='last_name'>
                                    <div className='text'>
                                        <div className='wrapper'>
                                            <div className='letter'>O</div>
                                            <div className='shadow'>O</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className='letter'>P</div>
                                            <div className='shadow'>P</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className='letter'>R</div>
                                            <div className='shadow'>R</div>
                                        </div>
                                        <div className='wrapper'>
                                            <div className='letter'>I</div>
                                            <div className='shadow'>I</div>
                                        </div>

                                        <div className='wrapper'>
                                            <div className='letter'>A</div>
                                            <div className='shadow'>A</div>
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