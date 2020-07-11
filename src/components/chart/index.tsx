/** @format */

import React from "react";
import Chart from "./chartWrapper";
import { useTheme } from "@material-ui/core/styles";

const ChartContainer = () => {
	const theme = useTheme();
	console.log("Theeme", theme);

	const data = [
		{
			id: "Remaining",
			label: "Remaining",
			value: 7,
			color: theme.palette.info.main,
		},
		{
			id: "Taken",
			label: "Taken",
			value: 14,
			color: theme.palette.error.light,
		},
	];
	return <Chart data={data} />;
};

export default ChartContainer;
