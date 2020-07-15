/** @format */

import React from "react";
import { Formik, Field } from "formik";
import { FormWrapper, FieldWrapper } from "./style";
import { TextField, Button } from "@material-ui/core";
import * as Yup from "yup";

import { DatePicker } from "formik-material-ui-pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import DateFnsUtils from "@date-io/date-fns";
import differenceInBusinessDays from "date-fns/differenceInBusinessDays";
import { addBusinessDays, add } from "date-fns";
import { useUserDispatch } from "../../../context/userContext";
import { addVacationRequest } from "../../../context/actions";

let credit = 21;
const calcDays = (date1: any, date2: any) => {
	return differenceInBusinessDays(date1, date2);
};
type Func = {
	handleClose: () => void;
};
const FormContainer: React.FC<Func> = ({ handleClose }) => {
	const UserDispatch = useUserDispatch();

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
					onSubmit={(values, { setSubmitting }) => {
						UserDispatch(addVacationRequest(values));
						handleClose();
					}}>
					{({
						values,
						handleBlur,
						handleSubmit,
						isSubmitting,
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
							setFieldValue("to", newToDate, true);
						};
						return (
							<FormWrapper>
								<FieldWrapper>
									<Field
										component={DatePicker}
										label="From"
										name="from"
										format="MM/dd/yyyy"
										disablePast={true}
										autoOk={true}
										onChange={(val: any) => fromChange(val)}
										variant="inline"
										inputVariant="outlined"
									/>
								</FieldWrapper>
								<FieldWrapper>
									<Field
										format="MM/dd/yyyy"
										component={DatePicker}
										minDate={add(values.from!, { days: 1 })}
										label="To"
										name="to"
										disablePast={true}
										autoOk={true}
										onChange={(val: any) => toChange(val)}
										variant="inline"
										inputVariant="outlined"
										disabled={!values.from}
									/>
								</FieldWrapper>
								<FieldWrapper>
									<Field
										component={TextField}
										label="Number of Days"
										name="days"
										disabled={!values.from}
										onChange={(e: any) => daysChange(e)}
										type="number"
										value={values.days}
									/>
								</FieldWrapper>
								{/* {isSubmitting && <LinearProgress />} */}
								<div>
									<Button
										color="primary"
										variant="contained"
										type="submit"
										onClick={() => handleSubmit()}
										disabled={isSubmitting || (!values.from && !values.to)}
										style={{ textTransform: "capitalize" }}>
										Submit Vacation Request
									</Button>
								</div>
							</FormWrapper>
						);
					}}
				</Formik>
			</MuiPickersUtilsProvider>
		</FormWrapper>
	);
};

export default FormContainer;
