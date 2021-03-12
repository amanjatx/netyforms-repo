import React from 'react'
import styles from '../CSS/controlPanel.module.css';
import { Link } from 'react-router-dom'
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
function AddBlog() {
    return (
        <div className={styles.ControlPanel}>
            <div>
                <div className={styles.X1Row}>
                    <div className={styles.X1Field1}>
                        <label> Heading : </label>
                    </div>
                    <div className={styles.X1Field2}>
                        <input className={styles.input}></input>
                    </div>
                </div>
                <div className={styles.X1Row}>
                    <div className={styles.X1Field1}>
                        <label> Para : </label>
                    </div>
                    <div className={styles.X1Field2}>
                        <textarea className={styles.textarea}></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
