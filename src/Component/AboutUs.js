import React from 'react'
import {Paper} from '@material-ui/core'
import ImageGallery from './ImageGallery'
function AboutUs() {
    return (
    <div style={GrandDiv}>
        <div style={HeadingDiv}>
            <h1>About Us</h1>
        </div>
        <div style={Heading2Div}>
            <h2>LoveCalcy</h2>
        </div>
        <div style={LabelDiv}>
            <label><strong>LoveCalcy</strong> is a website that calculates the love percentage 
            between two people through the algorithm based on character or letter of name. This website is
            developed and designed by Aman Jat and Jasmeet Kaur Dhariwal. For more information please contact
            us.</label>
        </div>

        <div style={Heading2Div}>
            <h2>Our Team</h2>
        </div>

        <ImageGallery>

        </ImageGallery>
    </div>
    )
}







const GrandDiv = {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
}
const HeadingDiv = {
    display : 'flex',
    justifyContent : 'flex-start',
    padding: '0 15%',
    alignItems : 'center',
    fontFamily: `'Quicksand', sans-serif`,
    color : 'white'
}
const Heading2Div = {
    display : 'flex',
    justifyContent : 'flex-start',
    padding: '0 7%',
    alignItems : 'center',
    fontFamily: `'Quicksand', sans-serif`,
    color : '#333333'
}
const LabelDiv = {
    display : 'flex',
    justifyContent : 'flex-start',
    padding: '12px',
    alignItems : 'center',
    fontFamily: `'Quicksand', sans-serif`,
    fontSize : '90%',
    color : 'whitesmoke'
}
export default AboutUs
