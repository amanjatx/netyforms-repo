import React from 'react'
import {Grid, Button, Paper, TextField, FormControl, Input} from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import styles from '../CSS/style.module.css'

const useStyles = makeStyles({
    root: {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        padding: '20px 30px',
        margin : '10px 40px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
      input: {
        '&:hover:not(.Mui-disabled):before' : {
            borderBottom : '1px solid rgba(255, 51, 133, 1)' // outer click
        },
        '&:hover:not(.Mui-disabled):after' : {
            border : '1px solid rgba(255, 51, 133, 1)' // animation in 
        },
        '&:before' : {
            borderBottom: '1px solid rgba(255, 204, 224, 0.5)', // normally
        },
        '&:after': {
            borderBottom: '1px solid rgba(255, 51, 133, 1)', //animation out 255, 51, 133
        },
        color : 'rgba(255,255,255, 0.9)',
        padding : '5px 20px',
    }
      
})

function CCBox() {
    const classes = useStyles();
    return (
        <>
        <Paper classes={{ root: classes.root }} >
            <FormControl>
                <Input placeholder='Your Name' classes={{ underline : classes.input}}/>
            </FormControl>
        </Paper>
        </>
    )
}

export default CCBox
