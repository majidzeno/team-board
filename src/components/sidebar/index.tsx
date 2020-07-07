/** @format */

import React from "react";
import { SidebarContainer, User } from "./style";
import SvgIcon from "../svgIcons";
import userPlacholder from "../../assets/Images/ph.png";

const Sidebar = () => {
	return (
		<SidebarContainer>
			<SidebarContainer.LogoContainer>
				<SvgIcon name="logoFull" />
			</SidebarContainer.LogoContainer>
			<SidebarContainer.UserContainer>
				<User.Img
					style={{ backgroundImage: `url(${userPlacholder})` }}
					altText="userImagePlacholder"
				/>
				<User.Data>
					<User.Data.Name>AbdelGhafour Doe</User.Data.Name>
					<User.Data.Position>CEO</User.Data.Position>
				</User.Data>
			</SidebarContainer.UserContainer>
			<SidebarContainer.ItemsContainer>
				<li>Items Goes here</li>
				<li>Items Goes here</li>
				<li>Items Goes here</li>
				<li>Items Goes here</li>
			</SidebarContainer.ItemsContainer>
		</SidebarContainer>
	);
};

export default Sidebar;
