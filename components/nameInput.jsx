const React = require('react');
const PlayerModeSelector = require('./playerModeSelector.jsx');

module.exports = class NameInput extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			localStorageNameKey: 'playerName', 
			fieldID: 'player-name'
		};
		this.state.storedName = localStorage.getItem(this.state.localStorageNameKey);
		this.state.name = this.state.storedName || '';

		this.onChangeName = (e)=>
		{
			this.setState({
				...this.state,
				name: e.target.value
			});
		};

		this.onSubmit = (e)=>
		{
			e.preventDefault();
			var canStoreName = ( document.getElementById('remember-me').checked === true );
			if( canStoreName )
				localStorage.setItem(this.state.localStorageNameKey, this.state.name);
			else
				localStorage.removeItem(this.state.localStorageNameKey);
			window.componentManager.updatePlayerName(this.state.name);
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
				<label htmlFor={this.state.fieldID}>Player name</label>
				<input type='text' id={this.state.fieldID} placeholder='Your name' autoComplete='off' value={this.state.name} onChange={this.onChangeName} />
				<br/>
				<label htmlFor='remember-me'>Remember me </label>
				<input type='checkbox' id='remember-me' defaultChecked={!!this.state.storedName}  />
				<br/>
				<input type='submit' value='OK' />
			</form>
		)
	}
};
