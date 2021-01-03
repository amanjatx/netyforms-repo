import React, {Component} from 'react'
import styles from '../CSS/style.module.css';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Logo from './Logo';
import NavCollapse from './NavCollapase';
import PersonIcon from '@material-ui/icons/Person';

const menuStyle = {
    padding: '20px',
    cursor: 'pointer',
}

const userIcon = {
  fontSize : '40px',
}

const userDiv = {
    padding: '10px'
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
               
             <div className={styles.headerClass}>

             <div style={menuStyle} onClick={this.clickHandler} ><MenuRoundedIcon /> </div>  

                  <Logo />
                  <div style={userDiv}><PersonIcon style={userIcon}/></div>

             </div>
             <NavCollapse ref={this.componentRef} />
            </>
    )
}
   }

 export default Header 