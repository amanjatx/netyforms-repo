import React from 'react'
import styles from '../CSS/footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function FooterIcons() {
    return (
        <div className={styles.flexContainerIcons}>
            <div>
                <a className={styles.iconLink} href='https://www.facebook.com/akshaykumarofficial/'><FacebookIcon /></a></div>
            <div>
                <a className={styles.iconLink} href='https://www.instagram.com/akshaykumar'><InstagramIcon /></a></div>
            <div>
                <a className={styles.iconLink} href='https://www.twitter.com/amanjat261'><TwitterIcon /></a></div>
            <div>
                <a className={styles.iconLink} href='https://www.youtube.com/eduvellari'><YouTubeIcon /></a></div>
            <div>
                <a className={styles.iconLink} href='https://www.linkedin.com/'><LinkedInIcon /></a></div>     
        </div>
    )
}

export default FooterIcons
