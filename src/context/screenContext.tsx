/** @format */

import React from "react";
import { createCtx } from "../utils/helpers";

type TabsContextType = {
	state: { dashboard: boolean; me: boolean; team: boolean; tasks: boolean };
	activateTab: ({ activeTab }: { activeTab: string }) => void;
};
type State = { dashboard: boolean; me: boolean; team: boolean; tasks: boolean };
type Action = { type: "ACTIVATE_TAB"; payload: { activeTab: string } };

export const [useTabs, CtxProvider] = createCtx<TabsContextType>();

const defaultState: State = {
	dashboard: true,
	me: false,
	team: false,
	tasks: false,
};
const ACTIVATE_TAB = "ACTIVATE_TAB";
const reducer = (state: State, action: Action): State | any => {
	const allOff = { dashboard: false, me: false, team: false, tasks: false };
	switch (action.type) {
		case ACTIVATE_TAB:
			state = {
				...allOff,
				[action.payload.activeTab]: true,
			};
			return state;
		default:
			throw new Error("Action Not found ");
	}
};
type ScreenProps = {
	children: React.ReactNode;
};
export const ScreenProvider = ({ children }: ScreenProps) => {
	const [state, dispatch] = React.useReducer(reducer, defaultState);

	const activateTab = ({ activeTab }: { activeTab: string }) => {
		console.log("activeTab is ", activeTab);

		dispatch({ type: "ACTIVATE_TAB", payload: { activeTab } });
	};
	return <CtxProvider value={{ state, activateTab }}>{children}</CtxProvider>;
};
