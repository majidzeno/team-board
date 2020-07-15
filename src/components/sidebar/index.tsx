/** @format */

import React from "react";
import { useTheme } from "@material-ui/core/styles";

import {
	SidebarContainer,
	User,
	ListItemOuter,
	ListItemInner,
	SidebarContainerInner,
} from "./style";
import SvgIcon from "../svgIcons";

import { useTabs } from "context/screenContext";
import { useUserState } from "context/userContext";

const listItemsData = ["dashboard", "me", "team", "tasks"];
const SidebarItem = ({ name, first }: { name: string; first: boolean }) => {
	const { state, activateTab }: { state: any; activateTab: any } = useTabs();
	const theme = useTheme();
	return (
		<ListItemOuter key={name}>
			<ListItemInner
				to={`/${name}`}
				activeStyle={{
					backgroundColor: theme.palette.grey[500],
				}}
				modifiers={first ? "first" : null}
				onClick={() => activateTab({ activeTab: name })}>
				<SvgIcon name={name} />
				<ListItemInner.Text>{name}</ListItemInner.Text>
			</ListItemInner>
		</ListItemOuter>
	);
};

const Sidebar = (props: any) => {
	const UserState = useUserState();

	const sidebarListItems = listItemsData.map((item: string, i: number) => {
		return <SidebarItem name={item} key={item} first={i === 0} />;
	});

	return (
		<SidebarContainer>
			<SidebarContainerInner>
				<SidebarContainer.LogoOuterContainer>
					<SidebarContainer.LogoInnerContainer>
						<SvgIcon name="logoFull" />
					</SidebarContainer.LogoInnerContainer>
				</SidebarContainer.LogoOuterContainer>
				<SidebarContainer.UserOuterContainer>
					<SidebarContainer.UserInnerContainer>
						{UserState.personalData.name && (
							<User>
								<User.Img
									style={{
										backgroundImage: `url(${UserState.personalData.imageUrl})`,
									}}
									altText="userImagePlacholder"
								/>
								<User.Data>
									<User.Data.Name>{UserState.personalData.name}</User.Data.Name>
									<User.Data.Position>
										{UserState.personalData.position}
									</User.Data.Position>
								</User.Data>
							</User>
						)}
					</SidebarContainer.UserInnerContainer>
				</SidebarContainer.UserOuterContainer>
				<SidebarContainer.ItemsOuterContainer>
					<SidebarContainer.ItemsInnerContainer>
						{sidebarListItems}
					</SidebarContainer.ItemsInnerContainer>
				</SidebarContainer.ItemsOuterContainer>
			</SidebarContainerInner>
		</SidebarContainer>
	);
};

export default Sidebar;
