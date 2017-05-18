var React = require('react');
//var Home = require('./Home/index')
import Home from './Home/index'
import Icon from './Icons/index'
  var Main = React.createClass({
    call: function(){
   {this.props.children}
   //alert("Hello");
    },
      render: function(){
        return (
          <div className="home-page">
            <div className="curtain">
            <div className="banner">
                             <div className="logo"><img src="static/images/computer-networking.jpg" alt="Networking Logo" id="logo" /></div>
                             <div><h1>It&#39;s we start networking in a secure way.</h1></div>

          </div>
          </div>
          <button className="button-primary"> Click me</button>
          </div>
        )
      }
    });

module.exports = Main;
