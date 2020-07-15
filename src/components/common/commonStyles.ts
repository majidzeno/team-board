/** @format */

import styled from "styled-components/macro";
import { typescale } from "../../utils/typography";
import { Button } from "@material-ui/core";
import { CloseOutline } from "@styled-icons/evaicons-outline/CloseOutline";

export const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;
export const ButtonLink = styled(Button)`
	flex: 1;
	margin: 10px !important
	;
`;
export const CloseIcon = styled(CloseOutline)`
	color: ${({ theme }) => theme.palette.secondary.main};
	cursor: pointer;
	width: 20px;
`;
