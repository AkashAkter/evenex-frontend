import React, { useRef, useState } from "react";
import Pricing from "../../../compoents/Pricing_Card/Pricing";
import Reviews from "../../../compoents/Reviews/Reviews";
import Banner from "../Banner/Banner";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<UpcomingEvents></UpcomingEvents>
			<Reviews></Reviews>
			{/* ---md Johirul islam push today-- */}
			<Pricing />
		</div>
	);
};

export default Home;