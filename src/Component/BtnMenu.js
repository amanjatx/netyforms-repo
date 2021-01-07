import React from 'react'
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Button from '@material-ui/core/Button';

// styles are defined below
// TOGGLE METHOD come with props
function BtnMenu(props) {
    return (
        <>
        <Button variant="contained" style={menuBtn} onClick={props.toggle}>
            <MenuRoundedIcon />
        </Button> 
        </>
    )
}

export default BtnMenu


const menuBtn = {
    backgroundColor : 'transparent',
    boxShadow : 'none',
}