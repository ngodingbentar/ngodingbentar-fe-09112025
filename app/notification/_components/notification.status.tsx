import { INotification } from "@/types";
import { FaCoins } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { useMemo } from "react";

const NotificationStatus = ({ status }: { status: string }) => {
  const bgColor = useMemo(() => {
    switch (status) {
      case 'PROCESSING':
        return 'bg-red-500 ';
      case 'REJECTED':
        return 'bg-red-500';
      default:
        return 'bg-red-500 ';
    }
  }, [status]);

  return (
    <div className={`${bgColor} shadow p-2 w-[50px] h-[50px] rounded-md flex relative items-center justify-center"`}>
      <FaCoins size={20} className="text-white" />
      <div className="absolute bottom-[-5px] right-[-5px] rounded-full h-5 w-5 flex items-center justify-center bg-blue-500">
        <TiArrowRightThick
          className="text-white"
          size={12} />
      </div>
    </div>
  )
}

export default NotificationStatus;