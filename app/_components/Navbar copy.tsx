"use client";

import { Fragment, memo } from "react";
import { usePathname, useRouter } from "next/navigation";

// Impor ikon yang benar untuk setiap item
import { 
  FaHome, 
  FaCalendarCheck, 
  FaSignOutAlt, 
  FaFileAlt, 
  FaCog 
} from "react-icons/fa";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  // Definisikan navItems dengan ikon yang sesuai
  const navItems = [
    { href: "/", label: "Home", icon: FaHome },
    { href: "/attendance", label: "Attendance", icon: FaCalendarCheck },
    { href: "/checkout", label: "Check Out", icon: FaSignOutAlt },
    { href: "/form", label: "Form", icon: FaFileAlt },
    { href: "/account", label: "Setting", icon: FaCog },
  ];

  const handlePush = (link: string) => {
    router.push(link);
  };

  return (
    <Fragment>
      <div className="h-16" />

      <nav className="
        fixed bottom-0 left-0 right-0 z-50 h-16 
        bg-white 
        shadow-[0_-2px_5px_rgba(0,0,0,0.05)] {/* Shadow hanya di atas */}
      ">
        <div className="flex h-full w-full">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            const isSpecial = item.label === "Check Out";

            if (isSpecial) {
              return (
                <div 
                  key={item.label} 
                  className="relative flex h-full w-full flex-col items-center justify-end pb-2"
                >
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
                className="
                  flex h-full w-full flex-col 
                  items-center 
                  justify-end {/* <-- Diubah dari justify-center */}
                  p-4 pb-2 {/* <-- Diubah (pb-2 ditambahkan untuk override) */}
                  text-sm text-center text-gray-500
                "
              >
                <div className="relative">
                  <Icon
                    size={16}
                    className={isActive ? "text-red-500" : "text-gray-400"}
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