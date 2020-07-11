/** @format */

import React from "react";
import Chart from "./chartWrapper";
import { neutral } from "../../utils";
const data = [
	{
		id: "remaining",
		label: "Remaining",
		value: 7,
		color: neutral[600],
	},
	{
		id: "taken",
		label: "Taken",
		value: 14,
		color: neutral[400],
	},
];

const ChartContainer = () => {
	return <Chart data={data} />;
};

export default ChartContainer;
