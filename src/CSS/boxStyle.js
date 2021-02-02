import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 8,
        border: 0,
        padding: '20px 30px',
        margin : '10px 40px',
        display : 'flex',
        flexDirection : 'column',
        '&>form': {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            padding : '10px 0',
            margin : '10px 0'
        }
    },
    input: {
        '&:hover:not(.Mui-disabled):before' : { borderBottom : '1px solid rgba(255, 51, 133, 1)'  }, // outer click /
        '&:hover:not(.Mui-disabled):after'  : { border : '1px solid rgba(255, 51, 133, 1)'  }, // animation in
        '&:before' : { borderBottom: '1px solid rgba(255, 204, 224, 0.5)',  }, // normally
        '&:after'  : { borderBottom: '1px solid rgba(255, 51, 133, 1)', },  //animation out s
        color   : 'rgba(255,255,255, 0.9)',
        padding : '0px 20px',
        fontFamily: `'Quicksand', sans-serif`,
    },
    rootRadioGroup : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignitems : 'center',
    },
    labelFormControlLabelRadio : {
        color : 'rgba(255, 204, 224, 0.9)',
        fontSize : '90%',
        fontFamily: `'Quicksand', sans-serif`,
    },
    rootButton : {
        margin : '20px 10px',
        textTransform : 'none',
        fontFamily: `'Quicksand', sans-serif`,
        border : '1px solid white',
        color : 'white',

    },
    rootRadio: {
        '&$checked': {
          color: '#ffccd5'  // checked color 
        },
        color : 'pink' // unchecked color 
      },
    checked: {},

})
export default useStyles