import mongoose from "mongoose";


import Collection from "../schema/collectionSchema";
import Admin from "@/schema/adminSchema";

const connect = async () => {
	try {
		const clusterUrl: any = process.env.MONGO_URI;
		await mongoose.connect(clusterUrl);
		console.log("Database connection completed");
		
	} catch (error) {
		console.log(error);
		throw new Error("Connection failed!");
	}
};

export default connect;

const sampleData = [
	{
		slug: "districtp",
		name: "DistrictP",
		description: "Welcome to DistrictP: Jungle Ventures 🌴",
		blockchain: "solana",
		imageUrl: "",
		bannerUrl: "",
		supply: 1111,
		rating: 5,
		whitelist: true,
		featured: false,
		verified: true,
		requirement: "",
		info: "",
		roadmap: "",
		mintPrice: "",
		mintDate: null,
		createdAt: new Date(),
		x: "https://x.com/DistrictPsol",
		discord: "https://discord.com/invite/districtp",
		website: "",
	},
];
