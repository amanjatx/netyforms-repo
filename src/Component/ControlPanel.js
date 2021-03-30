import React from 'react'
import styles from '../CSS/controlPanel.module.css';
import { Link } from 'react-router-dom'

function ControlPanel() {
    return (
        <div className={styles.ControlPanel}>
            <div>
                <div><Link className={styles.link} 
                    to={'/addblog'}
                    // onClick={}
                    >Add A Blog</Link>
                </div>
                <div>
                    <Link className={styles.link}>Delete A Blog</Link>
                </div>
                <div>
                    <Link className={styles.link}>Edit Requests</Link>
                </div>
                <div>
                    <Link className={styles.link}>Suggestions</Link>
                </div>
                <div>
                    <Link className={styles.link}>Reports</Link>
                </div>
            </div>
        </div>
    )
}

export default ControlPanel
