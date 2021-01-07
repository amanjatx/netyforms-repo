import React from 'react'


const heading = {
    fontSize : '150%',
}
const para = {
    fontSize : '80%',
    fontFamily: "'Poppins', sans-serif"
}
const cdDiv = {
    backgroundColor :'transparent',
    margin : '0px',
    padding : '50px',
    paddingTop : '30px',
    fontFamily: "'Montserrat', sans-serif",
}
const data = [
    {
        heading : 'Create Polls',
        para : 'Create and share your poll with your friends, students, customers and other people. Gather Information about what they like, get their opinion',
        bgcolor:'#FFCC00',
    },
    {
        heading : 'Customize Your Form',
        para : 'You can customize your own form, like a admission form, entrance exam form or trip form or it could be anything that you want and how you want',
        bgcolor : 'white',
    }
]
const dataMap = data.map((data)=>
    
    <>
    <div style={{...cdDiv, backgroundColor : data.bgcolor}}>
        <h2 style={heading}>{data.heading}</h2>
        <p style={para}>{data.para}</p>
    </div>
    </>
)
function ContentDetail() {
    return (
        <div style={{margin : '0px'}}>
            {dataMap}
        </div>
    )
}

export default ContentDetail
