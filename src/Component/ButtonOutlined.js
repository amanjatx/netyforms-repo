import React from 'react'
import {Button} from '@material-ui/core'
// import styles from '../CSS/com.module.css'
 // don't know why but style from module is not working
const object1 = {
    margin : `20px 10px`,
    textTransform : `none`,
    fontFamily: `'Quicksand', sans-serif`,
    border : '1px solid white',
    color : 'white',
}
function ButtonOutlined(props) {
    return (
        <>
            <Button onClick={props.method} 
                    variant='outlined' 
                    style={object1}
                    title={props.title}> 
                        
                        {props.title} </Button>
        </>
    )
}

export default ButtonOutlined
