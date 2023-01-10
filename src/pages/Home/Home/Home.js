import React, { useRef, useState } from "react";
import Reviews from "../../../compoents/Reviews/Reviews";
import Banner from "../Banner/Banner";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<UpcomingEvents></UpcomingEvents>
			<Reviews></Reviews>
		</div>
	);
};

export default Home;