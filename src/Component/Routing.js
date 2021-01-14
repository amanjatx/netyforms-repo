import React from 'react'
import CCBox from './CCBox'
import ResultBox from './ResultBox'
import { Switch, Route } from 'react-router-dom'
import AboutUs from './AboutUs'

const ccTop = { paddingBottom : '36px'}

function Routing() {

    return (
        <div style={ccTop} >
                <Switch>
                    <Route exact path='/' component={CCBox}/>
                    <Route path='/ccbox' component={CCBox}/>
                    <Route path='/resultbox' component={ResultBox}/>
                    <Route path='/aboutus' component={AboutUs}/>
                </Switch>
        </div>
    )
}

export default Routing
