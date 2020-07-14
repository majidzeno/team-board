/** @format */

type State = { vacationsRequests: {}[] };
type Action = {
	type: "ADD_VACATION_REQ";
	payload: {
		vacationsRequests: { from: string | null; to: string | null; days: number };
	};
};

const reducer = (state: State, action: Action) => {
	switch (action.type) {
		case "ADD_VACATION_REQ":
			state.vacationsRequests.push(action.payload.vacationsRequests);

			return state;
		default:
			throw new Error(`Unkown Action : ${action.type}`);
	}
};

export default reducer;
