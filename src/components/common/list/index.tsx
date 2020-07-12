/** @format */

import React from "react";
import { ListWrapper } from "./style";
import Card from "../card";
import { useTheme } from "@material-ui/core/styles";

const List = ({ title, data }: { title: string; data: string[] }) => {
	const theme = useTheme();
	return (
		<Card
			style={{
				height: "100%",
				borderRadius: "15px",
				backgroundColor: theme.palette.grey[300],
			}}>
			<ListWrapper.Title>{title}</ListWrapper.Title>
			<ListWrapper.ItemsList>
				{data.map((item, i) => (
					<ListWrapper.Item key={item + i}>{item}</ListWrapper.Item>
				))}
			</ListWrapper.ItemsList>
		</Card>
	);
};

export default List;
