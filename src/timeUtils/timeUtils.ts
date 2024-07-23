export function isSameDay(day1: Date, day2: Date) {
  return day1.getDate() === day2.getDate()
    && day1.getMonth() === day2.getMonth()
  // && day1.getYear() === day2.getYear();
}

export function APITimeToDate(APITime: string) {
  const UTCTime = new Date(APITime);
  return new Date(UTCTime.toLocaleString());
}
