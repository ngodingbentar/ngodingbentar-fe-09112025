"use client"

import { ApiResponse, IProfile } from "@/types";
import Image from "next/image";

interface IProfileProps {
  profile: ApiResponse<IProfile>;
}

const Profile = ({ profile }: IProfileProps) => {
  console.log("profile", profile)
  return (
    <div>
      <div>Hi, Good Morning</div>
      <div
        className="
        max-w-md rounded-2xl flex flex-col gap-y-4 mt-2 p-6
        bg-gradient-to-r from-[#e12035] to-[#c7105c] text-white shadow-xl 
      ">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-x-4">
            <Image
              className="h-16 w-16 rounded-full border-2 border-white/30"
              src="https://avatar.iran.liara.run/public"
              alt="Profile Avatar"
              width={100}
              height={100}
            />
            <div>
              <span className="block text-xl font-bold">{profile?.data?.name}</span>
              <span className="block text-sm text-white">{profile?.data?.position}</span>
            </div>
          </div>
          <div className="text-right">
            <span className="block text-xs text-white">Member since</span>
            <span className="text-lg font-semibold">01 Juni 2025</span>
          </div>
        </div>
        <div className="flex justify-between items-end">
          <div>
            <span className="block text-xs text-white">Location</span>
            <span className="text-lg font-semibold">{profile?.data?.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile;