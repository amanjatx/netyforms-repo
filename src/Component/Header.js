import React, {useState} from 'react';
import styles from '../CSS/header.module.css'
import Sidebar from './Sidebar.js'
import { Link } from 'react-router-dom' 

function Header() {
    const [width, setWidth] = useState(window.innerWidth);
    React.useEffect(
        () => {
                const handleResize = () => { setWidth(window.innerWidth); }
                window.addEventListener('resize', handleResize);
        }
    )
    const data = [
        { title : 'About Us', link : '/aboutus', key : 1 },
        { title : 'Contact Us', link : '/contactus', key : 2 },
        { title : 'Privacy Policy', link : '/notfound', key : 3 }, 
        { title : 'Map', link : '/notfound', key : 4 },
        { title : 'Career', link : '/notfound', key : 5},
        { title : 'Blog', link : '/tempblog', key : 6}
    ]
    const dataMap = data.map( (item) =>
        <label><Link to={item.link}>{item.title}</Link></label>
    )
    return (
        <section className={styles.header} > 
                <Sidebar className={styles.sidebar} width={width}/>
                
                <div className={styles.headerLogo}>
                    <Link to='/' className={styles.link}> 
                        LoveCalcy 
                    </Link>
                    
                </div>
                
                <div className={styles.headerOptions} style={{display : width>900 ? 'block' : 'none'}}>
                    {dataMap}
                </div>
        </section>
    )
}

export default Header