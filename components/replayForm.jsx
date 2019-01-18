const React = require('react');

module.exports = class ReplayForm extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {fieldID: 'player-respawn'};

		this.onSubmit = (e)=>
		{
			e.preventDefault();
			window.componentManager.playerRespawns();
		};
	}

	componentDidMount()
	{
		document.getElementById(this.state.fieldID).focus();
	}

	render()
	{
		return (
			<form onSubmit={this.onSubmit}>
				<label htmlFor={this.state.fieldID}>Respawn ?</label>
				<input type='submit' id={this.state.fieldID}  value='yes' />
			</form>
		)
	}
};
