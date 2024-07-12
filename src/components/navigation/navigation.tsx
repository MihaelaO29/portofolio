import './navigation.css';
import { Link, useLocation } from 'react-router-dom';


function Navigation() {
 const location = useLocation();
  return (
    <div className='nav_section'>
      <div className='nav'>
        <div className='logo'>PORTFOLIO</div>
        <div className='nav_links'>
          <Link className={`menu_link ${location?.pathname === '/' ? 'clicked' : ''}`} to='/'>Home</Link>
          <Link className={`menu_link ${location?.pathname === '/about' ? 'clicked' : ''}`} to='/about'>About</Link>
          <Link className={`menu_link ${location?.pathname === '/projects' ? 'clicked' : ''}`} to='/projects'>Projects</Link>
          <Link className={`menu_link ${location?.pathname === '/contact' ? 'clicked' : ''}`} to='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navigation;
