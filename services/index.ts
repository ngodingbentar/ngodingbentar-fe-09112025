import { INews, INotification, IRoles } from "@/types";

export const getNews = async () => {
  const response = await fetch("/api/091125/news");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const body = await response.json();

  if (body.error) {
    throw new Error(body.error);
  }
  return body.data as INews[];
};

export const getNotifications = async () => {
  const response = await fetch("/api/091125/notifications");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const body = await response.json();

  if (body.error) {
    throw new Error(body.error);
  }
  return body.data as INotification[];
};

export const getRoles = async () => {
  const response = await fetch("/api/091125/roles");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const body = await response.json();

  if (body.error) {
    throw new Error(body.error);
  }
  return body.data as IRoles;
};
