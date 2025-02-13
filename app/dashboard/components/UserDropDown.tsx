
import {
  Avatar,
//   DarkThemeToggle,
  Dropdown,

} from "flowbite-react";


import SignOut from "../components/SignOut";

export default function UserDropdown() {

  
    return (
      <Dropdown
        className="rounded"
        arrowIcon={false}
        inline
        label={
          <span>
            <span className="sr-only">User menu</span>
            <Avatar alt="" img="/images/users/neil-sims.png" rounded size="sm" />
          </span>
        }
      >
        <Dropdown.Header className="px-4 py-3">
          <span className="block text-sm">Neil Sims</span>
          <span className="block truncate text-sm font-medium">
          </span>
        </Dropdown.Header>
        <Dropdown.Item>Dashboard</Dropdown.Item>
        <Dropdown.Item>Settings</Dropdown.Item>
        <Dropdown.Item>Earnings</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>						
            <SignOut/>
        </Dropdown.Item>
      </Dropdown>
    );
  }
  