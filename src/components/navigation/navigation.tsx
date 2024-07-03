import './navigation.css';
import { Link } from 'react-router-dom';


function Navigation() {
  return (
    <div className='nav_section'>
      <div className='nav'>
        <div className='logo'><span className='first_word_logo'>MY</span> PORTOFOLIO</div>
        <div className='nav_links'>
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/about'>About</Link>
          <Link className='link' to='/projects'>Projects</Link>
          <Link className='link' to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation;


