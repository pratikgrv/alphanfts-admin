import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { ModalProvider } from "@/provider/modal-provider";
import LoginModal from "@/components/modals/login-modal";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const LoginPage = async () => {
	const session = await getServerSession(authOptions);
	
	if (session) {
		redirect("/");
	}
	return (
		<div>
			<ModalProvider >
				<LoginModal />
			</ModalProvider>
		</div>
	);
};

export default LoginPage;
