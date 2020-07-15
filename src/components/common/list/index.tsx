/** @format */

import React from "react";
import { useTheme } from "@material-ui/core/styles";
import { ListWrapper } from "./style";

const List = ({ title, data }: { title: string; data: string[] }) => {
	const theme = useTheme();
	return (
		<ListWrapper
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
		</ListWrapper>
	);
};

export default List;
