"use client";
import React from "react";
import Link from "next/link";
import { FaBarsStaggered } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const AdminLayout = () => {
  const path = usePathname();

  console.log(path);

  return (
    <div className="admin__sidebar">
      <div className="admin__sidebar__top">
        <Link href={"/"}>Dashboard</Link>
        <button className="admin__sidebar__top__btn">
          <FaBarsStaggered />
        </button>
      </div>

      <ul className="admin__sidebar__list">
        <li
          className={`admin__sidebar__item ${
            path === "/admin/create-product"
              ? "admin__sidebar__active-item"
              : ""
          }`}
        >
          <Link href={"/admin/create-product"}>Create product</Link>
        </li>
        <li
          className={`admin__sidebar__item ${
            path === "/admin/manage-product"
              ? "admin__sidebar__active-item"
              : ""
          }`}
        >
          <Link href={"/admin/manage-product"}>Manage product</Link>
        </li>
        <li
          className={`admin__sidebar__item ${
            path === "/admin/create-category"
              ? "admin__sidebar__active-item"
              : ""
          }`}
        >
          <Link href={"/admin/create-category"}>Create category</Link>
        </li>
        <li
          className={`admin__sidebar__item ${
            path === "/admin/manage-category"
              ? "admin__sidebar__active-item"
              : ""
          }`}
        >
          <Link href={"/admin/manage-category"}>Manage category</Link>
        </li>
      </ul>
    </div>
  );
};

export default AdminLayout;
