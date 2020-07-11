/** @format */

import React from "react";
import { ResponsivePie } from "@nivo/pie";

type Data = {
	id: string;
	label: string;
	value: number;
	color: string;
	stroke: string;
};
const theme = {
	axis: {
		textColor: "#eee",
		fontSize: "14px",
		tickColor: "#eee",
	},
	grid: {
		stroke: "red",
		strokeWidth: 1,
	},
	// Remaining: {
	// 	stroke: "red",
	// },
	// Taken: {
	// 	stroke: "yellow",
	// },
};
const Chart = ({ data }: { data: Data[] }) => {
	return (
		<ResponsivePie
			data={data}
			margin={{ top: 10, right: 60, bottom: 10, left: 60 }}
			startAngle={0}
			innerRadius={0.65}
			padAngle={0.0}
			cornerRadius={0}
			colors={data.map((item) => item.color)}
			borderWidth={0}
			borderColor="black"
			radialLabelsSkipAngle={10}
			radialLabelsTextXOffset={0}
			radialLabelsTextColor="#333333"
			radialLabelsLinkOffset={0}
			radialLabelsLinkDiagonalLength={6}
			radialLabelsLinkHorizontalLength={5}
			radialLabelsLinkStrokeWidth={1}
			radialLabelsLinkColor={{ from: "color" }}
			slicesLabelsSkipAngle={10}
			// slicesLabelsTextColor={{
			// 	from: "color",
			// 	modifiers: [["brighter", "0.5"]],
			// }}
			slicesLabelsTextColor="#f88"
			animate={true}
			motionStiffness={90}
			motionDamping={15}
			legends={[
				{
					anchor: "bottom",
					direction: "row",
					translateY: 0,
					itemWidth: 100,
					itemHeight: 18,
					itemTextColor: "#999",
					symbolSize: 18,
					symbolShape: "circle",
					effects: [
						{
							on: "hover",
							style: {
								itemTextColor: "#000",
							},
						},
					],
				},
			]}
		/>
	);
};

export default Chart;
