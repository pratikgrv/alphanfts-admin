"use client";

import { useEffect, useState } from "react";

import LoginModal from "@/components/modals/login-modal";

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
	const [isMounted, setIsMounted] = useState(false);

	useEffect(() => {
		setIsMounted(true);
	}, []);

	if (!isMounted) {
		return null;
	}

  return <div>{children}</div>;
};
