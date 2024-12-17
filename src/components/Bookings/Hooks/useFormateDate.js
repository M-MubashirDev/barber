export function useFormateDate(time) {
  if (!time || typeof time !== "string") return time;

  const [hourStr, minuteStr] = time.split(":");
  let hour = parseInt(hourStr, 10);
  const minute = minuteStr || "00";
  let suffix = "AM";

  if (hour === 0) {
    hour = 12; // midnight
    suffix = "AM";
  } else if (hour === 12) {
    suffix = "PM"; // noon
  } else if (hour > 12) {
    hour = hour - 12;
    suffix = "PM";
  }

  return `${hour}:${minute} ${suffix}`;
}
