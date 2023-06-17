import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Traveler template</title>
        <meta property="og:title" content="Traveler template" />
      </Helmet>
   
    </div>
  )
}

export default Home
