/** @format */

import React from "react";
import { Panel } from "../style";
import AddMemberForm from "./addMemberForm";
import Member from "./member";
import { TeamWrapper } from "./style";
import { useUserState } from "../../../context/userContext";
import {
	Modal,
	Button,
	Theme,
	Backdrop,
	makeStyles,
	createStyles,
} from "@material-ui/core";

type MemberDataType = {
	id: string;
	name: string;
	position: string;
	imageUrl: string;
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

const Team = () => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
	const UserState = useUserState();
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Panel>
			<TeamWrapper>
				{UserState.team.map((member: MemberDataType) => (
					<Member
						key={member.id}
						id={member.id}
						imageUrl={member.imageUrl}
						name={member.name}
						position={member.position}
					/>
				))}
				<Button
					onClick={() => setOpen(true)}
					color="primary"
					variant="contained">
					Add Team Member
				</Button>
			</TeamWrapper>
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
					<AddMemberForm handleClose={handleClose} />
				</div>
			</Modal>
		</Panel>
	);
};

export default Team;
