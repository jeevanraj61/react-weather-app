var React = require('react');
var Input = require('./Input');
var Navbar = require('./Navbar');

var styles = {
	container: {
		backgroundSize: 'cover',
		backgroundImage: 'url("app/images/pattern.svg")',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		height: '100%',
		width: '100%'
	},
	title: {
		color: '#fff',
		fontSize: '45px',
		fontWeight: '100',
		
	}
}


class App extends React.Component {
	render(){
		return (		
		<div style={styles.container} className='home-container'>
		<Navbar />
		<h1 style={styles.title}>Enter a City</h1>
		<Input/>
		</div>
		)
	}
}

module.exports=App;	