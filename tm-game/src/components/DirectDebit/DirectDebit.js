import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import DataSet from '../DataSet/DataSet'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'
import Edit from '../Edit/Edit'

export default class DirectDebit extends Component {

	state = {
		DirectDebitList: [], 
		lastConfirmed: null,
		nextPointsEligible: null,
		hasUpdated: false,
		pointsGained: 0,
		isLoading: true,
		hasError: false,
		isEditing: false
	}

	handleConfirmAll() {
		this.setState({isLoading: true})
		try{
			const requestOptions = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ })
			};
			fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/directdebits?cif=4006001200%22", requestOptions)
			.then(response => response.json())
			.then(data => {
				console.log(data)
		 	this.setState({ nextPointsEligible: data.NextPointsEligible, pointsGained: data.PointsGained, isLoading: false, hasUpdated: true });
		});
		}
		catch{
			this.setState({ isLoading: false, hasLoadError: true });
		}
	}

	handleEdit(){
		this.setState({isEditing: !this.state.isEditing})
	}

	componentDidMount(){
		try {
		fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/directdebits?cif=4006001200%22")
		.then(response => response.json())
		.then(data => {
		 	this.setState({ DirectDebitList: data.DirectDebitList, lastConfirmed: data.LastConfirmed,  isLoading: false });
		});
		}
		catch{
			this.setState({ isLoading: false, hasLoadError: true });
		}
	}

	render(){
		const {DirectDebitList, isLoading, hasError, hasUpdated, pointsGained, isEditing} = this.state

		if (isLoading) return <Loading/>

		return (
		<div>
			<title>Direct Debit</title>
			<NavBar/>

			<h1>{isEditing ? "Editing Direct Debit" : "Direct Debits"}</h1>

			{hasError ? <Alert children="Error loading" variant='error'/> : 
			
			hasUpdated ? <Alert children={`You have successfully updated your direct debits and earned ${pointsGained} points`} variant='success'/> : 

			isEditing ? <Edit onEdit={() => this.handleEdit()}/> :
			
			DirectDebitList.length > 0 ? <DataSet onConfirmAll={() => this.handleConfirmAll()} onEdit={() => this.handleEdit()} recordList={DirectDebitList}/> : <Alert children="You have no direct debits" />}
				
		</div>
		) 
	}
}
