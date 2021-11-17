import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Footer.scss';

const Footer = () => (
  <div className="footer">
    <div className="socialMedia">
      <InstagramIcon />
      <TwitterIcon />
      <FacebookIcon />
      <LinkedInIcon />
    </div>
  </div>
);

export default Footer;
