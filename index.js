const 
	React = require('react'),
	ReactDOM = require('react-dom'),
	App = require('./components/app.jsx')
	;

class ComponentManager
{
	constructor()
	{
		document.addEventListener("DOMContentLoaded", ()=>
		{
			this.init();
		});
	}

	init()
	{
		this.appComponent = ReactDOM.render(<App />, document.getElementById('app'));
	}

	updatePlayerName(name)
	{
		this.appComponent.setState( (state)=>
		{
			return {
				...state,
				playerName: name,
			};
		});
	}

	playerDies()
	{
		this.appComponent.setState( (state)=>
		{
			return {
				...state,
				playerIsDead: true,
			};
		});
	}

	playerRespawns()
	{
		this.appComponent.setState( (state)=>
		{
			return {
				...state,
				playerIsDead: false,
			};
		});
	}
}
//ComponentManager.ReactDOM = ReactDOM;

module.exports = new ComponentManager();
