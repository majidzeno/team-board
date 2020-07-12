/** @format */

import styled from "styled-components/macro";

export const MainContainer: any = styled.main`
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background-color: ${({ theme }) => theme.sidebarLogoContainerColor}; */
	max-width: 80%;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
	padding: 5%;
`;
export const ChartContainer = styled.div`
	width: 100%;
	height: 80%;
`;

export const Container = styled.div`
	display: flex;
	align-items: center;
`;

export const Panel = styled.div`
	width: 100%;
`;
