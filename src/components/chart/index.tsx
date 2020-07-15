/** @format */

import React from "react";
import Chart from "./chartWrapper";
import { useTheme } from "@material-ui/core/styles";
import { useUserState } from "context/userContext";

const ChartContainer = () => {
	const theme = useTheme();
	const UserState = useUserState();
	const reducer = (val1: number, val2: number) => {
		return val1 + Number(val2);
	};
	const takenDays: number = UserState.vacationsRequests
		.map((item: any) => item.days)
		.reduce(reducer, 0);
	console.log("takenDays", takenDays);

	const data = [
		{
			id: "Remaining",
			label: "Remaining",
			value: 21 - takenDays,
			color: theme.palette.primary.main,
		},
		{
			id: "Taken",
			label: "Taken",
			value: takenDays,
			color: theme.palette.secondary.main,
		},
	];
	return <Chart data={data} />;
};

export default ChartContainer;
