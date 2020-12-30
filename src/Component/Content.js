import React from 'react'
import styles from '../CSS/style.module.css';
import background from '../Images/backimg.jpg';
import CCbuttons from './CCbuttons.js'



function Content() {
    return (
        <div style={{ backgroundImage: `url(${background})` }} className={styles.contentClass}>
            <div className={styles.ccquicklines}>
                <p style={{fontSize : "25px"}}>Information is Wealth</p>
                <p style={{fontSize : "15px", fontFamily: "'Open Sans', sans-serif"}}>Ask Anything, from anywhere</p>
            </div>
            <CCbuttons />
        </div>
    )
}

export default Content
