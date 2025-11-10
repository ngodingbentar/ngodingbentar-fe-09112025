import { IoTimeOutline } from "react-icons/io5";
import { LuTimerReset } from "react-icons/lu";
import { LuClock6 } from "react-icons/lu";

const Activity = () => {
  return (
    <div>
      <div className="font-bold">Today&rsquo;s activity</div>
      <div className="grid grid-cols-3 gap-4 mt-3">
        <div className="flex flex-col justify-center items-center">
          <IoTimeOutline size={32} className="text-red-500" />
          <div className="font-bold mt-2">8:00 AM</div>
          <div>Check In</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <LuTimerReset size={32} className="text-red-500" />
          <div className="font-bold mt-2 text-red-500">03:00:00</div>
          <div>Working Hours</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <LuClock6 size={32} className="text-red-500" />
          <div className="font-bold mt-2">--:--</div>
          <div>Check Out</div>
        </div>
      </div>
    </div>
  )
}

export default Activity;