'use client';

import { isSmallScreen } from "@/helpers/is-small-screen";
import React from "react";
import { Sidebar, Navbar } from 'flowbite-react';
import { useSidebarContext } from "@/context/SidebarContext";

import {
	HiArchive,
	HiBell,
	HiChartPie,
	HiCog,
	HiCurrencyDollar,
	HiEye,
	HiInbox,
	HiLogout,
	HiMenuAlt1,
	HiOutlineTicket,
	HiSearch,
	HiShoppingBag,
	HiUser,
	HiUserCircle,
	HiUsers,
	HiViewBoards,
	HiViewGrid,
	HiX,
  } from "react-icons/hi";

  import { cn } from "@/lib/utils";
import Image from "next/image";

import ModeToggle from "../(dashboard)/todo/components/ToggleDarkMode";
import { Button } from "@/components/ui/button";
import SignOut from "./SignOut";

export default function SideNav() {
	return (
		<SideBar className=" hidden lg:block dark:bg-graident-dark flex-1" />
	);
}

export const SideBar = ({ className }: { className?: string }) => {
	const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();
		return (

	
		<div className="w-full p-3 pr-4">
			<div className="flex items-center justify-between">
			<div className="flex items-center">
				<button
				onClick={() => setSidebarCollapsed(!isSidebarCollapsed)}
				className="mr-3 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
				>
				<span className="sr-only">Toggle sidebar</span>
				{isSidebarCollapsed || !isSmallScreen() ? (
					<HiMenuAlt1 className="h-6 w-6" />
				) : (
					<HiX className="h-6 w-6" />
				)}
				</button>

				<Sidebar aria-label="Sidebar with logo branding example">
				
				<Image
					className="mr-3 h-8 "
					alt=""
					src="https://vyrybefhmqnaxzfijbpl.supabase.co/storage/v1/object/public/brandlogos/png/pg_horizontal_primary_1.png"
					width={194}
					height={32}
				/>
			
				<Sidebar.Items>
					<Sidebar.ItemGroup>
					<Sidebar.Item href="/dashboard" icon={HiChartPie}>
						Dashboard
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiViewBoards}>
						Kanban
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiInbox}>
						Inbox
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiUser}>
						Users
					</Sidebar.Item>
					<Sidebar.Item href="#" icon={HiShoppingBag}>
						Products
					</Sidebar.Item>
						<SignOut/>
					</Sidebar.ItemGroup>
				</Sidebar.Items>
				</Sidebar>
				</div>
			</div>
		</div>
	);
};





