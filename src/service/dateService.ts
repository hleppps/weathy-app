export const getDateOrdinal = (dateNumber: number) => {
  if (dateNumber > 3 && dateNumber < 21) return "th";
  let postfix: "st" | "nd" | "rd" | "th";
  switch (dateNumber % 10) {
    case 1:
      postfix = "st";
      break;
    case 2:
      postfix = "nd";
      break;
    case 3:
      postfix = "rd";
      break;
    default:
      postfix = "th";
      break;
  }
  return `${dateNumber}${postfix}`;
};

export const isDateToday = (date: Date) => {
  const todayDate = new Date();

  return (
    date.getDate() === todayDate.getDate() &&
    date.getMonth() === todayDate.getMonth() &&
    date.getFullYear() === todayDate.getFullYear()
  );
};

export const getWeekDay = (date: Date) => {
  const isToday = isDateToday(date);

  return isToday
    ? "Today"
    : new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(
        new Date(date),
      );
};
