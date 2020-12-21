import React, { Component } from 'react'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class Scoreboard extends Component {
	state = {
		ScoreboardRecords: {},
		isLoading: true,
		hasLoadError: false
	}
	render(){
		const {ScoreboardRecords, isLoading, hasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (hasLoadError) return <Alert children="Error loading" variant='error'/>

		return <div>Scoreboard</div>
	}
} 

