/** @format */

import React from "react";
import {
	SidebarContainer,
	User,
	ListItemOuter,
	ListItemInner,
	SidebarContainerInner,
} from "./style";
import SvgIcon from "../svgIcons";
import userPlacholder from "../../assets/Images/ph.png";
import Button from "../common/button";
import { useTabs } from "../../context/screenContext";

const listItemsData = ["dashboard", "me", "team", "tasks"];
const SidebarItem = ({ name }: { name: string }) => {
	const { state, activateTab }: { state: any; activateTab: any } = useTabs();
	return (
		<ListItemOuter>
			<ListItemInner
				to={`/${name}`}
				// activeScreen={state[name]}
				modifiers={state[name] ? "active" : null}
				onClick={() => activateTab({ activeTab: name })}>
				<SvgIcon name={name} />
				<ListItemInner.Text>{name}</ListItemInner.Text>
			</ListItemInner>
		</ListItemOuter>
	);
};

const Sidebar = (props: any) => {
	const { darkThemeActive, setDarkThemeActive } = props;

	const sidebarListItems = listItemsData.map((item: string) => (
		<SidebarItem name={item} key={item} />
	));

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
						<User>
							<User.Img
								style={{ backgroundImage: `url(${userPlacholder})` }}
								altText="userImagePlacholder"
							/>
							<User.Data>
								<User.Data.Name>AbdelGhafour Doe</User.Data.Name>
								<User.Data.Position>CEO</User.Data.Position>
							</User.Data>
						</User>
					</SidebarContainer.UserInnerContainer>
				</SidebarContainer.UserOuterContainer>
				<SidebarContainer.ItemsOuterContainer>
					<SidebarContainer.ItemsInnerContainer>
						{sidebarListItems}
					</SidebarContainer.ItemsInnerContainer>
				</SidebarContainer.ItemsOuterContainer>
			</SidebarContainerInner>
			<Button onClick={() => setDarkThemeActive(!darkThemeActive)}>
				{darkThemeActive ? "Light Theme" : "Dark Theme"}
			</Button>
		</SidebarContainer>
	);
};

export default Sidebar;
