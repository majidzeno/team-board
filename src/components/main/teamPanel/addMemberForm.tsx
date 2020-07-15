/** @format */

import React from "react";
import { Formik, Field } from "formik";
import { addTeamMember } from "../../../context/actions";
import { FormWrapper, FieldWrapper } from "../dashboardPanel/style";
import { TextField } from "@material-ui/core";
import { ButtonsWrapper, ButtonLink } from "../../common/commonStyles";
import { useUserDispatch } from "../../../context/userContext";
import * as Yup from "yup";
type Func = {
	handleClose: () => void;
};
const AddMemberForm: React.FC<Func> = ({ handleClose }) => {
	const UserDispatch = useUserDispatch();

	const MemberSchema = Yup.object().shape({
		id: Yup.string().required(),
		imageUrl: Yup.string().required(),
		name: Yup.string().required(),
		position: Yup.string().required(),
	});
	return (
		<div>
			<Formik
				initialValues={{
					id: Math.random() + "",
					imageUrl: "",
					name: "",
					position: "",
				}}
				validationSchema={MemberSchema}
				onSubmit={(values) => {
					UserDispatch(addTeamMember(values));
					// setEditMode(false)
					handleClose();
				}}>
				{({ values, setFieldValue, handleSubmit }) => {
					return (
						<FormWrapper>
							<FieldWrapper>
								<Field
									component={TextField}
									label="Image Url"
									name="imageUrl"
									value={values.imageUrl}
									onChange={(e: any) => {
										setFieldValue("imageUrl", e.target.value, true);
									}}
								/>
							</FieldWrapper>
							<FieldWrapper>
								<Field
									component={TextField}
									label="Name"
									name="name"
									value={values.name}
									onChange={(e: any) => {
										setFieldValue("name", e.target.value, true);
									}}
								/>
							</FieldWrapper>
							<FieldWrapper>
								<Field
									component={TextField}
									label="Position"
									name="position"
									value={values.position}
									onChange={(e: any) => {
										setFieldValue("position", e.target.value, true);
									}}
								/>
							</FieldWrapper>
							<ButtonsWrapper>
								<ButtonLink
									// onClick={() => setEditMode(false)}
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

export default AddMemberForm;
