import React from 'react'
import CCBox from './CCBox'
import ResultBox from './ResultBox'
import AboutUs from './AboutUs'
import ContactPage from './ContactPage'
import styles from '../CSS/content.module.css'
import { Switch, Route } from 'react-router-dom'
import NotFound from './NotFound'
import TempBlogPage from './TempBlogPage'
import ControlPanel from './ControlPanel'
import AddBlog from './AddBlog'

function Routing() {
    return (
        <div className={styles.ccTop} >
                <Switch>
                    <Route exact path='/' component={CCBox}/>
                    <Route path='/ccbox' component={CCBox}/>
                    <Route path='/resultbox' component={ResultBox}/>
                    <Route path='/aboutus' component={AboutUs}/>
                    <Route path='/contactus' component={ContactPage}/>
                    <Route path='/notfound' component={NotFound}/>
                    <Route path='/tempblog' component={TempBlogPage}/>
                    <Route path='/cp' component={ControlPanel}/>
                    <Route path='/addblog' component={AddBlog}/>
                </Switch>
        </div>
    )
}

export default Routing