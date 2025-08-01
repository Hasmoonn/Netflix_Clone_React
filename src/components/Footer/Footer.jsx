import React from 'react'
import './Footer.css'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'

const Footer = () => {
  const today = new Date()
  const year = today.getFullYear()

  return (
    <div className='footer'>
      <div className="footer-icons">
        <img src={facebook_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={youtube_icon} alt="" />
      </div>

      <ul>
        <li>Audio Description</li>
        <li>He1p Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>lnvestor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>

      <p className='copyright-text'>
        &copy; 1997 - {year} Netflix, Inc.
      </p>
    </div>
  )
}

export default Footer