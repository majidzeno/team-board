/** @format */

import React from "react";
import { Button } from "@material-ui/core";
import Card from "../common/card";
import { ChartContainer } from "./style";
import Chart from "../chart";

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Card>
				<ChartContainer>
					<Chart />
				</ChartContainer>
				<Button variant="contained" color="primary">
					Request holiday
				</Button>
			</Card>
		</div>
	);
};

export default Dashboard;
