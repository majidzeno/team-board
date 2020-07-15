/** @format */
import { Button } from "@material-ui/core";

import styled from "styled-components/macro";
import { typescale } from "../../../utils/typography";

export const MeContainer: any = styled.div`
	display: flex;
	align-items: flex-start;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
	border-radius: 33px;
	flex: 1;
	width: 100%;
	max-width: 30%;
	overflow: hidden;
	justify-content: flex-start;
	padding: 10px;
	div {
		margin-bottom: 15px;
	}
`;

const Img = styled.div.attrs(({ altText }: { altText: string }) => ({
	title: altText,
}))`
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 20%;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.palette.grey[200]};
	background-position: center;
	width: 100%;
	max-width: 20%;
`;
const Name = styled.div`
	font-family: primaryFontBold;
	font-size: ${typescale.header6};
`;
const Position = styled.div`
	font-family: primaryFontMedium;
	color: ${({ theme }) => theme.palette.text.secondary};
	font-size: ${typescale.subtitle};
`;
export const ButtonLink = styled(Button)`
	flex: 1;
	margin: 10px !important
	;
`;
const ButtonsWrapper = styled.div`
	display: flex;
	align-items: center;
`;

MeContainer.Img = Img;
MeContainer.Name = Name;
MeContainer.Position = Position;
// MeContainer.ButtonLink = ButtonLink;
MeContainer.ButtonsWrapper = ButtonsWrapper;
