import './navigation.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';


function Navigation() {
 const location = useLocation();

const [seeMenu, setSeeMenu] = useState(false);

const handleOpenMenu = () => {
  setSeeMenu(true);
}

const handleCloseMenu = () => {
  setSeeMenu(false);
};

const handleLinkClick = () => {
  setSeeMenu(false);
};

  return (
    <div className='nav_section'>
      <div className='nav'>
        <Link className={`menu_link ${location?.pathname === '/' ? 'clicked' : ''}`} to='/'>  <img  className='logo' src={logo} alt='logo'/></Link>
        <FontAwesomeIcon className='bar' icon={faBars} onClick={handleOpenMenu} />
        <div className='nav_links'>
          <Link className={`menu_link ${location?.pathname === '/about' ? 'clicked' : ''}`} to='/about'>About</Link>
          <Link className={`menu_link ${location?.pathname === '/projects' ? 'clicked' : ''}`} to='/projects'>Projects</Link>
          <Link className={`menu_link ${location?.pathname === '/contact' ? 'clicked' : ''}`} to='/contact'>Contact</Link>
        </div>
      </div>
      {seeMenu ?(
      <div className='bar_menu'>
        <div className='bar_menu_links'>
      <Link className={`bar_link ${location?.pathname === '/about' ? 'clicked' : ''}`} to='/about' onClick={handleLinkClick}>About</Link>
      <Link className={`bar_link ${location?.pathname === '/projects' ? 'clicked' : ''}`} to='/projects' onClick={handleLinkClick}>Projects</Link>
      <Link className={`bar_link ${location?.pathname === '/contact' ? 'clicked' : ''}`} to='/contact' onClick={handleLinkClick}>Contact</Link>
      </div>
      <FontAwesomeIcon className='close_btn' icon={faCircleXmark} onClick={handleCloseMenu} />
      </div>
       ): ('')}
    </div>
 
  )
}

export default Navigation;
