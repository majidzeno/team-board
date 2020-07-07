/** @format */

import styled from "styled-components";

export const SidebarContainer: any = styled.aside`
	display: flex;
	align-items: center;
	flex-direction: column;
	/* background-color: ${({ theme }) => theme.sidebarLogoContainerColor}; */
	max-width: 20%;
	width: 100%;
`;

export const LogoContainer = styled.div`
	background-color: ${({ theme }) => theme.sidebarLogoContainerColor};
	border-bottom-right-radius: 40px;
	svg {
		width: 100%;
		padding: 5%;
	}
`;
const UserContainer = styled.div`
	border: 2px solid;
	background-color: ${({ theme }) => theme.sidebarUserContainerColor};
	display: flex;
	width: 100%;
`;

export const User: any = styled.div``;

const Img = styled.div.attrs(({ altText }: { altText: string }) => ({
	title: altText,
}))`
	background-size: cover;
	background-repeat: no-repeat;
	padding-top: 100%;
	border-radius: 50%;
	background-position: center;
	margin-bottom: 1em;
	width: 100%;
	max-width: 20%;
`;
const Data = styled.div`
	border: 2px solid hotpink;
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 80%;
`;
const Name = styled.div``;
const Position = styled.div``;
User.Img = Img;
User.Data = Data;
User.Data.Name = Name;
User.Data.Position = Position;

const ItemsContainer = styled.ul`
	border: 2px solid #fff;
	background-color: green;
`;
SidebarContainer.LogoContainer = LogoContainer;
SidebarContainer.UserContainer = UserContainer;
SidebarContainer.ItemsContainer = ItemsContainer;
