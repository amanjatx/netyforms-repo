import React from 'react'
import image from '../Images/blogdp.jpg';
import styles from '../CSS/blog.module.css';

function AuthorDp(props) {
    return (
        <>
            <div className={styles.authorDp}>
                <img src={image} height={props.height} width={props.width} className={styles.authorDpImage} alt={'dp'}></img>
            </div>
        </>
    )
}

export default AuthorDp
