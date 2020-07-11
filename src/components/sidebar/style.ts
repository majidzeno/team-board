/** @format */

import styled from "styled-components";
import { typescale } from "../../utils";
import { Link } from "react-router-dom";
import { applyStyleModifiers } from "styled-components-modifiers";

export const SidebarContainer: any = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background-color: ${({ theme }) => theme.sidebarLogoContainerColor}; */
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
`;
const LogoOuterContainer = styled.div`
	background-color: ${({ theme }) => theme.sidebarUserContainerColor};
	width: 100%;
`;
const LogoInnerContainer = styled.div`
	background-color: ${({ theme }) => theme.sidebarLogoContainerColor};
	border-bottom-right-radius: 40px;
	svg {
		width: 100%;
		padding: 15px;
	}
`;
const UserOuterContainer = styled.div`
	background-color: ${({ theme }) => theme.sidebarItemsContainerColor};
	width: 100%;
`;
const UserInnerContainer = styled.div`
	background-color: ${({ theme }) => theme.sidebarUserContainerColor};
	border-bottom-right-radius: 40px;
	display: flex;
	width: 100%;
	padding: 15px;
`;

export const User: any = styled.div`
	margin-top: 200px;
	width: 100%;
	display: flex;
	/* padding: 3px; */
	align-items: center;
	justify-content: center;
`;

const Img = styled.div.attrs(({ altText }: { altText: string }) => ({
	title: altText,
}))`
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 20%;
	border-radius: 50%;
	border: 2px solid ${({ theme }) => theme.sidebarUserContainerColor};
	background-position: center;
	width: 100%;
	max-width: 20%;
	box-shadow: 20px 20px 60px #005c8c, -20px -20px 60px #007cbe;
`;
const Data = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 80%;
	color: ${({ theme }) => theme.textColorPrimary};
	letter-spacing: 0.5px;
	margin-left: 2px;
`;
const Name = styled.div`
	font-family: primaryFontMedium;
	font-size: ${typescale.header6};
`;
const Position = styled.div`
	font-family: primaryFontLight;
	font-size: ${typescale.subtitle};
`;
User.Img = Img;
User.Data = Data;
User.Data.Name = Name;
User.Data.Position = Position;
const ItemsOuterContainer = styled.div`
	background-color: ${({ theme }) => theme.background};
	width: 100%;
`;
const ItemsInnerContainer = styled.ul`
	background-color: ${({ theme }) => theme.sidebarItemsContainerColor};
	border-bottom-right-radius: 40px;
	list-style: none;
	margin: 0;
	padding: 100px 0 100px 10px;
`;

export const ListItemOuter = styled.li`
	background-color: ${({ theme }) => theme.sidebarItemsContainerColor};
	color: ${({ theme }) => theme.textColorPrimary};
	font-size: ${({ theme }) => theme.buttonTextSize};
	cursor: pointer;
`;
const LIST_ITEM_STATE = {
	active: ({ theme }: { theme: any }) => `
	background-color:${theme.primaryActiveColor};
	border-radius: 30px 0 0 30px;
	`,
};
export const ListItemInner: any = styled(Link)`
	color: ${({ theme }) => theme.sidebarItemTextColor};
	transition: ${({ theme }) => theme.componentTransition};
	box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15),
		-4px -4px 12px rgba(243, 242, 242, 0.08);
	padding: 12px 15px;
	display: flex;
	align-items: center;
	svg {
		margin-right: 10px;
		width: 23px;
		height: 23px;
		path {
			fill: ${({ theme }) => theme.sidebarItemTextColor};
		}
	}
	&:hover {
		background-color: ${({ theme }) => theme.sidebarItemHoverBackgroundColor};
		font-size: ${({ theme }) => theme.buttonTextSizeOnHover};
		border-radius: 30px 0 0 30px;
		color: ${({ theme }) => theme.textColorPrimary};
		path {
			fill: ${({ theme }) => theme.textColorPrimary};
		}
	}
	&:focus {
		outline: 1px solid ${({ theme }) => theme.sidebarItemBackgroundColor};
		box-shadow: -8px -8px 16px #e0e0e014, 8px 8px 16px rgba(0, 83, 128, 0.4);
		outline-offset: 3px;
	}
	&:active {
		background-color: ${({ theme }) => theme.primaryActiveColor};
		color: ${({ theme }) => theme.textColorPrimary};
		font-size: ${({ theme }) => theme.buttonTextSize};
		box-shadow: -8px -8px 16px rgba(0, 207, 248, 0.22),
			8px 8px 16px rgba(0, 153, 184, 0.38);
		path {
			fill: ${({ theme }) => theme.textColorPrimary};
		}
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
