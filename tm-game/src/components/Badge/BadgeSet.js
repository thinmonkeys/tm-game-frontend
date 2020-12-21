import React, { Component } from 'react';
import Badge from './Badge'
import Alert from '../Alert/Alert'
import './Badge.css'

export default class BadgeSet extends Component {

	state = {
		showInfo: false,
		infoKey: ""
	}

	handleInfoClick(infoKey){
		alert("hello")
		this.setState({showInfo: !this.state.showInfo, infoKey: infoKey})
	}

	render(){
	const {showInfo, key} = this.state
	const info = {
		dd: "direct debits", 
		so: "standing orders",
		income: "incomes",
		contact: "contact"
	}
	
	return(
	<div>
		<div className="badge-set">
			<Badge handleInfoClick={() => this.handleInfoClick("dd")} name="Direct Debit"/>
			<Badge  handleInfoClick={() => this.handleInfoClick("incomes")} name="Incomes"/>
			<Badge  handleInfoClick={() => this.handleInfoClick("so")} name="Standing Orders"/>
			<Badge  handleInfoClick={() => this.handleInfoClick("contact")} name="Contact"/>
		</div>

		{showInfo ? <Alert children={info[key]}/> : <div></div>}
	</div>
	)
	}

} 

