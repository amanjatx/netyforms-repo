import React from 'react'
import Profile from '../Images/img_avatar3.jpg';

const profileDiv = {
    width:'20%'
}
const profileImg = {
    maxWidth: '70px',
    marginTop: '5px',
    borderRadius: '35px',
    height:'auto'
}

function ProfilePhoto () {
          return(
                 <div style={profileDiv}>
                    <img src={Profile} alt="profile"
                     style={profileImg}></img>
                 </div>
                 

          )
    }


export default ProfilePhoto