import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import DataSet from '../DataSet/DataSet'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class Incomes extends Component {

	state = {
		StandingOrdersList: ["1", "2", "3"], 
		isLoading: false,
		hasLoadError: false
	}

	componentDidMount(){
		try {
			fetch("../../service/FakeServices")
		.then((response) => response.json())
		.then(StandingOrders => {
			this.setState({ StandingOrdersList: StandingOrders, isLoading: false });
		});
		}
		catch{
			this.setState({ isLoading: false, hasLoadError: true });
		}
	}

	render(){
		const {StandingOrdersList, isLoading, hasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (hasLoadError) return <Alert children="Error loading" variant='error'/>

		return (
		<div>
			<title>Standing Orders</title>
			<NavBar/>
			<h1>Standing Orders</h1>
			<DataSet recordList={StandingOrdersList}/>
		</div>
		) 
	}w
}