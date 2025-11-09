"use client";

import { Fragment, memo } from "react";
import { usePathname, useRouter } from "next/navigation";

import styles from "./Navbar.module.scss";

import { FaHome } from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/attandence", label: "Attandence", icon: FaHome },
    { href: "/checkout", label: "Check Out", icon: FaHome, count: 1 },
    { href: "/form", label: "Form", icon: FaHome },
    { href: "/account", label: "Setting", icon: FaHome },
  ];

  const handlePush = (link: string) => {
    router.push(link);
  }

  return (
    <Fragment>
      <nav className={styles.base} >
        <div className={styles.container} >
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            const isSpecial = item.label === "Check Out";

            if (isSpecial) {
              return (
                <div key={item.label} className="relative flex h-full w-full flex-col items-center justify-end pb-2">
                  <button
                    onClick={() => handlePush(item.href)}
                    className="absolute -top-8 z-10 flex h-16 w-16 items-center justify-center rounded-full bg-red-500 shadow-lg"
                  >
                    <Icon size={24} className="text-white" />
                  </button>
                  <span className={`mt-1 text-xs ${isActive ? "text-red-500 font-semibold" : "text-gray-600"}`}>
                    {item.label}
                  </span>
                </div>
              );
            }

            return (
              <button
                key={item.label}
                onClick={() => handlePush(item.href)}
                className="flex h-full w-full flex-col items-center justify-center p-4 text-sm text-center text-gray-500"
              >
                <div className="relative">
                  <Icon
                    size={16}
                    className={isActive ? "text-red-500" : "text-gray-400"}
                    color={isActive ? "text-red-500" : "text-gray-400"}
                    width={16}
                    height={16}
                  />
                </div>
                <span className={`mt-1 text-xs ${isActive ? "text-red-500 font-semibold" : "text-gray-600"}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>
    </Fragment>
  );
};

export default memo(Navbar);
