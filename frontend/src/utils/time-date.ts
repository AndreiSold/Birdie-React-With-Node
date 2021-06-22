export const getDateFromTimestamp = (timestamp: string): string => {
  return timestamp.split('T')[0];
};
