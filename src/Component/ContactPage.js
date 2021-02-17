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
    const conDataArr = [
           'address',
           '987342106',
           'jasskaur@gmail.com'
    ]
    const classes = FormStyles();
    
    const data = [
        { title : 'Your Name', name : 'name1', key : 1 },
        {   title : 'Your email', name : 'name2', key : 2 },
    ]

    const dataMap = data.map( (dal) =>
            <div className="formDiv" key={dal.key}>
            <FormControl>
                <Input id={dal.name} name={dal.name} placeholder={dal.title} value={dal.val}
                   onChange={changeHandler} classes={{ underline : classes.input}} />
            </FormControl> 
          </div>
    )

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
        default : return <div></div>
      }
       }
    else
       {
         setParaState("hide");
         setdemo("");
       }
    }

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
                <div style={{display: 'flex', justifyContent:'center'}}>
                <Button title='Submit Your Info' variant='outlined' classes={{root : classes.rootButton}}>submit</Button>
                </div>
        </div>  
        
    )
}

export default ContactPage