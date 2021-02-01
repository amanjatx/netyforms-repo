import React from 'react' 
import { Paper, Button, FormControl, Input} from '@material-ui/core'
import Icon from './Icon';
import {makeStyles} from '@material-ui/core/styles';  

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',       //FF8E53 //EB7A99
         borderRadius: 8,
         border: 0,
         padding: '20px 20px',
         margin : '10px 40px',
        overflow: 'hidden',
        '& > .formDiv' : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            padding : '20px 10px',
            margin : '5px 0',                 
            color: '#ffff',
        }
    },
    input: {
        '&:hover:not(.Mui-disabled):before' : { borderBottom : '1px solid rgba(255, 51, 133, 1)'  }, // outer click //255 51 133 1
        '&:hover:not(.Mui-disabled):after'  : { border : '1px solid rgba(255, 51, 133, 1)'  }, // animation in
        '&:before' : { borderBottom: '1px solid rgba(255, 204, 224, 0.5)',  }, // normally
        '&:after'  : { borderBottom: '1px solid rgba(255, 51, 133, 1)', },  //animation out s
        color   : 'rgba(255,255,255,0.9)',
        padding : '0px 20px',
        fontFamily: `'Quicksand', sans-serif`,
    },
    rootButton : {
      margin : '20px 10px',
      textTransform : 'none',
      fontFamily: `'Quicksand', sans-serif`,
      color: '#ffff',
      border: ' 2px solid #ffff',
      padding: '7px 30px'
  },
  })



function ContactPage() {
           const [contactData, setContactData] = React.useState("");
           const [paraState, setParaState] = React.useState("hide");
           const [demo, setdemo] = React.useState("");
    const conDataArr = [
           'address',
           '987342106',
           'jasskaur@gmail.com'

    ]
    const classes = useStyles();
    
    const data = [
        {
            title : 'Your Name', name : 'name1',
        },
        {
            title : 'Your email', name : 'name2',
        },
    ]

    
    const dataMap = data.map( (dal) =>
            <div className="formDiv">
            <FormControl>
                <Input id={dal.name} name={dal.name} placeholder={dal.title} onChange={dal.method2} classes={{ underline : classes.input}}/>
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
      margin: '30px 0px',
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
                <Button variant='outlined' classes={{root : classes.rootButton}}>submit</Button>
                </div>
        </div>  
        
    )
}

export default ContactPage