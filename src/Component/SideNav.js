import React from 'react';
import Button from '@material-ui/core/Button';

// STYLE of sidenav and TOGGLE method got as props
// also given below as comment for future use
function SideNav(props) {
  return (
    <div style={props.styleprop}>
      <div>
          <Button variant="contained" onClick={props.toggle}>
              close
          </Button>
      </div>
      <div>
          sidenav
      </div> 
    </div>
  )
}

export default SideNav

// const sideNav = {
//   color : 'white',
//   backgroundColor : 'rgb(44,44,44)',
//   position : 'fixed',
//   zIndex : '2',
//   width: sideNavState==='close' ? '0%' : '100%',
//   opacity : sideNavState === 'close' ? '0' : '1',
//   height : '100%',
//   // left : sideNavState=='open'? '' :'-100%',
//   transition : '0.5s',
// }

// const toggle = () => {
//   changeState(sideNavState==='close' ? 'open' : 'close')
// }