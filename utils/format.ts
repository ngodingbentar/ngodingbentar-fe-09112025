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
