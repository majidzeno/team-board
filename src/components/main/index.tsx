/** @format */

import React from "react";
import { MainContainer } from "./style";
// import SvgIcon from "../svgIcons";
// import userPlacholder from "../../assets/Images/ph.png";
// import { useTabs } from "../../context/screenContext";
import { Route } from "react-router-dom";
import Me from "./mePanel";
import Tasks from "./tasks";
import Team from "./team";
import Dashboard from "./dashboardPanel";

export const Main = (props: any) => {
	// const { state, activateTab }: { state: any; activateTab: any } = useTabs();
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
