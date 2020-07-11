/** @format */

import React from "react";
import { PrimaryButtonWrapper } from "./style";

export type BaseButtonProps = {
	children?: React.ReactNode;
	[x: string]: any;
};

const Button: React.FunctionComponent<BaseButtonProps> = (props) => {
	const { children, ...rest } = props;
	return <PrimaryButtonWrapper {...rest}>{children}</PrimaryButtonWrapper>;
};

export default Button;
