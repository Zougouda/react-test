const 
	React = require('react')
	;

module.exports = class HelloWorld extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {red: false};

		this.onClick = (e)=>
		{
			this.setState( (state, props)=>
			{
				return {
					red: !state.red
				};
			});
		}
	}

	render()
	{
		var styleAttr = {};
		if(this.state.red)
			styleAttr = {color: 'red'};
		return <h1 style={styleAttr} name="MyMan" onClick={this.onClick}>Hello World, {this.props.name} !</h1>;
	}
};
