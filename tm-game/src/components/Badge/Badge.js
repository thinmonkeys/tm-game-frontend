import './Badge.css'
import bronze_medal from '../../resources/bronze_medal.png'
import silver_medal from '../../resources/silver_medal.png'
import gold_medal from '../../resources/gold_medal.png'


const Badge = ({handleInfoClick, name}) => (
<a onClick={handleInfoClick}>
<div>
	<div className="badge">
		<h4>{name}</h4>
		<img alt="medal" src={bronze_medal}/>
	</div>
</div>
</a>

)

export default Badge	