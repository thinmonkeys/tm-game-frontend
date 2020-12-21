import { NavLink } from "react-router-dom";
import './NavBar.css';

const NavBar = () => <div>
	<ul>
  <li><a href="/">Home</a></li>
  <li><a href="../DirectDebit/DirectDebit">Direct Debits</a></li>
  <li><a href="../Incomes/Incomes">Incomes</a></li>
  <li><a href="../StandingOrders/StandingOrders">Standing Orders</a></li>
  <li><a href="../Contact/Contact">Contact</a></li>
	</ul>
</div>

export default NavBar