/** @format */

import React from "react";
import reducer from "./reducers/user-reducer";

const UserStateContext = React.createContext(undefined);
const UserDispatchContext = React.createContext(undefined);

const initialState = {
	personalData: {
		name: "AbdelGhafour Doe",
		position: "CEO",
		imageUrl: "/static/media/ph.fc98e012.png",
	},

	vacationsRequests: [
		{
			days: 5,
			from: new Date(
				"Fri Jul 24 2020 15:02:00 GMT+0200 (Eastern European Standard Time)"
			),
			to: new Date(
				"Fri Jul 31 2020 15:02:00 GMT+0200 (Eastern European Standard Time)"
			),
		},
	],
	team: [
		{
			id: "Sayed",
			imageUrl: "/static/media/sayed.a344d3c9.jpg",
			name: "Sayed Koshary",
			position: "COO",
		},
		{
			id: "ibrahim",
			imageUrl: "/static/media/sardina.68a067ec.jpg",
			name: "Ibahim Sardina",
			position: "Advisor",
		},
		{
			id: "mrFhim",
			imageUrl: "/static/media/fahim.e5639add.png",
			name: "Mr Fahim",
			position: "CFO",
		},
	],
};
type UserProps = {
	children: React.ReactNode;
};

export const UserProvider = ({ children }: UserProps) => {
	const [state, dispatch]: any[] = React.useReducer(reducer, initialState);
	return (
		<UserDispatchContext.Provider value={dispatch}>
			<UserStateContext.Provider value={state}>
				{children}
			</UserStateContext.Provider>
		</UserDispatchContext.Provider>
	);
};

export const useUserState = (): any => React.useContext(UserStateContext);
export const useUserDispatch = (): any => React.useContext(UserDispatchContext);
