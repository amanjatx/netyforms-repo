import React from 'react'
import background from '../Images/backimg.jpg';
// import CCbuttons from './CCbuttons.js'
import CCquicklines from './CCquicklines';

const ccTop = { 
    color : 'rgb(255, 255, 255)',
    backgroundImage: `url(${background})`
}

function Content() {
    return (
        <div style={ccTop} >
            <CCquicklines />
            {/* <CCbuttons /> */}
        </div>
    )
}

export default Content
