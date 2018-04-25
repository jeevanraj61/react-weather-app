var React = require('react');
var PropTypes = require('prop-types');
var Link = require('react-router-dom').Link;


function getStyles(props) {
  return {
    display: 'flex',
    flexDirection:props.direction || 'column' ,
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth: 300
  };
}

class Input extends React.Component {
	constructor(props) {
    super(props);
    this.state = {
      cityname: ''
    };
	this.handleChange = this.handleChange.bind(this);
	}
	
	handleChange(event) {
    var value = event.target.value;

    this.setState(function () {
      return {
        cityname: value
      }
    });
	}
  
	render() {
	return(
	    
		<div style={getStyles(this.props)}>
			<input
			className='form-control'
			placeholder="Bangalore,India" 
			value={this.state.cityname}
			autoComplete='off'
			onChange={this.handleChange}
			type='text'  />
		
		<Link style={{margin: 10}}
            className='button'
            to={'/forecast/' + this.state.cityname} >
              Get Weather
          </Link>		
		</div>
	)};
}

Input.propTypes = {
	direction: PropTypes.string
}

module.exports = Input;