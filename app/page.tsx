import Navbar from "./_components/Navbar";
import Header from "./_components/Header";
import Profile from "./_components/Profile";
import Activity from "./_components/Activity";
import News from "./_components/News";

export default function Home() {
  return (
    <div>
      <div className="px-6 flex flex-col gap-4">
        <Header />
        <Profile />
        <Activity />
        <News />
      </div>
      <Navbar />
    </div>
  );
}
