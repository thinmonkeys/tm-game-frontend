import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../components/Dashboard/Dashboard'
import DirectDebit from '../components/DirectDebit/DirectDebit'
import StandingOrders from '../components/StandingOrders/StandingOrders'
import Incomes from '../components/Incomes/Incomes'
import Contact from '../components/Contact/Contact'

export default function Routes() {
	return (
	  <Switch>
		<Route path="/" exact component={Dashboard} />
		<Route path="/DirectDebit" component={DirectDebit} />
		<Route path="/Incomes" component={Incomes} />
		<Route path="/StandingOrders" component={StandingOrders} />
		<Route path="/Contact" component={Contact} />
				{/* redirect user to Dashboard if route does not exist and user is not authenticated */}
		<Route component={Dashboard} />
	  </Switch>
	);
  }