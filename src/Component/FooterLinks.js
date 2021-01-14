import React from 'react'
import styles from '../CSS/style.module.css';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function FooterLinks() {
    return (
        <div className={styles.footerLinks}>
            <Link to='/aboutus'>About Us</Link>
            <Link color="grey">Contact Us</Link>
            <Link color="grey">Privacy Policy</Link>
        </div>
    )
}

export default FooterLinks
