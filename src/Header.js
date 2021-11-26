import React from 'react'
import './App.css';
import Login from './Login';
class Header extends React.Component {
    
    
    

    render(){
        return (
            <div className="hs">
                <h1>Header </h1>
                <p>{this.props.name}</p>
                <p>{this.props.gender}</p>

                
            </div>
        )
    }
}

export default Header
