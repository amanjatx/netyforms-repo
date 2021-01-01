import React from 'react';
import styles from '../CSS/style.module.css';


const logo = {
    
    // display:  'flex',
    // alignSelf : 'baseline',
    // justifyContent: 'center', 
    backgroundColor : 'red',
    // width : '33%',
    // justifySelf : 'flex-start'
}

 function Logo()  {
         return(
               <>
                 <div style={logo}>
                     Netyforms
                 </div>
               </>

         )
     }


 export default Logo