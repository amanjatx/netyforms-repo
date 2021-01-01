
import React, {Component}  from 'react'
import CloseIcon from '@material-ui/icons/Close';



const option = {
    backgroundColor : '#36342C',
    width: '240px',
    left: '-280px',
    height: '100%',
    position: 'fixed',
    overflow : 'hidden',
    color: 'white',
    transition: 'left 0.7s',
    // borderTopRightRadius: '80px',
    paddingLeft: '20px',
    paddingTop: '10px',
    // position: 'absolute',

    zIndex : '2',
}

const optLinks = {
       display: 'block',
        textDecoration: 'none',
       lineHeight: '50px',
       marginLeft: '60px',
       color: 'white'
}



export default class NavCollpase extends Component {
        constructor() {
            super()
            this.divRef= React.createRef();
        }

        displayDiv = ()  => {
            this.divRef.current.style.left= '1px';
        }

        hideDiv = () => {
            this.divRef.current.style.left= '-280px';
        }
        render() {
    return (
        
        <>
             <div style={option} ref={this.divRef}>
                      <span onClick={this.hideDiv}><CloseIcon /></span>
                     <h4>Menu</h4>
                      <a href="#" style={optLinks}>  option 1 </a>  
                      <a href="#" style={optLinks}>   option 2 </a>  
                      <a href="#" style={optLinks}>  option 3 </a>  
                
             </div>
        </>
    )
         }
  }
