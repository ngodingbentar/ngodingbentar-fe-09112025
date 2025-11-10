import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const HeaderBack = ({ title }: { title: string }) => {
  return (
    <div className="flex py-4 sticky top-0 bg-[#fafafa] px-6 z-50 items-center gap-2 shadow">
      <Link href="/" className="relative cursor-pointer">
        <FaArrowLeft size={18} />
      </Link>
      <div className="text-red-500 font-bold text-xl">{title}</div>
    </div>
  )
};

export default HeaderBack;