import React from 'react';
import Button from '@material-ui/core/Button';
import CloseRoundedIcon from '@material-ui/icons/CloseRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import Divider from '@material-ui/core/Divider';

// STYLE of sidenav and TOGGLE method got as props
// also given below as comment for future use

const sideNavButton = {
  margin : '10px',
  padding : '10px',
  boxShadow : 'none',
  textTransform : 'none',
  fontFamily: "'Open Sans', sans-serif",
  backgroundColor : 'transparent',
  color : 'white',
}
const LinkTitle = ['About Us', 'Contact Us', 'Privacy Policy', 'Map', 'Career']
const LinkTitleMap = LinkTitle.map( (title) => 
  <Button variant="contained" style={sideNavButton}>{title} </Button>
)

function SideNav(props) {
  return (
    <div style={props.styleprop}>
      <div> 
          <Button style={closeBtn} onClick={props.toggle}  variant="contained" >
                <ArrowBackIosRoundedIcon />
                <CloseRoundedIcon />
          </Button>
      </div>
      <Divider style={divider}/>
      <div style={optionsStyle}>{LinkTitleMap}</div> 
      <Divider style={divider2}/>
      <div style={logoDiv}> Lovecalcy </div>
      <div style={bottomLine}> &copy; 2020</div>
    </div>
  )
}

export default SideNav

// styling objects begins

const closeBtn = {
  width : '100%',
  height : '60px',
  marginTop : '10px',
  display : 'flex',
  justifyContent : 'space-between',
  padding : '0 20px',
  backgroundColor : 'transparent',
  color : 'white',
  boxShadow : 'none',
}

const logoDiv = {
  fontFamily: "'Permanent Marker', cursive",
  display : 'flex',
  justifyContent : 'center',
  marginTop : '20px',
  fontSize : '200%',
  color : '#0066ff',
}
const bottomLine = {
  fontSize : '70%', 
  fontFamily : "'Open Sans', sans-serif",
  // backgroundColor : '#4d4d4d',
  display : 'flex',
  justifyContent : 'center',
}
const optionsStyle = {
  color : '#282828',
  margin : '10px',
  padding : '10px',
  display : 'flex',
  flexDirection : 'column',
 }
 const divider = {
  backgroundColor : '#e6e6e6',
  margin : '15px 15px 0 15px',
  opacity : '0.3',
}
const divider2 = {
  backgroundColor : '#e6e6e6',
  margin : '0px 40px',
  opacity : '0.1',
}
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