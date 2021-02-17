import React from 'react' 
import { Button, FormControl, Input} from '@material-ui/core'
import Icon from './Icon';
import FormStyles from '../CSS/FormStyle.js'  
import styles from '../CSS/style.module.css'


function ContactPage() {
           const [contactData, setContactData] = React.useState("");
           const [paraState, setParaState] = React.useState("hide");
           const [demo, setdemo] = React.useState("");
           const [name, setName] = React.useState('');
           const [email, setEmail] = React.useState('');
           const [err, setErr] = React.useState('');
    const conDataArr = [
           'address',
           '987342106',
           'jasskaur@gmail.com'
    ]
    const classes = FormStyles();
    
    const data = [
        { title : 'Your Name', name : 'name', val: name  },
        { title : 'Your email', name : 'email', val: email } 
   ]

   const changeHandler = (e) => {
        if(e.target.name=== 'name'){
          setName(e.target.value);
          setErr('');
        }
        else
          setEmail(e.target.value);
          setErr('');
    }
   
    const dataMap = data.map( (dal) =>
            <div className="formDiv">
            <FormControl>
                <Input id={dal.name} name={dal.name} placeholder={dal.title} value={dal.val}
                   onChange={changeHandler} classes={{ underline : classes.input}} />
            </FormControl> 
          </div>
    )

    const submitHandler = () => {
         if(!name || !email) {
            setErr("you must fill your form");
            return;
            }
        else 
          console.log(name, email)
          setName(''); setEmail('');
    }

    const clickHandler = (val) => {
       if(demo!==val)
       {
       setParaState("show");
       setdemo(val);
      switch(val)
      {
        case 'visit': return <div>{setContactData(conDataArr[0]) }</div> 
        case 'call' : return <div>{setContactData(conDataArr[1]) } </div>
        case 'email' : return <div>{setContactData(conDataArr[2])}</div>
      }
       }
    else
       {
         setParaState("hide");
         setdemo("");
       }
    }
 
    const errorMessage = { display : !err ? 'none' : 'block' } 

    const conDataPara = {
      color: 'white',
      margin: '7px 0px',
      textAlign: 'center',
      maxWidth: paraState==="hide" ? "0px" : '700px',
      opacity: paraState==="hide" ? '0' : '1',
      transition: '0.5s',
        }

    return (
      
          
              <div className= {classes.root}>
                <div style={{display: 'flex', justifyContent: 'center', color: '#ffff'}}>
                  <h2>Contact Us</h2>
                </div>
                <Icon handler={clickHandler}/>
                <p style={conDataPara}>{contactData}</p>
                {dataMap}
                <span style={errorMessage}>
                            <span className={styles.errorMessage}>
                                <label>ERROR : {err}</label>
                            </span>
                        </span>
                <div style={{display: 'flex', justifyContent:'center'}}>
                <Button variant='outlined' classes={{root : classes.rootButton}} onClick={submitHandler}>submit</Button>
                </div>
        </div>  
        
    )
}

export default ContactPage