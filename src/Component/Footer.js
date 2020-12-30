import React from 'react'
import styles from '../CSS/style.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
function Footer() {
    return (
        <div className={styles.footerClass}>
            <FacebookIcon />
            <p>About Us</p>
            <p>Contact Us</p>
            <p>Privacy Policy</p>
        </div>
    )
}

export default Footer
