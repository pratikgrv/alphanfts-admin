import RegisterModal from "@/components/modals/register-modal";
import { ModalProvider } from "@/provider/modal-provider";

export default async function Register() {
	return (
		<div>
			<ModalProvider>
				<RegisterModal />
			</ModalProvider>{" "}
		</div>
	);
}
