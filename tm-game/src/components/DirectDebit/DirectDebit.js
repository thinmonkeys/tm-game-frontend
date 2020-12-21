import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import DataSet from '../DataSet/DataSet'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class DirectDebit extends Component {

	state = {
		DirectDebitList: ["1", "2", "3"], 
		isLoading: true,
		hasLoadError: false
	}

	render(){
		const {DirectDebitList, isLoading, hasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (hasLoadError) return <Alert children="Error loading" variant='error'/>

		return (
		<div>
			<title>Direct Debits</title>
			<NavBar/>
			<p>Direct Debits</p>
			<DataSet recordList={DirectDebitList}/>
		</div>
		) 
	}
}
