import NavBar from '../NavBar/NavBar'
import Scoreboard from '../Scoreboard/Scoreboard'
import './Dashboard.css'

const Dashboard = () => {
return (
<div className="App">
	<h1>Thin Monkeys</h1>
	<NavBar/>
	<Scoreboard/>
</div>
)
}

export default Dashboard