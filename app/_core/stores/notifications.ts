import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";

import { INotification } from "@/app/_core/types";

interface IToken {
  notifications: INotification[] | null;
  setNotifications: (notifications: INotification[]) => void;
}

const notificationsStore: StateCreator<IToken> = (set) => ({
  notifications: null,

  setNotifications: (notifications: INotification[]) => {
    set({ notifications: notifications });
  },
});

const useNotificationsStore = create<IToken>()(
  persist(notificationsStore, {
    name: "notifications",
  })
);

export default useNotificationsStore;
