var React = require('react');
var Navbar = require('./Navbar');
var api = require('../utils/Api');
var ForecastDisplay = require('./ForecastDisplay');

const styles = {
  background: {
    height: '100%',
    width: '100%',
  },
};

class Forecast extends React.Component{
	
	constructor(props) {
    super(props);
     this.state = {   
	 isLoading: true,	 
      weatherData: {},
	  city:this.props.match.params.city,
    };
	
	this.handleClick = this.handleClick.bind(this);
  }
  
  componentDidMount(){	  
	  api.fetchFiveDayForecast(this.props.match.params.city)
	 .then(function(weatherData){		
	 this.setState(function(){		 
	 return{
		 isLoading: false,
		 weatherData:weatherData
	 }})
	 }.bind(this))
	}
	
	componentDidMount(){	  
	  api.fetchFiveDayForecast(this.props.match.params.city)
	 .then(function(weatherData){		
	 this.setState(function(){		 
	 return{
		 isLoading: false,
		 weatherData:weatherData
	 }})
	 }.bind(this))
	}
	
	componentWillReceiveProps(nextProps){			
	  api.fetchFiveDayForecast(nextProps.match.params.city)
	 .then(function(weatherData){		
	 this.setState(function(){		 
	 return{
		 isLoading: false,
		 city:nextProps.match.params.city,
		 weatherData:weatherData
	 }})
	 }.bind(this))
	}
	
	
	handleClick(forecastData) {
		console.log(this.props);
    this.props.history.push({
      pathname: '/detail/' + this.state.city,
      state: {
        weather: forecastData,
      },
    });
  }
	
	render(){
		return(
		
		<div>	
<Navbar/>		
		<div style={styles.background}>
        <ForecastDisplay
        city={this.state.city}
        forecastData={this.state.weatherData}  
		isLoading={this.state.isLoading}
		handleClick={this.handleClick}		
      />
      </div>
		</div>
		);
	}
}

module.exports=Forecast;	