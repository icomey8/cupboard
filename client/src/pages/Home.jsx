import { useState } from "react";
import { Card, CardHeader, CardTitle } from "../components/BasicCard.jsx";
import ItemCard from '../components/ItemCard.jsx';
import { Route, Link, Switch, useLocation } from "wouter";

const labels = [
	{ label: "Add to Inventory", path: "/add", icon: "" },
	{ label: "Update Inventory", path: "/update", icon: "" },
	{ label: "Delete from Inventory", path: "/delete", icon: "" },
	{ label: "View Inventory", path: "/view", icon: "" },
];

function Home() {
	const [location, setLocation] = useLocation();

	return (
		<>
			<div className="flex items-center justify-center w-screen h-screen gap-3 text-white bg-[#09090b]">
				<div className="flex items-center justify-center">
					<ItemCard></ItemCard>
				</div>
			</div>
		</>
	);
}

export default Home;
