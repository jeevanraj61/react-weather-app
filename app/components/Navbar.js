 var React = require('react');
 var Input = require('./Input');
 
 const styles = {
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    color: '#fff',
    backgroundColor: '#f00',
  },
  link: {
    color: 'inherit',
    textDecoration: 'none',
  },
};

class Navbar extends React.Component {
	render(){
		return (
		<div style={styles.container}>
      <div style={styles.header}>
         <h1 style={{ margin: 0 }}>Weather Forecast</h1>
		 <Input   direction='row'/>
      </div>
       
      </div>
		)
	}
}

module.exports=Navbar;	