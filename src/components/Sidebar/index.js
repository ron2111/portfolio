import './index.scss'
import { useState } from 'react'
import LogoS from '../../assets/images/logo-r.png'
import LogoSubtitle from '../../assets/images/logo-subR.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faUser,
  faEnvelope,
  faSuitcase,
  faBars,
  faClose,
} from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false)

  return (
    <div className="nav-bar">
      <Link className="logo" to="/" onClick={() => setShowNav(false)}>
        {/* Main logo */}
        <img src={LogoS} alt="Logo" />
        {/* Sub-Logo */}
        <img className="sub-logo" src={LogoSubtitle} alt="Rohan" />
      </Link>

      {/*  Navigation to all the pages */}
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          exact="true"
          activeclassname="active"
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          {/*  Home icon */}
        </NavLink>

        <NavLink
          // About Section
          activeclassname="active"
          className="about-link"
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          // Portfolio/ Work Section
          activeclassname="active"
          className="portfolio-link"
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          // Contact section
          activeclassname="active"
          className="contact-link"
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        <FontAwesomeIcon
          onClick={() => setShowNav(false)}
          icon={faClose}
          color="#FD7A2C"
          size="3x"
          className="close-icon"
        />
      </nav>

      {/* Social Icons */}
      <ul>
        <li>
          {/* Github */}
          <a
            href="https://www.linkedin.com/in/rohan-sharma21/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          {/* Github */}
          <a href="https://github.com/ron2111" target="_blank" rel="noreferrer">
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          {/* Twitter */}
          <a
            href="https://twitter.com/2111_rohan"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faTwitter}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
        <li>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/its_rs21/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              color="#4d4d4e"
              className="anchor-icon"
            />
          </a>
        </li>
      </ul>

      {/* Responsive View Hamburger icon */}
      <FontAwesomeIcon
        onClick={() => setShowNav(true)}
        icon={faBars}
        color="#FD7A2C"
        size="3x"
        className="hamburger-icon"
      />
    </div>
  )
}

export default Sidebar
