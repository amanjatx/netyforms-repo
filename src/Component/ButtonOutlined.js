import React from 'react'
import {Button} from '@material-ui/core'
import styles from '../CSS/com.module.css'

function ButtonOutlined(props) {
    return (
        <>
            <Button onClick={props.method} 
                    variant='outlined' 
                    // classes={{root : classes.rootButton}} 
                    className={styles.ButtonOutlined}
                    title={props.title}> 
                
                {props.title}
            
            </Button>
        </>
    )
}

export default ButtonOutlined
