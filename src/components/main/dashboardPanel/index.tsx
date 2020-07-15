/** @format */

import React from "react";
import Card from "../../common/card";
import {
	ChartContainer,
	ButtonWrapper,
	VacationsHistoryWrapper,
} from "./style";
import { Panel } from "../style";
import Chart from "../../chart";
import {
	Button,
	Modal,
	Backdrop,
	makeStyles,
	Theme,
	createStyles,
} from "@material-ui/core";
import Form from "./form";
import { useUserState } from "../../../context/userContext";
import { useSpring, animated } from "react-spring/web.cjs";
import { parseISO, parseJSON, format } from "date-fns";
import * as dateFns from "date-fns";
import { ListWrapper, ListItem } from "../../common/list/style";
import { useTheme } from "@material-ui/core/styles";

const parseDate = (date: any) => format(date, "MM/dd/yyyy");
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

interface FadeProps {
	children?: React.ReactElement;
	in: boolean;
	onEnter?: () => {};
	onExited?: () => {};
}
const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
	props,
	ref
) {
	const { in: open, children, onEnter, onExited, ...other } = props;
	const style = useSpring({
		from: { opacity: 0 },
		to: { opacity: open ? 1 : 0 },
		onStart: () => {
			if (open && onEnter) {
				onEnter();
			}
		},
		onRest: () => {
			if (!open && onExited) {
				onExited();
			}
		},
	});

	return (
		<animated.div ref={ref} style={style} {...other}>
			{children}
		</animated.div>
	);
});

const DashboardPanel = () => {
	const [open, setOpen] = React.useState(false);
	const classes = useStyles();
	const UserState = useUserState();
	const handleClose = () => {
		setOpen(false);
	};
	return (
		<Panel>
			<Card key="chart">
				<ChartContainer>
					<Chart />
				</ChartContainer>

				<ButtonWrapper>
					<Button
						onClick={() => setOpen(true)}
						variant="contained"
						color="primary"
						// style={{ textTransform: "capitalize" }}
					>
						Request Vacation
					</Button>
				</ButtonWrapper>

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
					<Fade in={open}>
						<div className={classes.paper}>
							<Form handleClose={handleClose} />
						</div>
					</Fade>
				</Modal>
			</Card>
			<ListWrapper
				style={{
					borderRadius: "15px",
					// backgroundColor: theme.palette.grey[300],
					margin: "15px",
				}}>
				<ListWrapper.Title>Vacations History</ListWrapper.Title>
				<ListWrapper.ItemsList>
					{/* <VacationsHistoryWrapper> */}
					{UserState.vacationsRequests.length > 0 &&
						UserState.vacationsRequests.map(
							(
								vReq: {
									from: string | null;
									to: string | null;
									days: number;
								},
								i: number
							) => (
								<ListWrapper.Item key={i}>
									<ListItem>
										<ListItem.Legend>From </ListItem.Legend>
										<ListItem.Value>
											: {vReq.from && parseDate(vReq.from)}
										</ListItem.Value>
									</ListItem>
									<ListItem>
										<ListItem.Legend>To </ListItem.Legend>
										<ListItem.Value>
											: {vReq.to && parseDate(vReq.to)}
										</ListItem.Value>
									</ListItem>
									<ListItem>
										<ListItem.Legend>No Of Days </ListItem.Legend>
										<ListItem.Value>: {vReq.days}</ListItem.Value>
									</ListItem>
								</ListWrapper.Item>
							)
						)}
					{/* </VacationsHistoryWrapper> */}
				</ListWrapper.ItemsList>
			</ListWrapper>
		</Panel>
	);
};

export default DashboardPanel;
