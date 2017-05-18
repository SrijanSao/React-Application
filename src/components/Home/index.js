

    import React from 'react'
    import  { observer } from 'mobx-react'
    import ReactDOM from 'react-dom'

export default class Home extends React.Component {
        render(){
            return (
                /*<div>
       <button className="button1"> I am in home </button>
       </div>*/
       /*<div className={'home-page' + ((this.props.uiState.ui.homePageVisible) ? 'show' : '')}>
           </div>*/
           <div className="home-page"><button className="button-primary">Here I am in home</button></div>
            )
        }
    }