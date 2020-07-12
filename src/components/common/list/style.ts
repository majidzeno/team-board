/** @format */

import styled from "styled-components";
import { typescale } from "../../../utils/typography";
// import Card from "../card";

export const ListWrapper: any = styled.div`
	display: flex;
	align-items: flex-start;
	align-items: center;
	flex-direction: column;
	/* border:1px solid pink; */
	/* background-color: ${({ theme }) => theme.background};
	justify-content: space-around;
	width: 300px;
	height: 500px;
	background: ${({ theme }) => theme.cardBackgroundColor};
	box-shadow: ${({ theme }) => theme.cardShadow};
	border:1px solid ${({ theme }) => theme.lightBr};
	border-radius: 33px; */
`;
const Title = styled.h6`
	font-family: primaryFontMedium;
	font-size: ${typescale.header6};
	width: 100%;
	margin: 0;
	text-transform: capitalize;
	border-bottom: 1px solid;
	padding: 7px 15px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
	background-color: ${({ theme }) => theme.palette.info.light};
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const ItemsList = styled.ul`
	/* background-color: ${({ theme }) => theme.palette.grey[200]}; */
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	/* padding-left: 15px; */
	li {&:last-child{
		border:none;
		/* background-color: red; */
		}
	}

`;

const Item = styled.li`
	margin: 0;
	font-family: primaryFontRegular;
	font-size: ${typescale.subtitle};
	font-weight:bold;
	border-bottom:1px solid ${({ theme }) => theme.palette.grey[400]};
    padding: 5px 15px;
	background-color:${({ theme }) => theme.palette.common.white};
	
	/* border: 1px solid ${({ theme }) => theme.palette.grey[400]}; */
`;

ListWrapper.Title = Title;
ListWrapper.ItemsList = ItemsList;
ListWrapper.Item = Item;
