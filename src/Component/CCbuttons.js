import React from 'react'
// import styles from '../CSS/style.module.css';
import Button from '@material-ui/core/Button';

const buttonStyleDiv = {
    display : "flex",
    justifyContent: "center",
    padding : '5% 0%',
    flexDirection : 'column'
}
const buttonStyle = {
    width : '70%',
    alignSelf : 'center',
    margin : '5px 0px',
    padding : '15px 0px',
    opacity : '90%',
    textTransform: 'none',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor : '#ffffe6',
    boxShadow : ' 2px 3px 0px #ABABA7'
}

function Content() {
    return (
        <div style = {buttonStyleDiv}>
            <Button variant="contained" style={buttonStyle}>Create Poll</Button>
            <Button variant="contained" style={buttonStyle}>Customize Form</Button>
            <Button variant="contained" style={buttonStyle}>Take Survey</Button>
        </div>
    )
}

export default Content
