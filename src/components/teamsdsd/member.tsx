/** @format */

import React from "react";
import { MemberWrapper, Member } from "./style";

const MemberComponent = ({
	img,
	name,
	position,
}: {
	img: string;
	name: string;
	position: string;
}) => {
	return (
		<MemberWrapper>
			<Member.Avatar
				style={{ backgroundImage: `url(${img})` }}
				altText="memberImagePlacholder"
			/>
			<Member.Name>{name}</Member.Name>
			<Member.Position>{position}</Member.Position>{" "}
		</MemberWrapper>
	);
};

export default MemberComponent;
