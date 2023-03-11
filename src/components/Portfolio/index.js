import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import portfolioData from '../../data/portfolio.json'
// import { getDocs, collection } from 'firebase/firestore'
// import { db } from '../../firebase'

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const [portfolio, setPortfolio] = useState([])

  let timer1 = setTimeout(() => setLetterClass('text-animate-hover'), 3000)
  useEffect(() => {
    return () => {
      clearTimeout(timer1)
    }
  }, [letterClass])

  //   useEffect(() => {
  //     getPortfolio()
  //   }, [])

  //   const getPortfolio = async () => {
  //     const querySnapshot = await getDocs(collection(db, 'portfolio'))
  //     setPortfolio(querySnapshot.docs.map((doc) => doc.data()))
  //   }

  const renderPortfolio = (portfolio) => {
    return (
      <div className="images-container">
        {/* {portfolio.map((port, idx) => {
          // project mapping
          return (
            <div className="image-box" key={idx}>
              <img
                src={require('../../assets/images/codepal.jpg')}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.name}</p>
                <h4 className="description">{port.description}</h4>
                <button className="btn" onClick={() => window.open(port.url)}>
                  View
                </button>
              </div>
            </div>
          )
        })} */}

        <div className="image-box">
          <img
            src={require('../../assets/images/codepal.jpg')}
            className="portfolio-image"
            alt="portfolio"
          />
          <div className="content">
            <p className="title">Codepal</p>
            <h4 className="description">ReactJS, NodeJS, Socket.io</h4>
            <button
              className="btn"
              onClick={() =>
                window.open('https://codepal-realtime.netlify.app/')
              }
            >
              View
            </button>
          </div>
        </div>

        {/* ---------------- */}

        <div className="image-box">
          <img
            src={require('../../assets/images/nft.jpg')}
            className="portfolio-image"
            alt="portfolio"
          />
          <div className="content">
            <p className="title">NFT Marketplace</p>
            <h4 className="description">Solidity, NextJS, Hardhat</h4>
            <button
              className="btn"
              onClick={() =>
                window.open(
                  'https://github.com/ron2111/NFT-Marketplace-Smart-Contract'
                )
              }
            >
              View
            </button>
          </div>
        </div>

        {/* ------------------ */}

        <div className="image-box">
          <img
            src={require('../../assets/images/startlet.jpg')}
            className="portfolio-image"
            alt="portfolio"
          />
          <div className="content">
            <p className="title">Startlet Website</p>
            <h4 className="description">HTML, CSS, JS, Bootstrap</h4>
            <button
              className="btn"
              onClick={() => window.open('https://startlet.in/')}
            >
              View
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Portfolio'.split('')}
            idx={15}
          />
        </h1>
        <div>{renderPortfolio(portfolioData.portfolio)}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Portfolio
