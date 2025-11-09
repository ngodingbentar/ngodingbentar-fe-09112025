import { IOnline } from "@/types";
import Image from "next/image";

const OnlineItem = ({ user, index }: { user: IOnline, index: number }) => {
  return (
    <div className={`shrink-0 bg-transparent text-center w-full max-w-[55px] z-11 ${index === 0 ? "" : "-ml-2.5"}`}>
      <Image
        loading="lazy"
        width={30}
        height={30}
        src={user.avatar}
        alt={user.name}
        className="w-full h-full rounded-full border-2 bg-white border-white"
      />
      <p className="text-xs font-medium mt-1 truncate">{user.name}</p>
      <p className="text-[10px] text-gray-500 truncate">{user.location}</p>
    </div>
  )
}

export default OnlineItem;