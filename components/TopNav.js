import React from "react";
import { Menu } from "antd";
import Link from "next/link";
import {
  AppstoreOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined
} from "@ant-design/icons";
const { Item } = Menu;

function TopNav() {
  return (
    <Menu mode="horizontal">
      <Item icon={<AppstoreOutlined/>}>
        <Link href="/">
          <a>App</a>
        </Link>
      </Item>
      <Item icon={<LoginOutlined/>}>
        <Link href="/login">
          <a>Login</a>
        </Link>
      </Item>
      <Item icon={<UserAddOutlined/>}>
        <Link href="/register">
          <a>Register</a>
        </Link>
      </Item>
    </Menu>
  );
}

export default TopNav;
