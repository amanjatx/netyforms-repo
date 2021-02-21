import { Divider } from '@material-ui/core'
import React from 'react';
import styles from '../CSS/blog.module.css';
import AccessTimeRoundedIcon from '@material-ui/icons/AccessTimeRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import image from '../Images/blogdp.jpg'
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';

function TempBlogPage() {
    return (
        <div className={styles.blog}>
            <div className={styles.section1}>
                <label className={styles.path}>
                    Home > Blog >
                </label>
                <h1 className={styles.heading}>
                    How to Earn Money Online 2021
                </h1>
            </div>

            <Divider></Divider>

            
            <div className={styles.metaData}>
                <div className={styles.authorDp}>
                    <img src={image} height="56" width='55' className={styles.authorDpImage} alt={'dp'}></img>
                </div>

                <div className={styles.authorMeta}>
                    <i>Aman Jat</i>
                    <i>01 January 2021</i>
                    <span>
                        <span className={styles.timelogo}><HourglassEmptyRoundedIcon fontSize='small'/></span>
                        <label> 2 min</label>
                    </span>
                </div>

                <div className={styles.responseSection}>
                    <div className={styles.likeDiv}>
                        <div className={styles.icon}><ThumbUpAltRoundedIcon /></div>
                        <div className={styles.count}>0</div>
                    </div>
                    <div className={styles.likeDiv}>
                        <span className={styles.icon}><ReplyRoundedIcon className={styles.forwardIcon} /></span>
                        <span className={styles.count}>0</span>
                    </div>
                </div>
            </div>

            <Divider></Divider> 
            <p className={styles.para}>So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you.
                Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life.
                Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you.
                This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you’re wondering “How can I earn money working from home?”, then this is for you.
            </p>
        </div>
    )
}

export default TempBlogPage