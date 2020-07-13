/** @format */

import React from "react";
import { Formik, Field, Form } from "formik";
import { FormWrapper } from "./style";
import { Button, LinearProgress, TextField } from "@material-ui/core";
// import { TextField } from "formik-material-ui";
import * as Yup from "yup";

import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

// Depending on the library you picked
import DateFnsUtils from "@date-io/date-fns";
import differenceInBusinessDays from "date-fns/differenceInBusinessDays";
import { addBusinessDays } from "date-fns";

// interface MyFormValues {
// 	name: string;
// 	email: string;
// }
type FormValues = {
	from: Date;
	to: Date;
};
let credit = 21;
const calcDays = (date1: any, date2: any) => {
	console.log("diff", differenceInBusinessDays(date1, date2));
	return differenceInBusinessDays(date1, date2);
};

const FormContainer: React.FC = () => {
	const [fromDate, setFromDate] = React.useState();
	const [toDate, setToDate] = React.useState();

	const VacationRequestSchema = Yup.object().shape({
		from: Yup.date().required("Required").nullable(),
		to: Yup.date().required("Required").nullable(),
		days: Yup.number().min(0).max(credit),
	});

	return (
		<FormWrapper>
			<h3>Form Title</h3>
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<Formik
					initialValues={{ from: null, to: null, days: 0 }}
					validationSchema={VacationRequestSchema}
					onSubmit={(values, { setSubmitting }) => {}}>
					{({
						values,
						handleBlur,
						isSubmitting,
						handleChange,
						setFieldValue,

						...props
					}) => {
						const fromChange = (val: any) => {
							setFieldValue("from", val, true);
							let noOfDays = values.from && calcDays(values.to, val);
							setFieldValue("days", noOfDays, true);
						};
						const toChange = (val: any) => {
							setFieldValue("to", val, true);
							let noOfDays = values.from && calcDays(val, values.from);
							setFieldValue("days", noOfDays, true);
						};
						const daysChange = (e: any) => {
							setFieldValue("days", e.target.value, true);
							let newToDate =
								values.from && addBusinessDays(values.from!, e.target.value);
							console.log("newToDate", newToDate);

							setFieldValue("to", newToDate, true);
						};
						return (
							<Form>
								<Field
									component={DatePicker}
									label="From"
									name="from"
									format="MM/dd/yyyy"
									disablePast={true}
									autoOk={true}
									onChange={(val: any) => fromChange(val)}
								/>

								<Field
									format="MM/dd/yyyy"
									component={DatePicker}
									minDate={values.from}
									label="To"
									name="to"
									disablePast={true}
									autoOk={true}
									onChange={(val: any) => toChange(val)}
									disabled={!values.from}
								/>
								<Field
									component={TextField}
									label="Number of Days"
									name="days"
									disabled={!values.from}
									// onChange={() => alert("dds")}
									onChange={(e: any) => daysChange(e)}
									// handleChange={(e: any) => daysChange(e)}
									type="number"
									value={values.days}
								/>
								{isSubmitting && <LinearProgress />}
								<Button
									color="secondary"
									variant="contained"
									type="submit"
									disabled={isSubmitting}>
									Submit
								</Button>
								<pre>{JSON.stringify(values, null, 2)}</pre>

								{/* <pre>From --> {fromDate}</pre>
								<pre>To --> {toDate}</pre> */}
							</Form>
						);
					}}
				</Formik>
			</MuiPickersUtilsProvider>
		</FormWrapper>
	);
};

export default FormContainer;
