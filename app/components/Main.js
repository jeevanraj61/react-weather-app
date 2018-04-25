var React = require('react');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var App = require('./App');
var Forecast = require('./Forecast');
var ForecastDetails = require('./ForecastDetails');
var Switch = ReactRouter.Switch;



class Main extends React.Component {
	render(){
		return (
		<Router history={hashHistory} >				
		<Switch>
		<Route exact path ='/' component={App}/>
		<Route path='/forecast/:city' component={Forecast} />
		<Route path='/detail/:city' component={ForecastDetails} />		
		<Route render={function(){
		return <p> Not Found</p>
		}
		}/>
		</Switch>						
		</Router>
		)
	}
}

module.exports=Main;	