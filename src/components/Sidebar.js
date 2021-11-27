import React from "react";
import IconCasier from "../assets/icon/casier";
import IconCategory from "../assets/icon/category";
import IconDashboard from "../assets/icon/dashboard";
import IconLogout from "../assets/icon/logout";
import IconManageProduct from "../assets/icon/manage_product";
import IconProduct from "../assets/icon/product";
import IconTransaction from "../assets/icon/transaction";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="fixed left-0 h-screen w-76 shadow-2xl px-7 py-9">
      <IconCasier />
      <ul className="absolute top-1/2 transform -translate-y-1/2">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-culture"
            }
          >
            <IconDashboard />
          </NavLink>
        </li>
        <li className="mt-10">
          <NavLink
            to="/manage_product"
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-culture"
            }
          >
            <IconManageProduct />
          </NavLink>
        </li>
        <li className="mt-10">
          <NavLink
            to="/product"
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-culture"
            }
          >
            <IconProduct />
          </NavLink>
        </li>
        <li className="mt-10">
          <NavLink
            to="/category"
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-culture"
            }
          >
            <IconCategory />
          </NavLink>
        </li>
        <li className="mt-10">
          <NavLink
            to="/transaction"
            className={({ isActive }) =>
              isActive ? "text-violet-purple" : "text-gray-culture"
            }
          >
            <IconTransaction />
          </NavLink>
        </li>
      </ul>
      <IconLogout />
    </div>
  );
}
