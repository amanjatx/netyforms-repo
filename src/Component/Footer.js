import React from 'react'
import styles from '../CSS/style.module.css';
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
