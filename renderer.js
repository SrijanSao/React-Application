import 'babel-polyfill'
var React = require('react');
var ReactDOM = require('react-dom');
import './src/styles/main.scss'
import Home from './src/components/Home/index';
import Main from './src/components/Main';
import uiStore from './src/store/ui/uiStore.js';
//var Router = require('react-router').Router;
//var routes = require('./src/config/routes');
//require("!style-loader!css-loader!sass-loader!");

const uiState=window.uiState=new uiStore()


ReactDOM.render(
        <Main 
        
        uiState = {uiState}
        />,
        document.getElementById('root')
    )