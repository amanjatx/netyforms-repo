<<<<<<< HEAD
import React, {Component} from 'react'
import styles from '../CSS/style.module.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Logo from './Logo';
import NavCollapse from './NavCollapase';
import PersonIcon from '@material-ui/icons/Person';

const menuStyle = { 
    padding: '20px',
    cursor: 'pointer',
}

const userIcon = {
  fontSize : '40px',
}

const userDiv = {
    padding: '10px'
}

   class Header extends Component { 
              constructor(props) {
                super(props)
                this.componentRef = React.createRef();
        }
        clickHandler = () => {
            this.componentRef.current.displayDiv();
        } 

        render() {
    return (
            <>
               
             <div className={styles.headerClass}>

             <div style={menuStyle} onClick={this.clickHandler} ><MenuRoundedIcon /> </div>  

                  <Logo />
                  <div style={userDiv}><PersonIcon style={userIcon}/></div>

             </div>
             <NavCollapse ref={this.componentRef} />
            </>
    )
}
   }

 export default Header 
=======
import React, { useState } from 'react';
import styles from '../CSS/header.module.css'
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
            <div> 
                <BtnMenu toggle={toggle}/> 
            </div>
            <div className={styles.logoDiv}>
                <Link to='/' className={styles.link}>LoveCalcy</Link>
            </div>
        </div>
        </>
    )
}

export default Header
>>>>>>> 0741763f57f0932a716d10b8b389d44533a1d775
