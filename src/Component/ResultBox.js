import React from 'react'
import {Paper, Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
// import { Link } from 'react-router-dom'
import CCquicklines from './CCquicklines';


import {connect} from 'react-redux'

const mapStateToProps = state => {
    return {
        name : state.name
        // name1 : state[0].name,
        // gen1 : state[0].gender,
        // name2 : state[1].name,
        // gen2 : state[1].gender,
    }
}
const resultBoxStyle = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 8,
        border: 0,
        padding: '20px 30px',
        margin : '10px 40px',
        display : 'flex',
        flexDirection : 'column',
        '& > div' : {
            display : 'flex',
            flexDirection : 'column',
            justifyContent : 'center',
            alignItems : 'center',
            padding : '10px 0',
            margin : '10px 0'
        }
    },
    rootLabel : {
            display : 'flex',
            justifyContent : 'center',
            fontFamily: `'Luckiest Guy', cursive`,
            fontSize: '300%',
            color : 'white',
            textShadow : '4px 4px 10px #ff00ff',
            '&>span' : {
                alignSelf: 'center',
                fontSize : '60%',
            }
    },
    rootLabelDesc : {
            fontFamily : `'Quicksand', sans-serif`,
            color : 'white',
            fontSize : '80%',
            lineHeight : '140%',
            textAlign : 'center',
            '&>span':{
                backgroundColor : 'rgba(242, 242, 242, 0.7)',
                padding : '2px 4px',
                borderRadius : '5px',
                color : 'Green'
            }
    },
    rootButton : {
        margin : '20px 10px',
        textTransform : 'none',
        fontFamily: `'Quicksand', sans-serif`,
        border : '1px solid white',
        color : 'white',
    },
}) 

const ResultBox = (props) =>  {
    var cent = Math.round(Math.random()*100)
    const classes = resultBoxStyle();
    return (
        <>
            <CCquicklines />
            <Paper elevation={6} classes={{ root: classes.root }} >
                <InputLabel classes={{root : classes.rootLabel}}>{cent}<span>%</span></InputLabel>
                <Button variant='outlined' classes={{root : classes.rootButton}}>Share Result</Button>
                <InputLabel classes={{ root: classes.rootLabelDesc }}>
                    <span>Congratulations!</span> {props.gen1=='male' ? 'Mr.' : 'Miss'} {props.name}, Our Estimate is that you and {props.gen2=='male' ? 'Mr.' : 'Miss'} {props.name2}                     love each other with {cent}% of love, but don't think much about it, you can increase 
                    this number, you just need to give more time to this relationship and yes, giver her a gift
                </InputLabel>
            </Paper> 
        </>
    )
}
export default connect(mapStateToProps)(ResultBox)