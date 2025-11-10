import { format, isToday, isYesterday } from "date-fns";

export const formatNewsDate = (isoString: string) => {
  const date = new Date(isoString);
  const locale = "id-ID";

  const hari = date.toLocaleDateString(locale, { weekday: "long" });
  const tanggal = date.toLocaleDateString(locale, {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return { hari, tanggal };
}

export const formatDateTime = (dateTimeString: string) => {
  const dateTime = new Date(dateTimeString);
  if (isNaN(dateTime.getTime())) return dateTimeString;

  if (isToday(dateTime)) {
    return `Today`;
  } else if (isYesterday(dateTime)) {
    return `Yesterday`;
  } else {
    return format(dateTime, "yyyy-MM-dd");
  }
}

export const formatDateInt = (date: string) => {
  const checkInDate = new Date(date);

  const options = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  } as const;;

  const formatter = new Intl.DateTimeFormat("en-US", options);

  const formattedTime = formatter.format(checkInDate);

  return formattedTime;
};
