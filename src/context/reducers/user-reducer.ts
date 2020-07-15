/** @format */

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
type State = {
	vacationsRequests: {}[];
	personalData: { name: string; position: string; imageUrl: string };
	team: MemberDataType[];
};
type Action =
	| {
			type: "UPDATE_PERSONAL_DATA";
			payload: {
				personalData: PersonalDataType;
			};
	  }
	| {
			type: "ADD_VACATION_REQ";
			payload: {
				vacationsRequests: VacationReqType;
			};
	  }
	| {
			type: "ADD_TEAM_MEMBER";
			payload: {
				memberData: MemberDataType;
			};
	  }
	| {
			type: "REMOVE_TEAM_MEMBER";
			payload: {
				memberId: string;
			};
	  };

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "UPDATE_PERSONAL_DATA":
			// state.personalData = { ...action.payload.personalData };
			state = {
				...state,
				personalData: {
					...action.payload.personalData,
				},
			};
			return state;
		case "ADD_VACATION_REQ":
			state.vacationsRequests.push(action.payload.vacationsRequests);
			return state;

		case "ADD_TEAM_MEMBER":
			state = {
				...state,
				team: [...state.team, action.payload.memberData],
			};
			return state;

		case "REMOVE_TEAM_MEMBER":
			let updatedTeamData = state.team.filter(
				(member) => member.id !== action.payload.memberId
			);
			state = {
				...state,
				team: [...updatedTeamData],
			};
			return state;
		default:
			throw new Error(`Unkown Action`);
	}
};

export default reducer;
