var React = require('react');
var NotesList = require('./NotesList')
var Notes = React.createClass({
    render: function(){
        console.log('Notes: ', this.props.notes)        

        return( <div>
                <h3> NOTES FOR {this.props.username}</h3>
            </div>)
    }
})

module.exports = Notes;