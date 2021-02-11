import React from 'react'
import LocalPhoneRoundedIcon from '@material-ui/icons/LocalPhoneRounded';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
    locationIcon : {
        color: '#ff3385',
        fontSize: '2.5rem',
        '&:hover:not(.Mui.disabled)' : {
            color: 'rgba(255, 51, 133, 1)'
        },
        '&:hover' : {
            color: '#fff02'
        }
    }
})





function Icon (props) {

    const iconDiv = {
        display: 'flex',
        flexWrap : 'wrap',
        justifyContent: 'space-between',
        margin: '10px 10px',
    }
    const classes = useStyles();
    const visit = 'visit';
    const call = 'call';
    const email = 'email';
    return(
        <div style={iconDiv}>

              <div><LocationOnIcon  className={classes.locationIcon}  onClick={() => props.handler(visit)} />
                 <p style={{marginTop: '5px'}}>Visit Us</p>
              </div>

              <div><LocalPhoneRoundedIcon className={classes.locationIcon} onClick={() => props.handler(call)} />
                 <p style={{marginTop: '5px'}}>Call Us</p>
              </div>

              <div><MailOutlineRoundedIcon className={classes.locationIcon}  onClick={() => props.handler(email)}/>
                 <p style={{marginTop: '5px'}}>Email Us</p>
              </div>

         </div>
    )
}

export default Icon 
