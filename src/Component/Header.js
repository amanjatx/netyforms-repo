import React, { useState } from 'react';
import styles from '../CSS/style.module.css'
import SideNav from './SideNav.js';
import BtnMenu from './BtnMenu';
import { Link } from 'react-router-dom'

function Header() {
    const [sideNavState, changeState] = useState('close');
    const sideNav = {
        color : 'white',
        backgroundColor : '#282828',
        position : 'fixed',
        zIndex : '2',
        width: sideNavState==='close' ? '0%' : '100%',
        opacity : sideNavState === 'close' ? '0' : '1',
        height : '100%',
        transition : '0.5s',
    }
    const toggle = () => {
        changeState(sideNavState==='close' ? 'open' : 'close')
    }
    return (
        <>
 {/* <SideNav styleprop={sideNav} toggle={toggle}  /> */}

        <div className={styles.HeaderDiv}>
            <div> <BtnMenu toggle={toggle}/> </div>
            <div style={logoDiv}>
                <Link to='/' style={{textDecoration : 'none'}}>LoveCalcy</Link>
            </div>
        </div>
        </>
    )
}

export default Header

const logoDiv = {
    fontFamily: "'Permanent Marker', cursive",
    display : 'flex',
    justifyContent : 'center',
    fontSize : '130%', 
    color : '#333333',
}

