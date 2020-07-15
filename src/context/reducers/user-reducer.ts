/** @format */

type State = {
	vacationsRequests: {}[];
	personalData: { name: string; position: string; imageUrl: string };
};
type Action =
	| {
			type: "UPDATE_PERSONAL_DATA";
			payload: {
				personalData: {
					name: string;
					position: string;
					imageUrl: string;
				};
			};
	  }
	| {
			type: "ADD_VACATION_REQ";
			payload: {
				vacationsRequests: {
					from: string | null;
					to: string | null;
					days: number;
				};
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
		default:
			throw new Error(`Unkown Action `);
	}
};

export default reducer;
