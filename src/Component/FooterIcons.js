import React from 'react'
import styles from '../CSS/style.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


function FooterIcons() {
    return (
        <div className={styles.flexContainerIcons}>
            <div><FacebookIcon /></div>
            <div><InstagramIcon /></div>
            <div><TwitterIcon /></div>
            <div><YouTubeIcon /></div>
            <div><LinkedInIcon /></div>
            
        </div>
    )
}

export default FooterIcons
