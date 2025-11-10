'use client';

import { useState } from 'react';
import {
  HiHome,
  HiOutlineHome,
  HiOutlineClipboard,
  HiClipboard,
  HiOutlineGift,
  HiGift,
  HiOutlineDocumentText,
  HiDocumentText,
  HiQrCode,
} from 'react-icons/hi2';
import CenterNavItem from './CenterNavItem';
import NavItem from './NavItem';

const BottomNav = () => {
  const [activePage, setActivePage] = useState('beranda');

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center p-0 z-50">
      <div className="flex h-[70px] w-full max-w-[500px] items-center justify-around bg-white shadow-lg">
        <NavItem
          href="/"
          label="Beranda"
          icon={activePage === 'beranda' ? <HiHome /> : <HiOutlineHome />}
          active={activePage === 'beranda'}
          onClick={() => setActivePage('beranda')}
        />
        <NavItem
          href="/kehadiran"
          label="Kehadiran"
          icon={
            activePage === 'kehadiran' ? (
              <HiClipboard />
            ) : (
              <HiOutlineClipboard />
            )
          }
          active={activePage === 'kehadiran'}
          onClick={() => setActivePage('kehadiran')}
        />
        <CenterNavItem
          href="/check-in"
          label="Check In"
          icon={<HiQrCode className="h-8 w-8 text-white" />}
          onClick={() => setActivePage('check-in')}
        />

        <NavItem
          href="/hadiah"
          label="Hadiah"
          icon={activePage === 'hadiah' ? <HiGift /> : <HiOutlineGift />}
          active={activePage === 'hadiah'}
          onClick={() => setActivePage('hadiah')}
        />
        <NavItem
          href="/form"
          label="Form"
          icon={
            activePage === 'form' ? (
              <HiDocumentText />
            ) : (
              <HiOutlineDocumentText />
            )
          }
          active={activePage === 'form'}
          onClick={() => setActivePage('form')}
        />
      </div>
    </div>
  );
}

export default BottomNav;