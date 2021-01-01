import React, {Component} from 'react'
import styles from '../CSS/style.module.css';
import NavCollapse from './NavCollapase';
import H_Logo from './H_Logo';
import H_Avatar from './H_Avatar';
import SideNav from './SideNav';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Drawer from '@material-ui/core/Drawer';

const menuBar = {
    // padding: '5px',
    // marginLeft : '10px',
    cursor: 'pointer',
    backgroundColor : 'blue',
    // width : '30%',
    // justifySelf : 'flex-start',
}

class Header extends Component { 
    constructor(props) {
        super(props)
        this.componentRef = React.createRef();
    }
    clickHandler = () => {
        this.componentRef.current.displayDiv();
    }
    render() {
        return (
                <>

                <NavCollapse ref={this.componentRef} />  
                <div className={styles.headerClass}>
                   {/* <span style={menuBar} onClick={this.clickHandler}>
                        <MenuRoundedIcon />
                    </span> */}
                    {/* <SideNav /> */}
                    {/* <H_Logo />
                    <H_Avatar /> */}
                </div>
                </>
        )
    }
}
 export default Header 