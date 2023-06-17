"use client"
import { Box, Typography } from '@mui/material'
import React from 'react'
import Btn from '../Btn/Btn'
import Script from 'next/script'
import './style.css'
const Footer = () => {
  return (
    <>
      
      <section id="find" className="home-find">
        <div className="home-heading">
          <h2 className="home-header">Find a local guide now</h2>
          <p className="home-caption">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
        <button className="home-find1 button">Find a local guide</button>
      </section>
      <section className="home-footer">
        <div className="home-content">
          <div className="home-main">
            <div className="home-branding">
              <div className="home-heading1">
                <img alt="image" src="/logo.svg" className="home-image" />
                <p className="home-caption1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore
                </p>
              </div>
            </div>
            <div className="home-links">
              <div className="home-items">
                <button className="home-link button button-clean">
                  Find a guide
                </button>
                <button className="home-link01 button button-clean">
                  Find a tour
                </button>
                <button className="home-link02 button button-clean">
                  Visit a city
                </button>
                <button className="home-link03 button button-clean">
                  Visit a country
                </button>
              </div>
              <div className="home-items1">
                <button className="home-link04 button button-clean">
                  How it works
                </button>
                <button className="home-link05 button button-clean">
                  Cancelation policy
                </button>
                <button className="home-link06 button button-clean">
                  Local guides
                </button>
                <button className="home-link07 button button-clean">
                  Affiliate
                </button>
              </div>
              <div className="home-items2">
                <button className="home-link08 button button-clean">
                  About us
                </button>
                <button className="home-link09 button button-clean">
                  Blog
                </button>
                <button className="home-link10 button button-clean">
                  Partners
                </button>
                <button className="home-link11 button button-clean">
                  Faqs
                </button>
                <button className="home-link12 button button-clean">
                  Careers
                </button>
              </div>
            </div>
          </div>
          <span className="home-copyright">
            © 2022 Character. All Rights Reserved.
          </span>
        </div>
      </section>
      <div>
     
      </div>
 
  </>
  )
}

export default Footer