import React, { useState } from 'react';
import cx from 'classnames'
import {Divider, Button} from '@material-ui/core';
import { Link } from 'react-router-dom'
import '../CSS/sidebar.css'

function Sidebar() {
    const [x, setX] = useState('N')
   
    const hamburgerClass = cx('hamburger', x=='Y'? 'clicked': '')
    const sidebarClass = cx('sidebar', x=='Y' ? 'show' : '')
    const line1 = cx('line', x=='Y'? 'clicked': '', 'line1', )
    const line2 = cx('line', x=='Y'? 'clicked': '', 'line2')
    const line3 = cx('line', x=='Y'? 'clicked': '', 'line3')
    
    const toggle = (e) => { setX(x=='N'?'Y':'N') }

    const data = [
        { title : 'About Us', link : '/aboutus', key : 1 },
        { title : 'Contact Us', link : '/contactus', key : 2 },
         {title : 'Privacy Policy', link : '/notfound', key : 3 }, 
        { title : 'Map', link : '/notfound', key : 4 },
        { title : 'Career', link : '/notfound', key : 5},
        { title : 'Blog', link : '/tempblog', key : 6}
    ]
    const dataMap = data.map( (item) =>
        <li className='item' key={item.key}>
            <Link className='itemLink' to={item.link} onClick={toggle}>{item.title}</Link>
        </li>
    )
    
    return (
        <div>
            <section className='section'>
                <div id='stupid' className={hamburgerClass} onClick={toggle}>
                    <span className={line1}></span>
                    <span className={line2}></span>
                    <span className={line3}></span>
                </div>
                <div className={sidebarClass}>
                    <Divider className='divider'/>
                    <ul className='sidebarItems'>
                        {dataMap}
                    </ul>
                    <Divider className='divider2'/>
                    <label className='logo'> Lovecalcy </label>
                    <label className='bottomLine'> &copy; 2020</label>                   
                </div>
            </section>
        </div>
    )
}

export default Sidebar