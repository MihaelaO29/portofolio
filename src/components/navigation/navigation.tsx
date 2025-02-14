import './navigation.css';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.png';

const Navigation = () => {
  const location = useLocation();
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State pentru meniul hamburger

  // Toggle pentru subcategorii
  const handleProjectsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowSubcategories(!showSubcategories);
  };

  // Închide submeniul când utilizatorul iese
  const handleMouseLeave = () => {
    setTimeout(() => {
      setShowSubcategories(false);
    }, 200);
  };

  // Toggle pentru meniul hamburger
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Închide subcategorii atunci când utilizatorul face click pe un link din subcategorie
  const handleSubcategoryClick = () => {
    setShowSubcategories(false); // Ascunde subcategorii
  };

  return (
    <div className="nav_section">
      <div className="nav">
        <Link className={`menu_link ${location.pathname === '/' ? 'clicked' : ''}`} to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
        <div className="nav_links">
          <Link className={`menu_link ${location.pathname === '/about' ? 'clicked' : ''}`} to="/about">
            About
          </Link>

          {/* Projects cu subcategorii */}
          <div className="projects_menu" onMouseLeave={handleMouseLeave}>
            <span
              className={`menu_link projects_button ${['/design', '/frontend'].includes(location.pathname) ? 'clicked ' : ''}`}
              onClick={handleProjectsClick}
            >
              Projects
            </span>
            {showSubcategories && (
              <div className="subcategories">
                <Link to="/design" className="sub_link" onClick={handleSubcategoryClick}>UX/UI Design</Link>
                <Link to="/frontend" className="sub_link" onClick={handleSubcategoryClick}>Front-end</Link>
              </div>
            )}
          </div>

          <Link className={`menu_link ${location.pathname === '/contact' ? 'clicked' : ''}`} to="/contact">
            Contact
          </Link>
        </div>

        {/* Buton hamburger */}
        <div className="bar" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Meniul hamburger */}
      <div className={`bar_menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="bar_menu_links">
          <Link to="/" className="bar_link" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="bar_link" onClick={toggleMenu}>About</Link>
          <Link to="/contact" className="bar_link" onClick={toggleMenu}>Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
