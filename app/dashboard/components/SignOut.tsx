import { logout } from "@/app/auth/actions";
import { Button } from 'flowbite-react';
import { cn } from "@/lib/utils";
import React, { useTransition } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function SignOut() {
	const [isPending, startTransition] = useTransition();
	const onClick = async () => {
		startTransition(async () => {
			await logout();
		});
	};

	return (
		<form>
			<p onClick={onClick}
				className="w-full flex items-center gap-2"
				color="blue"
			>
				Sign Out{" "}
				<AiOutlineLoading3Quarters
					className={cn(" animate-spin", { hidden: !isPending })}
				/>
			</p>
		</form>
	);
}
