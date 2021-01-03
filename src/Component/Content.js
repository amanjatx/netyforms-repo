import React from 'react'
import BoxOuter from './BoxOuter';
import CCquicklines from './CCquicklines';

const ccTop = { 
    // color : 'red',
    // backgroundColor : 'red',
    paddingBottom : '36px',
}

function Content() {
    return (
        <div style={ccTop} >
            <CCquicklines />
            <BoxOuter />
        </div>
    )
}

export default Content
