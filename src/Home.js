import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Mains from './Mains';
import Login from './Login';
function Home(props) {
  console.log(props)
  return (
        <div className='App'>
            <Header name={props.location.state.username} gender={props.location.state.gender}/>
            <Mains />
            <Footer />
        </div>
  )
}


export default Home;