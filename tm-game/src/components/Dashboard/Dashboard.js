import NavBar from '../NavBar/NavBar'
import Scoreboard from '../Scoreboard/Scoreboard'
import BadgeSet from '../Badge/BadgeSet'
import './Dashboard.css'

const Dashboard = () => {
return (
<div>
	<NavBar/>
	<h1>Thin Monkeys</h1>
	<Scoreboard/>
	<BadgeSet />
</div>
)
}

export default Dashboard