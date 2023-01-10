import React from "react";
import Pricing from "../../../compoents/Pricing_Card/Pricing";
import Reviews from "../../../compoents/Reviews/Reviews";
import Banner from "../Banner/Banner";
import Team from "../Team/Team";
import UpcomingEvents from "../UpcomingEvents/UpcomingEvents";

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<UpcomingEvents></UpcomingEvents>
			<Team></Team>
			<Reviews></Reviews>
			{/* ---md Johirul islam push today-- */}
			<Pricing />
		</div>
	);
};

export default Home;