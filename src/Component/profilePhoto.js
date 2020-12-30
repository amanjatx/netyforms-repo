import React, { Component } from 'react'
import styles from '../CSS/style.module.css';

class ProfilePhoto extends Component {
    render() {
          return(
                 <>
                 <div className={styles.profile}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"></img>
                 </div>
                 </>

          )
    }
}

export default ProfilePhoto