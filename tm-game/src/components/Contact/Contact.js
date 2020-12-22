import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'
import './Contact.css'


export default class Contact extends Component {

	state = {
		contactDetails: {},
		isLoading: false,
		hasError: false, 
		isEditingEmail: false,
		isEditingMobile: false,
		isEditingHome: false,
		hasUpdated: false,
		pointsGained: 0
	}

	handleConfirmAll(){
		this.setState({hasUpdated: true})

	}

	handleEmailEdit(){
		this.setState({isEmailEditing: !this.state.isEmailEditing})
	}

	handleEmailUpdate(){
		alert("update email")
	}

	handleEmailChange = (e) => {
		let contactDetails = this.state.contactDetails
		contactDetails.EmailAddress = e.target.value
		this.setState({contactDetails: contactDetails})
	}

	handleMobileEdit(){
		this.setState({isEditingMobile: !this.state.isEditingMobile})
	}

	handleHomeEdit(){
		this.setState({isEditingHome: !this.state.isEditingHome})
	}

	componentDidMount(){
		this.setState({isLoading: true})
		try {
			fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/contactdetails?cif=4006001200%22")
		.then((response) => response.json())
		.then(data => {
			if (data.status === 200){
				this.setState({ contactDetails: data.ContactDetails, isLoading: false });
			} else {
				this.setState({ isLoading: false, hasError: true });
			}
		});
		}
		catch{
			this.setState({ isLoading: false, hasError: true });
		}
	}


	render(){
		const {contactDetails, isLoading, hasError, hasUpdated, isEmailEditing, isEditingMobile, isEditingHome, pointsGained} = this.state
		const mobileNumber = contactDetails.MobilePhoneNumber
		const homeNumber = contactDetails.HomePhoneNumber
		const email = contactDetails.EmailAddress

		if (isLoading) return <Loading/>

		return (
		<div>
			<title>Contact Details</title>
			<NavBar/>

			<h1>{isEmailEditing || isEditingMobile || isEditingHome ? "Editing Contact Detail" : "Contact Details"}</h1>

			{hasError ? <Alert children="Error loading" variant='error'/> :

			hasUpdated ? <Alert children={`You have successfully updated your contact details and earned ${pointsGained} points`} variant='success'/> : 

			<div>
			<div className="contact-info">
				<div>
				<div className="info-type">Mobile Number</div>
				{isEditingMobile ? <input value={mobileNumber}></input> : <div>{mobileNumber}</div>}
				</div>
				<div>
				{isEditingMobile? <div className="link-stack"><a className="update">update</a><a className="cancel" onClick={() => this.handleMobileEdit()}>cancel</a></div> : <div><a onClick={() => this.handleMobileEdit()}>edit</a></div>}
				</div>
			</div>
			<div className="contact-info">
				<div>
				<div className="info-type">Home Number </div>
				{isEditingHome ? <input value={homeNumber}></input> : <div>{homeNumber}</div>}
				</div>
				<div>
				{isEditingHome? <div className="link-stack"><a className="update">update</a><a className="cancel" onClick={() => this.handleHomeEdit()}>cancel</a></div> : <div><a onClick={() => this.handleHomeEdit()}>edit</a></div>}
				</div>
			</div>
			<div className="contact-info">
				<div>
				<div className="info-type">Email</div>
				{isEmailEditing ? <input value={email}></input> : <div>{email}</div>}
				</div>
				<div>
				{isEmailEditing? <div className="link-stack"><a className="update" onClick={() => this.handleEmailUpdate()}>update</a><a className="cancel" onClick={() => this.handleEmailEdit()}>cancel</a></div> : <div><a onClick={() => this.handleEmailEdit()}>edit</a></div>}
				</div>
			</div>
			<button disabled={isEmailEditing || isEditingMobile || isEditingHome} className="confirm-all" onClick={() => this.handleConfirmAll()}>confirm all</button>
			</div>}
		</div>
		)
	}
}