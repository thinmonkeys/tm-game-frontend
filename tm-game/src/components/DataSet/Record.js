import './DataSet.css'
import {formatAmount} from  '../../utils/utils'

const Record = ({record, onClick}) => (
	<li className="record">
		<div className="left">
			<div className="icon"></div>
		</div>
			
		<div className="middle">
			<div className="creditor-name">{record.CreditorName}</div>
			<div className="date">{record.NextDueDate}</div>
			<div className="description">{record.FrequencyDescription}</div>
		</div>
			
		<div className="right">
			<div className="amount">{formatAmount(record.AmountPence)}</div>
			<a href="#">update</a>
		</div>
	</li>
)

export default Record