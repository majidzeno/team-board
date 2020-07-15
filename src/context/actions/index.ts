/** @format */

import * as actionTypes from "./actionTypes";

export const addVacationRequest = (vacationsRequests: {
	from: string | null;
	to: string | null;
	days: number;
}) => {
	return {
		type: actionTypes.ADD_VACATION_REQ,
		payload: {
			vacationsRequests: vacationsRequests,
		},
	};
};

export const updatePersonalData = (personalData: {
	name: string;
	position: string;
	imageUrl: string;
}) => {
	return {
		type: actionTypes.UPDATE_PERSONAL_DATA,
		payload: {
			personalData: {
				name: personalData.name,
				position: personalData.position,
				imageUrl: personalData.imageUrl,
			},
		},
	};
};
