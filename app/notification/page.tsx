"use client"

import { getNotifications } from "@/services";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import HeaderBack from "../_components/Header.back";
import useNotificationsStore from "@/stores/notifications";
import Notifications from "./_components/notifications";

const NotificationPage = () => {
  const { setNotifications } = useNotificationsStore();
  const { data } = useQuery({
    queryKey: ['notifications'],
    queryFn: getNotifications,
  });

  useEffect(() => {
    if (data) setNotifications(data);
  }, [data]);

  return (
    <div>
      <HeaderBack />
      <Notifications />
    </div>
  )
}

export default NotificationPage;