import React from 'react'
import styles from '../CSS/style.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FooterIcons from './FooterIcons.js'
import FooterLinks from './FooterLinks.js'
function Footer() {
    return (
        <div className={styles.footerClass}>
            <FooterIcons />
            <hr></hr> {/* for a grey horizontal line */}
            <FooterLinks />
        </div>
    )
}

export default Footer
