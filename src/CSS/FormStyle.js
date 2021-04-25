import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',       //FF8E53 //EB7A99
         borderRadius: 8,
         border: 0,
         padding: '20px 20px',
         margin : '10px 40px',
        overflow: 'hidden',
        '& > .formDiv' : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            padding : '20px 10px',
            margin : '5px 0',                 
            color: '#ffff',
        }
    },
    input: {
        '&:hover:not(.Mui-disabled):before' : { borderBottom : '1px solid rgba(255, 51, 133, 1)'  }, // outer click //255 51 133 1
        '&:hover:not(.Mui-disabled):after'  : { border : '1px solid rgba(255, 51, 133, 1)'  }, // animation in
        '&:before' : { borderBottom: '1px solid rgba(255, 204, 224, 0.5)',  }, // normally
        '&:after'  : { borderBottom: '1px solid rgba(255, 51, 133, 1)', },  //animation out s
        color   : 'rgba(255,255,255,0.9)',
        padding : '0px 20px',
        fontFamily: `'Quicksand', sans-serif`,
    },
    rootButton : {
      marginBottom: '0px',
      textTransform : 'none',
      fontFamily: `'Quicksand', sans-serif`,
      color: '#ffff',
      border: ' 1px solid #ffff',
      padding: '7px 30px'
  },
  });

  export default useStyles;