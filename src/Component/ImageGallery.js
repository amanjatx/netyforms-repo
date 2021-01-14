import React from 'react'
import image from '../Images/amanjat.jpg'

const ImageDiv = {
    // backgroundColor : 'red',

    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    color : 'white',
    fontFamily: `'Quicksand', sans-serif`,
    padding : '10px 0 10px 0',
}
const imageStyle = {
    borderRadius : '20px',
}
const labelPost = {
    fontSize : '80%',
    paddingTop : '10px',
    color : 'whitesmoke'
}
const labelName = {
    fontSize : '130%',
    padding :'10px 0',
}
function ImageGallery() {
    return (
        <div style={ImageDiv}>
            <img src={image} height="300" width='250' style={imageStyle}></img>
            <label style={labelPost}>Frontend Designer &amp; Logics</label>
            <label style={labelName}>Aman Jat</label>
        </div>
    )
}

export default ImageGallery
