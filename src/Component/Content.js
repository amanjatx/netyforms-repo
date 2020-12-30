import React from 'react'
import styles from '../CSS/style.module.css';
function Content() {
    return (
        <div className={styles.contentClass}>
            <div className={styles.ccquicklines}>
                <p style={{fontSize : "25px"}}>Information is Wealth</p>
                <p style={{fontSize : "15px"}}>Ask Anything, from anywhere</p>
            </div>
        </div>
    )
}

export default Content
