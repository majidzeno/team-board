/** @format */

import * as actionTypes from "./actionTypes";

type PersonalDataType = {
	name: string;
	position: string;
	imageUrl: string;
};
type VacationReqType = {
	from: string | null;
	to: string | null;
	days: number;
};

type MemberDataType = {
	id: string;
	name: string;
	position: string;
	imageUrl: string;
};

type TaskType = {
	id: string;
	taskTitle: string;
};
type TeamDataType = MemberDataType[];

export const addVacationRequest = (vacationsRequests: VacationReqType) => {
	return {
		type: actionTypes.ADD_VACATION_REQ,
		payload: {
			vacationsRequests: vacationsRequests,
		},
	};
};

export const updatePersonalData = (personalData: PersonalDataType) => {
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

export const addTeamMember = (memberData: MemberDataType) => {
	return {
		type: actionTypes.ADD_TEAM_MEMBER,
		payload: {
			memberData: {
				id: memberData.id,
				name: memberData.name,
				position: memberData.position,
				imageUrl: memberData.imageUrl,
			},
		},
	};
};

export const removeTeamMember = (memberId: string) => {
	return {
		type: actionTypes.REMOVE_TEAM_MEMBER,
		payload: {
			memberId: memberId,
		},
	};
};
export const addActiveTask = (activeTask: TaskType) => {
	return {
		type: actionTypes.ADD_ACTIVE_TASK,
		payload: {
			activeTask: {
				id: activeTask.id,
				taskTitle: activeTask.taskTitle,
			},
		},
	};
};

export const removeActiveTask = (taskId: string) => {
	return {
		type: actionTypes.REMOVE_ACTIVE_TASK,
		payload: {
			taskId: taskId,
		},
	};
};
