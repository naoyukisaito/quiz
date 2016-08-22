var React = require('react');
var Header = require('./modules/header.jsx');
//var Footer = require('/footer.jsx');
//var Contents = require('/contents.jsx');


var Top = React.createClass({
	render: function(){
		return (
			<div>
				<Header />
			</div>
		);
	}
});

React.render(
	<Top />,
	document.getElementById('jsiWrapper')
);
