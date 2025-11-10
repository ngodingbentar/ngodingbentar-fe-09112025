import Link from "next/link";
import { JSX } from "react";

interface IBottomNavProps {
  href: string;
  label: string;
  icon: JSX.Element;
  active: boolean;
  onClick: () => void;
}

const NavItem = ({ href, label, icon, active, onClick }: IBottomNavProps) => {
  const activeClass = 'text-red-500';
  const inactiveClass = 'text-gray-500';

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`flex flex-col items-center justify-start w-[65px] pt-2 ${active ? activeClass : inactiveClass
        } hover:text-red-400 transition-colors`}
    >
      <span className="text-2xl">{icon}</span>
      <span className="text-xs font-medium">{label}</span>
    </Link>
  );
}

export default NavItem;