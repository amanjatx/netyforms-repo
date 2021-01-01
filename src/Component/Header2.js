import { FullscreenExit } from '@material-ui/icons'
import React from 'react'
import styles from '../CSS/style.module.css'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import avatar from '../Images/avatar.png'
const iconDiv = {
    paddingLeft : '10px',
} 

const logoDiv = {
    fontFamily: "'Permanent Marker', cursive",
    display : 'flex',
    justifyContent : 'center',
    fontSize : '130%',
}
const avatarDiv = {
    display : 'flex',
    justifyContent : 'flex-end',
    paddingRight : '10px',
}
function Header2() {
    return (
        <div className={styles.HeaderDiv}>
            <div style={iconDiv}>
                <MenuRoundedIcon />
            </div>

            <div style={logoDiv}>
                Netyforms
            </div>

            <div style={avatarDiv}>
                <img src={avatar} height={'35px'}></img>
            </div>
        </div>
    )
}

export default Header2
