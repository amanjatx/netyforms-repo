import React from 'react'
import CCquicklines from './CCquicklines';
//import CCBox from './CCBox'
import ResultBox from './ResultBox'
const ccTop = { 
    paddingBottom : '36px',
}

function Content() {
    return (
        <div style={ccTop} >
            <CCquicklines />
            {/* <CCBox/> */}
            <ResultBox />
        </div>
    )
}

export default Content
