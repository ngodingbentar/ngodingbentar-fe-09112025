'use client';

import { useState } from 'react';
import { HiOutlineHome, HiDocumentText } from 'react-icons/hi2';
import { IoMdSettings } from "react-icons/io";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { FaHome, FaCalendarCheck } from "react-icons/fa";
import CenterNavItem from './CenterNavItem';
import NavItem from './NavItem';

const BottomNav = () => {
  const [activePage, setActivePage] = useState('home');

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-0 z-50">
      <div className="flex h-[70px] w-full max-w-[500px] items-center justify-around bg-white shadow-lg">
        <NavItem
          href="/"
          label="Home"
          icon={activePage === 'home' ? <FaHome /> : <HiOutlineHome />}
          active={activePage === 'home'}
          onClick={() => setActivePage('home')}
        />
        <NavItem
          href="/attandence"
          label="Attandence"
          icon={<FaCalendarCheck />}
          active={activePage === 'attandence'}
          onClick={() => setActivePage('attandence')}
        />
        <CenterNavItem
          href="/check-out"
          label="Check Out"
          icon={<RiLogoutBoxRFill className="h-8 w-8 text-white" />}
          onClick={() => setActivePage('check-out')}
        />
        <NavItem
          href="/form"
          label="Form"
          icon={<HiDocumentText />}
          active={activePage === 'form'}
          onClick={() => setActivePage('form')}
        />
        <NavItem
          href="/setting"
          label="Setting"
          icon={<IoMdSettings />}
          active={activePage === 'setting'}
          onClick={() => setActivePage('setting')}
        />
      </div>
    </div>
  );
}

export default BottomNav;