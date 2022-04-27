/* This example requires Tailwind CSS v2.0+ */
import { useEffect, useState } from "react";
import {
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  CheckCircleIcon,
  PlusIcon,
} from "@heroicons/react/outline";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "src/services/user.context";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Props) {
  const [onlineStatus, setOnlineStatus] = useState(false);

  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user") ?? "{}");
  const { removeUser } = useUser();

  const handleLogout = () => {
    // eslint-disable-next-line no-restricted-globals
    let result = confirm("Are you sure you want to logout?");
    if (result) {
      removeUser();
      navigate("/");
    } else {
      return;
    }
  };

  useEffect(() => {
    navigator.onLine ? setOnlineStatus(true) : setOnlineStatus(false);
  }, [navigator.onLine]);

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: HomeIcon,
      current: window.location.pathname.includes("dashboard"),
    },
    {
      name: "Create",
      href: "/dashboard/create",
      icon: PlusIcon,
      current: window.location.pathname.includes("dashboard/create"),
    },
  ];

  return (
    <>
      <div>
        {/* Mobile Navigation */}

        <nav className="fixed bottom-0 left-0 right-0 z-20 bg-slate-200 lg:hidden shadow-t ">
          <div className=" sm:px-2">
            <ul className="flex items-center justify-between w-full text-black-500">
              {navigation.map((item, index) => {
                return (
                  <Link
                    key={index}
                    to={item.href}
                    className={
                      "mx-1 px-2 py-2 flex flex-col items-center text-xs border-t-2 transition-all " +
                      (item.current
                        ? "border-slate-900 text-black"
                        : " border-transparent")
                    }
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-slate-900"
                          : "text-gray-400 group-hover:text-gray-300",
                        " flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />

                    {item.name}
                  </Link>
                );
              })}
            </ul>
          </div>
        </nav>
        {/* End Mobile Navigation */}

        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-col flex-1 min-h-0 bg-gray-800">
            <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <h1 className="text-xl font-bold text-white">Hospital App</h1>
              </div>
              <nav className="flex-1 px-2 mt-5 space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "group flex items-center px-2 py-2 text-sm font-medium rounded-md"
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? "text-gray-300"
                          : "text-gray-400 group-hover:text-gray-300",
                        "mr-3 flex-shrink-0 h-6 w-6"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex flex-shrink-0 p-4 bg-gray-700">
              <div className="flex-shrink-0 block w-full group">
                <div className="flex items-center">
                  <div>
                    <img
                      className="inline-block rounded-full h-9 w-9"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-white">
                      {user?.name ? user?.name : "User"}
                    </p>
                    <p
                      onClick={handleLogout}
                      className="text-xs font-medium text-gray-300 cursor-pointer group-hover:text-gray-200"
                    >
                      Logout
                    </p>
                  </div>
                  <div className="ml-6 text-sm">
                    {onlineStatus ? (
                      <div className="flex items-center space-x-1">
                        <CheckCircleIcon className="w-5 h-5 text-green-800" />
                        <h1 className="text-gray-500">Online</h1>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-1">
                        <CheckCircleIcon className="w-5 h-5 text-red-600" />
                        <h1 className="text-gray-500">Offline</h1>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 lg:pl-64">
          <div className="sticky top-0 z-10 flex items-center justify-between w-full py-3 pl-1 shadow-lg lg:hidden sm:pl-3 sm:pt-3 bg-slate-200">
            <div className="flex justify-center">
              <h1 className="items-center text-xl font-medium">Hospital App</h1>
            </div>
          </div>

          <main className="flex-1 px-2 mb-16 md:px-5 lg:mb-2">{children}</main>
        </div>
      </div>
    </>
  );
}
