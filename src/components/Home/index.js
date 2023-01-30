import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
// import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-r.png'
// import Logo from './Logo'
import './index.scss'

const Home = () => {
  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Hi,
            <br />
            I'm
            <img src={LogoTitle} alt="Full Stack Developer Name" />
            ohan
            <br />I build things for the web.
          </h1>
          <h2>
            Front End Developer / Java Connisseur / Open Source Enthusiast
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>

      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default Home
