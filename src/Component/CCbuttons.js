import React from 'react'
import Button from '@material-ui/core/Button';

const buttonStyleDiv = {
    display : "flex",
    justifyContent: "center",
    paddingBottom : '20px',
    flexDirection : 'column',
    height : '300px'
}
const buttonStyle = {
    width : '70%',
    alignSelf : 'center',
    margin : '3% 0px',
    padding : '15px 0px',
    opacity : '90%',
    textTransform: 'none',
    fontFamily: "'Open Sans', sans-serif",
    backgroundColor : '#ffffe6'
}

const buttonTitle = ['Create Poll','Customize Form', 'Take Survey']
const buttonTitleMap = buttonTitle.map( (title) =>
    <Button variant="contained" style={buttonStyle}>{title}</Button>
)
function Content() {
    return (
        <div style = {buttonStyleDiv}>
            {buttonTitleMap}
        </div>
    )
}

export default Content
