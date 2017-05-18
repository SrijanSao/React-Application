var React = require('react');
var ReactDOM = require('react-dom');
//var Router = require('react-router').Router;
//var routes = require('./src/config/routes');
//require("!style-loader!css-loader!sass-loader!");

import './src/styles/main.scss'
import Home from './src/components/Home/index';
import Main from './src/components/Main'


ReactDOM.render(
        <Main />,
        document.getElementById('root')
    )