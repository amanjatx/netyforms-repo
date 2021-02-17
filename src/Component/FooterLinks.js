import React from 'react'
import styles from '../CSS/footer.module.css';
import { Link } from 'react-router-dom'

function FooterLinks() {
    return (
        <div className={styles.links}>
            <div><Link className={styles.link} to='/aboutus'>About Us</Link></div>
            <div><Link className={styles.link} to='/contactus'>Contact Us</Link></div>
            <div><Link className={styles.link} to='/privacypolicy'>Privacy Policy</Link></div>
        </div>
    )
}

export default FooterLinks
