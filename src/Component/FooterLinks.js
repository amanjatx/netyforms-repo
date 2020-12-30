import React from 'react'
import styles from '../CSS/style.module.css';
import Link from '@material-ui/core/Link';

function FooterLinks() {
    return (
        <div className={styles.footerLinks}>
            <Link color="grey">About Us</Link>
            <Link color="grey">Contact Us</Link>
            <Link color="grey">Privacy Policy</Link>
        </div>
    )
}

export default FooterLinks
