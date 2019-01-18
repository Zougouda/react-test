const 
	React = require('react')
	;

module.exports = class Canvas extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			width: this.props.width || 640,
			height: this.props.height || 480,
		};
	}

	render()
	{
		return <canvas id={this.props.id}  width={this.state.width} height={this.state.height}></canvas>
	}
};
