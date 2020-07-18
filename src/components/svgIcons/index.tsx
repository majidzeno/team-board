/** @format */

import React from "react";

import LogoShort from "./LogoShort";
import LogoFull from "./LogoFull";
import Dashboard from "./DashboardIcon";
import Me from "./Me";
import Notification from "./Notification";
import Signout from "./Signout";
import Tasks from "./Tasks";
import Team from "./Team";
import Svg1 from "./Svg1";
const SvgIcon = (props: any) => {
	switch (props.name) {
		case "svg1":
			return <Svg1 {...props} />;
		case "logoShort":
			return <LogoShort {...props} />;
		case "logoFull":
			return <LogoFull {...props} />;
		case "dashboard":
			return <Dashboard {...props} />;
		case "me":
			return <Me {...props} />;
		case "notification":
			return <Notification {...props} />;
		case "signout":
			return <Signout {...props} />;
		case "tasks":
			return <Tasks {...props} />;
		case "team":
			return <Team {...props} />;
		default:
			return <LogoShort {...props} />;
	}
};

export default SvgIcon;
