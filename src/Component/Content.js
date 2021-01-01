import React from 'react'
import styles from '../CSS/style.module.css';
import background from '../Images/backimg.jpg';
import CCbuttons from './CCbuttons.js'

const ccTop = {
    color : 'rgb(255, 255, 255)',
    backgroundImage: `url(${background})`
}
const ccQuickLines = {
    // fontFamily: Pacifico', cursive',
    /* background-color: rgb(166, 166, 250); */
    display: 'flex',
    flexDirection: 'column',
}

function Content() {
    return (
        <div style={ccTop} >
            <div className={ccQuickLines}>
                <p style={{fontSize : "25px"}}>Information is Wealth</p>
                <p style={{fontSize : "15px", fontFamily: "'Open Sans', sans-serif"}}>Ask Anything, from anywhere</p>
            </div>
            <CCbuttons />
        </div>
    )
}

export default Content
