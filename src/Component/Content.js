import React from 'react'
import BoxOuter from './BoxOuter';
import CCquicklines from './CCquicklines';

const contentStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent : 'center'

}

function Content() {
    return (
        <div style={contentStyle}>
            <CCquicklines />
            <BoxOuter />
        </div>
    )
}

export default Content
