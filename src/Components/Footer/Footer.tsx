"use client"
import Link from 'next/link';
import {Typography , Box, Divider } from '@mui/material'
import './style.css'
import SMicons from '../SMicons/SMicons';
// import SMicons from './SMicons';
// // import Logo from '../../assets/icons/logo';


const Footer = () => (
  <footer className="site-footer " style={{color:'black',background:'white'}}>
    <div className="container " style={{color:'black',background:'white'}}>
      <div className="site-footer__top ">
        <div className="site-footer__description">
          <div className='logos cursor'>

            <Link href="/">
              {/* <a><h1 className="site-logo"><Logo />E-Shop</h1></a> */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675357773/logo_ghli5e.jpg */}
              {/* https://res.cloudinary.com/dwxm8f25f/image/upload/v1675713948/logo_sktnut_1_jwy2hk.png */}
            <img className='img ' src='https://ucarecdn.com/46a52749-a6f7-40f1-932c-d7a98074c48c/WhatsAppImage20230922at1306531.jpeg' alt="Pets Town Lebanon Logo" />
            </Link>
          </div>
          <Typography component='h1' sx={{ fontSize: '.95em',color:"2b2b2b" }}  className='footer-p '>
          Welcome to Truenatureblend, your one-stop-shop for all your health and wellness needs. Discover our premium selection of natural supplements including ashwagandha, tongkat ali, cordyceps mushroom, lion manes mushroom, and more.
          </Typography>
          {/* <SMicons/> */}

          {/* <ul className="site-footer__social-networks">
          <li><a href="https://www.facebook.com/profile.php?id=100063581229923" rel="noreferrer" target='_blank'><i className="icon-facebook"></i></a></li>
        <li><a href="#"><i className="icon-twitter"></i></a></li>
          <li><a href="#"><i className="icon-linkedin"></i></a></li>
          <li><a href={`${process.env.NEXT_PUBLIC_INSTA}`}rel="noreferrer" target='_blank' ><i className="icon-instagram"></i></a></li>
          <li><a href="#"><i className="icon-youtube-play"></i></a></li>
        </ul> */}
        </div>

        <div className="site-footer__links ">
        {/* <div>
        <iframe style={{height:'100%',width:'100%',border:0}} frameBorder="0" src="https://www.google.com/maps/embed/v1/place?q=Beirut,+Lebanon&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
        </div> */}
          <ul className=' ul-white'>
            <li className='link-title'>Site links</li>
            <li><Link  href="/">Home</Link></li>
            <li><Link href="/collection/products">All Products</Link></li> 
            <li><Link href="/cart">Cart</Link></li>
            <li><Link href="/checkout">checkout</Link></li>
            <li><Link href="https://wa.me/+96176983550">Contact Us</Link></li>
          </ul>
     
          <ul  className='ul-white' style={{color:'black'}}>
            <li className='link-title'>Contact</li>
            {/* <li><Link href="mailto:sales@thecraftroom-lb.com">sales@petstown.com</Link></li> */}
            
            {/* <li><a href="https://www.facebook.com/profile.php?id=100076163602459/" target="_blank" rel="noreferrer" >Facebook</a></li> */}

            <li><a href="https://www.instagram.com/truenatureblend/" target="_blank" rel="noreferrer" >@truenatureblend</a></li>
            <li><a href={`https://wa.me/${process.env.NEXT_PUBLIC_WA}`} rel="noreferrer" target='_blank' >+{process.env.NEXT_PUBLIC_WA}</a></li>
            {/* <li><a href={`http://tiktok.com/@thecraftroomlb`} rel="noreferrer" target='_blank' >TikTok</a></li> */}
          </ul>
        </div>
  
      </div>
    </div>

    <div className="site-footer__bottom " style={{color:'black',borderTop:"1px solid #0000001f"}}>
      <div className="container " style={{color:'black'}}>
        <p>Website Developed By{' '}
          <a style={{ color: 'black' }} href={`${'https://www.onbeirut.com'}`}>OnBeirut Agency </a></p>
      </div>
    </div>
  </footer>
);


export default Footer

