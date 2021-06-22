// The purpose of this sleep function is to keep the loading spinner for a minimum amount of time
export const sleep = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
