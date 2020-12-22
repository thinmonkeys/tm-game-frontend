import './DataSet.css'
import {formatAmount} from  '../../utils/utils'
import moment from 'moment'

const Record = ({record, onEdit}) => (
	<li className="record">
		<div className="left">
			<div className="icon"></div>
		</div>
			
		<div className="middle">
			<div className="creditor-name">{record.RecipientName}</div>
			<div className="date">{moment(record.DueDate).format("dddd · MMMM Do")}</div>
			<div className="description">{record.Frequency}</div>
		</div>
			
		<div className="right">
			<div className="amount">{formatAmount(record.AmountPence)}</div>
			<a value={record.AmountPence} onClick={() => onEdit(record.ID)}>edit</a>
		</div>
	</li>
)

export default Record