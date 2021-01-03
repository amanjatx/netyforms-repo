import React from 'react'
import BoxOuter from './BoxOuter';
import CCquicklines from './CCquicklines';

const ccTop = { 
    color : 'rgb(255, 255, 255)',
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
