import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'
import {validateEmail, validateMobile} from '../../utils/utils'
import './Contact.css'


export default class Contact extends Component {

	state = {
		contactDetails: {},
		isLoading: false,
		hasError: false, 
		isEditingEmail: false,
		isEditingMobile: false,
		isEditingHome: false,
		hasMobileError:false,
		hasEmailError:false,
		hasHomeError: false,
		pointsGained: 0
	}

	handleEmailEdit(){
		if (this.state.hasEmailError) return 

		this.setState({isEditingEmail: !this.state.isEditingEmail})
	}

	handleEmailUpdate(){
		const email = this.state.contactDetails.EmailAddress
		if(validateEmail(email)){
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'text/plain' },
				body: email
			};
			try{
				this.setState({isLoading: true})
				console.log(requestOptions)
				fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/contactdetails/email?cif=4006001200122", requestOptions)
				.then(() =>{
					this.setState({isLoading: false, isEditingEmail: false, hasEmailError: false})
				}
				)
			}
			catch {
				alert("catch")
			}
		} else {
			this.setState({hasEmailError: true})
		}
	}

	handleEmailChange = (e) => {
		let contactDetails = this.state.contactDetails
		contactDetails.EmailAddress = e.target.value
		this.setState({contactDetails: contactDetails})
	}

	handleMobileEdit(){
		if (this.state.hasMobileError) return 

		this.setState({isEditingMobile: !this.state.isEditingMobile})
	}

	handleMobileUpdate(){
		const mobile = this.state.contactDetails.MobilePhoneNumber
		if(validateMobile(mobile)){
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'text/plain' },
				body: mobile
			};
			try{
				this.setState({isLoading: true})
				console.log(requestOptions)
				fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/contactdetails/mobile?cif=4006001200122", requestOptions)
				.then(() =>{
					this.setState({isLoading: false, isEditingMobile: false, hasMobileError: false})
				}
				)
			}
			catch {
				alert("catch")
			}
		}
		else {
			this.setState({hasMobileError: true})
		}
	}

	
	handleMobileChange = (e) => {
		let contactDetails = this.state.contactDetails
		contactDetails.MobilePhoneNumber = e.target.value
		this.setState({contactDetails: contactDetails})
	}

	handleHomeEdit(){
		this.setState({isEditingHome: !this.state.isEditingHome})
	}

	handleHomeUpdate(){
		const homeNumber = this.state.contactDetails.HomePhoneNumber
		
			const requestOptions = {
				method: 'PUT',
				headers: { 'Content-Type': 'text/plain' },
				body: homeNumber
			};
			try{
				this.setState({isLoading: true})
				console.log(requestOptions)
				fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/contactdetails/home?cif=4006001200122", requestOptions)
				.then(() =>{
					this.setState({isLoading: false, isEditingHome: false})
				}
				)
			}
			catch {
				alert("catch")
			}
	}

	handleHomeChange = (e) => {
		let contactDetails = this.state.contactDetails
		contactDetails.HomePhoneNumber = e.target.value
		this.setState({contactDetails: contactDetails})
	}

	componentDidMount(){
		this.setState({isLoading: true})
		try {
			fetch("https://q15q6mejoj.execute-api.eu-west-1.amazonaws.com/dev/contactdetails?cif=4006001200%22")
		.then((response) => response.json())
		.then(data => {
				this.setState({ contactDetails: data.ContactDetails, isLoading: false });
		});
		}
		catch{
			this.setState({ isLoading: false, hasError: true });
		}
	}

	render(){
		const {contactDetails, isLoading, hasError, isEditingEmail, isEditingMobile, isEditingHome, pointsGained, hasEmailError, hasMobileError} = this.state
		const mobileNumber = contactDetails.MobilePhoneNumber
		const homeNumber = contactDetails.HomePhoneNumber
		const email = contactDetails.EmailAddress

		if (isLoading) return <Loading/>

		return (
		<div>
			<title>Contact Details</title>
			<NavBar/>

			<h1>{isEditingEmail || isEditingMobile || isEditingHome ? "Editing Contact Detail" : "Contact Details"}</h1>

			{hasError ? <Alert children="Error loading" variant='error'/> :

			<div>
			<div className="contact-info">
				<div>
				<div className="info-type">Mobile Number</div>
				{isEditingMobile ? <input className={hasMobileError ? "invalid-input" : ""}  onChange={this.handleMobileChange} value={mobileNumber}></input> : <div>{mobileNumber}</div>}
				</div>
				<div>
				{isEditingMobile? <div className="link-stack"><a onClick={() => this.handleMobileUpdate()} className="update">update</a><a className="cancel" onClick={() => this.handleMobileEdit()}>cancel</a></div> : <div><a onClick={() => this.handleMobileEdit()}>edit</a></div>}
				</div>
			</div>
			<div className="contact-info">
				<div>
				<div className="info-type">Home Number </div>
				{isEditingHome ? <input onChange={this.handleHomeChange}value={homeNumber}></input> : <div>{homeNumber}</div>}
				</div>
				<div>
				{isEditingHome? <div className="link-stack"><a onClick={() => this.handleHomeUpdate()} className="update">update</a><a className="cancel" onClick={() => this.handleHomeEdit()}>cancel</a></div> : <div><a onClick={() => this.handleHomeEdit()}>edit</a></div>}
				</div>
			</div>
			<div className={`contact-info`}>
				<div>
				<div className="info-type">Email</div>
				{isEditingEmail ? <input className={hasEmailError ? "invalid-input" : ""} onChange={this.handleEmailChange} value={email}></input> : <div>{email}</div>}
				</div>
				<div>
				{isEditingEmail ? <div className="link-stack"><a className="update" onClick={() => this.handleEmailUpdate()}>update</a><a className="cancel" onClick={() => this.handleEmailEdit()}>cancel</a></div> : <div><a onClick={() => this.handleEmailEdit()}>edit</a></div>}
				</div>
			</div>
			<button disabled={isEditingEmail || isEditingMobile || isEditingHome} className="confirm-all" /*onClick={() => this.handleConfirmAll()}*/>confirm all</button>
			</div>}
		</div>
		)
	}
}