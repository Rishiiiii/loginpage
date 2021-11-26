import React from 'react'
import './App.css';


class Mains extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            info  : 'To See the Content inside this Section Click the below Button'
        }
    }
  mainDet=()=>{
      this.setState({
      info:"React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”."

      })
  }
    render(){
        return (
            <div className="main">
                <div className="sn"><h1>Side Navbar</h1></div>
                <div className="maincontent">
                    <h1>Main Section</h1> 
                    <h3>{this.state.info}</h3>
                    <button className="bt" onClick={this.mainDet}>click here</button>
                </div>
               
                
               
            </div>
        )
    }
    
}

export default Mains
