"use client";


import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Button,
	Card,
	TextInput,
  } from 'flowbite-react';
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { signUpWithEmailAndPassword } from "../actions";
import Link from "next/link";


const FormSchema = z
	.object({
		email: z.string().email(),
		password: z.string().min(6, {
			message: "Password is required.",
		}),
		confirm: z.string().min(6, {
			message: "Password is required.",
		}),
	})
	.refine((data) => data.confirm === data.password, {
		message: "Password did not match",
		path: ["confirm"],
	});
export default function RegisterForm() {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
			password: "",
			confirm: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {

      const result = await signUpWithEmailAndPassword(data)

      const {error} = JSON.parse(result)

      if(error?.message) {
    
		toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{error.message}
					</code>
				</pre>
			),
		});
	}else{
        toast({
			title: "You submitted the following values:",
			description: (
				<pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
					<code className="text-white">
						{JSON.stringify(data, null, 2)}
					</code>
				</pre>
			),
		});
    }
}

	return (
            <div className="mx-auto flex flex-col items-center justify-center px-2 pt-2 w-full sm:w-3/4 md:h-screen">
			<Card
				horizontal
				imgAlt=""
				imgSrc="https://vyrybefhmqnaxzfijbpl.supabase.co/storage/v1/object/public/other/max.jpg"
				className="w-full md:max-w-[1200px]  "
				theme={{
				root: {
					children: "my-auto w-full gap-0 space-y- p-6 sm:p-8 lg:p-16",
				},
				img: {
					horizontal: {
					on: "hidden rounded-l-lg md:max-w-[800px] object-cover md:p-0 lg:block w-1/2",
					},
				},
				}}
			>
            <h1 className="text-2xl pb-5">Register</h1>

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
										placeholder="password"
										{...field}
										type="password"
									/>
								</FormControl>
								{/* <FormDescription>
									{
										"create your password"
									}
								</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
                    <FormField
						control={form.control}
						name="confirm"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<TextInput
										placeholder="Confirm Password"
										{...field}
										type="password"
									/>
								</FormControl>
								{/* <FormDescription>
									{
										"confirm your password"
									}
								</FormDescription> */}
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button
						type="submit"
						className="w-full flex items-center gap-2"
						color="blue"
					>
						Register{" "}
						<AiOutlineLoading3Quarters
							className={cn("animate-spin", {
								hidden: true,
							})}
						/>
					</Button>
				</form>
			</Form>
            <Link href={"/auth"} className="mt-5 text-sm text-blue-200">
				Already a member? Sign In
				</Link>
			</Card>
		</div>
	);
}