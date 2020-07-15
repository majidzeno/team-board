/** @format */

import styled from "styled-components/macro";

export const ChartContainer = styled.div`
	width: 100%;
	height: 80%;
`;
export const FormWrapper = styled.div`
	width: 100%;
`;

export const FieldWrapper = styled.div`
	margin: 15px 0;
	div {
		width: 100%;
	}
`;
export const ButtonWrapper = styled.div``;

// export const ButtonsContainer = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;
// 	flex-direction: column;
// `;

export const VacationsHistoryWrapper: any = styled.ul`
	border: 2px solid blue;
`;

const Vacation = styled.li`
	border: 1px solid red;
`;
VacationsHistoryWrapper.Vacation = Vacation;
