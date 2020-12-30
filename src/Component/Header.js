import React from 'react'
import styles from '../CSS/style.module.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Logo from './logo';
import ProfilePhoto from "./profilePhoto";

export default function Header() {
    return (
            
             <div className={styles.headerClass}>
                 <span className={styles.menuBar}><MenuRoundedIcon /></span>
                 <Logo />
                 <ProfilePhoto />
             </div>
    )
    }

