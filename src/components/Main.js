var React = require('react');
//var Home = require('./Home/index')
import Home from './Home/index'
import Icon from './Icons/index'
import UserProfile from './UserProfile/index'

export default class Main extends React.Component{    
  constructor(props) {
    super(props);
    this.state = {value: ''};

    //this.handleChange = this.handleChange.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
   // event.preventDefault();
  }
 callerFunction(){
  {<UserProfile />} 
   
    
  
 }
  render() {
      
    switch (2){

    
    case 1: return (
      
      <div className="home-page">

     <div className="inputBox">
       
          <input className="textBox" type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
       <br />
        
          <input className="textBox" type="password" placeholder="Password" value={this.state.value} onChange={this.handleChange} />
      <br />
        <button className="button1" onClick={this.callerFunction}>Submit</button>
        
     </div>
      </div>
    );
    case 2: return (<div> <UserProfile /> </div>);
  }
    }
}

