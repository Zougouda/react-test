const 
	React = require('react')
	;

module.exports = class PlayerModeSelector extends React.Component
{
	constructor(props)
	{
		super(props);

		this.state = {
			hasPickedAMode: false,
		};

		this.startSolo = ()=>
		{
			//alert('You chose to start as a solo ship');
			this.setState( (state)=>
			{
				return { hasPickedAMode: true  };
			});
		};
		this.joinOther = ()=>
		{
			var otherShipID = prompt('Type the shipID you wish to join');
			console.log(`You requested to join ship with ID: ${otherShipID}`);
			if(otherShipID === 'valid') // TODO
			{
				this.setState( (state)=>
				{
					return { hasPickedAMode: true  };
				});
			}
			else
			{
				alert('Invalid shipID !');
			}
		};
	}

	componentDidMount()
	{
		document.querySelector('.new-p-container button').focus();
	}

	render()
	{
		if(this.state.hasPickedAMode)
			return null;

		return (
			<>
				<div className='new-p-container'>
					<button onClick={this.startSolo}>New</button>
				</div>
				<div className='join-p-container'>
					<button onClick={this.joinOther}>Join</button>
				</div>
			</>
		);
	}
}
