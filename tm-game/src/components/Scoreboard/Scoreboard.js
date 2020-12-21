import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'
import './Scoreboard.css'

export default class Scoreboard extends Component {
	state = {
		ScoreboardRecords: {},
		isLoading: true,
		hasError: false
	}


	componentDidMount(){
		try {
		fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/getScore?cif=4006001200%22")
		.then(response => response.json())
		.then(data => {
		 	this.setState({ DirectDebitList: data.DirectDebitList, lastConfirmed: data.LastConfirmed,  isLoading: false });
		});
		}
		catch{
			this.setState({ isLoading: false, hasError: true });
		}
	}

	render(){
		const {ScoreboardRecords, isLoading, hasError} = this.state

		if (isLoading) return <Loading/>

		if (hasError) return <Alert children="Error loading" variant='error'/>

		return <div className="scoreboard">Scoreboard</div>
	}
} 

