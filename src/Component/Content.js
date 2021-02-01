import React from 'react'
import CCquicklines from './CCquicklines';
import CCBox from './CCBox'
import ContactPage from './ContactPage';
import {BrowserRouter, Route, Switch} from 'react-router-dom'


const ccTop = { 
    paddingBottom : '36px',
}

function Content() {
    return (
        <div style={ccTop}>
           <ContactPage />
        </div>

    )
}

export default Content
