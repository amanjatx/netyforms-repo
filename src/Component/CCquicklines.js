import React from 'react'
import styles from '../CSS/style.module.css'

const ccQuickLine1 = { 
    textAlign : "center", 
    margin : '2px 0px',
    fontSize : "25px",
    fontFamily: "'Pacifico', cursive",
    color : '#ff00ff',
    textShadow :'5px 5px 10px whitesmoke'
}
const ccQuickLine2 = { 
    textAlign : "center", 
    margin : '2px 0px',
    fontSize : "13px", 
    fontFamily: "'Quicksand', sans-serif", 
    opacity : '0.7',
    color : 'White'
}


function CCquicklines() {
    return (
            <div className={styles.QuicklinesDiv}>
                <p style={ccQuickLine1}>Check Your Love Percentage</p>
                <p style={ccQuickLine2}><q>but something can never be calculated</q></p>
            </div>
    )
}

export default CCquicklines
