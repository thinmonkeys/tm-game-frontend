import './Badge.css'
import gold_medal from '../../resources/gold_medal.png'

const Badge = props => <div>
	<div>
		<img alt="Gold medal"/>
	</div>
	<h4>{props.name}</h4>
</div>

export default Badge