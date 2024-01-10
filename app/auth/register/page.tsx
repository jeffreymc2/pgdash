import React from "react";
import RegisterForm from "../components/RegisterForm";
import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";

export default async function page() {
	const { data: userSession } = await readUserSession();

	if (userSession.session) {
		return redirect("/dashboard");
	}
	return (
		<div className="flex items-center justify-center h-screen">
			<RegisterForm />
		</div>
	);
}
