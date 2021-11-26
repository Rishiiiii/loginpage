import React, { Component } from 'react'

export class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:"",
             gender:""
        }
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.props)
    //    console.log(event.target.username.value)
    //    console.log(event.target.gender.value)
        const name = event.target.username.value;
        const g=event.target.gender.value;
        this.setState({
          username:name,
          gender:g
        })

        //this.props.history.push('/homepage')
        this.props.history.push({
            pathname: '/homepage',
            state: {
              username:name ,
              gender:g
            },
          })
         
      }
      
   
    
    render() {
        
        return (
            <div>
                <h1><u>Login Page</u></h1> 
                <form onSubmit={this.handleSubmit}>   
                <label for="username">Username : </label>        
                    <input type="text" name="username" value={this.state.name}/><br></br><br></br>
                     <label for="gender"> Select Gender : </label>
                        <select name="gender" >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        
                        </select><br></br><br></br>
                        <button type="submit">Login </button><br></br><br></br>
                </form>
            </div>
        )
    }
}

export default Login