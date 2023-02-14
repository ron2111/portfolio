import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
  useEffect(() => {
    return () => {
      clearTimeout(timer1)
    }
  }, [letterClass])

  // emailjs code
  const sendEmail = (e) => {
    e.preventDefault() // To prevent Default submission

    emailjs
      .sendForm(
        'service_8yagw3l',
        'template_kx8n1au',
        form.current,
        'kRQFquVBiGpfbnTQL'
      )
      .then(
        () => {
          // successful
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          //fail
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in SDE Internship Opportunities - especially on
            ambitious or large projects. However, if you have any other requests
            or questions, don't hesitate to contact me using below form either.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              {/* form : useRef hook */}
              <ul>
                <li className="half">
                  <input placeholder="Name" type="text" name="name" required />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND" />
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
