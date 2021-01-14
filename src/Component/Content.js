import React from 'react'
import CCquicklines from './CCquicklines';
import CCBox from './CCBox'
import ResultBox from './ResultBox'
import { Switch, Route } from 'react-router-dom'
import AboutUs from './AboutUs'

const ccTop = { paddingBottom : '36px'}

function Content() {

    return (
        <div style={ccTop} >
            <CCquicklines />
                <Switch>
                    <Route exact path='/' component={CCBox}/>
                    <Route path='/ccbox' component={CCBox}/>
                    <Route path='/resultbox' component={ResultBox}/>
                    <Route path='/aboutus' component={AboutUs}/>
                </Switch>
        </div>
    )
}

export default Content
