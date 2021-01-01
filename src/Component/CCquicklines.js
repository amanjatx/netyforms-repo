import React from 'react'

const ccQuickLinesDiv = {display: 'flex', flexDirection: 'column', paddingTop : '6%'}
const ccQuickLine1 = { textAlign : "center", margin : '2px 0px',fontSize : "25px", fontFamily: "'Pacifico', cursive" }
const ccQuickLine2 = { textAlign : "center", margin : '2px 0px',fontSize : "15px", fontFamily: "'Open Sans', sans-serif"}

function CCquicklines() {
    return (
            <div style={ccQuickLinesDiv}>
                <p style={ccQuickLine1} >Information is Wealth</p>
                <p style={ccQuickLine2}>Ask Anything, from anywhere</p>
            </div>
    )
}

export default CCquicklines
