import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-r.png'
import gif from '../../assets/images/web_dev.svg'
import './index.scss'
import { MapContainer } from 'react-leaflet'

const Home = () => {
  // to toggle between animation of letters
  // after the initial loading is done we want to add animation on hover
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['o', 'h', 'a', 'n', ',']
  const jobArray = [
    'I',
    ' ',
    'b',
    'u',
    'i',
    'l',
    'd',
    ' ',
    't',
    'h',
    'i',
    'n',
    'g',
    's',
    ' ',
    'f',
    'o',
    'r',
    ' ',
    't',
    'h',
    'e',
    ' ',
    'w',
    'e',
    'b',
    '.',
  ]

  // For the hover color change effect
  // changes class after the initial rubberband animation

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 4000)
  // }, [])

  // Improved code
  let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 4000)
  useEffect(() => {
    return () => {
      clearTimeout(timer1)
    }
  }, [letterClass])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            {/* Only the first letter has letterClass applied */}
            <span className={`${letterClass} _12`}>i,</span>
            {/* All rest have some delay like 12 i.e 1.2 sec */}
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>

            <img
              class="MainLogo"
              src={LogoTitle}
              alt="Full Stack Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray} // ohan
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray} // I build things for the web
              idx={10}
            />
          </h1>
          <h2>
            Front End Developer / Java Connoisseur / Open Source Enthusiast
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        {/* <Logo /> */}
      </div>
      <div className="hero-container">
        <img class="gif" src={gif}></img>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
