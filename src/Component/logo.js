import React from 'react';
import styles from '../CSS/style.module.css';


const logo = {
    padding: '20px',
    display:  'flex',
    justifyContent: 'center',
    fontSize:  '22px',
    fontFamily : 'Alegreya SC',
}

   function Logo()  {

         return(
               <>
                 <div style={logo} >
                     NetyForms
                 </div>
               </>

         )
    
}

 export default Logo