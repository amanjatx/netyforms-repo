import React from 'react'
import {Grid, Button, Paper, TextField} from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import { FullscreenExit } from '@material-ui/icons';

const paperstyle = {
    padding : '10px',
    margin : '10px',
}

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

const theme = createMuiTheme ({
    palette : {
        primary : {
            main : '#d9d9d9'
        }
    },
    typography : {
        fontSize : 14,
    },
    overrides : {
        MuiInputBase : {
            label : 'Your Text Here'
        }
    }
 })

function CCBox() {
    const classes = useStyles();
    return (
        <div>
            <ThemeProvider theme={theme}>
                <Paper variant="outlined" elevation={3} classes={{ root : classes.root }} >
                    <TextField id="standard-basic" label="Standard" />
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default CCBox
