import React, { useState } from 'react';
import styles from '../CSS/style.module.css'
import avatar from '../Images/avatar.png'
import SideNav from './SideNav.js';
import BtnMenu from './BtnMenu';


function Header2() {
    const [sideNavState, changeState] = useState('close');
    const sideNav = {
        color : 'white',
        backgroundColor : 'rgb(44,44,44)',
        position : 'fixed',
        zIndex : '2',
        width: sideNavState==='close' ? '0%' : '100%',
        opacity : sideNavState === 'close' ? '0' : '1',
        height : '100%',
        // left : sideNavState=='open'? '' :'-100%',
        transition : '0.5s',
    }
    const toggle = () => {
        changeState(sideNavState==='close' ? 'open' : 'close')
    }
    return (
        <>
        <SideNav styleprop={sideNav} toggle={toggle}  />

        <div className={styles.HeaderDiv}>
            <div> <BtnMenu toggle={toggle}/> </div>
            <div style={logoDiv}> Netyforms </div>
            <div style={avatarDiv}> <img src={avatar} height={'35px'} alt='avatar icon'></img> </div>
        </div>
        </>
    )
}

export default Header2
const logoDiv = {
    fontFamily: "'Permanent Marker', cursive",
    display : 'flex',
    justifyContent : 'center',
    fontSize : '130%', }
const avatarDiv = {
    display : 'flex',
    justifyContent : 'flex-end',
    paddingRight : '10px',
}
