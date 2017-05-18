var React = require('react')
var Router = require('react-router')
var ReactFireMixin = require('reactfire')
var Firebase = require('firebase')
var Repos = require('../Github/Repos')
var UserProfile = require('../Github/UserProfile')
var Notes = require('../Notes/Notes')
var Profile = React.createClass({
  
  
  handleAddNote: function(newNote){
var childRef = this.ref.child(this.props.params.username);
this.bindAsArray(childRef, 'notes');
this.ref.child(this.pops.params.username).child(this.state.notes.length)
  },
  
 
 mixins: [ReactFireMixin], 
   componentDidMount: function() {
  this.ref = new Firebase('https://notetaker-300c8.firebaseio.com/');
  var childRef = this.ref.child(this.props.params.username);
  this.bindAsArray(childRef, 'notes');
},


componentWillUnmount: function(){
this.unbind('notes');
},

    getInitialState: function(){

        return {
        notes: [1, 2, 3],
        bio: {name: 'Yash Kumar'},
        repos: ['a', 'b', 'c']
        }
    },
render: function(){
    console.log(this.props);
    return(
       <div className="row">
        <div className="col-md-4">
          <UserProfile username={this.props.params.username} bio={this.state.bio} />
        </div>
        <div className="col-md-4">
          <Repos username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} />
        </div>
      </div>


    )
}
})

module.exports = Profile;