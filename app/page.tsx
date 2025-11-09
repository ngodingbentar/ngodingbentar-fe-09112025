import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Activity from "./_components/Activity";
import News from "./_components/News";
import { getOnlineSsr, getProfileSsr } from "@/services/profile";
import { Suspense } from "react";
import OnlineUsers from "./_components/Online";

const Home = async () => {
  const profile = await getProfileSsr();
  const online = await getOnlineSsr();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="px-6 flex flex-col gap-4">
          <Header />
          <Profile profile={profile} />
          <Activity />
        </div>
        <News />
        <OnlineUsers online={online} />
        <Navbar />
      </div>
    </Suspense>
  );
}

export default Home;