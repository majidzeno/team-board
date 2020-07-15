/** @format */

import React from "react";
import { MemberWrapper, Member } from "./style";
import { CloseIcon } from "../../common/commonStyles";
import { useUserDispatch } from "../../../context/userContext";
import { removeTeamMember } from "../../../context/actions";
type MemberDataType = {
	id: string;
	name: string;
	position: string;
	imageUrl: string;
};
const MemberComponent = ({ id, imageUrl, name, position }: MemberDataType) => {
	const UserDispatch = useUserDispatch();
	return (
		<MemberWrapper>
			<CloseIcon
				style={{
					position: "absolute",
					top: "10px",
					right: "10px",
				}}
				onClick={() => UserDispatch(removeTeamMember(id))}
			/>
			<Member.Avatar
				style={{ backgroundImage: `url(${imageUrl})` }}
				altText="memberImagePlacholder"
			/>
			<Member.Name>{name}</Member.Name>
			<Member.Position>{position}</Member.Position>{" "}
		</MemberWrapper>
	);
};

export default MemberComponent;
