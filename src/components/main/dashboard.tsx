/** @format */

import React from "react";
import Card from "../common/card";
import { DaysCount } from "./style";
import Chart from "../chart";

const Dashboard = () => {
	return (
		<div>
			<h1>Dashboard</h1>
			<Card>
				<Chart />
				<DaysCount>
					<DaysCount.Taken>14</DaysCount.Taken>
					<DaysCount.Remaining>7</DaysCount.Remaining>
				</DaysCount>
			</Card>
		</div>
	);
};

export default Dashboard;
