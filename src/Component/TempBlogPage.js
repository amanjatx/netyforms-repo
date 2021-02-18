import { Divider } from '@material-ui/core'
import React from 'react';
import styles from '../CSS/blog.module.css';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';

function TempBlogPage() {
    return (
        <div className={styles.blog}>
            <span className={styles.upperArea}></span>
            <span className={styles.path}>
                <label>
                    Home > Blog >
                </label>
            </span>
            <h1 className={styles.heading}>How to Earn Money Online 2021</h1>
            
            <Divider></Divider>
            <span className={styles.metaData}>
                <label className={styles.authorMeta}>
                    <i>Aman Jat</i>
                    <i>01 January 2021</i>
                    <span>
                        <span style={{backgroundColor : 'red'}}><AccessTimeRoundedIcon /></span>
                        <span style={{backgroundColor : 'blue'}}> 2 min</span>
                    </span>
                </label>
            </span>
            <Divider></Divider>
            <p>So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you.
                Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life.
                Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you.
                This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you’re wondering “How can I earn money working from home?”, then this is for you.
            </p>
        </div>
    )
}

export default TempBlogPage
