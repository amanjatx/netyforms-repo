import React, {useState} from 'react'
import image from '../Images/amanjat.jpg'
import image2 from '../Images/jass.jpg'
import {Button} from '@material-ui/core'
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';

const ImageDiv = {
    display : 'flex',
    flexDirection : 'column',
    justifyContent : 'center',
    alignItems : 'center',
    color : 'white',
    fontFamily: `'Quicksand', sans-serif`,
    padding : '10px 0 10px 0',
}
const ImageDivInner = {
    display : 'flex',
    flexDirection : 'row',
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
const data = [
    {
        src : image,
        post : 'Frontend Designer & Logics',
        name : 'Aman Jat',
    },
    {
        src : image2,
        post : 'She Does Nothing',
        name : 'Jasmeet Kaur'
    }
]



function ImageGallery() {
    var [index,setIndex] = useState(0);
    const prevIndex = () => setIndex(index==0?0:--index)
    const nextIndex = () => setIndex(index==1?1:++index)
    
    return (
    <div style={ImageDiv}>
        <div style={ImageDivInner}>
            <Button onClick={prevIndex} style={{color: 'white'}} disableFocusRipple={true}><ArrowBackIosRoundedIcon/></Button>
            <img src={data[index].src} height="300" width='250' style={imageStyle} alt={data[index].name}></img>
            <Button onClick={nextIndex} style={{color: 'white'}}><ArrowForwardIosRoundedIcon/></Button>
        </div>
        <label style={labelPost}>{data[index].post}</label>
        <label style={labelName}>{data[index].name}</label>
    </div>
    )
}

export default ImageGallery
