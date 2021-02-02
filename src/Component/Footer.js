import React from 'react'
import FooterIcons from './FooterIcons.js'
import FooterLinks from './FooterLinks.js'
import styles from '../CSS/footer.module.css'

function Footer() {
    return (
        <div className={styles.footerDiv}>
            <FooterIcons />
                <hr></hr> {/* for a grey horizontal line */}
            <FooterLinks />
        </div>
    )
}

export default Footer

