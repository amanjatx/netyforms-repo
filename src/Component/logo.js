import React from 'react';
import styles from '../CSS/style.module.css';


const logo = {
    padding: '20px',
    display:  'flex',
    justifyContent: 'center',
    fontSize:  '30px'
}

 function Logo()  {
         return(
               <>
                 <div style={logo}>
                     Brand Name
                 </div>
               </>

         )
     }


 export default Logo