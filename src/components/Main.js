var React = require('react');
import { observer } from 'mobx-react'
//var Home = require('./Home/index')
import Home from './Home/index'
import Icon from './Icons/index'
import UserProfile from './UserProfile/index'

@observer export default class Main extends React.Component{    
  
 callerFunction(){
  alert('hello');  
 }
  render() {
      
    switch (1){

    
    case 1: return (
      
     // <div className="home-page">
<div className={"home-page" + ((this.props.uiState.ui.homePageVisible) ? ' show' : "" )}>
     <div className="inputBox">
       
          <input className="textBox" type="text" placeholder="Username" />
       <br />
        
          <input className="textBox" type="password" placeholder="Password"  />
      <br />
        <button className="button1" onClick={this.callerFunction}>Submit</button>
        
     </div>
      </div>
    );
    case 2: return (<div> <UserProfile /> </div>);
  }
    }
}

