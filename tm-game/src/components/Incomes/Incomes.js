import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import DataSet from '../DataSet/DataSet'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class Incomes extends Component {

	state = {
		IncomeList: ["1", "2", "3"], 
		isLoading: true,
		hasLoadError: false
	}

	render(){
		const {IncomeList, isLoading, hasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (hasLoadError) return <Alert children="Error loading" variant='error'/>

		return (
		<div>
			<title>Incomes</title>
			<NavBar/>
			<p>Incomes</p>
			<DataSet recordList={IncomeList}/>
		</div>
		) 
	}
}
