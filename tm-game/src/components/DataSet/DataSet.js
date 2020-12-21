import React, { Component } from 'react';
import Record from './Record'

export default class DataSet extends Component {

	render(){
		const {recordList, onConfirmAll, onEdit} = this.props
	
	return <div className="Record">
			<title>{this.props.name}</title>
			<ul>
			{recordList.map((r, i)=> <Record record={r} key={i} onEdit={onEdit}/>)}
			</ul>
			<button className="confirm-all" onClick={onConfirmAll}>confirm all</button>
		</div>
	}
}