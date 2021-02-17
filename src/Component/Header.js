import React from 'react';
import styles from '../CSS/header.module.css'
import Sidebar from './Sidebar.js'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <section className={styles.header}> 
            <Sidebar/>
            <div className={styles.logo}>
                <Link to='/' className={styles.link}>LoveCalcy</Link>
            </div>
        </section>
    )
}

export default Header
