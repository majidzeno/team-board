/** @format */

import styled from "styled-components";

export const MainContainer: any = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background-color: ${({ theme }) => theme.sidebarLogoContainerColor}; */
	max-width: 80%;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
`;

export const DaysCount: any = styled.div`
	border: 2px solid orange;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;

const Taken = styled.div`
	width: 100%;
	max-width: 50%;
	border: 2px solid red;
	text-align: center;
`;
const Remaining = styled.div`
	width: 100%;
	max-width: 50%;
	border: 2px solid blue;
	text-align: center;
`;
DaysCount.Taken = Taken;
DaysCount.Remaining = Remaining;
