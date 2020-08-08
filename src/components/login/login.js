import React from 'react'
import { Layout } from 'antd';
import LoginForm from './loginForm';


const { Header, Footer, Sider, Content } = Layout;
let Login = props => {
  return(  <Layout>

    <Content style={{backgroundColor: `#8E6AAC`, width: '100vw', height:'100vh', backgroundSize: 'cover', backgroundOrigin: 'content-box', display: 'flex', overflow:'hidden'}}>

       
        <div style={{
        backgroundImage: `url('https://images.creativemarket.com/0.1.0/ps/1018030/910/607/m1/fpnw/wm0/my-desk-.jpg?1456207724&s=3ab17830770e59dcba5f8de761ea1004')`, 
        height: '100vh', 
        width: '50vw', 
        margin: 20,
        backgroundRepeat:'no-repeat'}}/>
         <div style={{marginLeft: '5vw'}}>
        <div style={{color: 'white', fontSize: 50, width: '50vw',lineHeight: .8, justifyContent:'start', marginTop:'20vh', fontWeight: 700}}>TYPE+HYPE</div>
        <div style={{color: 'white', fontSize: 20, width: '40vw', justifyContent:'start', marginTop:'20vh'}}>Can you type fast? Or it is just a hype?</div>
        <div style={{color: 'white', fontSize: 30, width: '40vw', justifyContent:'start', marginBottom:'10vh', fontWeight: 600}}>Try it now!</div>
        <div style={{color: 'white',  width: '50vw',  justifyContent:'start'}}>    <LoginForm/></div>
        </div>

    </Content>
  
  </Layout>
)
}

export default Login

