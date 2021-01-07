import React from 'react'
import CCquicklines from './CCquicklines';
import CCBox from './CCBox'
const ccTop = { 
    paddingBottom : '36px',
}

function Content() {
    return (
        <div style={ccTop} >
            <CCquicklines />
            <CCBox/>
        </div>
    )
}

export default Content
