import React from 'react'
import {Grid, Button, Paper, TextField, FormControl} from '@material-ui/core'
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
})

function CCBox() {
    const classes = useStyles();
    return (
        <>
        {/* <Button variant='outlined' color='primary'>Hello</Button> */}
        <Paper classes={classes}>
            <FormControl>
                <TextField id="standard-basic" label='Your Name Here'/>
                {/* <Button variant='outlined' color='primary'>Hello</Button> */}
            </FormControl>
        </Paper>
        </>
    )
}

export default CCBox
