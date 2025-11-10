import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Activity from "./_components/Activity";
import News from "./_components/News";
import { getOnlineSsr, getProfileSsr } from "@/services/profile";
import { Suspense } from "react";
import OnlineUsers from "./_components/Online";
import BottomNav from "./_components/Navbar/BottomNav";

const Home = async () => {
  const profile = await getProfileSsr();
  const online = await getOnlineSsr();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="pb-16">
        <Header />
        <div className="px-6 flex flex-col gap-4">
          <Profile profile={profile} />
          <Activity />
        </div>
        <News />
        <OnlineUsers online={online} />
        {/* <Navbar /> */}
        <BottomNav />
      </div>
    </Suspense>
  );
}

export default Home;