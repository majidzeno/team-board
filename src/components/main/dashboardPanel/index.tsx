/** @format */

import React from "react";
import Card from "../../common/card";
import { ChartContainer } from "./style";
import { Panel } from "../style";
import Chart from "../../chart";
import { Button } from "@material-ui/core";
import Form from "./form";
const DashboardPanel = () => {
	return (
		<Panel>
			<h1>Dashboard</h1>
			<Card>
				<ChartContainer>
					<Chart />
				</ChartContainer>
				<Button
					onClick={() => alert("fsd")}
					variant="contained"
					color="primary"
					style={{ textTransform: "capitalize" }}>
					Request holiday
				</Button>
			</Card>
			<h2>Formik</h2>
			<Form />
		</Panel>
	);
};

export default DashboardPanel;
