import Link from "next/link";
import { JSX } from "react";

interface IBottomNavProps {
  href: string;
  label: string;
  icon: JSX.Element;
  onClick: () => void;
}

const CenterNavItem = ({ href, label, icon, onClick }: IBottomNavProps) => {
  return (
    <Link href={href} onClick={onClick} className="flex flex-col items-center">
      <div className="relative -mt-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 shadow-lg transition-all duration-200 group-hover:bg-red-700">
          {icon}
        </div>
      </div>
      <span className="mt-2 text-xs font-medium text-gray-500">{label}</span>
    </Link>
  );
}

export default CenterNavItem;