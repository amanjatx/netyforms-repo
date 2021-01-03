import React from 'react'
import TextField from '@material-ui/core/TextField';
import styles from '../CSS/style.module.css'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


function BoxOuter() {

    const [value1, setValue1] = React.useState('female');
    const handleChange1 = (event) => setValue1(event.target.value);
    
    const [value2, setValue2] = React.useState('female');
    const handleChange2 = (event) => setValue2(event.target.value);

    const data = [
        {
            title : 'Your Name',
            radioGroupName : 'genderf1',
            al : 'gender',
            val : value1,
            method : handleChange1,
        },
        {
            title : 'Your Partner Name',
            radioGroupName : 'genderf2',
            al : 'gender',
            val : value2,
            method : handleChange2,
        }
    ]
    const dataMap = data.map( (dal) =>
        <>
            <div>
                <TextField id="standard-basic" label={dal.title} />
            </div>
            <div className={styles.radioDiv}>
                <FormControl component="fieldset">
                    <RadioGroup className={styles.radioGroupDiv} aria-label={dal.al} name={dal.radioGroupName} value={dal.val} onChange={dal.method}>
                        <div><FormControlLabel value="female" control={<Radio />} label="Female" /> </div>
                        <div><FormControlLabel value="male" control={<Radio />} label="Male" /> </div>
                    </RadioGroup>
                </FormControl>
            </div>
        </>
    )
    return (
        <div className={styles.boxOuterDiv}>
            <form noValidate autoComplete="off" className={styles.formDiv}>
                {dataMap}
            </form>
            
        </div>
    )
}

export default BoxOuter
