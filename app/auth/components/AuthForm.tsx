"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Button,
	Card,
	TextInput,
  } from 'flowbite-react';
import { toast } from "@/components/ui/use-toast";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import { loginWithEmailAndPassword } from "../actions";
import { AuthTokenResponse } from "@supabase/supabase-js";
import Link from "next/link";

const FormSchema = z.object({
	email: z.string().email(),
	password: z.string().min(1, { message: "Password can not be empty" }),
});

export default function AuthForm() {
	const [isPending, startTransition] = useTransition();

	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	function onSubmit(data: z.infer<typeof FormSchema>) {
		startTransition(async () => {
			const { error } = JSON.parse(
				await loginWithEmailAndPassword(data)
			) as AuthTokenResponse;

			if (error) {
				toast({
					title: "Fail to login",
					description: (
						<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
							<code className="text-white">{error.message}</code>
						</pre>
					),
				});
			} else {
				toast({
					title: "Successfully login 🎉",
				});
			}
		});
	}

	return (
		<div className="mx-auto flex flex-col items-center justify-center px-2 pt-2 w-full sm:w-3/4 md:h-screen">
		<Card
				horizontal
				imgAlt=""
				imgSrc="https://vyrybefhmqnaxzfijbpl.supabase.co/storage/v1/object/public/other/max.jpg"
				className="w-full md:max-w-[1200px] object-contain"
				theme={{
				root: {
					children: "my-auto w-full gap-0 space-y- p-6 sm:p-8 lg:p-16",
				},
				img: {
					horizontal: {
					on: "hidden rounded-l-lg md:max-w-[900px] md:p-0 lg:block w-1/2",
					},
				},
				}}
			>
			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(onSubmit)}
					className="w-full space-y-6"
				>
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<TextInput placeholder="email" {...field} />
								</FormControl>

								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Password</FormLabel>
								<FormControl>
									<TextInput
										placeholder="shadcn"
										{...field}
										type="password"
									/>
								</FormControl>
								<FormDescription>
									{
										"contact your admin if you forgot your password"
									}
								</FormDescription>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="w-full flex items-center gap-2"
						color="blue"
					>
						Login{" "}
						<AiOutlineLoading3Quarters
							className={cn("animate-spin", {
								hidden: true,
							})}
						/>
					</Button>
				</form>
			</Form>
				<Link href={"/auth/register"}>
				<p className="mt-5 text-sm text-blue-200">Not yet a member? Sign Up</p>
				</Link>
			</Card>
		</div>
	);
}
