import React from 'react'
import BoxOuter from './BoxOuter';
import CCquicklines from './CCquicklines';
import Rough2 from './Rough2'
import CCBox from './CCBox'
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
            {/* <Rough2 />  */}
            <CCBox/>
        </div>
    )
}

export default Content
