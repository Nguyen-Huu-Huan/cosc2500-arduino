import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import YourClosetHeader from "../components/YourCloset/YourClosetHeader";
import YourClosetBody from "../components/YourCloset/YourClosetBody";
import ClosetController from "../Controllers/ClosetController";
export default function YourCloset({ navigation }) {
	const [closetData, setClosetData] = useState([]);
	const [isDataLoading, setDataLoading] = useState(false);
	useEffect(async () => {
		setDataLoading(true);
		const closet_data = await ClosetController.getAllItems();
		console.log("the closet data is: ", closet_data);
		setClosetData(closet_data);
		setDataLoading(false);
	}, []);
	const item_data_list = [
		{
			id: 1,
			name: "Umbrella",
			icon: "icon.png",
			slot: 8,
		},
		{
			id: 2,
			name: "Sunglasses",
			icon: "icon.png",
			slot: 3,
		},
		{
			id: 3,
			name: "Hat",
			icon: "icon.png",
			slot: null,
		},
		{
			id: 4,
			name: "Shirt",
			icon: "umbrella.jfif",
			slot: 2,
		},
		{
			id: 5,
			name: "Phone",
			icon: "umbrella.jfif",
			slot: null,
		},
		{
			id: 6,
			name: "Car Key",
			icon: "umbrella.jfif",
			slot: 5,
		},
	];
	if (!isDataLoading) {
		return (
			<SafeAreaView>
				<YourClosetHeader item_data_list={closetData} />
				<YourClosetBody navigation={navigation} item_data_list={closetData} />
			</SafeAreaView>
		);
	} else {
		return <SafeAreaView></SafeAreaView>;
	}
}
