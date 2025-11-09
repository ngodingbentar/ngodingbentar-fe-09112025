import { INews } from "@/types";
import { formatNewsDate } from "@/utils/format";
import Image from "next/image";

const NewItem = ({ item }: { item: INews }) => {
  const { hari, tanggal } = formatNewsDate(item.date);

  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-x-4">
          <Image width={40} height={40} src={item?.user?.avatar} className="w-10 h-10 rounded-full" alt={item?.user?.name} />
          <span className="font-semibold text-red-500">{item?.user?.name}</span>
        </div>
        <div className="text-right text-sm">
          <div>{hari}</div>
          <div className="block">{tanggal}</div>
        </div>
      </div>

      <div className="text-sm text-gray-700 space-y-1">
        {item && item?.content?.map((content, index) => (
          <p key={index}>{content}</p>
        ))}
      </div>
    </div>
  )
}

export default NewItem;