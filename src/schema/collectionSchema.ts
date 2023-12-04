import { Schema, model, models } from "mongoose";

export interface CollectionProps {
	slug?: string;
	name: string;
	description: string;
	blockchain: string;
	imageUrl: string;
	bannerUrl: string;
	supply?: number;
	rating: number;
	whitelist: boolean;
	featured: boolean;
	verified: boolean;
	requirement: string;
	info: string;
	roadmap: string;
	mintPrice?: number;
	mintDate?: Date;
	startTime: string;
	x?: string;
	discord?: string;
	website?: string;
}

const collectionSchema = new Schema<CollectionProps>(
	{
		slug: {
			type: String,
			unique: [true, "it should be unique"],
			required: [true, "slug required"],
		},
		name: {
			type: String,
			required: [true, "name required"],
		},
		description: {
			type: String,
			required: [true, "description required"],
		},
		blockchain: {
			type: String,
		},
		imageUrl: {
			type: String,
		},
		bannerUrl: {
			type: String,
		},
		supply: {
			type: Number,
			required: true,
		},
		rating: {
			type: Number,
			required: true,
		},
		whitelist: {
			type: Boolean,
			required: true,
			default: false,
		},
		featured: {
			type: Boolean,
			required: true,
			default: false,
		},
		verified: {
			type: Boolean,
			required: true,
			default: false,
		},
		requirement: {
			type: String,
		},
		info: {
			type: String,
		},
		roadmap: {
			type: String,
		},
		mintPrice: {
			type: Number,
			
		},
		mintDate: {
			type: Date,
			
		},
		startTime: {
			type: String,
			default: "",
		},
		x: {
			type: String,
		},
		discord: {
			type: String,
		},
		website: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);
const Collection =
	models.Collection || model<CollectionProps>("Collection", collectionSchema);

export default Collection;
