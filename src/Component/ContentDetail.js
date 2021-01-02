import React from 'react'


const heading = {
    fontSize : '150%',
}
const para = {
    fontSize : '80%',
    fontFamily: "'Poppins', sans-serif"
}
const cdDiv = {
    // background : "linear-gradient(to left, #ffffff 56%, #ffff00 150%)",
    backgroundColor :'#ffff00',
    margin : '0px',
    padding : '50px',
    paddingTop : '30px',
    fontFamily: "'Montserrat', sans-serif",
}
function ContentDetail() {
    return (
        <div style={{margin : '0px'}}>
            <div style={cdDiv}>
                <h2 style={heading}>Create Polls</h2>
                <p style={para}>Create and share your poll with your friends, students, customers and other people.
                    Gather Information about what they like, get their opinion
                </p>
            </div>
        </div>
    )
}

export default ContentDetail
