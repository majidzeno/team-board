/** @format */

import styled from "styled-components/macro";

export const CardContainer = styled.div`
	display: flex;
	align-items: flex-start;
	background-color: ${({ theme }) => theme.background};
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	width: 320px;
	height: 500px;
	/* background: ${({ theme }) => theme.cardBackgroundColor}; */
	/* box-shadow: ${({ theme }) => theme.cardShadow}; */
	border:1px solid ${({ theme }) => theme.palette.grey[400]};
	border-radius: 33px;
	overflow:hidden;
	flex:1;
	margin:15px;
	max-width:30%;
`;
