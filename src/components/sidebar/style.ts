/** @format */

import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typescale } from "utils/typography";

export const SidebarContainer: any = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 20%;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
`;
export const SidebarContainerInner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	background-color: ${({ theme }) => theme.palette.grey[200]};
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
`;
const LogoOuterContainer = styled.div`
	width: 100%;
`;
const LogoInnerContainer = styled.div`
	svg {
		width: 100%;
		padding: 15px;
	}
`;
const UserOuterContainer = styled.div`
	background-color: ${({ theme }) => theme.palette.grey[200]};
	width: 100%;
`;
const UserInnerContainer = styled.div`
	background-color: ${({ theme }) => theme.palette.grey[200]};
	display: flex;
	width: 100%;
`;

export const User: any = styled.div`
	margin-top: 200px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
	border-width: 1px 0 1px 0;
	padding: 15px;
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
const Data = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 80%;
	color: ${({ theme }) => theme.palette.text.primary};
	letter-spacing: 0.5px;
	margin-left: 2px;
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
User.Img = Img;
User.Data = Data;
User.Data.Name = Name;
User.Data.Position = Position;
const ItemsOuterContainer = styled.div`
	background-color: ${({ theme }) => theme.palette.grey[200]};
	width: 100%;
`;

export const ListItemOuter = styled.li`
	background-color: ${({ theme }) => theme.palette.grey[200]};
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: ${typescale.subtitle};
	cursor: pointer;
`;
const ItemsInnerContainer = styled.ul`
	background-color: ${({ theme }) => theme.palette.grey[200]};
	list-style: none;
	margin: 0;
	padding: 100px 0 100px 0;
`;

const LIST_ITEM_STATE = {
	first: () => `
		border-top-width:1px;
	`,
};
export const ListItemInner: any = styled(NavLink)`
	color: ${({ theme }) => theme.palette.text.primary};
	font-family: primaryFontMedium;
	/* transition: ${({ theme }) => theme.componentTransition}; */
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
	text-decoration:none;
	padding: 12px 15px;
	display: flex;
	align-items: center;
	font-size:16px;
	border-width:0 0 1px 0;
	svg {
		margin-right: 10px;
		width: 23px;
		height: 23px;
		path {
			fill: ${({ theme }) => theme.palette.text.primary};
		}
	}
	&:hover {
		background-color: ${({ theme }) => theme.palette.grey[300]};
	}
	
	&:active {
		background-color: ${({ theme }) => theme.palette.grey[300]};
	font-size: ${typescale.header6};
	}
	${applyStyleModifiers(LIST_ITEM_STATE)};
`;

const Text = styled.div`
	text-transform: capitalize;
`;

ListItemInner.Text = Text;
SidebarContainer.LogoOuterContainer = LogoOuterContainer;
SidebarContainer.LogoInnerContainer = LogoInnerContainer;
SidebarContainer.UserOuterContainer = UserOuterContainer;
SidebarContainer.UserInnerContainer = UserInnerContainer;
SidebarContainer.ItemsOuterContainer = ItemsOuterContainer;
SidebarContainer.ItemsInnerContainer = ItemsInnerContainer;
