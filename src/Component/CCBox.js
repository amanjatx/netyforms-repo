import React from 'react'
import {RadioGroup, FormControlLabel, Radio, Paper, Button, FormControl, Input} from '@material-ui/core'
import boxStyle from '../CSS/boxStyle.js'
import { Link } from 'react-router-dom'
import CCquicklines from './CCquicklines';
import {connect} from 'react-redux'



const mapDispatchToProps = (dispatch) => {
    return {
        insertInfo : (name1,gen1,name2,gen2) => {
            dispatch ({
                type : 'INSERT_INFO',
                payload_name1 : name1,
                payload_gen1 : gen1,
                payload_name2 : name2,
                payload_gen2 : gen2,
            })
        },
    }
} 
function CCBox(props) {

    const [gen1, setValue1] = React.useState('female');
    const handleChange1 = (event) => setValue1(event.target.value); 

    const [gen2, setValue2] = React.useState('female');
    const handleChange2 = (event) => setValue2(event.target.value); 
    
    const [name1, setName1] = React.useState('');
    const [name2, setName2] = React.useState('');
    const takeData = (event) => {
        if(event.target.id=='name1') {
            setName1(event.target.value)
        }
        if(event.target.id=='name2') {
            setName2(event.target.value)
        }
    }

    const classes = boxStyle();
    
    const data = [
        { title : 'Your Name', name : 'name1', radioGroupName : 'genderf1', al : 'gender', val : gen1, method : handleChange1, },
        { title : 'Your Crush Name', name : 'name2', radioGroupName : 'genderf2', al : 'gender', val : gen2, method : handleChange2,},
    ]
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
      props.insertInfo(name1,gen1,name2,gen2)
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