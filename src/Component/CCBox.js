import React from 'react'
import CCquicklines from './CCquicklines';
import {RadioGroup, FormControlLabel, Radio, Paper, Button, FormControl, Input} from '@material-ui/core'
import {Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import boxStyle from '../CSS/boxStyle.js'
import styles from '../CSS/style.module.css'

const mapDispatchToProps = (dispatch) => {
    return {
        insertInfo : (n1,g1,n2,g2) => {
            dispatch ({
                type : 'INSERT_INFO',
                payload_name1 : n1,
                payload_name2 : n2,
                payload_gen1 : g1,
                payload_gen2 : g2,
            })
        },
    }
} 

function CCBox(props) {

    const [g1, setG1] = React.useState();
    const [g2, setG2] = React.useState();
    const [n1, setN1] = React.useState();
    const [n2, setN2] = React.useState();
    const [redirect,setRedirect] = React.useState(false);
    const [showError,setShowError] = React.useState(0);
    const [errorLabel,setErrorLabel] = React.useState();

    const set_setG1 = (e) => { setG1(e.target.value);  setShowError(0); }
    const set_setG2 = (e) => { setG2(e.target.value); setShowError(0); }
    const changeState = (e) =>{ 
        e.target.id=='n1' ? setN1(e.target.value) : setN2(e.target.value)
        setShowError(0)
    } 
    const errorMessage = { display : showError==0 ? 'none' : 'block' }   
    const classes = boxStyle();
    
    const data = [
        { title : 'Your Name', name : 'n1', radioName : 'genderf1', al : 'gender', val : g1, method : set_setG1, },
        { title : 'Your Crush Name', name : 'n2', radioName : 'genderf2', al : 'gender', val : g2, method : set_setG2,},
    ]

    const dataMap = data.map( item =>
            <div>
                <FormControl>
                    <Input onChange={changeState} id={item.name} name={item.name} placeholder={item.title} classes={{ underline : classes.input}}/>
                </FormControl> 

                <FormControl>
                    <RadioGroup aria-label={item.al} name={item.radioName} value={item.val} onChange={item.method} classes={{root : classes.rootRadioGroup}}>
                        <FormControlLabel value="female" control={<Radio size='small' color='primary' 
                            classes={{ root: classes.rootRadio, checked: classes.checked, }}
                            />} label="Female" classes={{label : classes.labelFormControlLabelRadio}} /> 
                        <FormControlLabel value="male" control={<Radio size='small' color='primary' 
                            classes={{ root: classes.rootRadio, checked: classes.checked, }}
                            />} label="Male" classes={ {label : classes.labelFormControlLabelRadio} } /> 
                    </RadioGroup>
                </FormControl> 
                
            </div>
    )
    
    
    const loadBeforeClick = () => {
        if(n1==null || n2==null || g1==null || g2==null) {
            if(n1==null) { setErrorLabel('You forget to fill Your Name')}
            else if(n2==null) { setErrorLabel('Your Crush Must Have a Name')}
            else if(g1==null) { setErrorLabel('I think you must have a gender')}
            else if(g2==null) { setErrorLabel(`You're cursh too have a gender, if yes then select`)}
            setShowError(1)
        }
        else{
            props.insertInfo(n1,g1,n2,g2);
            setRedirect(true);
        }
    }

    if(redirect) {
        return <Redirect push to='/resultBox'/>
    }
    
    return (
        <>
            <CCquicklines />
            <Paper elevation={6} classes={{ root: classes.root }}>
                        {dataMap}
                        <span style={errorMessage}>
                            <span className={styles.errorMessage}>
                                <label>ERROR : {errorLabel}</label>
                            </span>
                        </span>
                        <Button onClick={loadBeforeClick} variant='outlined' classes={{root : classes.rootButton}}> 
                            Calculate
                        </Button>
  
            </Paper>
        </>
    )
}

export default connect(null, mapDispatchToProps)(CCBox)
