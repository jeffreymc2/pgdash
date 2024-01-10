"use client";

import { useSidebarContext } from "@/context/SidebarContext";
import { Dropdown, Sidebar, TextInput, Tooltip } from "flowbite-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  HiAdjustments,
  HiChartPie,
  HiClipboardList,
  HiCog,
  HiCollection,
  HiDocumentReport,
  HiInboxIn,
  HiLockClosed,
  HiSearch,
  HiShoppingBag,
  HiSupport,
  HiUsers,
  HiViewGrid,
} from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import SignOut from "../components/SignOut";

export function DashboardSidebar() {
  const { isCollapsed, setCollapsed } = useSidebarContext();
  const [currentPage, setCurrentPage] = useState("");
  const [isEcommerceOpen, setEcommerceOpen] = useState(true);
  const [isUsersOpen, setUsersOpen] = useState(true);
  const [isPreview, setIsPreview] = useState(isCollapsed);

  // Visually highlight page category, if current page is one of its children
  useEffect(() => {
    const newPage = window.location.pathname;

    setCurrentPage(newPage);
    setEcommerceOpen(newPage.includes("/e-commerce/"));
    setUsersOpen(newPage.includes("/users/"));
  }, [setCurrentPage, setEcommerceOpen, setUsersOpen]);

  useEffect(() => {
    if (isCollapsed) setIsPreview(false);
  }, [isCollapsed]);

  const preview = {
    enable() {
      if (!isCollapsed) return;

      setIsPreview(true);
      setCollapsed(false);
    },
    disable() {
      if (!isPreview) return;

      setCollapsed(true);
    },
  };

  return (
    <Sidebar
      onMouseEnter={preview.enable}
      onMouseLeave={preview.disable}
      aria-label="Sidebar with multi-level dropdown example"
      collapsed={isCollapsed}
      className={twMerge(
        "fixed inset-y-0 left-0 z-20 flex h-full shrink-0 flex-col border-r border-gray-200 pt-16 duration-75 dark:border-gray-700 lg:flex",
        isCollapsed && "hidden w-16",
      )}
      id="sidebar"
    >
      <div className="flex h-full flex-col justify-between">
        <div className="py-2">
          <form className="pb-3 md:hidden">
            <TextInput
              icon={HiSearch}
              type="search"
              placeholder="Search"
              required
              size={32}
            />
          </form>
          <Sidebar.Items>
            <Sidebar.ItemGroup className="mt-0 border-t-0 pb-1 pt-0">
              <Sidebar.Item
                href="/dashboard"
                icon={HiChartPie}
                className={
                  "/dashboard" === currentPage ? "bg-gray-100 dark:bg-gray-700" : ""
                }
              >
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item
                href="/kanban"
                icon={HiViewGrid}
                className={
                  "/kanban" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Events
              </Sidebar.Item>
              <Sidebar.Item
                href="/dashboard/members"
                icon={HiInboxIn}
                className={
                  "/mailing/inbox" === currentPage
                    ? "bg-gray-100 dark:bg-gray-700"
                    : ""
                }
              >
                Uniforms
              </Sidebar.Item>
              
              
              
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup className="mt-2 pt-2">
              <Sidebar.Item
                href="/"
                icon={HiClipboardList}
              >
                Rewards Details
              </Sidebar.Item>
              
              <Sidebar.Item
                icon={HiSupport}
              >
                <SignOut/>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </div>
    </Sidebar>
  );
}

