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
