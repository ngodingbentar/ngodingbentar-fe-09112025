import { INotification } from "@/types";
import { FaCoins } from "react-icons/fa6";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { CiPill } from "react-icons/ci";
import { IoClose } from "react-icons/io5";
import { TiArrowRightThick } from "react-icons/ti";
import { MdTimer } from "react-icons/md";
import NotificationStatus from "./notification.status";
import { useMemo } from "react";
import { FaCheck } from "react-icons/fa";
import { formatDateTime } from "@/utils/format";
const NotificationItem = ({ item }: { item: INotification }) => {
  const { content } = item;

  const bgColor = useMemo(() => {
    switch (item?.status.toLowerCase()) {
      case 'processing':
        return 'bg-blue-500 ';
      case 'rejected':
        return 'bg-red-500';
      default:
        return 'bg-green-500 ';
    }
  }, [item, item?.status]);

  const IconMain = useMemo(() => {
    switch (item?.type.toLowerCase()) {
      case 'reimbursement':
        return <FaCoins size={20} className="text-white" />;
      case 'sickness':
        return <CiPill size={25} className="text-white" />;
      default:
        return <MdTimer size={25} className="text-white" />;
    }
  }, [item, item?.type])

  const IconStatus = useMemo(() => {
    switch (item?.status.toLowerCase()) {
      case 'processing':
        return <TiArrowRightThick size={12} className="text-white" />;
      case 'rejected':
        return <IoClose size={14} className="text-white" />;
      default:
        return <FaCheck size={10} className="text-white" />;
    }
  }, [item, item?.status])

  return (
    <div className={`py-2 flex gap-2 px-6 cursor-pointer ${item?.is_read ? "bg-white" : "bg-blue-100"}`}>
      <div className="bg-red-700 shadow p-2 w-[50px] h-[50px] rounded-md flex relative items-center justify-center">
        {IconMain}
        <div className={`absolute bottom-[-5px] right-[-5px] rounded-full h-5 w-5 flex items-center justify-center ${bgColor}`}>
          {IconStatus}
        </div>
      </div>
      <div className="w-[calc(100%-50px)]">
        <div className="w-full flex justify-between">
          <div className="text-sm font-bold">{item.type}</div>
          <div className="text-xs text-gray-500">{formatDateTime(item.created_at)}</div>
        </div>
        <div>
          {content.map((part, index) => {
            if (part.type === 'bold') {
              return <strong key={index}>{part.content}</strong>;
            }
            return <span key={index}>{part.content}</span>;
          })}
        </div>
      </div>
    </div>
  )
}

export default NotificationItem;