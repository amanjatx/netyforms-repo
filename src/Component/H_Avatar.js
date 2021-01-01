import React from 'react'
import Profile from '../Images/img_avatar3.jpg';

const profileDiv = {
    // width:'20%'
    backgroundColor : 'blue',
    // width : '30%',
    // justifySelf : 'flex-start'
}
const profileImg = {
    maxWidth: '50px',
    // marginTop: '5px',
    borderRadius: '35px',
    // height:'auto',

}

function ProfilePhoto () {
    return(
        <div style={profileDiv}>
            {/* <img src={Profile} alt="profile" style={profileImg}>
            </img> */}
        </div>
    )
}


export default ProfilePhoto