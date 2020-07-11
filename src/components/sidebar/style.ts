/** @format */

import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { applyStyleModifiers } from "styled-components-modifiers";
import { typescale } from "../../utils/typography";

export const SidebarContainer: any = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	max-width: 20%;
	width: 100%;
	height: 100vh;
	justify-content: space-between;
	background-color: ${({ theme }) => theme.palette.grey[200]};
	border: 1px solid ${({ theme }) => theme.palette.grey[400]};
`;
export const SidebarContainerInner = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;
const LogoOuterContainer = styled.div`
	width: 100%;
`;
const LogoInnerContainer = styled.div`
	/* border-bottom-right-radius: 40px; */
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
	/* border-bottom-right-radius: 40px; */
	display: flex;
	width: 100%;
`;

export const User: any = styled.div`
	margin-top: 200px;
	width: 100%;
	display: flex;
	/* padding: 3px; */
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
		/* font-size: ${({ theme }) => theme.buttonTextSizeOnHover}; */
		/* border-radius: 30px 0 0 30px; */
		/* color: ${({ theme }) => theme.textColorPrimary}; */
		/* path {
			fill: ${({ theme }) => theme.textColorPrimary};
		} */
	}
	&:focus {
		/* outline: 1px solid ${({ theme }) => theme.sidebarBr}; */
		/* box-shadow: -8px -8px 16px #e0e0e014, 8px 8px 16px rgba(0, 83, 128, 0.4); */
		/* outline-offset: 3px; */
	}
	&:active {
		background-color: ${({ theme }) => theme.palette.grey[300]};
		/* color: ${({ theme }) => theme.textColorPrimary}; */
		/* font-size: ${({ theme }) => theme.buttonTextSize}; */
	font-size: ${typescale.header6};
		/* box-shadow: -8px -8px 16px rgba(0, 207, 248, 0.22), */
			/* 8px 8px 16px rgba(0, 153, 184, 0.38); */
		/* path {
			fill: ${({ theme }) => theme.textColorPrimary};
		} */
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
