import React from 'react'

const ccQuickLinesDiv = {display: 'flex', flexDirection: 'column', paddingTop : '6%'}
const ccQuickLine1 = { 
    textAlign : "center", 
    margin : '2px 0px',
    fontSize : "25px",
    fontFamily: "'Pacifico', cursive",
    color : '#E84F69'  //#ff00ff
}
const ccQuickLine2 = { 
    textAlign : "center", 
    margin : '2px 0px',
    fontSize : "13px", 
    fontFamily: "'Open Sans', sans-serif", 
    opacity : '0.7',
    color : '#DE667B'
}

function CCquicklines() {
    return (
            <div style={ccQuickLinesDiv}>
                <p style={ccQuickLine1} >Check Your Love Percentage</p>
                <p style={ccQuickLine2}>"but something can never be calculated"</p>
            </div>
    )
}

export default CCquicklines
