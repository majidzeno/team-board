/** @format */

import React from "react";
import { useTheme } from "@material-ui/core/styles";
import {
	Modal,
	Button,
	Theme,
	Backdrop,
	makeStyles,
	createStyles,
} from "@material-ui/core";

import AddTaskForm from "./addTaskForm";
import { Panel } from "../style";
import { ListWrapper, CloseIcon } from "components/common/commonStyles";
import { useUserState, useUserDispatch } from "context/userContext";
import { removeActiveTask } from "context/actions";

type TaskType = {
	id: string;
	taskTitle: string;
};
const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: "2px solid #000",
			borderRadius: "50px",
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
	})
);

const Tasks = () => {
	const theme = useTheme();
	const UserState = useUserState();
	const UserDispatch = useUserDispatch();
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Panel style={{ flexDirection: "column" }}>
			<ListWrapper
				style={{
					height: "100%",
					borderRadius: "15px",
					backgroundColor: theme.palette.grey[300],
				}}>
				<ListWrapper.Title>Active Projects</ListWrapper.Title>
				<ListWrapper.ItemsList>
					{UserState.activeTasks.map((task: TaskType) => (
						<ListWrapper.Item key={task.id}>
							{task.taskTitle}
							<CloseIcon
								style={{
									position: "absolute",
									top: "5px",
									right: "10px",
								}}
								onClick={() => UserDispatch(removeActiveTask(task.id))}
							/>
						</ListWrapper.Item>
					))}
				</ListWrapper.ItemsList>
			</ListWrapper>
			<Button
				style={{ marginTop: "20px" }}
				onClick={() => setOpen(true)}
				color="primary"
				size="small"
				variant="contained">
				Add Task
			</Button>
			<Modal
				aria-labelledby="spring-modal-title"
				aria-describedby="spring-modal-description"
				className={classes.modal}
				open={open}
				onClose={() => {
					setOpen(false);
				}}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}>
				<div className={classes.paper}>
					<AddTaskForm handleClose={handleClose} />
				</div>
			</Modal>
		</Panel>
	);
};

export default Tasks;
