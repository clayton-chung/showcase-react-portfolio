import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoC from '../../assets/images/logo-c.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faClose, faEnvelope, faHome, faSuitcase, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Header = () => {
    const [showNav, setShowNav] = useState(false);

    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoC} alt="logo" />
            </Link>
            <nav className={showNav ? 'mobile-show' : ''}>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact={true}
                    activeClassName="active"
                    to="/"
                >
                    <FontAwesomeIcon icon={faHome} color="#ffffff" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    exact={true}
                    activeClassName="active"
                    className="about-link"
                    to="/about"
                >
                    <FontAwesomeIcon icon={faUser} color="#ffffff" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    activeClassName="active"
                    className="portfolio-link"
                    to="/portfolio"
                >
                    <FontAwesomeIcon icon={faSuitcase} color="#ffffff" />
                </NavLink>
                <NavLink
                    onClick={() => setShowNav(false)}
                    activeClassName="active"
                    className="contact-link"
                    to="/contact"
                >
                    <FontAwesomeIcon icon={faEnvelope} color="#ffffff" />
                </NavLink>
                <FontAwesomeIcon
                    onClick={() => setShowNav(false)}
                    icon={faClose}
                    color="#ffd700"
                    size="3x"
                    className='close-icon'
                />
            </nav>
            <ul>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href="https://www.linkedin.com/in/clayton-chung/"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#ffffff" />
                    </a>
                </li>
                <li>
                    <a
                        target="_blank"
                        rel='noreferrer'
                        href="https://github.com/clayton-chung"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#ffffff" />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                onClick={() => setShowNav(true)}
                icon={faBars}
                color="#ffd700"
                size="3x"
                className='hamburger-icon'
            />
        </div>
    );
};

export default Header;