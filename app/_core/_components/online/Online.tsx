"use client";

import { ApiResponse, IOnlineResponse } from '@/app/_core/types';
import OnlineItem from './OnlineItem';

const OnlineUsers = ({ online }: { online: ApiResponse<IOnlineResponse> }) => {
  const { data } = online;

  if (!online) return null;

  return (
    <div className="p-4">
      <h2 className="font-bold mb-2">Online</h2>
      <div className="flex items-start space-x-0 overflow-x-scroll no-scrollbar p-4 rounded-2xl shadow-xl justify-start border-2 border-gray-100 bg-white">
        {data?.users.map((user, index) => (
          <OnlineItem key={user.user_id} user={user} index={index} />
        ))}
        {data?.more_count > 0 && (
          <div className="shrink-0 text-center">
            <div className=" w-[55px] h-[55px] rounded-full bg-red-500 flex flex-col items-center justify-center text-white font-semibold text-xs -ml-2.5 z-10">
              <span>{data?.more_count}+</span>
              <span>more</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OnlineUsers;