import { Schema, model, models } from "mongoose";

const adminSchema = new Schema(
	{
		email: {
			type: String,
			unique: [true, "email already exist"],
			required: [true, "email required"],
		},
		username: {
			type: String,
			unique: [true, "username already exist"],
			required: [true, "username required"],
		},
		password: {
			type: String,
			unique: [true, "password already exist"],
			required: [true, "password required"],
		},
	},
	{ timestamps: true }
);
const Admin =
	models.Admin || model("Admin", adminSchema);

export default Admin;
