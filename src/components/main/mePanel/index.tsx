/** @format */

import React from "react";
import { TextField } from "@material-ui/core";
import { Field, Formik } from "formik";
import * as Yup from "yup";

import { Panel } from "../style";
import { MeContainer, ButtonLink } from "./style";
import { FormWrapper, FieldWrapper } from "../dashboardPanel/style";
import { useUserState, useUserDispatch } from "context/userContext";
import { updatePersonalData } from "context/actions";

const Me: React.FC = () => {
	const [editMode, setEditMode] = React.useState(false);
	const PersonalSchema = Yup.object().shape({
		imageUrl: Yup.string().required(),
		name: Yup.string().required(),
		position: Yup.string().required(),
	});
	const UserState = useUserState();
	const UserDispatch = useUserDispatch();

	return (
		<Panel>
			{!editMode ? (
				<MeContainer>
					<h2>Your Data</h2>
					<MeContainer.Img
						style={{
							backgroundImage: `url(${UserState.personalData.imageUrl})`,
						}}
						altText="userImagePlacholder"
					/>
					<MeContainer.Name>{UserState.personalData.name}</MeContainer.Name>
					<MeContainer.Position>
						{UserState.personalData.position}
					</MeContainer.Position>
					<ButtonLink
						onClick={() => setEditMode(true)}
						variant="outlined"
						color="primary">
						Edit Your Data
					</ButtonLink>
				</MeContainer>
			) : (
				<MeContainer>
					<h2>Edit Your Data</h2>
					<Formik
						initialValues={{
							imageUrl: UserState.personalData.imageUrl,
							name: UserState.personalData.name,
							position: UserState.personalData.position,
						}}
						validationSchema={PersonalSchema}
						onSubmit={(values) => {
							UserDispatch(updatePersonalData(values));
							setEditMode(false);
						}}>
						{({ values, setFieldValue, handleSubmit }) => {
							// console.log("Values", values);

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
									<MeContainer.ButtonsWrapper>
										<ButtonLink
											onClick={() => setEditMode(false)}
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
									</MeContainer.ButtonsWrapper>
								</FormWrapper>
							);
						}}
					</Formik>
				</MeContainer>
			)}
		</Panel>
	);
};

export default Me;
