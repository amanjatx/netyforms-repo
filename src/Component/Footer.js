import React from 'react'
import FooterIcons from './FooterIcons.js'
import FooterLinks from './FooterLinks.js'
function Footer() {
    return (
        <div style={footerClass}>
            <FooterIcons />
            <hr></hr> {/* for a grey horizontal line */}
            <FooterLinks />
        </div>
    )
}

export default Footer

const footerClass = {
    backgroundColor  : 'rgb(236,236,236',
    padding : '10px',
    color : 'rgb(44,44,44)'
}