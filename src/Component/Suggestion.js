import React from 'react'
import styles from '../CSS/blog.module.css';
import AuthorDp from './AuthorDp';
import img from '../Images/image1.jpg'

function Suggestion() {
    return (
        <section className={styles.SgsCard}>
            <div className={styles.SgsCardHeader}>
                <div className={styles.SgsCardHeaderAuthorDp}>
                    <AuthorDp height='40' width='42'></AuthorDp>
                </div>
                <div className={styles.SgsCardHeaderHeading}>
                    <label>How to Make YourSelf Unvisible</label>
                </div>
            </div>
            <div className={styles.SgsCardImage}>
                <div className={styles.SgsImage}>
                    <img src={img}  height='120' width='250' alt='blogimage'></img>
                </div>
            </div>
        </section>
    )
}

export default Suggestion
