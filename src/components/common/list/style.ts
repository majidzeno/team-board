/** @format */

import styled from "styled-components/macro";
import { typescale } from "utils/typography";

export const ListWrapper: any = styled.div`
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
	background-color: ${({ theme }) => theme.palette.primary.main};
	color: ${({ theme }) => theme.palette.primary.contrastText};
`;

const ItemsList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;
	width: 100%;
	li {
		&:last-child {
			border: none;
		}
	}
`;

const Item = styled.li`
	margin: 0;
	font-family: primaryFontRegular;
	font-size: ${typescale.subtitle};
	font-weight: bold;
	border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
	padding: 5px 15px;
	background-color: ${({ theme }) => theme.palette.common.white};
`;

export const ListItem: any = styled.div`
	display: flex;
`;
const Legend = styled.div`
	width: 80px;
`;
const Value = styled.div``;

ListWrapper.Title = Title;
ListWrapper.ItemsList = ItemsList;
ListWrapper.Item = Item;
ListItem.Legend = Legend;
ListItem.Value = Value;
