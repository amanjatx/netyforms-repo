import React, {useState} from 'react' 
// import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
// import { makeStyles } from '@material-ui/core/styles';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';



const boxOuterDiv = {
    backgroundColor : '#F59BAA',
    color : 'black',
    display: 'flex',
    justifyContent: 'center'
} 
function BoxOuter() {

    const [selectedValue, setSelectedValue] = useState();
        const  changeOption = (event) => {
        console.log('hi');
        setSelectedValue(event.target.value );
    }
    return (
        <div style={boxOuterDiv}>
        <div >
            Current Status : {selectedValue}
            <p>Please select your gender:</p>
            <input type="radio" id="male" name="gender" value='male' onChange={changeOption}></input>
                 <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value='female' onChange={changeOption}></input> Female
            <input type="radio" id="other" name="gender" value='other' onChange={changeOption}></input> Other
        </div>
        </div>
    )
}

export default BoxOuter
