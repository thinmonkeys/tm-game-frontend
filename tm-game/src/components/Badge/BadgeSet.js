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
		<div className="badge-set-column">
			<Badge handleInfoClick={() => this.handleInfoClick("dd")} name="Direct Debit" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"/>
			<Badge  handleInfoClick={() => this.handleInfoClick("incomes")} name="Incomes" description="quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."/>
			<Badge  handleInfoClick={() => this.handleInfoClick("so")} name="Standing Orders" description="Excepteur sint occaecat cupidatat non proident."/>
			<Badge  handleInfoClick={() => this.handleInfoClick("contact")} name="Contact" description="tempor incididunt ut labore et dolore magna aliqua."/>
		</div>
	

		{showInfo ? <Alert children={info[key]}/> : <div></div>}
	</div>
	)
	}

} 

