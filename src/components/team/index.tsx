/** @format */

import React from "react";
import { TeamWrapper } from "./style";
import Member from "./member";
import Sayed from "../../assets/Images/sayed.jpg";
import Sardina from "../../assets/Images/sardina.jpg";
import Fahim from "../../assets/Images/fahim.png";

const TeamData = [
	{ img: Sayed, name: "Sayed Koshary", position: "COO" },
	{ img: Sardina, name: "Ibahim Sardina", position: "Advisor" },
	{ img: Fahim, name: "Mr Fahim", position: "CFO" },
];
const TeamComponent = () => {
	return (
		<TeamWrapper>
			{TeamData.map((member) => (
				<Member
					img={member.img}
					name={member.name}
					position={member.position}
				/>
			))}
		</TeamWrapper>
	);
};

export default TeamComponent;
