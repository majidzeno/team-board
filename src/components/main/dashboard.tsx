/** @format */

import React from "react";
import Card from "../common/card";
import { ChartContainer } from "./style";
import Chart from "../chart";
import { Button } from "@material-ui/core";

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Card>
				<ChartContainer>
					<Chart />
				</ChartContainer>
				<Button
					variant="contained"
					color="primary"
					style={{ textTransform: "capitalize" }}>
					Request holiday
				</Button>
			</Card>
		</div>
	);
};

export default Dashboard;
