import Link from "next/link";
import { IoMdNotificationsOutline } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-between pt-4">
      <div className="text-red-500 font-bold text-2xl ">KerjaYuk</div>
      <Link href="/notification" className="relative cursor-pointer">
        <IoMdNotificationsOutline size={32} />
        <div className="absolute top-1 right-1 rounded-full h-2 w-2 bg-red-500 " />
      </Link>
    </div>
  )
}

export default Header;