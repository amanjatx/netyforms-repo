import React from 'react'
import {RadioGroup, FormControlLabel, Radio, Paper, Button, FormControl, Input} from '@material-ui/core'
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 8,
        border: 0,
        padding: '20px 30px',
        margin : '10px 40px',
        display : 'flex',
        flexDirection : 'column',
        '& > div' : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            // backgroundColor : 'black',
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
    },
    rootRadioGroup : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'center',
        alignitems : 'center',
    },
    labelFormControlLabelRadio : {
        color : 'rgba(255, 204, 224, 0.9)',
        fontSize : '90%'
    },
    rootButton : {
        margin : '20px 10px',
        textTransform : 'none',
    }
})

function CCBox() {
    const [value1, setValue1] = React.useState('female');
    const handleChange1 = (event) => setValue1(event.target.value);
    
    const [value2, setValue2] = React.useState('female');
    const handleChange2 = (event) => setValue2(event.target.value);
    
    const classes = useStyles();
    
    const data = [
        {
            title : 'Your Name', name : 'name1',
            radioGroupName : 'genderf1',
            al : 'gender',
            val : value1, method : handleChange1,
        },
        {
            title : 'Your Crush Name', name : 'name2',
            radioGroupName : 'genderf2',
            al : 'gender',
            val : value2, method : handleChange2,
        },
    ]
    const dataMap = data.map( (dal) =>
        <div>
            <FormControl>
                <Input id={dal.name} name={dal.name} placeholder={dal.title} classes={{ underline : classes.input}}/>
            </FormControl> 
            <FormControl>
                <RadioGroup aria-label={dal.al} name={dal.radioGroupName} value={dal.val} onChange={dal.method} classes={{root : classes.rootRadioGroup}}>
                    <FormControlLabel value="female" control={<Radio size='small'/>} label="Female" classes={{label : classes.labelFormControlLabelRadio}}/> 
                    <FormControlLabel value="male" control={<Radio size='small'  />} label="Male" classes={{label : classes.labelFormControlLabelRadio}}/> 
                </RadioGroup>
            </FormControl>
        </div>
    )
    const theme = createMuiTheme ({
        typography : {
            fontFamily: `'Quicksand', sans-serif`, // gloablly
        }
    })
    return (
        <>
        <ThemeProvider theme={theme}>
        <Paper elevation={6} classes={{ root: classes.root }} >
            {dataMap}
            <Button variant='outlined' classes={{root : classes.rootButton}}>Calculate</Button>
        </Paper>
        </ThemeProvider>
        </>
    )
}
export default CCBox