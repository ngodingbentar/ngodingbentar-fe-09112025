"use client"

import { getNotifications } from "@/app/_core/services";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import HeaderBack from "../_core/_components/header/HeaderBack";
import useNotificationsStore from "@/app/_core/stores/notifications";
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
      <HeaderBack title="Notifications" />
      <Notifications />
    </div>
  )
}

export default NotificationPage;