export default function formatDate(isoDateString: string) {
  const date = new Date(isoDateString);

  return new Intl.DateTimeFormat("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}
