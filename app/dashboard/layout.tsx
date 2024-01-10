import React, { ReactNode } from "react";

import { readUserSession } from "@/lib/actions";
import { redirect } from "next/navigation";
import { useUserStore } from "@/lib/store/user";

export default async function Layout({ children }: { children: ReactNode }) {
	const { data: userSession } = await readUserSession();

	if (!userSession.session) {
		return redirect("/auth");
	}


	useUserStore.setState({user: userSession.session.user})
	
	return (
		<div className="w-full flex ">
			
			<div className="w-full">
				{children}
			</div>
			
		</div>

	);
}
