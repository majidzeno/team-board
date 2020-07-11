/** @format */

import React from "react";
import { CardContainer } from "./style";

export type CardProps = {
	children?: React.ReactNode;
	[x: string]: any;
};

const Card: React.FunctionComponent<CardProps> = (props) => {
	const { children, ...rest } = props;
	return <CardContainer {...rest}>{children}</CardContainer>;
};

export default Card;
