/** @format */

import React from "react";
import Chart from "./chartWrapper";
import { purple } from "../../utils";
const data = [
	{
		id: "Remaining",
		label: "Remaining",
		value: 7,
		color: purple[500],
		stroke: "white",
	},
	{
		id: "Taken",
		label: "Taken",
		value: 14,
		color: purple[0],
		stroke: "#000",
	},
];

const ChartContainer = () => {
	return <Chart data={data} />;
};

export default ChartContainer;
