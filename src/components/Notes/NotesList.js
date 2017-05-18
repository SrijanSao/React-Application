var React = require('react');
//var Firebase = require('firebase')
var NotesList = React.createClass({
    render: function(){
        var notes = this.props.notes.maps(function(note, index){
        return <li className="list-group-item" key={index}>{note['.value']}</li>

        })
        return (
            <ul className="list-group">
                {notes}
            </ul>
        )
    }
});

module.exports = NotesList;