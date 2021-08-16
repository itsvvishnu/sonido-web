import React, { Component } from "react";
import ReactDOM from "react-dom";
import api from '@api'
import '~s/style.styl'

class App extends Component{
	constructor(){
		super()
		this.state = {
			monsters:[]
		}
		this.changeText = this.changeText.bind(this)
	}
	render(){
		return(
			<div>
				{
					this.state.monsters.map(monster => {
						return (
							<h2 key={monster.stationuuid}>
								{ monster.name}
							</h2>
						)
					})
				}
			</div>
		)
	}
	changeText(){
		this.setState({msg:'Message changed'})
	}

	componentDidMount(){
		api.getStations(1)
		.then(res => {
			this.setState({
				monsters:res
			})
		})
	}
}

ReactDOM.render(<App />, document.getElementById("index"));