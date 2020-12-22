import React, { Component } from 'react';
import Alert from '../Alert/Alert'
import Loading from '../Loading/Loading'
import moment from 'moment'
import './Edit.css'

export default class Edit extends Component {
	state = {
		ddRecord: [],
		amount: null,
		frequency: null,
		nextDueDate: null,
		isLoading: false, 
		isConfirm: false, 
		isUpdateSuccess:false, 
		hasUpdateError: false
	}

	handleAmountChange = (e) => {
		const amount = e.target.value.slice(1)
		this.setState({amount: amount})
	}

	handleFrequencyChange = (e) => {
		const frequency = e.target.value
		this.setState({frequency: frequency})
	}

	handleDueDateChange = (e) => {
		const dueDate = e.target.value
		this.setState({nextDueDate: dueDate})
	}

	handleConfirm = (e) => {
		const {RecipientName, RecipientID, ID} = this.state.ddRecord[0]
		const {amount, frequency, nextDueDate} = this.state
		const formattedDate = moment(nextDueDate).format()

		if (amount > 100000) {
			return alert("amount error")
		}

		if (formattedDate <= moment().format()) {
			return alert("date error")
		}

		this.setState({isLoading: true})
		const requestOptions = {
			method: 'PUT',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				"ID": ID,"RecipientID":RecipientID,"RecipientName": RecipientName,"DueDate": formattedDate,"Frequency": frequency,"AmountPence": Number(amount)
			 })
		};
		console.log(requestOptions.body)
		try{
			fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/directdebits?cif=4006001200%22", requestOptions)
			.then(response => response.json())
			.then(data => {
				this.setState({isLoading: false, isUpdateSuccess: true})
			})
		}
		catch{
			this.setState({isLoading: false, hasUpdateError: true})
		}
	}
 
	componentDidMount(){
		const {record} = this.props
		console.log(record)
		this.setState({ddRecord: record, amount: record[0].AmountPence, frequency: record[0].Frequency, nextDueDate: record[0].DueDate})
	}

	render(){
		const {amount, frequency, nextDueDate, isUpdateSuccess, hasUpdateError, isLoading} = this.state

		if(isLoading) return <Loading/>

		if(hasUpdateError) return <Alert children="There was an error updating your direct debit" variant="error"/>

		return (
			<div>
			{isUpdateSuccess ? <Alert children="you have updated your dd"/> : 
			<div>
				<div className="record-item">
				<div>Amount</div>
				<input onChange={this.handleAmountChange} type="currency" value={`£${amount}`}></input>
				</div>
				<div className="record-item">
				<div>Frequency</div>
				<select onChange={this.handleFrequencyChange} value={frequency}>
					<option value="Daily">Daily</option>
					<option value="Weekly">Weekly</option>
					<option value="Monthly">Monthly</option>
					<option value="Fortnightly">Fortnightly</option>
					<option value="Quarterly">Quarterly</option>
					<option value="Annually">Annually</option>
				</select>
				</div>
				<div className="record-item">
				<div>Due date</div>
				<input type="date" onChange={this.handleDueDateChange} value={moment(nextDueDate).format("yyyy-MM-DD")}></input>
				</div>
				<button onClick={() => this.handleConfirm()}>confirm</button>
			</div>
		}
		</div>
		)
	}
}

