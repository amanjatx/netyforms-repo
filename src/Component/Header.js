import React, {Component} from 'react'
import styles from '../CSS/style.module.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Logo from './Logo';
import ProfilePhoto from './ProfilePhoto';
import NavCollapse from './NavCollapase';


const menuBar = {
    padding: '20px',
    cursor: 'pointer'

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
                   <span style={menuBar} onClick={this.clickHandler}><MenuRoundedIcon /></span>
                  <Logo />
                  <ProfilePhoto />
             </div>
            </>
    )
    }
}
 export default Header 