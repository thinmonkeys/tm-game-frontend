import NavBar from "../NavBar/NavBar";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <h1>Thin Monkeys</h1>
      <Scoreboard />
    </div>
  );
};

export default Dashboard;
