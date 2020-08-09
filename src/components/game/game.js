import React from 'react'
import { Row, Col, Button, Rate } from 'antd';
import history from '../../history';
import { getScores } from './gameActions';
import { useSelector, useDispatch,shallowEqual } from 'react-redux';
import TypingTest from './typeTest';
import moment from 'moment'

let Game = ()=>{
    let user = JSON.parse(sessionStorage.getItem('CURRENT_USER'))
    let scores = useSelector(state=> state.game.scores? state.game.scores: [], shallowEqual)
    const [showTest, setShowTest] = React.useState(false)
    let dispatch = useDispatch()
    React.useEffect(()=>{
        dispatch(getScores())
    }, [])
    if(!user){
        history.push('/')
    }
  
    return (
        <Row>
        <Col style={{backgroundColor: `#8E6AAC`, padding: 20, height: '100vh'}} span={6} >
           <div style={{color: 'white', fontSize: 50, fontWeight: "600"}}>Type+Hype</div>
           <div style={{color: 'white', fontSize: 20, fontWeight: 600, marginTop:'5vh'}}> Your Type+Hype Scorers</div>
        <div style={{color: 'white', fontSize: 14, marginTop: 10, marginBottom: 10}}>

            {
                scores.sort((a,b)=> b.currentScore -a.currentScore).slice(0,5).map((item, key)=>{
                return <div key={key}style={{fontSize: 12, fontWeight:600, marginBottom: 20}}>{item['name'] + '-'+ item['score']}<span style={{fontWeight: 300}}> ({moment(item['id']).format('DD MMMM YYYY hh:mm ') })</span> <div><Rate /></div></div>
                }) 
             
            }
            {
                scores === []? <div> No Game Recorded </div> : ''
            }
        </div>

        <div style={{color: 'white', fontSize: 20, fontWeight: 600,}}>About Type+Hype</div>
        <div style={{color: 'white', fontSize: 14, }}>React.js based application that will allow user to improve his/her typing skills, by measuring current progress and reviewing history of previous games.</div>

        </Col>
        <Col style={{backgroundColor: '#8E6AAC', height: '100vh', padding: 20}} span={18} >
        <div style={{fontSize: 30, color: 'white'}}> Welcome! <span style={{fontWeight:600}}>{user['name']}</span></div> 
        <div style={{color: 'white', fontSize: 16, fontWeight: "bold", marginTop: '5vh', marginBottom: '5vh', display: showTest? 'none': ""}}><Button onClick={()=>setShowTest(true)}>Start Typing Test</Button></div>
 
       {
           showTest ?<TypingTest/>: ''
       }
        </Col>
      </Row>
    )
}

export default Game