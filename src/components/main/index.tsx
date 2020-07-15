/** @format */

import React from "react";
import { Route } from "react-router-dom";

import { MainContainer } from "./style";
import Me from "./mePanel";
import Tasks from "./tasksPanel";
import Team from "./teamPanel";
import Dashboard from "./dashboardPanel";

export const Main = () => {
	return (
		<MainContainer>
			<Route exact path="/me" component={Me} />
			<Route exact path="/tasks" component={Tasks} />
			<Route exact path="/team" component={Team} />
			<Route exact path="/dashboard" component={Dashboard} />
		</MainContainer>
	);
};

export default Main;
