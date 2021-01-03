
import React, {Component}  from 'react'
import CloseIcon from '@material-ui/icons/Close';




const sideBar = {
    backgroundColor :  '#CFC8C4',                          
    width: '0px',
    height: '100%',
    position: 'fixed',
    overflow : 'hidden',
    color:  'black',                              
    transition: 'all 1s ease',
    //borderRadius: '100px',
    zIndex : '2'
}

const listLinks = {
       display: 'block',
        textDecoration: 'none',
       lineHeight: '50px',
       marginLeft: '60px',
       color: 'black'
}
 const header = {
     display: 'flex',
     justifyContent : 'flex-end',
     padding: '27px',
     fontSize : '20px'
 } 



export default class NavCollpase extends Component {
        constructor() {
            super()
            this.divRef= React.createRef();
        }

        displayDiv = ()  => {
            this.divRef.current.style.width= '100%';
            this.divRef.current.style.opacity = '1';
            //this.divRef.current.style.height = '100%';
            //this.divRef.current.style.borderRadius = '0px';
        }

        hideDiv = () => {
            this.divRef.current.style.width= '0px';
            this.divRef.current.style.opacity = '0';
            //this.divRef.current.style.height = '0px';
            //this.divRef.current.style.borderRadius = '80px';
        }
        render() {
    return (
        
        <>
             <div style={sideBar} ref={this.divRef}>
                   <div style={header} onClick={this.hideDiv}><CloseIcon /></div> 
                   <hr></hr>
                    <div style={{paddingLeft: '35px' }}>
                         <h4>Menu</h4>
                          <div><a href="#" style={listLinks}>  option 1 </a></div>
                          <div><a href="#" style={listLinks}>   option 2 </a></div> 
                          <div><a href="#" style={listLinks}>  option 3 </a></div> 
                  </div>
                
             </div>
        </>
    )
         }
}
