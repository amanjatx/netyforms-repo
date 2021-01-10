import React from 'react'
import {RadioGroup, FormControlLabel, Radio, Paper, Button, FormControl, Input} from '@material-ui/core'
import boxStyle from '../CSS/boxStyle.js'
import { Link } from 'react-router-dom'

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
    const dataMap = data.map( (dal) =>
            <form>
                <FormControl>
                    <Input id={dal.name} name={dal.name} placeholder={dal.title} classes={{ underline : classes.input}}/>
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
 
    return (
        <>
            <Paper elevation={6} classes={{ root: classes.root }} >
                    {dataMap}
                    <Button variant='outlined' classes={{root : classes.rootButton}}> 
                        <Link style={{textDecoration : 'none', color : 'inherit'}} to='/resultBox'>Calculate</Link>
                    </Button>
            </Paper>
        </>
    )
}

export default CCBox