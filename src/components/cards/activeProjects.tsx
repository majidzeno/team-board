/** @format */

import React from "react";
// import {
// 	Grid,
// 	Typography,
// 	List,
// 	ListItem,
// 	ListItemText,
// 	makeStyles,
// } from "@material-ui/core";
import List from "../common/list";

const projects = ["Tree App", "Lakehouse App"];

const ActiveProjects = () => {
	return <List title="Active Projects" data={projects} />;
};

export default ActiveProjects;

// <Card style={{ height: "10em" }}>
{
	/* <h1>Active Projects</h1>
			{Tasks} */
}
// </Card>
