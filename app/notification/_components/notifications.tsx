import useNotificationsStore from "@/app/_core/stores/notifications";
import NotificationItem from "./notification.item";

const Notifications = () => {
  const { notifications } = useNotificationsStore();
  return (
    <div className="pb-8">
      {notifications && notifications.length > 0 && notifications?.map((item, index) => (
        <NotificationItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Notifications;