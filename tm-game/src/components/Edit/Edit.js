const Edit = ({onEdit, record}) => (
	<div>
		<div>
		Editing <span>{record.amount}</span>
		</div>
		<button onClick={onEdit}>confirm</button>
	</div>
)

export default Edit