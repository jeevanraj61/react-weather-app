var React = require('react');
var utils = require('../utils/Utility');
var PropTypes = require('prop-types');
var getDate = utils.getDate;
var Navbar = require('./Navbar');

var styles = {
	container: {
		textAlign: 'center',
		marginTop: '50px'
	},

	image: {
		height: '150px',
	},

	content: {
		fontSize: '22px'
	}
}

function ForecastDetails(props) {
	var propsVal = props.location.state.weather;
	console.log(propsVal);
	var date = getDate(propsVal.dt);
	var icon = propsVal.weather[0].icon;
	var description = propsVal.weather[0].description;
	var minTemp = utils.convertTemp(propsVal.temp.min);
	var maxTemp = utils.convertTemp(propsVal.temp.max);
	var humidity = propsVal.humidity;

	return (
		<div style={styles.container}>		
			<img src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' style={styles.image}/>
	      	<h2>{date}</h2>
	      	<div style={styles.content}>
		      	<p>{description}</p>
		      	<p>{'min temp: ' + minTemp + ' degrees'}</p>
		      	<p>{'max temp: ' + maxTemp + ' degrees'}</p>
		      	<p>{'humidity: ' + humidity}</p>
	      	</div>
		</div>
	)
}


ForecastDetails.propTypes = {
	details: PropTypes.object.isRequired
}

module.exports=ForecastDetails;