import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'
import Edit from '../Edit/Edit'
import './Contact.css'


export default class Contact extends Component {

	state = {
		mobileNumber: "07770999887", 
		homeNumber: "0161 123 1234",
		email: "test@test.com",
		isLoading: false,
		hasError: false, 
		isEditing: false,
		hasUpdated: false,
		pointsGained: 0
	}

	handleConfirmAll(){
		this.setState({hasUpdated: true})

	}

	handleEdit(){
		this.setState({isEditing: !this.state.isEditing})
	}

	// componentDidMount(){
	// 	try {
	// 		fetch("../../service/FakeServices")
	// 	.then((response) => response.json())
	// 	.then(contactDetails => {
	// 		this.setState({ contactDetails: contactDetails, isLoading: false });
	// 	});
	// 	}
	// 	catch{
	// 		this.setState({ isLoading: false, hasLoadError: true });
	// 	}
	// }


	render(){
		const {mobileNumber, homeNumber, email, isLoading, hasError, hasUpdated, isEditing, pointsGained} = this.state

		if (isLoading) return <Loading/>

		return (
		<div>
			<title>Contact Details</title>
			<NavBar/>

			<h1>Contact Details</h1>

			{hasError ? <Alert children="Error loading" variant='error'/> :

			hasUpdated ? <Alert children={`You have successfully updated your contact details and earned ${pointsGained} points`} variant='success'/> : 

			isEditing ? <Edit onEdit={() => this.handleEdit()}/> :

			<div>
			<div className="contact-info">
				<div>
				<div className="info-type">Mobile Number</div>
				<div>{mobileNumber}</div>
				</div>
				<div>
				<a onClick={() => this.handleEdit()}>edit</a>
				</div>
			</div>
			<div className="contact-info">
				<div>
				<div className="info-type">Home Number </div>
				<div>{homeNumber}</div>
				</div>
				<div>
				<a onClick={() => this.handleEdit()}>edit</a>
				</div>
			</div>
			<div className="contact-info">
				<div>
				<div className="info-type">Email Number </div>
				<div>{email}</div>
				</div>
				<div>
				<a onClick={() => this.handleEdit()}>edit</a>
				</div>
			</div>
			<button className="confirm-all" onClick={() => this.handleConfirmAll()}>confirm all</button>
			</div>}
		</div>
		)
	}
}