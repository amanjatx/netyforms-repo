import { Divider, Button } from '@material-ui/core'
import React from 'react';
import styles from '../CSS/blog.module.css';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ReplyRoundedIcon from '@material-ui/icons/ReplyRounded';
import img from '../Images/image1.jpg'
import Suggestion from '../Component/Suggestion'
import AuthorDp from '../Component/AuthorDp'
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';
import { Link } from 'react-router-dom'

function TempBlogPage() {
    return (
        <div className={styles.blog}>
            <div className={styles.section1}>
                <div>
                    <label className={styles.path}>
                        Home / Blog /
                    </label> 
                </div>
                <div>
                    <Link className={styles.link} to=''>Edit</Link>
                    <Link className={styles.link} to=''>Report</Link>
                    <Link className={styles.link} to=''>Suggest</Link>
                </div>
       
            </div>
            
            <div className={styles.metaData}>
                <div className={styles.authorSection}>
                    <AuthorDp height='56' width='55'></AuthorDp>
                    <div className={styles.authorMeta}>
                        <i><b><a style={{textDecoration : 'none'}}href='https://twitter.com/amanjat261'>Aman Jat</a></b></i>
                        <i>01 January 2021</i>
                        <span>
                            <span className={styles.timelogo}><QueryBuilderRoundedIcon fontSize='small'/></span>
                            <label> 2 min</label>
                        </span>
                    </div>
                </div>

                <div className={styles.responseSection}>
                    <div className={styles.likeDiv}>
                        <span className={styles.icon}><VisibilityRoundedIcon className={styles.SgsStaticons} fontSize='small'/></span>
                        <span className={styles.count}>0</span>
                    </div>
                </div>
            </div>

            <h1 className={styles.heading}>
                    How to Earn Money Online 2021
            </h1>
            <div className={styles.blogImage}>
            <img src={img}  height='200' width='350' alt='blogimage'></img>
            </div>
            
            <p className={styles.para}>So, if you are looking to start making more money or if you want a new career path that lets you earn money from home, this list is especially for you.
                Over the past year I have been able to interview several people who are making money working from home. They are doing their own thing, and they are rocking at life.
                Hopefully, you had the chance to read their interviews on my blog, but in case you missed any of them, this post rounds them all up for you.
                This round-up includes everything from selling on Amazon, teaching English, becoming a cooking instructor, flipping items for profits, and more! If you’re wondering “How can I earn money working from home?”, then this is for you.
            </p>
            <div className={styles.blogBottom}>
                <Button className={styles.blogBottomButton}>
                    <div className={styles.blogBottomButtonInside}>
                            <ThumbUpAltRoundedIcon className={styles.blogButtonIcon} fontSize='large'/>
                            <label className={styles.blogButtonLabel}>Like</label>
                            <label className={styles.blogButtonStat}>+54</label>
                    </div>
                </Button>

                <Button className={styles.blogBottomButton}>
                    <div className={styles.blogBottomButtonInside}>
                            <ReplyRoundedIcon className={styles.blogButtonIcon} style={{transform: 'scale(-1, 1)'}} fontSize='large' />
                            <label className={styles.blogButtonLabel}>Share</label>
                            <label className={styles.blogButtonStat}>+25</label>
                    </div>
                </Button>
            </div>
            <span style={{margin:'20px'}}><Divider></Divider></span>
            
            <label><b>Related Articles : </b></label>
            <div className={styles.SuggestionSection}>
                <Suggestion />
            </div>
            
        </div>
    )
}

export default TempBlogPage