import React from 'react'
import {Divider} from '@material-ui/core'
import styles from '../CSS/style.module.css'
import ImageGallery from './ImageGallery'

function AboutUs() {
    return (
    <div className={styles.aboutUsDiv}>
        <div className={styles.asHeadingDiv}>
            <h1>About Us</h1>
        </div>
        
        <Divider className={styles.divider2}/>
        <div className={styles.asHeading2Div} >
            <h2>LoveCalcy</h2>
        </div>
        <div className={styles.labelDiv}>
            <label><strong>LoveCalcy</strong> is a website that calculates the love percentage 
            between two people through the algorithm based on character or letter of name. This website is
            developed and designed by Aman Jat and Jasmeet Kaur Dhariwal. For more information please contact
            us.</label>
        </div>

        <Divider className={styles.divider2}/>
        <div className={styles.asHeading2Div}>
            <h2>Our Team</h2>
        </div>

        <ImageGallery />
    </div>
    )
}

export default AboutUs
