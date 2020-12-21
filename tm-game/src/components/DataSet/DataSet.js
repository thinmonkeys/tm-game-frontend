import React, { Component } from 'react';

export default class DataSet extends Component {

	render(){
		const {recordList} = this.props

		return <div className="Record">
			<title>{this.props.name}</title>
			<ul>
				{recordList.map((r)=>{<li>r</li>})}
			</ul>
		</div>
	}
}