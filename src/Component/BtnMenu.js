import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    rootBtn : {
        '&>form': { 
            color : 'red',
            backgroundColor :'white'
        },
        backgroundColor : 'transparent',
    }
})

function BtnMenu(props) {
    const classes = useStyles();
    return (
        <>
            <Button title='Side Navigation' variant="contained" classes={{ root : classes.rootBtn}} onClick={props.toggle}>
                <MenuRoundedIcon />
            </Button> 
        </>
    )
    }

export default BtnMenu