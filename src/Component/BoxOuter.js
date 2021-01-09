import React, {useState} from 'react' 
//import TextField from '@material-ui/core/TextField';
//import {theme} from './theme';
//import {ThemeProvider} from '@material-ui/core/styles';
import InputBase  from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles'; 
import FavoriteIcon from '@material-ui/icons/Favorite'; 
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

  const useStyle = makeStyles( (theme) => ({
     input: {
            border: '2px solid #E9798C',
            padding: '7px',
            borderRadius : '25px',
            boxShadow: '2px 0px 2px #E9798C',
            backgroundColor: 'white',
            margin: '10px 0px' 
     },
     box: {  backgroundColor : '#F59BAA',
             color : 'black',
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             margin : '50px',
             padding : '20px 50px',
             borderRadius : '15px',   
     },
     typo: {
          display: 'flex',
          justifyContent: 'center',
     }, 
        heart: {
           color: 'white',
           fontSize: '2rem'
     }
       

 
} ) 

); 

/*const boxOuterDiv = {
    backgroundColor : '#F59BAA',
    color : 'black',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin : '50px',
    padding : '20px 50px',
    borderRadius : '15px',

} */
function BoxOuter() {
     const classes = useStyle();  
    
    return (
         <form >
        <Box className={classes.box}>  
             <InputBase placeholder="your name" className={classes.input} />
             <Box className={classes.typo}>
             <FavoriteIcon className={classes.heart} /> 
                   <AddIcon color="white"/>
             </Box>
             <InputBase placeholder="your name" className={classes.input} />
              
        </Box>
        </form>
    )
}

export default BoxOuter
