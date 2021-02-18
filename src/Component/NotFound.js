import React from 'react'
import styles from '../CSS/style.module.css'
function NotFound() {
    return (
        <div className={styles.nodata}>
            <span><label style={{fontSize : '50px', color : 'pink'}}>404</label></span>
            <span className={styles.nodataHeading}><label>No Data Found</label></span>
            <span className={styles.nodataDetailPara}><label>There is some error with this page. Please try after some time
            </label></span>
        </div>
    )
}

export default NotFound
