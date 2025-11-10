import Header from "./_core/_components/header/Header";
import Profile from "./_core/_components/profile/Profile";
import Activity from "./_core/_components/activity/Activity";
import News from "./_core/_components/news/News";
import { getActivitySsr, getOnlineSsr, getProfileSsr } from "@/app/_core/services/profile";
import { Suspense } from "react";
import OnlineUsers from "./_core/_components/online/Online";
import BottomNav from "./_core/_components/nav/BottomNav";

const Home = async () => {
  const profile = await getProfileSsr();
  const online = await getOnlineSsr();
  const activity = await getActivitySsr();

  return (
    <Suspense fallback={<div className="flex w-full h-screen justify-center items-center">Loading...</div>}>
      <div className="pb-16">
        <Header />
        <div className="px-6 flex flex-col gap-4">
          <Profile profile={profile} />
          <Activity activity={activity} />
        </div>
        <News />
        <OnlineUsers online={online} />
        <BottomNav />
      </div>
    </Suspense>
  );
}

export default Home;