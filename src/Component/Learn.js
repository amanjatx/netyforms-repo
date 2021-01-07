import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {Button, Paper} from '@material-ui/core'
import { green, orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette: {
        primary : {
            light : '#ffff99',
            main : '#ffa500',
            dark : '#e69500',
            contrastText : '#0d0d0d'
        },
        secondary : {
            main : green[200],
        },
    },

    typography : {
        fontFamily : 'Comic Sans MS',
        button : {
            fontSize : 12
        }
    },
    spacing : {
        MuiButton : {
            spacing : 16,
        }
    }
})

function Learn() {
    return (
        <div style={{margin :'20px'}}>
            <ThemeProvider theme={theme}>
                <Paper elevation={3} style={{padding : '20px'}}>
                    <Button color='primary'>Primary</Button>
                    <Button variant='contained' color='primary'>Primary and Contained</Button>
                    <Button variant='contained' color='secondary'>Hit Me</Button>
                </Paper>
            </ThemeProvider>
        </div>
    )
}

export default Learn
