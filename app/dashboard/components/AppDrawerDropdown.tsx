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
import SignOut from "../components/SignOut";


export function AppDrawerDropdown() {
    return (
      <Dropdown
        className="rounded"
        arrowIcon={false}
        inline
        label={
          <span className="rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-gray-700">
            <span className="sr-only">Apps</span>
            <HiViewGrid className="text-2xl text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white" />
          </span>
        }
      >
        <div className="block rounded-t-lg border-b bg-gray-50 px-4 py-2 text-center text-base font-medium text-gray-700 dark:border-b-gray-600 dark:bg-gray-700 dark:text-white">
          Apps
        </div>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiShoppingBag className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Sales
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiUsers className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Users
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiInbox className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Inbox
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiUserCircle className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Profile
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiCog className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Settings
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiArchive className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Products
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiCurrencyDollar className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Pricing
            </div>
          </Link>
          <Link
            href="#"
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiOutlineTicket className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400" />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              Billing
            </div>
          </Link>
          <Link
            href=""
            className="block rounded-lg p-4 text-center hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <HiLogout className="mx-auto mb-1 h-7 w-7 text-gray-500 dark:text-gray-400 " />
            <div className="text-sm font-medium text-gray-900 dark:text-white">
              <SignOut/>
            </div>
          </Link>
        </div>
      </Dropdown>
    );
  }