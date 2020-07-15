/** @format */

import React from "react";
import { Formik, Field } from "formik";
import { TextField } from "@material-ui/core";

import { useUserDispatch } from "context/userContext";
import { addActiveTask } from "context/actions";
import { FormWrapper, FieldWrapper } from "../dashboardPanel/style";
import { ButtonsWrapper, ButtonLink } from "components/common/commonStyles";
import * as Yup from "yup";
type Func = {
	handleClose: () => void;
};
const AddTaskForm: React.FC<Func> = ({ handleClose }) => {
	const UserDispatch = useUserDispatch();

	const TaskSchema = Yup.object().shape({
		id: Yup.string().required(),
		taskTitle: Yup.string().required(),
	});
	return (
		<div>
			<Formik
				initialValues={{
					id: Math.random() + "",
					taskTitle: "",
				}}
				validationSchema={TaskSchema}
				onSubmit={(values) => {
					UserDispatch(addActiveTask(values));
					handleClose();
				}}>
				{({ values, setFieldValue, handleSubmit }) => {
					return (
						<FormWrapper>
							<FieldWrapper>
								<Field
									component={TextField}
									label="Task Title"
									name="title"
									value={values.taskTitle}
									onChange={(e: any) => {
										setFieldValue("taskTitle", e.target.value, true);
									}}
								/>
							</FieldWrapper>

							<ButtonsWrapper>
								<ButtonLink
									onClick={handleClose}
									variant="outlined"
									color="secondary">
									Cancel
								</ButtonLink>
								<ButtonLink
									type="submit"
									variant="contained"
									onClick={() => handleSubmit()}
									color="primary">
									Save
								</ButtonLink>
							</ButtonsWrapper>
						</FormWrapper>
					);
				}}
			</Formik>
		</div>
	);
};

export default AddTaskForm;
