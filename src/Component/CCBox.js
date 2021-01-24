import React from 'react'
import {RadioGroup, FormControlLabel, Radio, Paper, Button, FormControl, Input} from '@material-ui/core'
import boxStyle from '../CSS/boxStyle.js'
import { Link } from 'react-router-dom'
import CCquicklines from './CCquicklines';
import {connect} from 'react-redux'



const mapDispatchToProps = (dispatch) => {
    return {
        changeName1 : (name1) => {
            dispatch ({
                type : 'CHANGE_NAME1',
                payload : name1,
            })
        },
    }
} 
function CCBox(props) {

    const [value1, setValue1] = React.useState('female');
    const handleChange1 = (event) => setValue1(event.target.value); 
    const [value2, setValue2] = React.useState('female');
    const handleChange2 = (event) => setValue2(event.target.value); 

    const classes = boxStyle();
    const data = [
        { title : 'Your Name', name : 'name1', radioGroupName : 'genderf1', al : 'gender', val : value1, method : handleChange1, },
        { title : 'Your Crush Name', name : 'name2', radioGroupName : 'genderf2', al : 'gender', val : value2, method : handleChange2,},
    ]
    var [name1, setName1] = React.useState('Hello');
    var [name2, setName2] = React.useState('');
    
    const takeData = (event) => {
        if(event.target.id=='name1') {
            setName1(event.target.value)
        }
        if(event.target.id=='name2') {
            setName2(event.target.value)
        }
    }
    const dataMap = data.map( (dal) =>
            <form>
                <FormControl>
                    <Input onChange={takeData} id={dal.name} name={dal.name} placeholder={dal.title} classes={{ underline : classes.input}}/>
                </FormControl> 

                <FormControl>
                    <RadioGroup aria-label={dal.al} name={dal.radioGroupName} value={dal.val} onChange={dal.method} classes={{root : classes.rootRadioGroup}}>
                        <FormControlLabel value="female" control={<Radio size='small' color='primary' 
                            classes={{ root: classes.rootRadio, checked: classes.checked, }}
                            />} label="Female" classes={{label : classes.labelFormControlLabelRadio}} /> 
                        <FormControlLabel value="male" control={<Radio size='small' color='primary' 
                            classes={{ root: classes.rootRadio, checked: classes.checked, }}
                            />} label="Male" classes={ {label : classes.labelFormControlLabelRadio} } /> 
                    </RadioGroup>
                </FormControl> 
            </form>
    )
    

    const run = () => {
      props.changeName1(name1)
    }
    return (
        <>
            <CCquicklines />
            <Paper elevation={6} classes={{ root: classes.root }} >
                    {dataMap}
                    <Button onClick={run} component={Link}  to='/resultBox' variant='outlined' classes={{root : classes.rootButton}}> 
                        Calculate
                    </Button>
            </Paper>
        </>
    )
}

export default connect(null, mapDispatchToProps)(CCBox)