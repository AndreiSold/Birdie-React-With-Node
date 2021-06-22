export const getDateFromTimestamp = (timestamp: string): string => {
  return timestamp.split('T')[0];
};

export const getDateAndTimeFromTimestamp = (timestamp: string): string => {
  const dateString = getDateFromTimestamp(timestamp);
  const date = new Date(timestamp);

  return `${dateString} | ${formatSingleDigitDateParts(
    date.getHours()
  )}:${formatSingleDigitDateParts(date.getMinutes())}`;
};

const formatSingleDigitDateParts = (value: number): string => {
  return value < 10 ? `0${value}` : value.toString();
};
