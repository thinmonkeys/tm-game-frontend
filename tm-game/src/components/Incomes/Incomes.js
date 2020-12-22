import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import DataSet from '../DataSet/DataSet'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class Incomes extends Component {

	state = {
		IncomeList: [], 
		isLoading: false,
		hasLoadError: false
	}

	componentDidMount(){
		try {
			fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/incomes?cif=4006001200122")
			.then(response => response.json())
		.then(data => {
				this.setState({ IncomeList: data.IncomeList, lastConfirmed: data.LastConfirmed,  isLoading: false });
		});
		}
		catch{
			this.setState({ isLoading: false, hasLoadError: true });
		}
	}

	render(){
		const {IncomeList, isLoading, hasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (hasLoadError) return <Alert children="Error loading" variant='error'/>

		return (
		<div>
			<title>Incomes</title>
			<NavBar/>
			<h1>Incomes</h1>
			{IncomeList.length > 0 ? <DataSet recordList={IncomeList}/> : <Alert children="You have no incomes" />}
		</div>
		) 
	}
}
