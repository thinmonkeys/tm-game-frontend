import './DataSet.css'
import {formatAmount} from  '../../utils/utils'
import moment from 'moment'

const Record = ({record, onEdit}) => (
	<li className="record">
		<div className="left">
			<div className="icon"></div>
		</div>
			
		<div className="middle">
			<div className="creditor-name">{record.CreditorName}</div>
			<div className="date">{moment(record.NextDueDate).format("dddd · MMMM Do")}</div>
			<div className="description">{record.FrequencyDescription.split(" ")[0]}</div>
		</div>
			
		<div className="right">
			<div className="amount">{formatAmount(record.AmountPence)}</div>
			<a onClick={onEdit}>edit</a>
		</div>
	</li>
)

export default Record