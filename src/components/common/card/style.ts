/** @format */

import styled from "styled-components";

export const CardContainer = styled.div`
	display: flex;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.background};
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 300px;
	height: 500px;
	/* background: ${({ theme }) => theme.cardBackgroundColor}; */
	/* box-shadow: ${({ theme }) => theme.cardShadow}; */
	border:1px solid ${({ theme }) => theme.lightBr};
	border-radius: 33px;
`;
