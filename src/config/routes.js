var React = require('react');
    var Main = require('../components/Main');
    //var Home = require('../components/Home/index');
    import Home from '../components/Home/index'
    
    var Profile = require('../components/Profile/Profile');
    var Router = require('react-router');
    var Route = Router.Route;
    var IndexRoute = Router.IndexRoute;
module.exports = (
    
    <Route path="/" component={Main}>
            <Route path="profile/:username" component={Profile} />
            <IndexRoute component={Home} />

    </Route> 

)

        
 