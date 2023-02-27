import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJava,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 2000)
  useEffect(() => {
    return () => {
      clearTimeout(timer1)
    }
  }, [letterClass])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'e', 'r', 'i', 'e', 'n', 'c', 'e']}
              idx={15}
            />
          </h1>
          <div className="contents">
            <div className="box">
              <h4>Nov 2022 - Jan 2023</h4>
              <h2>App Support Intern</h2>
              <h3>ClubRealz Limited</h3>
              <p className="para">
                Reported and helped with bug fixes, ensuring quick and efficient
                resolution of technical issues while documenting and tracking
                the problem resolutions.
              </p>
            </div>

            <div className="box">
              <h4>Aug 2022 - Nov 2022</h4>
              <h2>Web Developer Intern</h2>
              <h3>DTU USIP</h3>
              <p className="para">
                Completely restructured the Student portal and Faculty portal
                using React JS with fee payment functionality and marks entry
                platform.
              </p>
            </div>

            <div className="box">
              <h4> Dec 2021 - April 2022</h4>
              <h2>Java DSA Teaching Assistant Intern</h2>
              <h3>Coding Ninjas</h3>
              <p className="para">
                Resolved & evaluated more than 600 doubts & projects on DSA &
                OOPS in Java with average doubt resolution rating above 4.75/5.
              </p>
            </div>
          </div>
        </div>

        {/* Skills Spin Cube */}
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJava} color="#E11C23" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default About
