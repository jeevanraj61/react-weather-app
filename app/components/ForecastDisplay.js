var React = require('react');
var PropTypes = require('prop-types');
var Utils = require('../utils/Utility');
var Loading = require('./Loading');
var Navbar = require('./Navbar');

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: 1200,
    margin: '50px auto',
  },
  dayContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: 35,
  },
  image: {
    minHeight: '100px',
    height: 130,
  },
  header: {
    textAlign: 'center',
    fontSize: 65,
    color: '#333',
  },
  subHeader: {
    textAlign: 'center',
    fontWeight: 300,
  },
};

function Display(props) {	
	 return (
<div>
      <h1 style={styles.header}>{props.city}</h1>      
      <div style={styles.container}>
       {props.forecast.list.map(function(date,index){
			 return(
			 <DayItem key={date.dt}
          day={date} 
		  handleClick={props.handleClick.bind(null, date)} />
			 )
		 })}
      </div>
    </div>
   );	
 
}

function DayItem(props) { 
  let date = Utils.getDate(props.day.dt);
  let icon = props.day.weather[0].icon;
  console.log(icon);
  return (
   <div style={styles.dayContainer} onClick={props.handleClick}>
      <img src={'/app/images/weather-icons/' + icon + '.svg'} alt='Weather' 
     style={styles.image}/>
      <h4 style={styles.subHeader}>{date}</h4>

    </div>
   );
}


function ForecastDisplay(props) {	
	return (
   <div>	
      {
	  props.isLoading === true
      ? <Loading />
      :<Display
        city={props.city}
        forecast={props.forecastData}  
		handleClick={props.handleClick}		
       />
    }
    </div>
   );
	
  

}


ForecastDisplay.propTypes = {  
  isLoading: PropTypes.bool.isRequired,
  forecast: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired 
};

module.exports=ForecastDisplay;