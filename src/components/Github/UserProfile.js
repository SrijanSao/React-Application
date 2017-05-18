var React = require('react');

var UserProfile = React.createClass({
    render: function(){
        return(
        <div>
            <p>USER PROFILE! </p>
            <p> Username: {this.props.username} </p>
            <p> Bio: {this.props.bio.name}</p>
            <p> Repos: {this.props.repos} </p>
        </div>
        )
    }
})

module.exports = UserProfile;