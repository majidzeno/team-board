/** @format */

import React from "react";

import LogoShort from "./LogoShort";
import LogoFull from "./LogoFull";

const SvgIcon = (props: any) => {
	switch (props.name) {
		case "logoShort":
			return <LogoShort {...props} />;
		case "logoFull":
			return <LogoFull {...props} />;
		default:
			return <LogoShort {...props} />;
	}
};

export default SvgIcon;
