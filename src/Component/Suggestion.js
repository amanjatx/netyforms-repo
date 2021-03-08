import React from 'react'
import styles from '../CSS/blog.module.css';
import AuthorDp from './AuthorDp';
import img from '../Images/image1.jpg'
import IconButton from '@material-ui/core/IconButton';
import HourglassEmptyRoundedIcon from '@material-ui/icons/HourglassEmptyRounded';
import QueryBuilderRoundedIcon from '@material-ui/icons/QueryBuilderRounded';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import VisibilityRoundedIcon from '@material-ui/icons/VisibilityRounded';

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
            <div className={styles.SgsImageDiv}>
                <img className={styles.SgsImage} src={img}  height='120' width='250' alt='blogimage'></img>
            </div>
            <div className={styles.SgsStat}>
                <div className={styles.SgsStatBar1}>
                    <div className={styles.SgsStatTime}>
                        <span className={styles.timelogo}><QueryBuilderRoundedIcon fontSize='small'/></span>
                        <label> 2 min</label>
                    </div>
                </div>
                <div className={styles.SgsStatBar2}>
                    <div className={styles.SgsStatStat}>
                        <ThumbUpAltRoundedIcon className={styles.SgsStaticons} fontSize='small'/>
                        550
                        <VisibilityRoundedIcon className={styles.SgsStaticons} fontSize='small'/>
                        1.4k
                    </div>    
                </div>

            </div>
        </section>
    )
}

export default Suggestion
