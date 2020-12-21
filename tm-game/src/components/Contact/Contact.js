import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar'
import Loading from '../Loading/Loading'
import Alert from '../Alert/Alert'

export default class Contact extends Component {

	state = {
		contactDetails: ["1", "2", "3"], 
		isLoading: true,
		HasLoadError: true
	}

	render(){
		const {isLoading, HasLoadError} = this.state

		if (isLoading) return <Loading/>

		if (HasLoadError) return <Alert children="Error loading" variant='error'/>

		return (
		<div>
			<title>Contact Details</title>
			<NavBar/>
			<p>Contact Details</p>
			<h2>Mobile Number: </h2>
			<h2>Home Number: </h2>
			<h2>Email: </h2>
		</div>
		) 
	}
}