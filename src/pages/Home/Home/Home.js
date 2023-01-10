import React, { useRef, useState } from "react";
import Reviews from "../../../compoents/Reviews/Reviews";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
	return (
		<div>
			<UpcomingEvents></UpcomingEvents>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;