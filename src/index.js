import React, { Component } from "react";
import ReactDOM from "react-dom";
import api from '@api/jsonPlaceholder'

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
							<h2 key={monster.id}>
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
		api.getData('/users')
		.then(res => {
			this.setState({
				monsters:res
			})
		})
	}
}

ReactDOM.render(<App />, document.getElementById("index"));