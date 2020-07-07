/** @format */

import React from "react";
import { PrimaryButton } from "./style";

export type BaseButtonProps = {
	children?: React.ReactNode;
	[x: string]: any;
};

const Button: React.FunctionComponent<BaseButtonProps> = (props) => {
	const { children, ...rest } = props;
	return <PrimaryButton {...rest}>{children}</PrimaryButton>;
};

export default Button;
