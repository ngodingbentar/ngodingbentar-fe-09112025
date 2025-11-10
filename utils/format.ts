import { format, isToday, isYesterday } from "date-fns";
import { id } from "date-fns/locale";

function formatNewsDate(isoString: string) {
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

export { formatNewsDate };

export function formatDateTime(dateTimeString: string) {
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
