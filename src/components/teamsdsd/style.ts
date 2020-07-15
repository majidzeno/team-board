/** @format */

import styled from "styled-components/macro";
import { typescale } from "../../utils/typography";

export const TeamWrapper: any = styled.div`
	display: flex;
	align-items: center;
	flex-flow: row wrap;
`;
export const MemberWrapper: any = styled.div`
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
	border-radius: 15px;
	overflow: hidden;
	margin: 10px;
	padding-top: 15px;
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const Member: any = styled.div`
	border: 2px solid orange;
`;

const Name = styled.h2`
	font-family: primaryFontMedium;
	font-size: ${typescale.header6};
	width: 100%;
	margin: 0;
	text-transform: capitalize;
	border-bottom: 1px solid;
	padding: 7px 15px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
	/* background-color: ${({ theme }) => theme.palette.info.light}; */
	color: ${({ theme }) => theme.palette.primary.contrastText};
	color: ${({ theme }) => theme.palette.text.primary};
`;
const Position = styled.h2`
	font-family: primaryFontMedium;
	font-size: ${typescale.subtitle};
	width: 100%;
	margin: 0;
	text-transform: capitalize;
	padding: 7px 15px;
	/* background-color: ${({ theme }) => theme.palette.info.light}; */
	color: ${({ theme }) => theme.palette.primary.contrastText};
	color: ${({ theme }) => theme.palette.text.secondary};
`;
const Avatar = styled.div.attrs(({ altText }: { altText: string }) => ({
	title: altText,
}))`
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 50%;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.palette.grey[200]};
	background-position: center;
	width: 100%;
	max-width: 50%;
`;
Member.Avatar = Avatar;
Member.Name = Name;
Member.Position = Position;
