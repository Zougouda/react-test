const 
	React = require('react'),

	HelloWorld = require('./helloWorld.jsx'),
	NameInput = require('./nameInput.jsx'),
	PlayerModeSelector = require('./playerModeSelector.jsx'),
	ReplayForm = require('./replayForm.jsx'),
	GameCanvas = require('./canvas.jsx')
	;

module.exports = class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {};
	}

	componentDidMount()
	{
		
	}

	render()
	{
		let playerForm = null;
		if(!this.state.playerName)
			playerForm = <NameInput/>;
		else
			playerForm = <PlayerModeSelector/>;

		let replayForm = null;
		if(this.state.playerIsDead)
			replayForm = <ReplayForm />

		return (
			<>
				<div id='ui'>
					<HelloWorld name='MyMan' />
					{playerForm}
					{replayForm}
				</div>
				<div id='canvas-container'>
					<GameCanvas id='main' />
				</div>
			</>
		);
	}
};
