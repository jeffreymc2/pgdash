"use client";

import { useSidebarContext } from "@/context/SidebarContext";
import { isSmallScreen } from "@/helpers/is-small-screen";
import {
  Avatar,
//   DarkThemeToggle,
  Dropdown,
  Label,
  Navbar,
  TextInput,
  Tooltip,
  useThemeMode,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";
import {
  HiArchive,
  HiBell,
  HiCog,
  HiCurrencyDollar,
  HiEye,
  HiInbox,
  HiLogout,
  HiMenuAlt1,
  HiOutlineTicket,
  HiSearch,
  HiShoppingBag,
  HiUserCircle,
  HiUsers,
  HiViewGrid,
  HiX,
} from "react-icons/hi";
import NotificationBellDropdown from "../components/NotificationDropdown";
import { AppDrawerDropdown } from "../components/AppDrawerDropdown";
import UserDropdown from "../components/UserDropDown";


export function DashboardNavbar() {
  const { isCollapsed: isSidebarCollapsed, setCollapsed: setSidebarCollapsed } =
    useSidebarContext();
  const { computedMode } = useThemeMode();

  return (
    <Navbar
      fluid
      className="fixed top-0 z-30 w-full border-b border-gray-200 bg-white p-0 dark:border-gray-700 dark:bg-gray-800 sm:p-0"
    >
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
            <Navbar.Brand href="/" className="mr-14">
              <Image
                className="mr-3 h-8"
                alt=""
                src="https://vyrybefhmqnaxzfijbpl.supabase.co/storage/v1/object/public/brandlogos/png/pg_horizontal_primary_1.png"
                width={194}
                height={32}
              />
              
            </Navbar.Brand>
            <form className="hidden lg:block lg:pl-2">
              <Label htmlFor="search" className="sr-only">
                Search
              </Label>
              <TextInput
                className="w-full lg:w-96"
                icon={HiSearch}
                id="search"
                name="search"
                placeholder="Search"
                required
                type="search"
              />
            </form>
          </div>
          <div className="flex items-center lg:gap-3">
            <div className="flex items-center">
              <button className="cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden">
                <span className="sr-only">Search</span>
                <HiSearch className="h-6 w-6" />
              </button>
              {/* <NotificationBellDropdown /> */}
              <AppDrawerDropdown />
              <Tooltip
                content={
                  computedMode === "light"
                    ? "Toggle dark mode"
                    : "Toggle light mode"
                }
              >
                {/* <DarkThemeToggle /> */}
              </Tooltip>
            </div>
            <div className="hidden lg:block">
              <UserDropdown />
            </div>
          </div>
        </div>
      </div>
    </Navbar>
  );
}





