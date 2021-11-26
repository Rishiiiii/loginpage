
import './App.css';
import Login from './Login';
import {BrowserRouter as Router, Switch, Route,Link,withRouter} from "react-router-dom";
import Home from './Home';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  // render() {
  //   return (
  //     <form onSubmit={this.handleSubmit}>
  //       <label>
  //         Name:
  //         <input type="text" value={this.state.value} onChange={this.handleChange} />
  //       </label>
  //       <input type="submit" value="Submit" />
  //     </form>
  //   );
  // }

  render(){
    return (
      <div className="App">
      
               
    <Router>
    <Switch>
    <Route path="/" exact component={Login} />
   </Switch>
       <Switch>
        <Route path="/homepage"  component={Home} />
       </Switch>
      
    </Router>
      </div>
    );
  }
}

export default App;
